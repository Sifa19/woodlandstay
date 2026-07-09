package com.naikprachita.woodlandstay.countries;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CountriesService {

    private final CountriesRepository countriesRepository;

    public List<Countries> getCountries(){
        return countriesRepository.findAll();
    }
}
