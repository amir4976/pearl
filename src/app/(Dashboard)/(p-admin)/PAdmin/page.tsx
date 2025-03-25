import PanelCards from "@/components/Modules/p-admin/PanelCards/PanelCards";
import PanelProducts from "@/components/Modules/p-admin/panelProducts/PanelProducts";
import PanelUsers from "@/components/Modules/p-admin/panelUsers/PanelUsers";
import { Bag2 } from "iconsax-react";
import React from "react";

function page() {
  return (
    <div className="pr-5">
      <div className="w-full h-fit flex justify-between gap-3">
        <PanelCards
          title={"محصولات"}
          icon={<Bag2 />}
          value={2}
        />
        <PanelCards
          title={"محصولات"}
          icon={<Bag2 />}
          value={2}
        />
        <PanelCards
          title={"محصولات"}
          icon={<Bag2 />}
          value={2}
        />
        <PanelCards
          title={"محصولات"}
          icon={<Bag2 />}
          value={2}
        />
      </div>
      <div className="grid grid-cols-3 mt-5 gap-3">
        <div className="col-span-1">
          <PanelUsers />
        </div>
        <div className="col-span-2">
          <PanelProducts />
        </div>
      </div>
    </div>
  );
}

export default page;
