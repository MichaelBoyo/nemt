"use client";
import { useEffect } from "react";
import { useInviteDriverStore, usePopUpStore } from "~/zustand";
import Modal from "../Modal";
import { Submit } from "../Submit";
import { useFormState } from "react-dom";
import { inviteDriver } from "~/lib/drivers/action";
export const InviteDriver = () => {
  const { open, setOpen } = useInviteDriverStore();
  const { setOpen: setPopUpOpen, setData } = usePopUpStore();
  const [formState, formAction] = useFormState(inviteDriver, {
    data: undefined,
    message: undefined,
    success: false,
  });

  useEffect(() => {
    console.log({ formState });
    if (formState?.success) {
      setOpen(false);
      setPopUpOpen(true);
      setData({
        type: "success",
        message: formState.message,
      });
    }
  }, [formState]);

  return (
    <Modal open={open} close={() => setOpen(false)}>
      <form action={formAction} className="flex flex-col gap-2 w-full ">
        <label className="font-semibold">Driver Email</label>
        <input
          className="input input-bordered"
          placeholder="johndoe@gmil.com"
          name="driverEmail"
          type="email"
          required
        />
        {formState.message && !formState.success && (
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
