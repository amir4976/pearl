import { User } from "iconsax-react";
import Image from "next/image";
import React from "react";

type Props = {};

function PanelUsers({}: Props) {
  return (
    <div className="bg-PannelBg p-3 rounded-md">
      <div className="flex justify-between items-center  border-b border-b-gray-500 pb-3  ">
        <p className="font-DB  ">جدید ترین کاربران</p>
        <button className="p-2 bg-MainColor rounded-lg text-black">بیشتر </button>
      </div>
      <div className="flex flex-col">
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
    </div>
  );
}

export function UserCard() {
    return (
        <div className="flex gap-3 items-center   border-b border-b-gray-600 py-3  rounded-sm">
            <div className="w-10 h-10 rounded-full bg-gray-500 items-center justify-center flex"><User variant="Bold" size={20} color={"white"}/></div>
            <div className="flex flex-col">
                <p className="font-DB">محمد حسین زارع</p>
                <p className="text-gray-500">مدیر سایت</p>
            </div>
        </div>
    )
}



export default PanelUsers;
