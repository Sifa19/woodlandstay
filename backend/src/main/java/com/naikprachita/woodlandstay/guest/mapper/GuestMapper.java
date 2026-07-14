package com.naikprachita.woodlandstay.guest.mapper;

import com.naikprachita.woodlandstay.guest.dto.GuestRequest;
import com.naikprachita.woodlandstay.guest.dto.GuestResponse;
import com.naikprachita.woodlandstay.guest.Guest;
import org.springframework.stereotype.Component;

@Component
public class GuestMapper {
    public GuestResponse toResponse(Guest guest){
        return GuestResponse.builder()
                .fullName(guest.getFullName())
                .email(guest.getEmail())
                .nationalId(guest.getNationalId())
                .nationality(guest.getNationality())
                .countryFlag(guest.getCountryFlag())
                .build();
    }

    public Guest toGuest(GuestRequest request) {
        Guest guest = new Guest();

        guest.setFullName(request.getFullName());
        guest.setEmail(request.getEmail());
        guest.setNationality(request.getNationality());
        guest.setCountryFlag(request.getCountryFlag());
        guest.setNationalId(request.getNationalId());

        return guest;
    }
}