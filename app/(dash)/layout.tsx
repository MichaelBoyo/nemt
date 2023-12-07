import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { NavBar } from "~/components/Navbar";
import { SideBar } from "~/components/SideBar";
import { Modals } from "~/components/modals";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Qwip | Dashboard",
  description: "Non Emergency Medical transport",
};

const App = async ({ children }: { children: React.ReactNode }) => {
  return (
    <html data-theme="nemt" lang="en">
      <body className={inter.className}>
        <NavBar />
        <main className="flex w-screen bg-info ">
          <Modals />
          <SideBar />
          {children}
        </main>
      </body>
    </html>
  );
};

export default App;
