package com.naikprachita.thewoodnest.booking;

import com.naikprachita.thewoodnest.cabin.Cabin;
import com.naikprachita.thewoodnest.guest.Guest;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Entity
@Table(name = "bookings")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Booking{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.EAGER)
    //need to make it LAZY and add DTOS later on
    @JoinColumn(name = "cabin_id", nullable = false)
    private Cabin cabin;

    @ManyToOne(fetch = FetchType.EAGER)
    //need to make it LAZY and add DTOS later on
    @JoinColumn(name = "guest_id", nullable = false)
    private Guest guest;

    // Booking dates
    private LocalDate startDate;

    private LocalDate endDate;

    @Enumerated(EnumType.STRING)
    private BookingStatus status;

    // Guest information
    private Integer numGuests;

    private Integer numNights;

    // Pricing
    private Double cabinPrice;

    private Double extrasPrice;

    private Double totalPrice;

    // Extras
    private Boolean hasBreakfast;

    // Booking status
    private Boolean isPaid;

    @Column(length = 1000)
    private String observations;

}