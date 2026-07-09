"use client";
import { useFormStatus } from "react-dom";
import Image from "next/image";
import { updateGuestProfile } from "../_lib/actions";
import about from "@/public/about-1.jpg";

function UpdateProfileForm({ children, guest }) {
  const { fullName, email, nationality, nationalId, countryFlag } = guest;
  console.log("guest", guest);
  return (
    <form
      className=" bg-primary-900 py-8 px-12 text-lg flex flex-col gap-6"
      action={updateGuestProfile}
    >
      <div className="space-y-2">
        <label>Full Name</label>
        <input
          name="fullName"
          type="text"
          disabled
          defaultValue={fullName}
          className="px-5 py-2 bg-primary-200 text-primary-800 w-full rounded-sm shadow-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
        />
      </div>

      <div className="space-y-2">
        <label>Email address</label>
        <input
          name="email"
          disabled
          defaultValue={email}
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
        />
      </div>

      <input type="hidden" name="emailId" value={email} />

      <div className="space-y-2">
        {/* SelectCountry Component */}
        {children}
      </div>

      <div className="space-y-2">
        <label htmlFor="nationalID">
          National ID number{" "}
          <span className="text-primary-600">
            (8 to 12 digits alpha numeric id)
          </span>
        </label>
        <input
          name="nationalId"
          defaultValue={nationalId || ""}
          required
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
        />
      </div>

      <div className="flex justify-end items-center gap-6">
        <Button />
      </div>
    </form>
  );
}

function Button() {
  const { pending } = useFormStatus();
  return (
    <button
      className="bg-accent-500 px-8 py-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all 
    disabled:cursor-not-allowed disabled:bg-gray-500 
    disabled:text-gray-300"
      disabled={pending}
    >
      {pending ? "Updating..." : "Update profile"}
    </button>
  );
}

export default UpdateProfileForm;
