package com.naikprachita.woodlandstay.guest;

import com.naikprachita.woodlandstay.exception.ResourceNotFoundException;
import com.naikprachita.woodlandstay.guest.dto.GuestRequest;
import com.naikprachita.woodlandstay.guest.dto.GuestResponse;
import com.naikprachita.woodlandstay.guest.mapper.GuestMapper;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class GuestService {

    public final GuestRepository guestRepository;
    public final GuestMapper guestMapper;

    public GuestResponse getGuest(String email) {
        Guest guest = guestRepository.findByEmail(email).orElseThrow(()-> new ResourceNotFoundException(("Guest not found")));
        return guestMapper.toResponse(guest);
    }

    public void updateGuestDetails(String email,String countryFlag,String nationality,String nationalId){
        Guest guest = guestRepository.findByEmail(email).orElseThrow(()-> new ResourceNotFoundException(("Guest not found")));
        guest.setCountryFlag(countryFlag);
        guest.setNationality(nationality);
        guest.setNationalId(nationalId);
        guestRepository.save(guest);
    }

    public void createGuest(GuestRequest guest) {
        if(guestRepository.existsByEmail(guest.getEmail())){
            return;
        }
        guestRepository.save(guestMapper.toGuest(guest));
    }
}