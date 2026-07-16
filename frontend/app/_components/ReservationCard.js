import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { formatDate, formatDistance, isPast, isToday } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import DeleteReservation from "./DeleteReservation";
import about from "@/public/about-1.jpg";

function ReservationCard({ booking, onDelete }) {
  const {
    id,
    startDate,
    endDate,
    numNights,
    numGuests,
    totalPrice,
    cabinName,
  } = booking;
  return (
    <div className="text-sm grid grid-cols-[7rem_1fr_6rem] mb-4 border border-primary-800">
      <div className="relative h-full ">
        <Image fill src={about} alt={cabinName} />
      </div>

      <div className="flex flex-col px-4 py-2">
        <div className="text-xl flex justify-between mb-2">
          {numNights} nights in Cabin {cabinName}
          {isPast(new Date(startDate)) ? (
            <span className="bg-yellow-800 text-yellow-200 h-7 px-3 uppercase text-xs font-bold flex items-center rounded-sm">
              past
            </span>
          ) : (
            <span className="bg-green-800 text-green-200 h-7 px-3 uppercase text-xs font-bold flex items-center rounded-sm">
              upcoming
            </span>
          )}
        </div>
        <div className="text-md text-primary-400 ">
          {formatDate(startDate, "E")}, {formatDate(startDate, "MMMM dd yyyy")}{" "}
          (
          {isToday(new Date(startDate))
            ? "Today"
            : `in ${formatDistance(endDate, startDate)} days`}
          ) &mdash; {formatDate(endDate, "E")},{" "}
          {formatDate(endDate, "MMMM dd yyyy")}
        </div>
        <div className="flex gap-2 items-center mt-auto">
          <span className="text-lg text-accent-500">${totalPrice}</span>
          <span className="text-2xl pb-2">.</span>
          <span className="text-lg">{numGuests} guest</span>
          {/* <span className="ml-auto text-primary-400 text-sm font-light">
            Booked {formatDate(created_at, "E")},{" "}
            {formatDate(created_at, "MMMM yyyy")} {formatDate(created_at, "hh")}
            :{formatDate(created_at, "mm")} {formatDate(created_at, "aaaa")}
          </span> */}
        </div>
      </div>
      <div
        className={`grid grid-rows-2 text-xs font-bold text-primary-400 ${
          isPast(startDate) && "border-0 border-l border-primary-800"
        }`}
      >
        {isPast(startDate) ? null : (
          <>
            <Link
              href={`/account/reservations/edit/${id}`}
              className="border-0 border-l border-b border-primary-800
        flex justify-center items-center space-x-2 hover:bg-accent-600 hover:text-primary-900"
            >
              <PencilSquareIcon className="h-4" />
              <span className="relative top-1">EDIT</span>
            </Link>
            <DeleteReservation bookingId={id} onDelete={onDelete} />
          </>
        )}
      </div>
    </div>
  );
}

export default ReservationCard;
