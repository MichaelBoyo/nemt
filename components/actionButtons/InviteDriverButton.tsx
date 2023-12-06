"use client";

import { useInviteDriverStore } from "~/zustand";
import { InviteDrriver } from "../forms/InviteDrriver";

export const InviteDriverButton = () => {
  const { open, setOpen } = useInviteDriverStore((state) => state);
  console.log({ open });
  const handleClick = () => {
    console.log("clicked");
  };
  return (
    <button onClick={handleClick} className="btn btn-primary">
      Invite Driver
      {open ? "opem" : "sjsjssj"}
    </button>
  );
};
