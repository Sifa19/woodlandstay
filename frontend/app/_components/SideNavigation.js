"use client";
import {
  CalendarDaysIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    name: "Home",
    href: "/account",
    icon: <HomeIcon className="h-5 w-5 text-primary-600" />,
  },
  {
    name: "Reservations",
    href: "/account/reservations",
    icon: <CalendarDaysIcon className="h-5 w-5 text-primary-600" />,
  },
  {
    name: "Guest profile",
    href: "/account/profile",
    icon: <UserIcon className="h-5 w-5 text-primary-600" />,
  },
];

function SideNavigation() {
  const pathName = usePathname();
  return (
    <nav className=" gap-8 border-r border-primary-900">
      <ul className="h-full text-lg flex flex-col ">
        {navLinks.map((link, index) => {
          return (
            <li
              key={index}
              className={`py-3 px-5 hover:bg-primary-900 hover:text-primary-100 transition-colors flex 
                 gap-4 font-semibold text-primary-200 ${
                   pathName === link.href && "bg-primary-900"
                 }`}
            >
              <span>{link.icon}</span>
              <Link href={link.href}>{link.name}</Link>
            </li>
          );
        })}
        <li className="mt-auto">
          <Link
            href="https://the-wild-oasis-psi-one.vercel.app/"
            target="_blank"
            className="flex items-center gap-4 font-semibold border w-fit p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                clipRule="evenodd"
              />
            </svg>
            <span>Admin Section</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default SideNavigation;
