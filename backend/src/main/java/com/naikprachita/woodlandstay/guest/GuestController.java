package com.naikprachita.woodlandstay.guest;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/guests")
public class GuestController {

    private final GuestService guestService;

    GuestController(GuestService guestService){
        this.guestService = guestService;
    }

    @GetMapping("/{emailId}")
    public Guest getGuest(@PathVariable String emailId){
        System.out.println(emailId);
        return guestService.getGuest(emailId);
    }

    @PatchMapping("/{email}")
    public ResponseEntity<Void> updateGuest(@PathVariable String email, @RequestBody Guest guest){
        guestService.updateGuestDetails(email,guest.getCountryFlag(),guest.getNationality(), guest.getNationalId());
        return ResponseEntity.ok().build();
    }

    @PostMapping
    public void createGuest(@RequestBody Guest guest){
        guestService.createGuest(guest);
    }
}