package com.naikprachita.woodlandstay.booking;

import com.naikprachita.woodlandstay.booking.dto.BookingRequest;
import com.naikprachita.woodlandstay.booking.dto.BookingResponse;
import com.naikprachita.woodlandstay.booking.dto.BookingUpdateRequest;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/bookings")
@RequiredArgsConstructor
public class BookingController {

    private final BookingService bookingService;

    @GetMapping
    public List<BookingResponse> getAllBookings(){
        return bookingService.getAllBookings();
    }

    @GetMapping("/guest/{guestId}")
    public List<BookingResponse> getAllBookings(@PathVariable Long guestId){
        return bookingService.getGuestBookings(guestId);
    }

    @GetMapping("/{bookingId}")
    public BookingResponse getBooking(@PathVariable Long bookingId){
        return bookingService.getBooking(bookingId);
    }

    @PatchMapping("/{bookingId}")
    public ResponseEntity<Void> updateGuest(@PathVariable Long bookingId, @RequestBody BookingUpdateRequest request){
        bookingService.updateBookingDetails(bookingId,request.getNumGuests(),request.getObservations());
        return ResponseEntity.ok().build();
    }

    @GetMapping("/cabin/{cabinId}")
    public List<BookingResponse> getBookedDates(@PathVariable Long cabinId){
        return bookingService.getBookedDates(cabinId);
    }

    @PutMapping("/booking")
    public void createBooking(@Valid  @RequestBody BookingRequest request){
        bookingService.createBooking(request);
    }

    @DeleteMapping("/{bookingId}")
    public void deleteBooking(@PathVariable Long bookingId){
        bookingService.deleteBooking(bookingId);
    }

}