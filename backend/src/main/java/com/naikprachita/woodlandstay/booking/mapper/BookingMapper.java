package com.naikprachita.woodlandstay.booking.mapper;

import com.naikprachita.woodlandstay.booking.Booking;
import com.naikprachita.woodlandstay.booking.dto.BookingResponse;
import org.springframework.stereotype.Component;

@Component
public class BookingMapper {

    public BookingResponse toResponse(Booking booking){
        return BookingResponse.builder()
                .id(booking.getId())
                .cabinId(booking.getCabin().getId())
                .cabinName(booking.getCabin().getName())
                .guestId(booking.getGuest().getId())
                .guestName(booking.getGuest().getFullName())
                .startDate(booking.getStartDate())
                .endDate(booking.getEndDate())
                .status(booking.getStatus())
                .numGuests(booking.getNumGuests())
                .numNights(booking.getNumNights())
                .cabinPrice(booking.getCabinPrice())
                .extrasPrice(booking.getExtrasPrice())
                .totalPrice(booking.getTotalPrice())
                .hasBreakfast(booking.getHasBreakfast())
                .isPaid(booking.getIsPaid())
                .observations(booking.getObservations())
                .build();
    }

}
