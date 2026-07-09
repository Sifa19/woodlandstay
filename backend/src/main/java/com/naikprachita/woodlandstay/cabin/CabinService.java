package com.naikprachita.woodlandstay.cabin;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CabinService {

    private final CabinRepository cabinRepository;

    public List<Cabin> getAllCabins() {
        return cabinRepository.findAll();
    }

    public Cabin getCabin(Long id) {
        return cabinRepository.findById(id)
                .orElseThrow();
    }
}