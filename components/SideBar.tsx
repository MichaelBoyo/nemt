"use client";
import Image from "next/image";
import Link from "next/link";
import { RiHomeLine } from "react-icons/ri";
import { RiShieldUserLine } from "react-icons/ri";
import { IoMdStopwatch } from "react-icons/io";
import {
  MdOutlineWorkHistory,
  MdApartment,
  MdOutlineSettings,
} from "react-icons/md";
import { usePathname } from "next/navigation";
export const SideBar = () => {
  const pathName = usePathname();
  return (
    <aside className="flex bg-base-100 flex-col h-[90vh]  justify-between">
      <div className="flex flex-col">
        {navs.map((nav, i) => (
          <Link
            className={`${
              nav.href === pathName || pathName.includes(nav.href)
                ? "bg-info border rounded-none "
                : ""
            } btn btn-ghost justify-start hover:bg-info  `}
            href={nav.href}
            key={i}
          >
            <i
              className={`text-primary ${
                nav.href === pathName || pathName.includes(nav.href)
                  ? "border-l-4 border-primary  -ml-3 pl-2 "
                  : ""
              }`}
            >
              {nav.icon}
            </i>

            <p
              className={`${
                nav.href === pathName || pathName.includes(nav.href)
                  ? "text-primary font-semibold"
                  : "font-normal"
              }`}
            >
              {nav.name}
            </p>
          </Link>
        ))}
      </div>
      <button className="btn mx-4 btn-primary btn-outline rounded-full ">
        <Image
          src="/assets/icon/invite-person.svg"
          width="20"
          height="20"
          alt="Logo"
        />
        Invite Driver
      </button>
    </aside>
  );
};

const navs = [
  {
    name: "Home",
    icon: <RiHomeLine size={22} />,
    href: "/dash",
  },
  {
    name: "Trips",
    icon: <MdOutlineWorkHistory size={22} />,
    href: "/trips",
  },
  {
    name: "History",
    icon: <IoMdStopwatch size={22} />,
    href: "/history",
  },
  {
    name: "Settings",
    icon: <MdOutlineSettings size={22} />,
    href: "/settings",
  },
  {
    name: "Drivers",
    icon: <RiShieldUserLine size={22} />,
    href: "/drivers",
  },
  {
    name: "Brokers",
    icon: <MdApartment size={22} />,
    href: "/brokers",
  },
];
