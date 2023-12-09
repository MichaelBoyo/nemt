"use client";
import Image from "next/image";
import { createElement } from "react";
import Link from "next/link";
import { TripsIcon } from "~/icons-tsx/TripsIcon";
import { HomeIcon } from "~/icons-tsx/HomeIcon";
import { SettingsIcon } from "~/icons-tsx/SettingsIcon";
import { HIstoryIcon } from "~/icons-tsx/HIstoryIcon";
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
                ? "bg-info border rounded-none"
                : ""
            } btn btn-ghost justify-start hover:bg-info  `}
            href={nav.href}
            key={i}
          >
            {createElement(
              "i",
              {
                style: {
                  fill: true,
                },
                fill: "red",
              },
              nav.icon
            )}
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
  { name: "Home", icon: <HomeIcon />, href: "/dash" },
  { name: "Trips", icon: <TripsIcon />, href: "/trips" },
  { name: "History", icon: <HIstoryIcon />, href: "/history" },
  { name: "Settings", icon: <SettingsIcon />, href: "/settings" },
  { name: "Drivers", icon: <SettingsIcon />, href: "/drivers" },
  { name: "Brokers", icon: <SettingsIcon />, href: "/brokers" },
];
