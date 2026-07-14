package com.naikprachita.woodlandstay.cabin.mapper;

import com.naikprachita.woodlandstay.cabin.Cabin;
import com.naikprachita.woodlandstay.cabin.dto.CabinResponse;
import org.springframework.stereotype.Component;

@Component
public class CabinMapper {
    public CabinResponse toResponse(Cabin cabin){
        return CabinResponse.builder()
                .name(cabin.getName())
                .maxCapacity(cabin.getMaxCapacity())
                .regularPrice(cabin.getRegularPrice())
                .discount(cabin.getDiscount())
                .image(cabin.getImage())
                .description(cabin.getDescription())
                .build();
    }
}