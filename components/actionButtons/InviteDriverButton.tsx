"use client";

import { useInviteDriverStore } from "~/zustand";

export const InviteDriverButton = () => {
  const { open, setOpen } = useInviteDriverStore((state) => state);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <button onClick={handleClick} className="btn btn-primary m-2">
      Invite Driver
    </button>
  );
};
