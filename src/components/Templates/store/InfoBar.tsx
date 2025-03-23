"use client";
import Information from "@/components/Modules/store/InfoBar/Information";
import MoreInfo from "@/components/Modules/store/InfoBar/moreInfo";
import React from "react";
import Comments from "./Comments/Comments";

type Props = {id:string};

function InfoBar({id}: Props) {
  const [CurrentPage, setCurrentPage] = React.useState<string>("توضیحات");
  const pages = [
    {
      id: 1,
      name: "توضیحات",
      Componnet: () => {
        return <Information />;
      },
    },
    {
      id: 2,
      name: "تکمیلی",
      Componnet: () => {
        return <MoreInfo />;
      },
    },
    {
      id: 3,
      name: "نظرات",
      Componnet: () => {
        return <Comments productId={id} />;

      },
    },
    {
      id: 4,
      name: "شرایط",
      Componnet: () => {
        return <>hi</>;
      },
    },
  ];

  return (
    <div className="w-full h-fit  flex flex-col gap-4 mt-10">
      <div className="w-full   bg-[#0F0F0F] border-y border-gray-700 h-fit ">
        <div className="flex justify-center  gap-4 ">
          <div className="w-full max-w-8xl px-2">
            <ul className="w-full flex gap-5">
              {
                pages.map((page) => (
                  <li
                    key={page.id}
                    onClick={() => setCurrentPage(page.name)}
                    className={` ${page.name==CurrentPage && ' border-t-2 border-t-MainColor'}  relative p-2 pb-2 before:content-[''] before:absolute before:top-0 before:right-0 before:w-0 before:h-[2px] before:bg-MainColor before:transition-all before:duration-300 hover:before:w-full hover:before:left-0`}
                  >
                    {page.name}
                  </li>
                ))
              }
            </ul>

            <div className="py-10 px-3">
              {pages.map((item) => {
                if (item.name === CurrentPage) {
                  return (
                    <div key={item.id} className="w-full">
                      {item.Componnet()}
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoBar;
