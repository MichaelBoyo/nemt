"use client";

import { PlusCircle } from "react-feather";
import { useAssignDriver } from "~/zustand";

export const AssignDriverButton = () => {
  const { open, setOpen } = useAssignDriver((state) => state);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <button
      onClick={handleClick}
      className="btn whitespace-nowrap w-full text-white flex btn-primary btn-xs "
    >
      Assign Driver
    </button>
  );
};
