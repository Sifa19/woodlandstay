import { eachDayOfInterval } from "date-fns";

export async function getCabin(id) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/cabins/${id}`,
  );
  return response.json();
}

export const getCabins = async function () {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/cabins`,
    {
      cache: "no-store",
    },
  );
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
  console.log("Calling Spring Boot...");

  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/bookings/${bookingId}`;
  console.log(url);

  const response = await fetch(url, {
    cache: "no-store",
  });

  console.log("Status:", response.status);

  return response.json();
}

export async function getBookings(guestId) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/bookings/guest/${guestId}`,
    {
      cache: "no-store",
    },
  );
  return response.json();
}

export async function getBookedDatesByCabinId(cabinId) {
  let today = new Date();
  today.setUTCHours(0, 0, 0, 0);
  today = today.toISOString();

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/bookings/cabin/${cabinId}`,
  );

  const data = await response.json();

  console.log("Bookings for cabin", data);

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
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBooking),
    },
  );

  console.log(response.status);

  if (!response.ok) {
    console.log(await response.text());
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

  console.log(response.status);

  if (!response.ok) {
    console.log(await response.text());
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

  console.log(response.status);

  if (!response.ok) {
    console.log(await response.text());
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
}
