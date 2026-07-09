"use client";

import {
  differenceInDays,
  isPast,
  isSameDay,
  isWithinInterval,
} from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useReservation } from "./ReservationContext";

function isAlreadyBooked(range, datesArr) {
  return (
    range?.from &&
    range?.to &&
    datesArr.some((date) =>
      isWithinInterval(date, { start: range?.from, end: range?.to }),
    )
  );
}

function DateSelector({ settings, bookedDates, cabin }) {
  // CHANGE
  const { range, setRange, resetRange } = useReservation();
  const displayRange = isAlreadyBooked(range, bookedDates) ? {} : range;
  const { regularPrice, discount } = cabin;
  const numNights = differenceInDays(range?.to, range?.from);
  const cabinPrice = numNights * (regularPrice - discount);

  // SETTINGS
  // const { minBookingLength, maxBookingLength } = settings;
  const { minBookingLength, maxBookingLength } = [5, 10];

  return (
    <div className="flex flex-col justify-between">
      <DayPicker
        className="pt-12 place-self-center "
        mode="range"
        onSelect={setRange}
        selected={displayRange}
        min={minBookingLength + 1}
        max={maxBookingLength}
        fromMonth={new Date()}
        fromDate={new Date()}
        toYear={new Date().getFullYear() + 5}
        captionLayout="dropdown"
        numberOfMonths={2}
        disabled={(currDate) =>
          isPast(currDate) ||
          bookedDates.some((date) => isSameDay(date, currDate))
        }
      />
      <div
        className="px-4 flex flex-wrap md:flex-nowrap gap-6 justify-center md:justify-start items-center md:text-lg bg-accent-500 text-primary-950 
         
      py-2"
      >
        <p>
          {discount ? (
            <span>
              <span className="md:text-2xl">${regularPrice - discount}</span>{" "}
              <span className="line-through text-primary-700">
                {regularPrice}
              </span>{" "}
              / night
            </span>
          ) : (
            <span>
              {" "}
              <span>{regularPrice}</span>/ night
            </span>
          )}
        </p>
        <p className="bg-accent-600 py-2 px-3">
          x<span className="md:text-2xl"> {numNights || 0}</span>
        </p>
        <p className="font-semibold">
          TOTAL <span className="md:text-2xl">${cabinPrice || 0}</span>
        </p>
        {displayRange?.from &&
        displayRange?.to &&
        !isSameDay(displayRange?.from, displayRange?.to) ? (
          <button
            className="md:ml-auto border border-primary-800 py-2 px-4 text-sm font-semibold"
            onClick={resetRange}
          >
            Clear
          </button>
        ) : null}
      </div>
      <style>
        {`@media only screen and (max-width: 600px) {
            .rdp-months {
                display: flex;
                flex-direction: column;
            }
        }`}
      </style>
    </div>
  );
}

export default DateSelector;
