package com.naikprachita.woodlandstay.booking;

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
    List<Booking> getAllBookings(){
        return bookingService.getAllBookings();
    }

    @GetMapping("/guest/{guestId}")
    List<Booking> getAllBookings(@PathVariable Long guestId){
        return bookingService.getGuestBookings(guestId);
    }

    @GetMapping("/{bookingId}")
    Booking getBooking(@PathVariable Long bookingId){
        return bookingService.getBooking(bookingId);
    }

    @PatchMapping("/{bookingId}")
    public ResponseEntity<Void> updateGuest(@PathVariable Long bookingId, @RequestBody Booking booking){
        bookingService.updateBookingDetails(bookingId,booking.getNumGuests(),booking.getObservations());
        return ResponseEntity.ok().build();
    }

    @GetMapping("/cabin/{cabinId}")
    public List<Booking> getBookedDates(@PathVariable Long cabinId){
        return bookingService.getBookedDates(cabinId);
    }

    @PutMapping("/booking")
    public void createBooking(@RequestBody CreateBookingRequest  booking){
        bookingService.createBooking(booking);
    }

    @DeleteMapping("/{bookingId}")
    public void deleteBooking(@PathVariable Long bookingId){
        bookingService.deleteBooking(bookingId);
    }

}