package com.naikprachita.woodlandstay.guest;

import com.naikprachita.woodlandstay.guest.dto.GuestRequest;
import com.naikprachita.woodlandstay.guest.dto.GuestResponse;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@AllArgsConstructor
@RequestMapping("/api/guests")
public class GuestController {

    private final GuestService guestService;

    @GetMapping("/{emailId}")
    public GuestResponse getGuest(@PathVariable String emailId){
        System.out.println(emailId);
        return guestService.getGuest(emailId);
    }

    @PatchMapping("/{email}")
    public ResponseEntity<Void> updateGuest(@PathVariable String email,@Valid @RequestBody GuestRequest request){
        guestService.updateGuestDetails(email,request.getCountryFlag(),request.getNationality(), request.getNationalId());
        return ResponseEntity.ok().build();
    }

    @PostMapping
    public void createGuest(@Valid @RequestBody GuestRequest request){
        guestService.createGuest(request);
    }
}