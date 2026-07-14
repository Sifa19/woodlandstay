package com.naikprachita.woodlandstay.booking;

import com.naikprachita.woodlandstay.booking.dto.BookingRequest;
import com.naikprachita.woodlandstay.booking.dto.BookingResponse;
import com.naikprachita.woodlandstay.booking.mapper.BookingMapper;
import com.naikprachita.woodlandstay.cabin.Cabin;
import com.naikprachita.woodlandstay.cabin.CabinRepository;
import com.naikprachita.woodlandstay.guest.Guest;
import com.naikprachita.woodlandstay.guest.GuestRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
@RequiredArgsConstructor
public class  BookingService{

    private final BookingRepository bookingRepository;
    private final CabinRepository cabinRepository;
    private final GuestRepository guestRepository;
    private final BookingMapper bookingMapper;


    public List<BookingResponse> getAllBookings() {
        return bookingRepository.findAll().stream().map(bookingMapper::toResponse).toList();
    }

    public List<BookingResponse> getGuestBookings(Long guestId) {
        return bookingRepository.findByGuestId(guestId).stream().map(bookingMapper::toResponse).toList();
    }

    public BookingResponse getBooking(Long bookingId) {
        Booking booking = bookingRepository.findById(bookingId)
                .orElseThrow(() -> new RuntimeException("Booking not found"));;
        return bookingMapper.toResponse(booking);
    }

    public void updateBookingDetails(Long bookingId, Integer numGuests, String observations) {
        Booking booking = bookingRepository.findById(bookingId)
                .orElseThrow(() -> new RuntimeException("Booking not found"));
        booking.setNumGuests(numGuests);
        booking.setObservations(observations);
        bookingRepository.save(booking);
    }

    public List<BookingResponse> getBookedDates(Long cabinId){

        return bookingRepository.getBookedDates(
                cabinId,
                LocalDate.now(),
                BookingStatus.CHECKED_IN
        ).stream().map(bookingMapper::toResponse).toList();

    }

    public void createBooking(BookingRequest request) {

        Cabin cabin = cabinRepository.findById(request.getCabinId())
                .orElseThrow(() -> new RuntimeException("Cabin not found"));

        Guest guest = guestRepository.findById(request.getGuestId())
                .orElseThrow(() -> new RuntimeException("Guest not found"));

        Booking booking = new Booking();

        booking.setCabin(cabin);
        booking.setGuest(guest);

        booking.setStartDate(request.getStartDate());
        booking.setEndDate(request.getEndDate());

        booking.setNumGuests(request.getNumGuests());
        booking.setNumNights(request.getNumNights());

        booking.setCabinPrice(request.getCabinPrice());
        booking.setExtrasPrice(request.getExtrasPrice());
        booking.setTotalPrice(request.getTotalPrice());

        booking.setHasBreakfast(request.getHasBreakfast());
        booking.setIsPaid(request.getIsPaid());

        booking.setObservations(request.getObservations());
        booking.setStatus(request.getStatus());

        bookingRepository.save(booking);
    }

    public void deleteBooking(Long bookingId) {
        bookingRepository.deleteById(bookingId);
    }
}