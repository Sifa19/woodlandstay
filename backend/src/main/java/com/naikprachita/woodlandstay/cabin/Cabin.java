package com.naikprachita.woodlandstay.cabin;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "cabins")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
//need to remove this and add DTOS later on
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Cabin {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private Integer maxCapacity;

    private Double regularPrice;

    private Double discount;

    private String image;

    @Column(length = 5000)
    private String description;
}