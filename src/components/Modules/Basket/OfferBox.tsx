import React from "react";



function OfferBox() {
  return (
    <div className="w-full flex  gap-2 border-2 border-gray-500 p-7 mt-5">
      <input
        type="text"
        className="w-full p-2 rounded-full bg-transparent outline-none border-2 border-MainColor"
        placeholder="کد تخفیف"
      />
      <button className="py-2 px-6 rounded-full bg-MainColor text-black ">
        ثبت
      </button>
    </div>
  );
}

export default OfferBox;
