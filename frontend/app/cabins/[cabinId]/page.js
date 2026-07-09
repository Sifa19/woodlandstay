import {
  getBookedDatesByCabinId,
  getCabin,
  getCabins,
  getSettings,
} from "@/app/_lib/data-service";
import Reservation from "@/app/_components/Reservation";
import { Suspense } from "react";
import Spinner from "@/app/_components/Spinner";
import Cabin from "@/app/_components/Cabin";

// export const metadata = {
//   title: "Cabin",
// };

export async function generateMetadata({ params }) {
  const { name } = await getCabin(params.cabinId);
  return {
    title: `Cabin ${name}`,
  };
}

export async function generateStaticParams() {
  const cabins = await getCabins();

  const cabinIds = cabins.map((cabin) => {
    return {
      cabinId: String(cabin.id),
    };
  });

  return cabinIds;
}

async function Page({ params }) {
  const cabin = await getCabin(params.cabinId);

  // const settings = await getSettings();
  // const bookedDates = await getBookedDatesByCabinId(params.cabinId);

  //in above booked dates will fetch after settings and cabins
  //are fetched and cabin list wont be displayed untill all the data is fetched
  //this will created lot of unecessary wait time

  // const [cabin, settings, bookedDates] = await Promise.all([
  //   getCabin(params.cabinId),
  //   getSettings(),
  //   getBookedDatesByCabinId(params.cabinId),
  // ]);

  return (
    <div>
      <Cabin cabin={cabin} /> {/*server component*/}
      <Suspense fallback={<Spinner />}>
        <Reservation cabin={cabin} /> {/*client component*/}
      </Suspense>
    </div>
  );
}

export default Page;
