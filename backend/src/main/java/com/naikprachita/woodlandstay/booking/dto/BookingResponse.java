package com.naikprachita.woodlandstay.booking.dto;

import com.naikprachita.woodlandstay.booking.BookingStatus;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BookingResponse {

    private Long cabinId;
    private String cabinName;

    private Long guestId;
    private String guestName;

    private LocalDate startDate;
    private LocalDate endDate;

    private BookingStatus status;

    private Integer numGuests;
    private Integer numNights;

    private Double cabinPrice;
    private Double extrasPrice;
    private Double totalPrice;

    private Boolean hasBreakfast;
    private Boolean isPaid;

    private String observations;
}