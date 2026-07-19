package com.naikprachita.woodlandstay.guest.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class GuestResponse {

    private Long id;

    private String fullName;

    private String email;

    private String nationality;

    private String countryFlag;

    private String nationalId;

    private LocalDateTime createdAt;
}