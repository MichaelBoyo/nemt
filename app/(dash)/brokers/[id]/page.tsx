import { Metadata } from "next";

const BrokerPage = ({ params }: { params: any }) => {
  return <div>BrokerPage {params?.id}</div>;
};

export default BrokerPage;

export const metadata: Metadata = {
  title: `Qwip | Broker  Page`,
  description: "Non Emergency Medical transport",
};
