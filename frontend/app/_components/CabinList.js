import { getCabins } from "../_lib/data-service";
import CabinCard from "@/app/_components/CabinCard";

async function CabinList({ filter }) {
  const cabins = await getCabins();
  console.log("Cabins:", cabins.length);

  if (cabins.length === 0) return null;

  let displayCabins;

  if (filter === "all") displayCabins = cabins;
  if (filter === "small") {
    displayCabins = cabins.filter((cabin) => cabin.maxCapacity <= 3);
  }
  if (filter === "medium") {
    displayCabins = cabins.filter(
      (cabin) => cabin.maxCapacity > 3 && cabin.maxCapacity <= 7,
    );
  }
  if (filter === "large") {
    displayCabins = cabins.filter((cabin) => cabin.maxCapacity >= 8);
  }

  return (
    <div className="grid md:grid-cols-2 gap-12 ">
      {displayCabins.map((cabin) => {
        return <CabinCard key={cabin.id} cabin={cabin} />;
      })}
    </div>
  );
}

export default CabinList;
