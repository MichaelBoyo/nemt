"use client";

import { PlusCircle } from "react-feather";
import { useAssignDriver } from "~/zustand";

export const AssignDriverButton = () => {
  const { open, setOpen } = useAssignDriver((state) => state);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <button onClick={handleClick} className="btn text-white btn-primary btn-xs">
      <PlusCircle size={17} /> Assign Driver
    </button>
  );
};
