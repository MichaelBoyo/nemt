"use client";

import { useAssignDriver } from "~/zustand";

export const GenerateInvoiceButton = ({
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
      className="btn btn-success whitespace-nowrap w-full text-white flex  btn-xs "
    >
      Generate Invoice
    </button>
  );
};
