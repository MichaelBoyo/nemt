"use client";
import { useLogoutStore } from "~/zustand";
import Modal from "../Modal";

import { Submit } from "../Submit";
import { useSearchParams } from "next/navigation";
import { signOut } from "next-auth/react";
export const Logout = () => {
  const { open, setOpen } = useLogoutStore();

  return (
    <Modal open={open} close={() => setOpen(false)}>
      <form
        onSubmit={() =>
          signOut({
            callbackUrl: "/sign-in",
            redirect: true,
          })
        }
        className="flex flex-col gap-2 w-full "
      >
        <label className="font-semibold">
          You&apos;re attempting to log out <br /> Are your sure?
        </label>

        <div className="bg-gray-50 rounded-lg  px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
          <Submit cName="inline-flex w-full justify-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary sm:ml-3 sm:w-auto">
            Yes
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
