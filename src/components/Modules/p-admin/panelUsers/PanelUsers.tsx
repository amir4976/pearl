import { userType } from "@/types/types";
import { User } from "iconsax-react";
import React from "react";

type Props = {
  users: userType[];
};

function PanelUsers({ users = [] }: Props) {
  console.log(users);
  return (
    <div className="bg-PannelBg p-3 rounded-md min-h-96">
      <div className="flex justify-between items-center border-b border-b-gray-500 pb-3">
        <p className="font-DB">جدیدترین کاربران</p>
        <button className="p-2 bg-MainColor rounded-lg text-black">بیشتر</button>
      </div>
      <div className="flex flex-col">
        {users.length === 0 ? (
          <div className="flex justify-center items-center h-full">
            <p className="text-gray-500">کاربری برای نمایش وجود ندارد</p>
          </div>
        ) : (
          users.slice(0, 5).map((user, index) => <UserCard key={index} data={user} />)
        )}
      </div>
    </div>
  );
}



export function UserCard({data}: {data:userType}) {
    return (
        <div className="flex gap-3 items-center   border-b border-b-gray-600 py-3  rounded-sm">
            <div className="w-10 h-10 rounded-full bg-gray-500 items-center justify-center flex"><User variant="Bold" size={20} color={"white"}/></div>
            <div className="flex flex-col">
                <p className="font-DB">{data.userName}</p>
                <p className="text-gray-500">
                  {
                    data.role === "ADMIN" ? "مدیر" : "کاربر"
                  }
                </p>
            </div>
        </div>
    )
}



export default PanelUsers;
