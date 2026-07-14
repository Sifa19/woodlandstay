package com.naikprachita.woodlandstay.cabin;

import com.naikprachita.woodlandstay.cabin.dto.CabinResponse;
import com.naikprachita.woodlandstay.cabin.mapper.CabinMapper;
import com.naikprachita.woodlandstay.exception.ResourceNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CabinService {

    private final CabinRepository cabinRepository;
    private final CabinMapper cabinMapper;

    public List<CabinResponse> getAllCabins() {
        return cabinRepository.findAll().stream().map(cabinMapper::toResponse).toList();
    }

    public CabinResponse getCabin(Long id) {
        Cabin cabin = cabinRepository.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("Cabin not found"));
        return cabinMapper.toResponse(cabin);
    }
}