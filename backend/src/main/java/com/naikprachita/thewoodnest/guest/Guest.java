package com.naikprachita.thewoodnest.guest;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Table(name = "guests")
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
//need to remove this and add DTOS later on
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Guest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "full_name", nullable = false)
    private String fullName;

    @Column(nullable = false , unique = true)
    private String email;

    private String nationality;

    @Column(name = "country_flag")
    private String countryFlag;

    @Column(name = "national_id", nullable = false)
    private String nationalId;

    @Column(name = "created_at")
    private LocalDateTime createdAt;
}