"use client";
import { Bag2, HambergerMenu, SearchNormal } from "iconsax-react";
import Image from "next/image";
import React, { useEffect } from "react";
import Link from "next/link";
import MenuDrawer from "../MenuDrawer/MenuDrawer";
import BasketDrawer from "../BasketDrawer/BasketDrawer";
import { useDispatch, useSelector } from "react-redux";

import { fetchUser } from "@/Redux/slices/UserAuth";
import { RootState } from "@/Redux/Store";

function Navbar() {
  const [scroll, setScroll] = React.useState(false);
  const [isShowBasketDrawer, setIsShowBasketDrawer] = React.useState(false);
  const [isShowMenuDrawer, setIsShowMenuDrawer] = React.useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.LoginSlice.user);
  const isUserLoggedIn = useSelector(
    (state: RootState) => state.LoginSlice.isLogin
  );

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      {scroll && (
        <div className="w-full bg-black opacity-70 fixed top-0 h-20 right-0 z-20 transition-all"></div>
      )}

      <div
        className={`w-full sticky top-0 transition-all flex justify-between items-center font-DR text-sm z-50 max-md:px-5 ${
          scroll ? "h-20" : "h-24"
        }`}
      >
        {/* Mobile Menu Button */}
        <button
          className="flex md:hidden"
          onClick={() => setIsShowMenuDrawer(true)}
        >
          <HambergerMenu size="25" color="#F3D098" />
        </button>

        {/* Navigation Links (Hidden on Mobile) */}
        <ul className="gap-4 hidden md:flex">
          <li><Link href={'/'}>صفحه اصلی</Link></li>
          <li><Link href={'/Store'}>فروشگاه</Link></li>
          <li>تماس با ما</li>
          <li>درباره ما</li>
        </ul>

        {/* LOGO (Centered) */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex justify-center items-center h-16">
          <Image src="/image/Group.png" alt="logo" width={60} height={60} />
        </div>

        {/* Buttons (Hidden on Mobile) */}
        <div className="hidden md:flex gap-4">
          <button>
            <SearchNormal size="25" color="#F3D098" />
          </button>
          <button onClick={() => setIsShowBasketDrawer(true)}>
            <Bag2 size="25" color="#F3D098" />
          </button>
          {!isUserLoggedIn ? (
            <Link
              href="/Regeister"
              className="px-3 py-2 border border-MainColor text-MainColor rounded-sm"
            >
              ورود / ثبت نام
            </Link>
          ) : (
            <Link
              href={
                user?.role == "ADMIN"
                  ? "PAdmin"
                  :  "myAccount"
              }
              className="px-3 py-2 border border-MainColor text-MainColor rounded-sm"
            >
              {user?.userName} خوش امدید
            </Link>
          )}
        </div>

        {/* Basket Button (Only on Mobile) */}
        <button
          className="md:hidden"
          onClick={() => setIsShowBasketDrawer(true)}
        >
          <Bag2 size="25" color="#F3D098" />
        </button>
      </div>

      {/* Basket Drawer */}
      {isShowBasketDrawer && (
        <BasketDrawer setIsShowBasketDrawer={setIsShowBasketDrawer} />
      )}

      {/* Mobile Menu Drawer */}
      {isShowMenuDrawer && (
        <MenuDrawer setIsShowMenuDrawer={setIsShowMenuDrawer} />
      )}
    </>
  );
}

export default Navbar;
