import ReservationList from "@/app/_components/ReservationList";
import { getBookings } from "@/app/_lib/data-service";
import Link from "next/link";

async function page() {
  const bookings = await getBookings(1);
  return (
    <div>
      <h2 className="font-semibold text-accent-400 text-2xl mb-7">
        Your Reservations
      </h2>
      {bookings.length === 0 ? (
        <p className="text-lg">
          You have no reservations yet. Checkout out our{" "}
          <Link className="text-accent-500 underline" href="/cabins">
            luxury cabins &rarr;
          </Link>
        </p>
      ) : (
        <ReservationList bookings={bookings} />
      )}
    </div>
  );
}

export default page;
