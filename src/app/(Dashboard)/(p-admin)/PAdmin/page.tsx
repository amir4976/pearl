import PanelCards from "@/components/Modules/p-admin/PanelCards/PanelCards";
import PanelProducts from "@/components/Modules/p-admin/panelProducts/PanelProducts";
import PanelUsers from "@/components/Modules/p-admin/panelUsers/PanelUsers";
import getAllComments from "@/components/serverActions/getAllComments.action";
import getAllProducts from "@/components/serverActions/getAllProducts.action";
import getAllUsers from "@/components/serverActions/getAllUsers.action";
import { Bag2, Ticket, User } from "iconsax-react";
import { Users } from "lucide-react";
import React from "react";
import { authenthication } from "@/components/serverActions/authenthication.action";

async function page() {
  const allComments = await getAllComments();
  const allUsers = await getAllUsers();
  const allAdmins = allUsers.filter((user: any) => user.role === "ADMIN");
  const allProducts = await getAllProducts();
  authenthication();

  return (
    <div className="pr-5">
      <div className="w-full h-fit flex justify-between gap-3">
        <PanelCards
          title={"محصولات"}
          icon={<Bag2 color={"yellow"} />}
          value={allProducts.length}
        />
        <PanelCards
          title={"مدیران"}
          icon={<User color="red" />}
          value={allAdmins.length}
        />
        <PanelCards
          title={"کاربران"}
          icon={<Users color="blue" />}
          value={allUsers.length}
        />
        <PanelCards
          title={"کامنت ها"}
          icon={<Ticket color="green" />}
          value={allComments.length}
        />
      </div>
      <div className="grid grid-cols-3 mt-5 gap-3">
        <div className="col-span-1">
          <PanelUsers users={allUsers} />
        </div>
        <div className="col-span-2">
          <PanelProducts products={allProducts} />
        </div>
      </div>
    </div>
  );
}

export default page;
