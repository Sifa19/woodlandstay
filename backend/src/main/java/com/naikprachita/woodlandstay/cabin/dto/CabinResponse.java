package com.naikprachita.woodlandstay.cabin.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CabinResponse {

    private Long id;

    private String name;

    private Integer maxCapacity;

    private Double regularPrice;

    private Double discount;

    private String image;

    private String description;
}