package com.naikprachita.woodlandstay.booking.dto;


import com.naikprachita.woodlandstay.booking.BookingStatus;
import jakarta.validation.constraints.*;
import lombok.Data;

import java.time.LocalDate;

@Data
public class BookingRequest {

    @NotNull
    private Long cabinId;

    @NotNull
    private Long guestId;

    @NotNull
    @FutureOrPresent
    private LocalDate startDate;

    @NotNull
    @Future
    private LocalDate endDate;

    @NotNull
    @Min(1)
    private Integer numGuests;

    @NotNull
    @Min(1)
    private Integer numNights;

    @NotNull
    @PositiveOrZero
    private Double cabinPrice;

    @NotNull
    @PositiveOrZero
    private Double extrasPrice;

    @NotNull
    @PositiveOrZero
    private Double totalPrice;

    private Boolean hasBreakfast;

    private Boolean isPaid;

    @Size(max = 1000)
    private String observations;

    private BookingStatus status;
}