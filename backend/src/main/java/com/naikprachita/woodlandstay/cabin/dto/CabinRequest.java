package com.naikprachita.woodlandstay.cabin.dto;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.PositiveOrZero;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class CabinRequest {

    @NotNull
    private String name;

    @NotNull
    private Integer maxCapacity;

    @PositiveOrZero
    private Double regularPrice;

    private Double discount;

    private String image;

    @NotNull
    @Size(max = 1000)
    private String description;
}