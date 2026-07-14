package com.naikprachita.woodlandstay.booking.dto;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class BookingUpdateRequest {

    @Min(1)
    private  Integer numGuests;

    @Size(max = 1000)
    private String observations;
}
