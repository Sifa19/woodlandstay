import { eachDayOfInterval } from "date-fns";
import { supabase } from "./supabase";
// GET

export async function getCabin(id) {
  const response = await fetch(`http://localhost:8080/api/cabins/${id}`);

  return response.json();
}

export async function getCabinPrice(id) {
  const { data, error } = await supabase
    .from("cabins")
    .select("regularPrice, discount")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
  }

  return data;
}

export const getCabins = async function () {
  const response = await fetch("http://localhost:8080/api/cabins", {
    cache: "no-store",
  });
  return response.json();
};

// Guests are uniquely identified by their email address
export async function getGuest(email) {
  const response = await fetch(`http://localhost:8080/api/guests/${email}`);

  if (!response.ok) {
    throw new Error("Guest could not be loaded");
  }

  const guest = await response.json();

  return guest;
}

export async function getBooking(bookingId) {
  console.log("Calling Spring Boot...");

  const url = `http://localhost:8080/api/bookings/${bookingId}`;
  console.log(url);

  const response = await fetch(url, {
    cache: "no-store",
  });

  console.log("Status:", response.status);

  return response.json();
}

export async function getBookings(guestId) {
  const response = await fetch(
    `http://localhost:8080/api/bookings/guest/${guestId}`,
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

  // Getting all bookings
  //get all bookings for a specific cabin
  const response = await fetch(
    `http://localhost:8080/api/bookings/cabin/${cabinId}`,
  );

  const data = await response.json();

  console.log("Bookings for cabin", data);

  // Converting to actual dates to be displayed in the date picker
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

export async function getSettings() {
  // const { data, error } = await supabase.from("settings").select("*").single();
  // // await new Promise((res) => setTimeout(res, 5000));
  // if (error) {
  //   console.error(error);
  //   throw new Error("Settings could not be loaded");
  // }
  // return data;
}

export async function getCountries() {
  const response = await fetch("http://localhost:8080/api/countries");
  return response.json();
}

/////////////
// CREATE

export async function createGuest(newGuest) {
  const response = await fetch("http://localhost:8080/api/guests/guest", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newGuest),
  });

  if (!response.ok) {
    console.log(await response.text());
    throw new Error("Guest could not be created");
  }

  return response.json();
}

export async function createBooking(newBooking) {
  const response = await fetch(`http://localhost:8080/api/bookings/booking`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newBooking),
  });

  console.log(response.status);

  if (!response.ok) {
    console.log(await response.text());
    throw new Error("Booking could not be created");
  }
}

/////////////
// UPDATE

// The updatedFields is an object which should ONLY contain the updated data
export async function updateGuest(email, updatedFields) {
  const response = await fetch(`http://localhost:8080/api/guests/${email}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedFields),
  });

  console.log(response.status);

  if (!response.ok) {
    console.log(await response.text());
    throw new Error("Guest could not be updated");
  }
}

export async function updateBooking(id, updatedFields) {
  const response = await fetch(`http://localhost:8080/api/bookings/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedFields),
  });

  console.log(response.status);

  if (!response.ok) {
    console.log(await response.text());
    throw new Error("Guest could not be updated");
  }
}

/////////////
// DELETE

export async function deleteBooking(id) {
  // throw new Error("new error");
  const response = await fetch(`http://localhost:8080/api/bookings/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
}
