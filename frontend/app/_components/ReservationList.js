"use client";
import { deleteReservation } from "../_lib/actions";
import ReservationCard from "./ReservationCard";
import { useOptimistic } from "react";

function ReservationList({ bookings }) {
  const [optimisticBookings, optimisticDelete] = useOptimistic(
    bookings,
    (currBooking, bookingId) => {
      return currBooking.filter((booking) => booking.id !== bookingId);
    }
  );

  async function handleDelete(bookingId) {
    optimisticDelete(bookingId);
    await deleteReservation(bookingId);
  }

  return optimisticBookings.map((booking) => (
    <ReservationCard
      booking={booking}
      key={booking.id}
      onDelete={handleDelete}
    />
  ));
}

export default ReservationList;
