import Image from 'next/image'
import { createElement } from 'react';
import Link from "next/link"
import { TripsIcon } from '~/icons-tsx/TripsIcon'
import { HomeIcon } from '~/icons-tsx/HomeIcon';
import { SettingsIcon } from '~/icons-tsx/SettingsIcon';
import { HIstoryIcon } from '~/icons-tsx/HIstoryIcon';
export const SideBar = () => {
    return <aside className="flex flex-col h-[90vh] justify-between">
      <div className="flex flex-col">
    {navs.map((nav, i) => (
        <Link className="btn btn-ghost justify-start " href={nav.href} key={i}>
          {createElement(nav.icon, {className: ""})}
          {nav.name}
      
      </Link>
    
    ))}
      </div>
        <button className="btn btn-primary btn-outline ">
            <Image src="/assets/icon/invite-person.svg" width="20" height="20" alt="Logo" />
            Invite Driver</button>
    </aside>
}

const navs = [
    {name: "Home", icon: HomeIcon, href: "/"},
    {name: "Trips", icon: TripsIcon, href: "/trips"},
    {name: "History", icon: HIstoryIcon, href: "/trips"},
    {name: "Settings", icon: SettingsIcon, href: "/settings"},
]