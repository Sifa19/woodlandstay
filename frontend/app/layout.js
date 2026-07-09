import "@/app/_styles/global.css";
import { Josefin_Sans } from "next/font/google";
import Header from "./_components/Header";
import { ReservationProvider } from "./_components/ReservationContext";

//external library fonts
const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

//metadata is nextjs convention
export const metadata = {
  // title: "The Wild Oasis",
  title: {
    template: "%s : The Wild Oasis",
    default: "The Wild Oasis",
  },
  description:
    "Luxurious cabin hotel, located in the heart of the Italian  Dolomites",
};

function rootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} bg-primary-950 text-primary-100 
        min-h-screen flex flex-col relative scrollbar-webkit`}
      >
        <Header />
        <div className="flex-1 px-8 py-12 grid">
          <main className="md:max-w-5xl mx-auto w-full">
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>
      </body>
    </html>
  );
}

export default rootLayout;
