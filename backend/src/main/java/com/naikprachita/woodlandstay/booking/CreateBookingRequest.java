package com.naikprachita.woodlandstay.booking;

import lombok.Getter;

import java.time.LocalDate;

@Getter
public class CreateBookingRequest {

    private Long cabinId;
    private Long guestId;

    private LocalDate startDate;
    private LocalDate endDate;

    private Integer numGuests;
    private Integer numNights;

    private Double cabinPrice;
    private Double extrasPrice;
    private Double totalPrice;

    private Boolean hasBreakfast;
    private Boolean isPaid;

    private String observations;

    private BookingStatus status;

    // getters setters
}