import { ReactNode } from "react";
export const Submit = ({ children }: { children: ReactNode }) => {
  return (
    <button type="submit" className="btn btn-primary">
      {children}
    </button>
  );
};
