import Menu from "@/components/Modules/DushBouardManu/Menu";
import React from "react";
import { pAdminLinks } from "@/utils/constances";
import Breadcrumbs from "@/components/Modules/global/BradCramp/BradCramp";
function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Breadcrumbs />
      <div className="flex  mt-10 md:flex-row flex-col">
        <div className="md:w-1/5 w-full ">
          <Menu urls={pAdminLinks} />
        </div>
        <div className="flex-1">{children}</div>
      </div>
    </>
  );
}

export default layout;
