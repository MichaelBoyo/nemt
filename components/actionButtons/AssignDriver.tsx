"use client";

import { useAssignDriver } from "~/zustand";

export const AssignDriverButton = ({
  brokerOrderId,
}: {
  brokerOrderId: number;
}) => {
  const { open, setOpen } = useAssignDriver((state) => state);
  const handleClick = (e: any) => {
    e.stopPropagation();
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
