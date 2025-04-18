import { ArrowDown2 } from "iconsax-react";
import React from "react";
import { countries } from "@/utils/constances";

type countryType = {
  name: string;
  states: { name: string }[];
};

type Props = {
  selectedCountry: countryType | undefined;
  selectedState: string;
  setSelectedCountry: React.Dispatch<
    React.SetStateAction<countryType | undefined>
  >;
  setSelectedState: React.Dispatch<React.SetStateAction<string>>;
};

function CountrySelection({
  selectedCountry,
  selectedState,
  setSelectedCountry,
  setSelectedState,
}: Props) {
  // نمایش لیست‌ها
  const [isShowCountry, setIsShowCountry] = React.useState(false);
  const [isShowState, setIsShowState] = React.useState(false);

  // تمام کشورها و شهرها
  const [allStates, setAllStates] = React.useState<string[]>([]);
  const [filteredStates, setFilteredStates] = React.useState<string[]>([]);
  const [filteredCountries, setFilteredCountries] = React.useState<string[]>(
    countries.map((country) => country.name)
  );

  // انتخاب کشور و تنظیم شهرها
  const handleCountryClick = (countryName: string) => {
    setSelectedState(""); // ریست شهر

    const findCountry = countries.find((c) => c.name === countryName);
    if (findCountry) {
      setSelectedCountry(findCountry);

      // فقط نام شهرها رو می‌گیریم
      const stateNames = findCountry.states.map((s) => s.name);
      setAllStates(stateNames);
      setFilteredStates(stateNames);
    }

    setIsShowCountry(false);
  };

  // جستجوی کشور
  const handleCountrySearch = (value: string) => {
    const filtered = countries
      .filter((c) => c.name.toLowerCase().includes(value.toLowerCase()))
      .map((c) => c.name);
    setFilteredCountries(filtered);
  };

  // جستجوی شهر
  const handleStateSearch = (value: string) => {
    const filtered = allStates.filter((state) =>
      state.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredStates(filtered);
  };

  return (
    <>
      {/* انتخاب کشور */}
      <div
        className="w-full relative outline-none bg-transparent mt-5 p-2 flex justify-between border border-gray-600 rounded-full text-white cursor-pointer"
        onClick={() => setIsShowCountry(!isShowCountry)}
      >
        <span>{selectedCountry?.name || "انتخاب کشور"}</span>
        <ArrowDown2 size={20} />

        {/* لیست کشورها */}
        <div
          className={`absolute w-full bg-black top-12 left-0 z-50 rounded-xl px-5 cursor-auto ${
            isShowCountry ? "block" : "hidden"
          }`}
        >
          {/* اینپوت جستجو */}
          <div
            className="w-full border-b border-gray-500 py-5"
            onClick={(e) => e.stopPropagation()}
          >
            <input
              type="search"
              placeholder="جستجو کنید"
              className="w-full outline-none bg-transparent p-2 border border-gray-600 rounded-full text-white"
              onChange={(e) => handleCountrySearch(e.target.value)}
            />
          </div>

          {/* نمایش کشورها */}
          <div className="overflow-auto max-h-44">
            {filteredCountries.map((country) => (
              <div
                key={country}
                className="flex items-center gap-2 py-2 cursor-pointer hover:bg-gray-800"
                onClick={() => handleCountryClick(country)}
              >
                <span>{country}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* انتخاب شهر */}
      <div
        className="w-full relative outline-none bg-transparent p-2 mt-5 flex justify-between border border-gray-600 rounded-full text-white cursor-pointer"
        onClick={() => setIsShowState(!isShowState)}
      >
        <span>{selectedState || "شهر"}</span>
        <ArrowDown2 />

        {/* لیست شهرها */}
        <div
          className={`absolute w-full bg-black top-12 left-0 z-50 rounded-xl px-5 cursor-auto ${
            isShowState ? "block" : "hidden"
          }`}
        >
          {/* اینپوت جستجو */}
          <div
            className="w-full border-b border-gray-500 py-5"
            onClick={(e) => e.stopPropagation()}
          >
            <input
              type="search"
              placeholder="جستجو کنید"
              className="w-full outline-none bg-transparent p-2 border border-gray-600 rounded-full text-white"
              onChange={(e) => handleStateSearch(e.target.value)}
            />
          </div>

          {/* نمایش استان‌ها */}
          <div className="overflow-auto max-h-44">
            {filteredStates.map((state) => (
              <div
                key={state}
                className="flex items-center gap-2 py-2 hover:bg-gray-800 cursor-pointer"
                onClick={() => {
                  setSelectedState(state);
                  setIsShowState(false);
                }}
              >
                <span>{state}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default CountrySelection;
