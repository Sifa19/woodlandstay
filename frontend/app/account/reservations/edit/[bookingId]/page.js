import Button from "@/app/_components/Button";
import { editReservationDetails } from "@/app/_lib/actions";
import { getBooking, getCabin } from "@/app/_lib/data-service";

async function page({ params }) {
  const id = params.bookingId;
  const booking = await getBooking(id);
  const { id: guestId } = booking.guest;
  const { cabinId, maxCapacity } = booking?.cabin;
  const { numGuests, observations } = booking;
  return (
    <div className="grid mb-2 grid-rows-[4rem_1fr] gap-4 ">
      <div className="bg-primary-800 flex items-center justify-between px-6">
        <p className="text-xl font-semibold text-accent-400">
          Edit Reservation #{id}
        </p>
      </div>
      <form
        className="h-full flex flex-col gap-4 px-8 "
        action={editReservationDetails}
      >
        <div className="space-y-2">
          <label>How many guests?</label>
          <select
            name="numGuests"
            id="numGuests"
            defaultValue={numGuests}
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
            required
          >
            <option value="" key="">
              Select number of guests...
            </option>
            {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
              <option value={x} key={x}>
                {x} {x === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </div>

        <input type="hidden" name="guestId" value={guestId} />

        <div className="space-y-2">
          <label>Anything we should know about your stay?</label>
          <textarea
            name="observations"
            defaultValue={observations}
            placeholder="Any pets, allergies, special requirements etc ?"
            className="px-5 py-2 bg-primary-200 text-primary-950 w-full rounded-sm shadow-sm
        disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400
        placeholder:text-primary-400"
          />
        </div>
        <input type="hidden" name="id" value={id} />
        <Button>Update Reservation</Button>
      </form>
    </div>
  );
}

export default page;
