import { auth } from "../_lib/auth";
import { getGuest } from "../_lib/data-service";

export const metadata = {
  title: "Home",
};

export default async function Page() {
  const user = await getGuest("john@example.com");
  const firstName = user?.fullName?.split(" ")?.at(0);
  return (
    <h2 className="font-semibold text-accent-400 text-2xl mb-7">
      Welcome, {firstName}
    </h2>
  );
}
