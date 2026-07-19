"use client";

import { differenceInDays, isSameDay } from "date-fns";
import { useReservation } from "./ReservationContext";
import { createBooking } from "../_lib/actions";
import Button from "./Button";
import Image from "next/image";

function ReservationForm({ cabin, user }) {
  const { range, resetRange } = useReservation();
  const { maxCapacity, regularPrice, discount, id } = cabin;

  const startDate = range?.from;
  const endDate = range?.to;

  const numNights = differenceInDays(endDate, startDate);
  const cabinPrice = numNights * (regularPrice - discount);

  const bookingData = {
    guestId: user.id,
    cabinId: id,
    startDate,
    endDate,
    numNights,
    cabinPrice,
  };

  const createBookingWithData = createBooking.bind(null, bookingData);

  return (
    <div className="grid mb-2 grid-rows-[4rem_1fr] ">
      <div className="bg-primary-800 flex items-center justify-between px-6 ">
        <p>Logged in as</p>
        <div className="md:flex md:gap-2 items-center">
          {user.name}
          <Image
            src={user.image}
            alt={user.name}
            referrerPolicy="no-referrer"
            className="h-8 rounded-full"
          />
        </div>
      </div>
      <form
        // action={createBookingWithData}
        action={async (formData) => {
          await createBookingWithData(formData);
          resetRange();
        }}
        className="h-full flex flex-col justify-evenly px-8 "
      >
        <div className="space-y-2">
          <label>How many guests?</label>
          <select
            name="numGuests"
            id="numGuests"
            className="w-full p-3 bg-primary-200 text-primary-900"
          >
            <option value="">Select no of guests</option>
            {new Array(maxCapacity).fill().map((_, index) => {
              return <option key={index}>{index + 1} guests</option>;
            })}
          </select>
        </div>

        <div className="space-y-2">
          <label>Anything we should know about your stay?</label>
          <textarea
            name="observations"
            placeholder="Any pets, allergies, special requirements etc ?"
            className="px-5 py-2 bg-primary-200 text-primary-950 w-full rounded-sm shadow-sm 
            disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400
            placeholder:text-primary-400"
          />
        </div>
        <div className="space-y-4 flex flex-col items-center">
          {range?.from && range?.to && !isSameDay(range?.from, range?.to) ? (
            <Button>Reserve Now</Button>
          ) : (
            <label className="text-primary-400">Start by selecting dates</label>
          )}
        </div>
      </form>
    </div>
  );
}

export default ReservationForm;
