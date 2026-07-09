"use client";
import Image from "next/image";
import { useState } from "react";

function SelectCountry({
  countryFlag,
  countryName,
  name,
  id,
  className,
  countries,
}) {
  const [flag, setFlag] = useState(countryFlag);

  return (
    <>
      <div className=" flex items-center justify-between">
        <label htmlFor="nationality">Where are you from?</label>
        <div className="relative h-5 w-6">
          {flag && (
            <Image
              src={`https://flagcdn.com/48x36/${flag.toLowerCase()}.png `}
              alt={flag}
              width={30}
              height={20}
            />
          )}
        </div>
      </div>
      <select
        name={name}
        id={id}
        defaultValue={`${countryName}-${countryFlag}`}
        className={className}
        onChange={(e) => setFlag(e.target.value.split("-")[1])}
      >
        <option value="">Select country...</option>
        {countries.map((country) => (
          <option key={country.name} value={`${country.name}-${country.code}`}>
            {country.name}
          </option>
        ))}
      </select>
    </>
  );
}

export default SelectCountry;
