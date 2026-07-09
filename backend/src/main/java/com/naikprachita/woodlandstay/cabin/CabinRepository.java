package com.naikprachita.woodlandstay.cabin;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CabinRepository extends JpaRepository<Cabin,Long> {
}