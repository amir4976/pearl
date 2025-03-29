import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  image:string,
  link:string,
  title:string,
  subtitle:string
};

function CollactionCard({ image, link, title, subtitle }: Props) {
  return (
    <Link href={link}>
      <div className="w-full flex flex-col gap-2  select-none h-[600px] max-md:h-fit ">
        <Image
          src={image}
          alt="collaction"
          width={300}
          height={200}
          className="w-full h-fit object-cover"
        />
        <div className="bg-PannelBg flex flex-col justify-center items-center gap-2 h-24">
          <p className="text-MainColor  font-Dorna">{title}</p>
          <p className=" text-xs"> {subtitle}</p>
        </div>
      </div>
    </Link>
  );
}

export default CollactionCard;
