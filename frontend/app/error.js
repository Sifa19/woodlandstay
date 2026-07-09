"use client";

export default function Error({ error, reset }) {
  return (
    <main className="flex justify-center items-center flex-col gap-6">
      <h1 className="text-3xl font-semibold">Something went wrong!</h1>
      <p className="text-lg">ERROR! {error.message}</p>

      <button
        onClick={reset}
        className="w-52 md:w-72 inline-block bg-accent-500 text-primary-800 px-6 py-3 md:text-lg capitalize"
      >
        Try again
      </button>
      <a
        href="/"
        className="w-52 md:w-72 bg-accent-500 text-primary-800 px-6 py-3 md:text-lg text-center capitalize"
      >
        go to home page
      </a>
    </main>
  );
}
