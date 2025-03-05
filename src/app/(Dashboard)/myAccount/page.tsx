import AccountLayout from "@/components/layout/AccountLayout";
import DushBouardBtn from "@/components/Modules/Account/DushbouadBtn/DushBouardBtn";
import { Heart, Location, Paperclip } from "iconsax-react";
import { LayoutDashboard, ListCheck, LogOutIcon, UserCircle } from "lucide-react";
import React from "react";

function page() {
  return (
    <div>
      <AccountLayout>
        <div className="p-7">
          <p>سلام {"user name "} (userName نیستید؟ خارج شوید)</p>
          <p className="mt-5">
            از طریق پیشخوان حساب کاربری‌تان، می‌توانید سفارش‌های اخیرتان را
            مشاهده، آدرس‌های حمل و نقل و صورتحساب‌تان را مدیریت و جزییات حساب
            کاربری و کلمه عبور خود را ویرایش کنید.
          </p>


          <div className="grid grid-cols-3 mt-10 gap-1">
            <div className="col-span-1"> <DushBouardBtn title="حساب کاربری من" icon={<LayoutDashboard size={50}/>} link="/myAccount" />  </div>
            <div className="col-span-1"> <DushBouardBtn title="سفارش ها" icon={<ListCheck size={50}/>} link="/myAccount" />  </div>
            <div className="col-span-1"> <DushBouardBtn title="ادرس" icon={<Location size={50}/>} link="/myAccount" />  </div>

            <div className="col-span-1"> <DushBouardBtn title="جزییات حساب" icon={<UserCircle size={50}/>} link="/myAccount" />  </div>
            <div className="col-span-1"> <DushBouardBtn title="علاقه مندی " icon={<Heart size={50}/>} link="/myAccount" />  </div>
            <div className="col-span-1"> <DushBouardBtn title="خروج" icon={<LogOutIcon size={50}/>} link="/myAccount" />  </div>



          </div>
        </div>

      </AccountLayout>
    </div>
  );
}

export default page;
