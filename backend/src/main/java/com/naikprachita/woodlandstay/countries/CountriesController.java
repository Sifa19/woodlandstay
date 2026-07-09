package com.naikprachita.woodlandstay.countries;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/countries")
@RequiredArgsConstructor
public class CountriesController {

    private final CountriesService countriesService;

    @GetMapping
    public List<Countries> getCountries(){
        return countriesService.getCountries();
    }
}
