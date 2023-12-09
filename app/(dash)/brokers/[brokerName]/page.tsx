import { Metadata } from "next";
import { UploadDoc } from "~/components/UploadDoc";
import { BrokersTrips } from "~/components/tables/BrokerTrips";
import { Trip } from "~/types/trip.model";
import { BreadCrumbs } from "~/components/BreadCrumbs";

const trips: Trip[] = [
  {
    companyName: "Timesage company",
    phone: "+110203039394",
    departure: "Johnson Estate, Adams Hospital, Califonia",
    destination: "24B, St. Paul Street, Wilson park, Califonia",
    email: "jiohbdbdb",
    driverName: "Oluwatomisin Ligali",
  },
  {
    companyName: "Timesage company",
    phone: "+110203039394",
    departure: "Johnson Estate, Adams Hospital, Califonia",
    destination: "24B, St. Paul Street, Wilson park, Califonia",
    email: "jiohbdbdb",
    driverName: "Oluwatomisin Ligali",
  },
];
const BrokerPage = ({ params }: { params: any }) => {
  const links = [
    { path: "/brokers", name: "Brokers" },
    { path: "", name: params?.brokerName },
  ];
  return (
    <div className="flex flex-col   grow  px-5 py-2  gap-4">
      <BreadCrumbs links={links} />
      <UploadDoc />
      <BrokersTrips trips={trips} />
    </div>
  );
};

export default BrokerPage;

export const metadata: Metadata = {
  title: `Qwip | Broker  Page`,
  description: "Non Emergency Medical transport",
};
