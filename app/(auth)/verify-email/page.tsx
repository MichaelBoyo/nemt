import { Metadata } from "next";
import VeriifyEmail from "~/components/VerifyEmail";

export default function Verify({ searchParams }: { searchParams: any }) {
  return <VeriifyEmail searchParams={searchParams} />;
}
export const metadata: Metadata = {
  title: "Qwip  | Verify Email",
  description: "Non Emergency Medical transport",
};
