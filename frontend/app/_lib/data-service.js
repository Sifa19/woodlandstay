import { eachDayOfInterval } from "date-fns";

export async function getCabin(id) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/cabins/${id}`,
  );
  if (!response.ok) {
    throw new Error("Cabin could not be loaded");
  }
  return response.json();
}

export const getCabins = async function () {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/cabins`,
    {
      cache: "no-store",
    },
  );
  if (!response.ok) {
    throw new Error("Cabins could not be loaded");
  }
  return response.json();
};

export async function getGuest(email) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/guests/${email}`,
  );

  if (!response.ok) {
    throw new Error("Guest could not be loaded");
  }

  const guest = await response.json();

  return guest;
}

export async function getBooking(bookingId) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/bookings/${bookingId}`;

  const response = await fetch(url, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Booking could not be loaded");
  }

  return response.json();
}

export async function getBookings(guestId) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/bookings/guest/${guestId}`,
    {
      cache: "no-store",
    },
  );
  if (!response.ok) {
    throw new Error("Bookings could not be loaded");
  }
  return response.json();
}

export async function getBookedDatesByCabinId(cabinId) {
  let today = new Date();
  today.setUTCHours(0, 0, 0, 0);
  today = today.toISOString();

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/bookings/cabin/${cabinId}`,
  );

  if (!response.ok) {
    throw new Error("Dates could not be fetched");
  }

  const data = await response.json();

  const bookedDates = data
    .map((booking) => {
      return eachDayOfInterval({
        start: new Date(booking.startDate),
        end: new Date(booking.endDate),
      });
    })
    .flat();

  return bookedDates;
}

export async function getCountries() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/countries`,
  );
  if (!response.ok) {
    throw new Error("Countries could not be loaded");
  }
  return response.json();
}

export async function createGuest(newGuest) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/guests`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newGuest),
    },
  );

  if (!response.ok) {
    throw new Error("Guest could not be created");
  }

  return response.json();
}

export async function createBooking(newBooking) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/bookings/booking`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBooking),
    },
  );

  if (!response.ok) {
    throw new Error("Booking could not be created");
  }
}

export async function updateGuest(email, updatedFields) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/guests/${email}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedFields),
    },
  );

  if (!response.ok) {
    throw new Error("Guest could not be updated");
  }
}

export async function updateBooking(id, updatedFields) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/bookings/${id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedFields),
    },
  );

  if (!response.ok) {
    throw new Error("Guest could not be updated");
  }
}

export async function deleteBooking(id) {
  // throw new Error("new error");
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/bookings/${id}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    },
  );

  if (!response.ok) {
    throw new Error("Booking could not be deleted");
  }
}
