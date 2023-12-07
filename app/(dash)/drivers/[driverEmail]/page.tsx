import { Metadata } from "next";
const DriverPage = ({ params }: { params: any }) => {
  return <div>DriverPage {params?.driverEmail}</div>;
};

export default DriverPage;

export const metadata: Metadata = {
  title: `Qwip | Driver  Page`,
  description: "Non Emergency Medical transport",
};
