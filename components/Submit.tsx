"use client";
import { ReactNode } from "react";
import { useFormStatus } from "react-dom";
export const Submit = ({
  children,
  loading,
  cName,
}: {
  children: ReactNode;
  loading?: boolean;
  cName?: string;
}) => {
  const { pending } = useFormStatus();
  const className = cName || "btn btn-primary";
  return (
    <button disabled={pending || loading} type="submit" className={className}>
      {pending || loading ? (
        <span className="loading loading-spinner loading-md"></span>
      ) : (
        children
      )}
    </button>
  );
};
