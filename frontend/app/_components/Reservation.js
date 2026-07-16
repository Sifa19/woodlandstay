import DateSelector from "./DateSelector";
import ReservationForm from "./ReservationForm";
import { getBookedDatesByCabinId, getGuest } from "@/app/_lib/data-service";
async function Reservation({ cabin }) {
  const [settings, bookedDates] = await Promise.all([
    getBookedDatesByCabinId(cabin?.id),
  ]);

  const guest = await getGuest("john@example.com");
  return (
    <div
      className="grid md:grid-cols-[2fr_1fr]  md:gap-0 border 
  border-primary-800 min-h-[400px] mb-10 "
    >
      <DateSelector
        settings={settings}
        bookedDates={bookedDates}
        cabin={cabin}
      />
      {/* {session?.user ? (
        <ReservationForm user={session.user} cabin={cabin} />
      ) : (
        <LoginMessage />
      )} */}
      <ReservationForm user={guest} cabin={cabin} />
    </div>
  );
}

export default Reservation;
