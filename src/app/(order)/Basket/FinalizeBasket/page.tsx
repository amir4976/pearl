"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import InputFiled from "@/components/Modules/Basket/InputFiled"; // مسیرت درسته؟
import { ArrowDown2 } from "iconsax-react";
import { countries } from "@/utils/constances";

// ✅ تعریف Zod schema
const schema = z.object({
  firstName: z.string().min(2, "نام باید حداقل ۲ حرف باشد"),
  lastName: z.string().min(2, "نام خانوادگی باید حداقل ۲ حرف باشد"),
  email: z.string().email("ایمیل نامعتبر است"),
  streetAdress: z.string().min(1, "آدرس خیابان صورتحساب یک فیلد الزامی است."),
  companyName: z.string().optional(),
  departemanAdress: z.string().optional(),
  city: z.string().min(1, "آدرس شهر صورتحساب یک فیلد الزامی است."),
  postCode: z.string().min(1, "کد پستی صورتحساب یک فیلد الزامی است."),
  phone: z.string().min(1, "شماره تلفن صورتحساب یک فیلد الزامی است."),
});

type countryType = {
  name: string;
  states: { name: string }[]; 
};

type FormValues = z.infer<typeof schema>;

function Page() {
  const [isShowCountry, setIsShowCountry] = React.useState(false);
  const [isShowState, setIsShowState] = React.useState(false);

  const [selectedCountry, setSelectedCountry] = React.useState<countryType>();

  const [state, setState] = React.useState<string[]>([]);
  const [selectedState, setSelectedState] = React.useState<string>("");
  const handleCountryClick = (countryName: string) => {
     setState([])
     setSelectedState("")


    const findCountry = countries.find(
      (country) => country.name === countryName
    );
  
    if (findCountry) {
      setSelectedCountry(findCountry); // ⬅️ حالا مقدار درست رو ست می‌کنیم
      setState(findCountry?.states.map(state => state.name) || []);
    }
  

    console.log(state)
    setIsShowCountry(false);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormValues) => {
    console.log("فرم ارسال شد:", data);
  };

  return (
    <div className="grid grid-cols-2 gap-5">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-full col-span-1 gap-4"
      >
        <div className="flex gap-5">
          <InputFiled
            name="firstName"
            title="نام"
            type="text"
            register={register}
            errors={errors}
            required
          />
          <InputFiled
            name="lastName"
            title="نام خانوادگی"
            type="text"
            register={register}
            errors={errors}
            required
          />
        </div>

        <InputFiled
          name="companyName"
          title="نام شرکت (اختیاری)"
          type="text"
          register={register}
          errors={errors}
          required={false}
        />

        <InputFiled
          name="streetAdress"
          title="آدرس خیابان"
          type="text"
          register={register}
          errors={errors}
          required={true}
        />

        <InputFiled
          name="departemanAdress"
          type="text"
          placeHolder="اپارتمان, مجتمع , واحد ,  ... "
          register={register}
          errors={errors}
          required={true}
        />

        <InputFiled
          name="city"
          title="شهر"
          type="text"
          register={register}
          errors={errors}
          required={true}
        />
        <InputFiled
          name="postCode"
          title="کد پستی"
          type="text"
          register={register}
          errors={errors}
          required={true}
        />

        <InputFiled
          name="phone"
          title="شماره تلفن"
          type="text"
          register={register}
          errors={errors}
          required={true}
        />

        <InputFiled
          name="email"
          title="ایمیل"
          type="text"
          register={register}
          errors={errors}
          required={true}
        />
        {/* select country */}
        <div
          className="w-full relative  outline-none bg-transparent p-2 flex justify-between  border border-gray-600 rounded-full text-white cursor-pointer"
          onClick={() => setIsShowCountry(!isShowCountry)}
        >
          <span>
            {typeof selectedCountry === "string"
              ? selectedCountry
              : selectedCountry?.name || "انتخاب کنید"}
          </span>
          <span>
            <ArrowDown2 />
          </span>

          <div
            className={`absolute w-full bg-black top-12 left-0 z-50 rounded-xl px-5 ${
              isShowCountry ? "absolute" : "hidden"
            } `}
          >
            <div className="w-full border-b border-gray-500 py-5">
              <input
                type="search"
                placeholder="جستجو کنید"
                className="w-full outline-none bg-transparent p-2 border border-gray-600 rounded-full text-white"
              />
            </div>
            <div className={`overflow-auto max-h-44 `}>
              {countries.map((country) => (
                <div
                  key={country.name}
                  className="flex items-center gap-2 py-2 hover:bg-gray-800"
                  onClick={() => handleCountryClick(country.name)}
                >
                  <span>{country.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* select state */}
        <div
          className={`w-full relative  outline-none bg-transparent p-2  justify-between  border border-gray-600 rounded-full text-white cursor-pointer    ${
            state.length ? "flex" : "hidden"
          } `}
          onClick={() => setIsShowState(!isShowState)}
        >
          <span>{selectedState || "شهر"}</span>
          <span>
            <ArrowDown2 />
          </span>

          <div
            className={`absolute w-full bg-black top-12 left-0 z-50 rounded-xl px-5 ${
              isShowState ? "absolute" : "hidden"
            }  `}
          >
            <div className="w-full border-b border-gray-500 py-5">
              <input
                type="search"
                placeholder="جستجو کنید"
                className="w-full outline-none bg-transparent p-2 border border-gray-600 rounded-full text-white"
              />
            </div>
            <div className={`overflow-auto max-h-44 `}>
              {state.map((state) => (
                <div
                  key={state}
                  className="flex items-center gap-2 py-2 hover:bg-gray-800"
                  onClick={() => setSelectedState(state)}
                >
                  <span>{state}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

 
        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
        >
          ارسال فرم
        </button>
      </form>

      <div className="col-span-1">اینجا یه ستون جانبی هست</div>
    </div>
  );
}

export default Page;
