"use client";

import { useGenerateInvoice } from "~/zustand";

export const GenerateInvoiceButton = ({
  brokerOrderId,
  batch,
  driverEmail
}: {
  brokerOrderId: number;
  batch: number;
  driverEmail: string;
}) => {
  const {
    open,
    setOpen,
    setBrokerOrderId,
    setDriverEmail
  } = useGenerateInvoice((state) => state);
  console.log({ open });
  const handleClick = (e: any) => {
    e.stopPropagation();
    setOpen(!open);
    setBrokerOrderId(brokerOrderId);
    setDriverEmail(driverEmail);
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
