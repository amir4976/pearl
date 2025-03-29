"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";


const breadcrumbLabels: Record<string, string> = {
  home: "خانه",
  aboutus: "درباره ما",
  somepage: "برگه‌ای",
  contact: "تماس با ما",
  Regeister: "ثبت نام",
  myAccount: "حساب کاربری من",
  Store: "فروشگاه",
  favorits:"علاقه مندی ها",
  PAdmin:'پنل ادمین'
};

const Breadcrumbs = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((segment) => segment);

  return (
    <>
      <div className="my-7 mx-3">
        <div className="text-5xl font-DBOLD ">
          {pathSegments.map((segment, index) => {
            return <p key={index}>{breadcrumbLabels[segment] || segment}</p>;
          })}
        </div>
        <nav aria-label="breadcrumb">
          <ul className="flex space-x-2 rtl:flex-row-reverse">
            <li>
              <Link href="/">خانه</Link>
            </li>
            {pathSegments.map((segment, index) => {
              const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
              return (
                <li key={path} className="before:content-['/'] before:mx-2">
                  <Link href={path}>
                    {breadcrumbLabels[segment] || segment}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Breadcrumbs;
