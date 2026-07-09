"use client";
import { TrashIcon } from "@heroicons/react/24/solid";
import { useTransition } from "react";
import SpinnerMini from "./SpinnerMini";

function DeleteReservation({ bookingId, onDelete }) {
  const [isPending, startTransition] = useTransition();

  function handleDelete() {
    if (confirm("Are you sure you want to delete this reservation ?"))
      startTransition(() => onDelete(bookingId));
  }

  return (
    <button
      onClick={handleDelete}
      className="border-0 border-l border-primary-800
flex justify-center items-center space-x-2 hover:bg-accent-600 hover:text-primary-900"
    >
      {isPending ? (
        <SpinnerMini />
      ) : (
        <>
          <TrashIcon className="h-4" />
          <span className="relative top-1">DELETE</span>
        </>
      )}
    </button>
  );
}

export default DeleteReservation;
