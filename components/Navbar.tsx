import Image from "next/image";
import { User } from "react-feather";
import { SearchIcon } from "~/icons-tsx/SearchIcon";
import { getServerAuthSession } from "~/lib/authoptions";
export const NavBar = async () => {
  const session = await getServerAuthSession();
  return (
    <nav className="navbar bg-base-100 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          <Image src="/logo.svg" width="100" height="100" alt="Logo" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <div className=" min-w-[500px] px-4 py-3 bg-slate-50 rounded-[40px] justify-start items-center gap-2 inline-flex">
          <SearchIcon />
          <input
            className="focus:outline-none bg-inherit w-full "
            placeholder="Search driver, and trips"
          />
        </div>
      </div>
      <div className="navbar-end">
        <div className="border rounded-full p-2">
          <User />
        </div>
      </div>
    </nav>
  );
};
