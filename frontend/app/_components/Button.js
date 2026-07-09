"use client";
import { useFormStatus } from "react-dom";
import SpinnerMini from "./SpinnerMini";

export default function Button({ children }) {
  const { pending } = useFormStatus();
  return (
    <div className="space-y-4 flex flex-col items-end">
      <button
        className="bg-accent-500 py-4 px-6 text-primary-950 font-semibold
hover:bg-accent-600"
      >
        {pending ? <SpinnerMini /> : children}
      </button>
    </div>
  );
}
