package com.naikprachita.thewoodnest.countries;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "countries")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Countries {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true,nullable = false)
    private String name;

    @Column(unique = true,nullable = false)
    private String code;

    @Column(nullable = true)
    private String flag;

}
