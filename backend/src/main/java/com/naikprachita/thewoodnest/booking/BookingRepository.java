package com.naikprachita.thewoodnest.booking;

import lombok.RequiredArgsConstructor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface BookingRepository extends JpaRepository<Booking,Long> {
    List<Booking> findByGuestId(Long guestId);

    @Query("""
            SELECT b
            FROM Booking b
            WHERE b.cabin.id=:cabinId
            AND
            (
               b.startDate>=:today
               OR b.status=:status
            )
            """)
    List<Booking> getBookedDates(
            Long cabinId,
            LocalDate today,
            BookingStatus status);


}