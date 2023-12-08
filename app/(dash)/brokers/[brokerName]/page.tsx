import { Metadata } from "next";
import { UploadDoc } from "~/components/UploadDoc";
import { BrokersTrips } from "~/components/tables/BrokerTrips";
import { Trip } from "~/types/trip.model";

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
  return (
    <div className="flex flex-col   grow m-5 p-5  gap-4">
      BrokerPage {params?.brokerName}
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
