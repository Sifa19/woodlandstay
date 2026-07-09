import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import TextExpander from "@/app/_components/TextExpander";
import about from "@/public/about-1.jpg";

function Cabin({ cabin }) {
  const { id, name, maxCapacity, regularPrice, discount, image, description } =
    cabin;
  return (
    <>
      <div className="relative grid md:grid-cols-[2fr_4fr] p-2">
        <div className="relative h-[15rem] md:w-full md:h-full">
          <Image
            src={about}
            fill
            className="object-cover"
            alt={`Cabin ${name}`}
          />
        </div>
        <div
          className="w-[40rem] absolute top-[1rem] left-[50%] translate-x-[-50%] py-3 text-center
        bg-primary-950 text-accent-100 font-bold text-4xl "
        >
          Cabin {name}
        </div>
        <div className="md:m-5 md:ml-0 border md:border-l-0 border-primary-800">
          <div className="grid gap-4 px-8 py-10">
            <p className="mt-12 mb-4 text-accent-50 font-thin">
              <TextExpander>{description}</TextExpander>
            </p>
            <div className="flex space-x-4">
              <UsersIcon className="h-5 w-5 text-primary-600" />
              <span className="text-accent-50 font-thin">
                For upto{" "}
                <span className="text-primary-50 font-normal">
                  {maxCapacity}
                </span>{" "}
                guests
              </span>
            </div>
            <div className="flex space-x-4">
              <MapPinIcon className="h-5 w-5 text-primary-600" />
              <span className="text-accent-50 font-thin">
                Located in the heart of the{" "}
                <span className="text-primary-50 font-normal">Italy</span>
              </span>
            </div>
            <div className="flex space-x-4">
              <EyeSlashIcon className="h-5 w-5 text-primary-600" />
              <span className="text-accent-50 font-thin">
                Privacy{" "}
                <span className="text-primary-50 font-normal">100%</span>{" "}
                guaranted
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="my-8 text-center text-4xl font-semibold text-accent-400">
        Reserve {name} today. Pay on arrival.
      </div>
    </>
  );
}

export default Cabin;
