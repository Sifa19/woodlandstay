package com.naikprachita.woodlandstay.guest;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GuestRepository extends JpaRepository<Guest,Long> {
    Guest findByEmail(String email);

    boolean existsByEmail(String email);
}