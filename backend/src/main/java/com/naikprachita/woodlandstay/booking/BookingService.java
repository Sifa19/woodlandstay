package com.naikprachita.woodlandstay.booking;

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

    public List<Booking> getAllBookings() {
        return bookingRepository.findAll();
    }

    public List<Booking> getGuestBookings(Long guestId) {
        return bookingRepository.findByGuestId(guestId);
    }

    public Booking getBooking(Long bookingId) {
        return bookingRepository.findById(bookingId).get();
    }

    public void updateBookingDetails(Long bookingId, Integer numGuests, String observations) {
        Booking booking = bookingRepository.findById(bookingId).get();
        booking.setNumGuests(numGuests);
        booking.setObservations(observations);
        bookingRepository.save(booking);
    }

    public List<Booking> getBookedDates(Long cabinId){

        return bookingRepository.getBookedDates(
                cabinId,
                LocalDate.now(),
                BookingStatus.CHECKED_IN
        );

    }

    public void createBooking(CreateBookingRequest  request) {

        Cabin cabin = cabinRepository.findById(request.getCabinId())
                .orElseThrow();

        Guest guest = guestRepository.findById(request.getGuestId())
                .orElseThrow();

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