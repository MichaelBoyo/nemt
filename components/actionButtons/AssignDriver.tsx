"use client";

import { useAssignDriver } from "~/zustand";

export const AssignDriverButton = ({
  brokerOrderId,
  batch,
}: {
  brokerOrderId: number;
  batch: number;
}) => {
  const { open, setOpen, setBrokerOrderId, setBatch } = useAssignDriver(
    (state) => state
  );
  const handleClick = (e: any) => {
    e.stopPropagation();
    setOpen(!open);
    setBrokerOrderId(brokerOrderId);
    setBatch(batch);
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
