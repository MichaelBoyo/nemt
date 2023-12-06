"use client";
import { ReactNode } from "react";
import { useFormStatus } from "react-dom";
export const Submit = ({
  children,
  loading,
}: {
  children: ReactNode;
  loading?: boolean;
}) => {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending || loading}
      type="submit"
      className="btn btn-primary"
    >
      {pending || loading ? (
        <span className="loading loading-spinner loading-md"></span>
      ) : (
        children
      )}
    </button>
  );
};
