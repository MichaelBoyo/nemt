"use client";

import { useInviteBrokerStore } from "~/zustand";

export const AddBrokerButton = () => {
  const { open, setOpen } = useInviteBrokerStore((state) => state);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <button onClick={handleClick} className="btn btn-primary m-2">
      Add broker
    </button>
  );
};
