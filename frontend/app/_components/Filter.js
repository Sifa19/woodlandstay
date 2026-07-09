"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const activeFilter = searchParams.get("capacity") ?? "";

  function handleFilter(filter) {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="border border-primary-800 flex">
      <Button
        name="All cabins"
        handleFilter={() => handleFilter("all")}
        activeFilter={activeFilter}
        filter="all"
        className="px-5 py-2 hover:bg-primary-700"
      />

      <Button
        name="1&mdash;3 guests"
        handleFilter={() => handleFilter("small")}
        activeFilter={activeFilter}
        filter="small"
      />
      <Button
        name="4&mdash;7 guests"
        handleFilter={() => handleFilter("medium")}
        activeFilter={activeFilter}
        filter="medium"
      />
      <Button
        name="8&mdash;12 guests"
        handleFilter={() => handleFilter("large")}
        activeFilter={activeFilter}
        filter="large"
      />
    </div>
  );
}

function Button({ name, filter, activeFilter, handleFilter }) {
  return (
    <button
      onClick={handleFilter}
      className={`px-5 py-2 hover:bg-primary-700
        ${activeFilter === filter && "bg-primary-700"}`}
    >
      {name}
    </button>
  );
}

export default Filter;
