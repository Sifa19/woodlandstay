import UpdateProfileForm from "@/app/_components/UpdateProfileForm";
import SelectCountry from "@/app/_components/SelectCountry";
import { auth } from "@/app/_lib/auth";
import { getGuest, getCountries } from "@/app/_lib/data-service";

async function page() {
  //const session = await auth();
  const guest = await getGuest("john@example.com");
  const countries = await getCountries();

  return (
    <div>
      <h2 className="text-accent-400 text-2xl font-semibold mb-4">
        Update your guest profile
      </h2>
      <p className="text-lg mb-8 text-primary-200">
        Providing the following information will make your check-in process
        faster and smoother. See you soon!
      </p>
      <UpdateProfileForm guest={guest}>
        <SelectCountry
          name="nationality"
          id="nationality"
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
          countryName={guest.nationality}
          countryFlag={guest.countryFlag}
          countries={countries}
        />
      </UpdateProfileForm>
    </div>
  );
}

export default page;
