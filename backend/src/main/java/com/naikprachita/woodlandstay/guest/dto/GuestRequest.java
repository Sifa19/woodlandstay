package com.naikprachita.woodlandstay.guest.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.FutureOrPresent;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class GuestRequest {

    @NotNull
    private String fullName;

    @NotNull
    @Email
    private String email;

    private String nationality;

    private String countryFlag;

    @NotNull
    private String nationalId;

    private LocalDateTime createdAt;
}