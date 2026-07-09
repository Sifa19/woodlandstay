package com.naikprachita.thewoodnest.cabin;

import com.naikprachita.thewoodnest.cabin.CabinService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/cabins")
@RequiredArgsConstructor
public class CabinController {

    private final CabinService cabinService;

    @GetMapping
    public List<Cabin> getCabins() {
        return cabinService.getAllCabins();
    }

    @GetMapping("/{id}")
    public Cabin getCabin(@PathVariable Long id) {
        return cabinService.getCabin(id);
    }
}