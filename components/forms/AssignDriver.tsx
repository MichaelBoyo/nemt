"use client";
import { useAssignDriver } from "~/zustand";
import Modal from "../Modal";
import { useEffect } from "react";
import { useFormState } from "react-dom";
import { Submit } from "../Submit";
import { Driver } from "~/types/driver.type";
import { assignTripToDriver } from "~/lib/drivers/action";
import { useSearchParams } from "next/navigation";
export const AssignDriver = ({ drivers }: { drivers: Driver[] }) => {
  const searchParams = useSearchParams();
  const { open, setOpen } = useAssignDriver();
  const [formState, formAction] = useFormState(assignTripToDriver, {
    data: undefined,
    message: undefined,
  });
  useEffect(() => {
    console.log({ formState });
  }, [formState]);

  return (
    <Modal open={open} close={() => setOpen(false)}>
      <form action={formAction} className="flex flex-col gap-2 w-full ">
        <label className="font-semibold">Select Driver </label>

        <select
          name="driverEmail"
          className="select select-bordered w-full max-w-xs"
        >
          {drivers?.map((driver) => (
            <option key={driver.driverEmail} value={driver.driverEmail}>
              {driver.driverEmail}
            </option>
          ))}
        </select>
        {formState.message && (
          <p className="text-center  flex items-center  gap-2 rounded-lg text-white bg-error">
            {formState.message}
          </p>
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
