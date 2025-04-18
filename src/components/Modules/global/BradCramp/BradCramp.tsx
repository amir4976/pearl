"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const breadcrumbLabels: Record<string, string> = {
  home: "خانه",
  Aboutus: "درباره ما",
  somepage: "برگه‌ای",
  contact: "تماس با ما",
  Regeister: "ثبت نام",
  myAccount: "حساب کاربری من",
  Store: "فروشگاه",
  favorits: "علاقه مندی ها",
  PAdmin: "پنل ادمین",
  Products: "محصولات",
  Comments: "کامنت ها",
  
};

const Breadcrumbs = () => {
  const pathname = usePathname();
  const pathSegments = pathname
    .split("/") // مسیر را به بخش‌های جداگانه تبدیل می‌کند
    .filter((segment) => segment) // بخش‌های خالی را فیلتر می‌کند
    .map((segment) => decodeURIComponent(segment.replace(/%20/g, " "))); // تبدیل درصد‌ها به فاصله و سایر کاراکترهای خاص
  return (
    <>
      <div className="my-7 mx-3">
        <div className="text-5xl font-DBOLD ">
          {breadcrumbLabels[pathSegments[pathSegments.length - 1]] ||
            pathSegments[pathSegments.length - 1] ||
            "خانه"}
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
