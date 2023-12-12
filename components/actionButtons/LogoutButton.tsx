"use client";

import { LogOut } from "react-feather";
import { useLogoutStore } from "~/zustand";

export const LogoutButton = () => {
  const { open, setOpen } = useLogoutStore((state) => state);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <button onClick={handleClick} className="btn btn-error ">
      <LogOut /> Logout
    </button>
  );
};
