import { UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import about from "@/public/about-1.jpg";

function CabinCard({ cabin }) {
  const { id, name, maxCapacity, regularPrice, discount, image } = cabin;
  return (
    <div className="flex flex-col md:flex-row border border-primary-800 text-primary-200 ">
      <div className=" h-[20rem] md:h-full w-full md:flex-1 relative">
        <Image
          fill
          src={about}
          alt={name}
          className="aspect-square object-cover border-r border-primary-800"
        />
      </div>
      <div className="md:w-[70%] flex flex-col">
        <div className="flex flex-col gap-4 pt-5 pb-2 px-7">
          <h2 className="text-2xl text-accent-500 font-bold">Cabin {name}</h2>
          <span className="text-primary-200 text-xl flex gap-2">
            <UsersIcon className="h-5 w-5 text-primary-600" /> For upto{" "}
            {maxCapacity} guests
          </span>
          <span className="md:self-end ">
            {discount > 0 ? (
              <>
                <span className="text-2xl font-[350]">
                  ${regularPrice - discount}{" "}
                </span>
                <span className="line-through font-semibold text-primary-600">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="text-2xl">${regularPrice}</span>
            )}{" "}
            / night
          </span>
        </div>
        <Link
          className="md:self-end text-center font-semibold border p-4 border-primary-900 hover:bg-accent-600 hover:text-primary-900"
          href={`/cabins/${id}`}
        >
          Details & reservations &rarr;{" "}
        </Link>
      </div>
    </div>
  );
}

export default CabinCard;
