"use server";

import { revalidatePath } from "next/cache";
import {
  deleteBooking,
  getBookings,
  updateBooking,
  getGuest,
  createGuest,
  updateGuest,
  createBooking as createNewBooking,
} from "./data-service";
import { redirect } from "next/navigation";

export async function getOrCreateGuest(guestData) {
  try {
    return await getGuest(guestData.email);
  } catch {
    return await createGuest(guestData);
  }
}

export async function updateGuestProfile(data) {
  //======= #1. VALID IF USER IS LOGGED IN =======
  //const session = await auth();

  //if (!session) throw new Error("You must be logged in");

  const fullName = data.get("fullName");
  const email = data.get("emailId");
  const nationalId = data.get("nationalId");
  const [nationality, countryFlag] = data.get("nationality").split("-");

  //======= #2. VALIDATE IF THE INPUT IS VALID =======
  if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalId)) {
    throw new Error("Please enter valid nationalId");
  }

  //data to be updated
  const updateData = {
    fullName: fullName,
    email: email,
    nationality: nationality,
    countryFlag: countryFlag,
    nationalId: nationalId,
    createdAt: new Date().toISOString(),
  };

  //======= #3. UPDATE THE DATA IN DATABASE =======
  await updateGuest(email, updateData);

  //======= #4. REFRESH THE CACHE =======
  //to make sure UI doesnt get stale data
  //revalidate the router cache
  revalidatePath("/account/profile");
}

export async function deleteReservation(bookingId) {
  //setp1 : check authorization
  // const session = await auth();

  // if (!session) throw new Error("You must be logged in");

  //step2: validate action
  //make sure that user can delete only their booking
  //not others
  // const guestBooking = await getBookings(session.user.guestId);
  // const guestBookingsId = guestBooking.map((booking) => booking.id);
  // if (!guestBookingsId.includes(bookingId)) {
  //   throw new Error("You are not allowed to delete this booking");
  // }

  //step3: perform action
  await deleteBooking(bookingId);

  //step4 : update ui
  revalidatePath("/account/reservations");
}

export async function editReservationDetails(data) {
  //setp1 : check authorization

  //step2: validate action
  //make sure that user can update only their booking
  //not others
  const guestId = parseInt(data.get("guestId"));
  const guestBookings = await getBookings(guestId);
  const guestBookingIds = guestBookings.map((booking) => booking.id);

  const numGuests = parseInt(data.get("numGuests"));
  const observations = data.get("observations").slice(0, 1000);
  const id = Number(data.get("id"));

  if (!guestBookingIds.includes(id)) {
    throw new Error("You are not allowed to update this booking");
  }

  //step3: perform action
  await updateBooking(id, { numGuests, observations });

  //step4 : update ui (revalidation should happens before redirect)
  revalidatePath(`/account/reservations/edit/${id}`);
  redirect("/account/reservations");
}

export async function createBooking(bookingData, formData) {
  //setp1 : check authorization
  // const session = await auth();

  // if (!session) throw new Error("You must be logged in");

  const numGuests = parseInt(formData.get("numGuests"));
  const observations = formData.get("observations").slice(0, 1000);
  const newBooking = {
    ...bookingData,
    numGuests,
    observations,
    extrasPrice: 0,
    totalPrice: bookingData.cabinPrice,
    isPaid: false,
    hasBreakfast: false,
    status: "UNCONFIRMED",
  };

  await createNewBooking(newBooking);

  revalidatePath(`/cabins/${bookingData.cabinId}`);

  redirect("/cabins/thankyou");
}
