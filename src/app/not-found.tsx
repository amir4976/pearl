import React from "react";

function notFound() {
  return (
    <>
      <div className="relative flex justify-center items-center">
        <div className="w-full h-[600px]  flex justify-center items-center text-MainColor font-bold text-7xl font-DB 404-Before z-20">
          یافت نشد
        </div>
        <div className="w-full h-[500px] absolute top-20  flex justify-center items-center text-white/5  z-10  font-bold text-[200px] xl:text-[500px] font-DB ">
          404
        </div>
      </div>
    </>
  );
}

export default notFound;
