import { pUserLink } from "@/utils/constances";
import Menu from "../Modules/DushBouardManu/Menu";
import Breadcrumbs from "../Modules/global/BradCramp/BradCramp";

function AccountLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Breadcrumbs />
      <div className="flex  mt-10 md:flex-row flex-col">
        <div className="md:w-1/5 w-full ">
          <Menu urls={pUserLink} />
        </div>
        <div className="flex-1">{children}</div>
      </div>
    </>
  );
}

export default AccountLayout;
