"use client";
import { useEffect } from "react";
import { usePopUpStore } from "~/zustand";
export const Popup = () => {
  const { open, setOpen, data } = usePopUpStore();
  const type = data?.type === "error" ? "alert-error" : "alert-success";

  useEffect(() => {
    if (!open) return;
    const timer = setTimeout(() => {
      setOpen(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [setOpen, open]);
  if (!open) return null;

  return (
    <div className="absolute w-full mt-10  flex justify-center items-center">
      <div role="alert" className={`w-max    alert ${type}  text-white`}>
        {data.type === "error" ? (
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
        ) : (
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
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        )}
        <span>{data.message}</span>
      </div>
    </div>
  );
};
