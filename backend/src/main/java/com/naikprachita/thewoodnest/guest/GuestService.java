package com.naikprachita.thewoodnest.guest;

import org.springframework.stereotype.Service;

@Service
public class GuestService {

    public final GuestRepository guestRepository;

    GuestService(GuestRepository guestRepository){
        this.guestRepository = guestRepository;
    }

    public Guest getGuest(String email) {
        return guestRepository.findByEmail(email);
    }

    public void updateGuestDetails(String email,String countryFlag,String nationality,String nationalId){
        Guest guest = guestRepository.findByEmail(email);
        guest.setCountryFlag(countryFlag);
        guest.setNationality(nationality);
        guest.setNationalId(nationalId);
        guestRepository.save(guest);
    }

    public void createGuest(Guest guest) {
        if(guestRepository.existsByEmail(guest.getEmail())){
            throw new RuntimeException("Guest Already Exists");
        }
        guestRepository.save(guest);
    }
}