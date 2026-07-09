import Navigation from "@/app/_components/Navigation";
import Logo from "./Logo";

function Header() {
  return (
    <header className="border-b border-primary-900 px-8 py-5">
      <div className="flex flex-col md:flex-row gap-3 md:gap-0 items-center justify-between mx-auto max-w-7xl">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
