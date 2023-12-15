"use client";
import { useGenerateInvoice } from "~/zustand";
import Modal from "../Modal";
import { useEffect } from "react";
import { useFormState } from "react-dom";
import { Submit } from "../Submit";
import { useSearchParams } from "next/navigation";
import { generateInvoice } from "~/lib/invoice/action";
export const GenerateInvoice = () => {
  const searchParams = useSearchParams();
  const {
    open,
    setOpen,
     brokerOrderId,
     driverEmail
  } = useGenerateInvoice();
  const [formState, formAction] = useFormState(generateInvoice, {
    message: "",
    data: {
      message: "",
    },
  });
  useEffect(() => {
    if (formState?.data?.message) {
      setOpen(false);
    }
  }, [formState, setOpen]);

  return (
    <Modal open={open} close={() => setOpen(false)}>
      <form action={formAction} className="flex flex-col gap-2 w-full ">
        <label className="font-semibold">Loaded Miles </label>
        <input hidden name="brokerOrderId" value={brokerOrderId} />
        <input hidden name="driverEmail" value={driverEmail} />
        <input
          hidden
          name="brokerId"
          value={Number(searchParams.get("id")) || 0}
        />
     
        <input
          className="input input-bordered"
          name="loadedMiles"
          placeholder={"0"}
          type="number"
        />
        <label className="font-semibold">UnLoaded Miles </label>
        <input
          className="input input-bordered"
          name="unLoadedMiles"
          placeholder={"0"}
          type="number"
        />
        <label className="font-semibold">Cost Override </label>
        <input
          className="input input-bordered"
          name="cost Override"
          placeholder={"0"}
          type="number"
        />

        {formState.message && (
          <div
            role="alert"
            className="alert p-2 w-max text-red-500 border-none bg-red-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{formState.message}</span>
          </div>
        )}
        <div className="bg-gray-50 rounded-lg  px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
          <Submit cName="inline-flex w-full justify-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary sm:ml-3 sm:w-auto">
            Submit
          </Submit>
          <button
            type="button"
            className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
            onClick={() => setOpen(false)}
          >
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
};
