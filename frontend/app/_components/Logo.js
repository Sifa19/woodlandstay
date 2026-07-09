import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <Image
        width={60}
        height={60}
        src={logo}
        quality={100}
        alt="The Wood Nest"
      />
      <span className=" text-xl font-semibold hover:text-accent-400 transition-colors ">
        The Wood Nest
      </span>
    </Link>
  );
}

export default Logo;
