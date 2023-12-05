import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { TopBar } from "~/components/TopBar";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Qwip",
  description: "Non Emergency Medical transport",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html data-theme="nemt" lang="en">
      <body className={`${inter.className} h-screen`}>
        <TopBar />
        <div className="flex justify-between grow max-h-[92vh] ">
          <div className="bg-info w-1/2">
            <Image
              src="/assets/image/ContentImage.svg"
              alt="image"
              height="0"
              width="0"
              className="h-full w-full"
            />
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
