import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import React from "react";
import IndexLayout from "@/components/layout/IndexLayout";
import Providers from "./StroeProvider";
import LoadingScreen from "@/components/Templates/LoadingScreen/LoadingScreen";

const Danablack = localFont({
  src: "../../public/fonts/DanaFaNum-Black.woff",
  variable: "--font-dana-black",
  weight: "100 900",
});
const Danabold = localFont({
  src: "../../public/fonts/DanaFaNum-Bold (1).woff",
  variable: "--font-dana-Bold",
  weight: "100 900",
});
const Danademi = localFont({
  src: "../../public/fonts/DanaFaNum-DemiBold.woff",
  variable: "--font-dana-demi",
  weight: "100 900",
});
const Danaextra = localFont({
  src: "../../public/fonts/DanaFaNum-ExtraBold.woff",
  variable: "--font-dana-extra-Bold",
  weight: "100 900",
});
const Danamed = localFont({
  src: "../../public/fonts/DanaFaNum-Medium.woff",
  variable: "--font-dana-med",
  weight: "100 900",
});
const Danareq = localFont({
  src: "../../public/fonts/DanaFaNum-Regular (1).woff",
  variable: "--font-dana-req",
  weight: "100 900",
});

const Dorna = localFont({
  src: "../../public/fonts/DORANFANUM-EXTRABOLD (1).woff",
  variable: "--font-dorna",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Pearl",
  description: "Wellcom to Pearl jewlery",
};



export const bizan = localFont({
  src: "../../public/fonts/NgeticModern-Regular.woff",
  variable: "--font-bizan",
  weight: "900",
})
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <body
          className={`
          ${Danablack.variable} 
          ${Danabold.variable} 
          ${Danademi.variable} 
          ${Danaextra.variable} 
          ${Danamed.variable} 
          ${Danareq.variable} 
          ${Dorna.variable}
          ${bizan.variable}
          antialiased`}
        >
          {/* <LoadingScreen/> */}
          <IndexLayout>
            {children}
            </IndexLayout>
        </body>
      </Providers>
    </html>
  );
}
