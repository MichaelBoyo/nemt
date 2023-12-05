import { ReactNode } from "react";
export const Submit = ({ children }: { children: ReactNode }) => {
  return <button className="btn btn-primary">{children}</button>;
};
