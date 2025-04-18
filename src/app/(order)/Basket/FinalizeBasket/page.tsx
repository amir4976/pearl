"use client";

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import InputFiled from "@/components/Modules/Basket/InputFiled"; // مسیرت درسته؟
import CountrySelection from "@/components/Modules/Basket/CountrySelection";
import { ArrowLeft } from "iconsax-react";
import OfferBox from "@/components/Modules/Basket/OfferBox";

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

type FormValues = z.infer<typeof schema>;

type countryType = {
  name: string;
  states: { name: string }[];
};

type BasketItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

function Page() {
  const [selectedCountry, setSelectedCountry] = React.useState<countryType>();
  const [selectedState, setSelectedState] = React.useState<string>("");
  const [isShowOfferBox, setIsShowOfferBox] = React.useState(false);

  const [basket, setBasket] = React.useState<BasketItem[]>([]);

  useEffect(() => {
    const getLocalstorage =  localStorage.getItem("basket");
    const basket = getLocalstorage ? JSON.parse(getLocalstorage) : [];
    setBasket(basket)
  }, []);


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
    <>
      <div className="flex items-center text-2xl text-DB py-10   text-gray-500 gap-2">
        <span>سبد خرید</span>
        <span>
          <ArrowLeft />
        </span>
        <span className="text-white">تصفیه حساب</span>
        <span>
          <ArrowLeft />
        </span>
        <span>ثبت سفارش</span>
      </div>

      <div className="flex flex-col py-10 ">
        <div className="flex ">
          <p>کد تخفیف دارید؟</p>
          <button
            className="text-MainColor underline"
            onClick={() => setIsShowOfferBox(!isShowOfferBox)}
          >
            برای نوشتن کد تخفیف اینجا کلیک کنید
          </button>
        </div>

        <div
          className={`${
            isShowOfferBox ? "block" : "hidden"
          } animate-in fade-in duration-500`}
        >
          <OfferBox />
        </div>
      </div>
      <div className="grid grid-cols-1  md:grid-cols-2  gap-10">
        <div className=" col-span-1">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col w-full gap-4"
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

            <div className=" mt-5">
              <InputFiled
                name="departemanAdress"
                type="text"
                placeHolder="اپارتمان, مجتمع , واحد ,  ... "
                register={register}
                errors={errors}
                required={true}
              />
            </div>

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

            <CountrySelection
              selectedCountry={selectedCountry}
              selectedState={selectedState}
              setSelectedCountry={setSelectedCountry}
              setSelectedState={setSelectedState}
            />
            <button
              type="submit"
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
            >
              ارسال فرم
            </button>
          </form>
        </div>

        <div className="col-span-1 ">
           <div className="w-full h-fit p-5 flex flex-col gap-10 justify-center items-center bg-[#141414] sticky top-28">
            <p className="text-2xl font-DBOLD">سفارش شما</p>
            <div className="bg-[#0f0f0f] w-full h-fit p-5 flex flex-col gap-5">
              <table>
                <thead>
                  <tr className="flex justify-between text-xl font-DBOLD border-b pb-5 mb-2">
                    <td>محصول</td>
                    <td>جمع جز</td>
                  </tr>
                </thead>
                <tbody>
                    {
                      basket.map((item)=>(
                        <tr key={item.id} className="flex mt-2 justify-between text-sm text-gray-500 font-DBOLD border-b border-b-gray-700 pb-2 mb-2">
                        <td>{item.name} * {item.quantity} </td>
                        <td>{(item.price * item.quantity).toLocaleString("fa-ir")} تومان</td>
                      </tr>
                      ))
                    }
                </tbody>

                <tfoot>
                  <tr className="flex justify-between text-sm font-DBOLD  border-b border-gray-700 pb-2  mt-2">
                     <td>جمع جزء</td>
                     <td className="text-MainColor">{basket.reduce((acc, item) => acc + item.price * item.quantity, 0).toLocaleString("fa-ir")} تومان</td>
                  </tr>

                  <tr className="flex justify-between text-xl font-DBOLD  pt-5 mt-2">
                     <td>جمع کل</td>
                     <td className="text-MainColor">{basket.reduce((acc, item) => acc + item.price * item.quantity, 0).toLocaleString("fa-ir")} تومان</td>
                  </tr>
                </tfoot>

              </table>
                    

            </div>
            <div className="w-full h-full">
              <button className="text-black bg-MainColor w-full py-3 rounded-lg font-DB  " >ثبت و پرداخت  </button>
            </div>
            <div className=" text-gray-500 border-t pt-5 ">
            اطلاعات شخصی شما برای پردازش سفارش شما، پشتیبانی از تجربه شما در سراسر این وب سایت و برای اهدافی که در سیاست حفظ حریم خصوصی ذکر شده است استفاده می شود.
            </div>
           </div>
        </div>
      </div>
    </>
  );
}

export default Page;
