import { Metadata } from "next";
import { UploadDoc } from "~/components/UploadDoc";
import { BrokersTrips } from "~/components/tables/BrokerTrips";
import { Trip } from "~/types/trip.model";
import { BreadCrumbs } from "~/components/BreadCrumbs";
import { baseUrl } from "~/lib";
import { getServerAuthSession } from "~/lib/authoptions";

// const trips: Trip[] = [
//   {
//     companyName: "Timesage company",
//     phone: "+110203039394",
//     departure: "Johnson Estate, Adams Hospital, Califonia",
//     destination: "24B, St. Paul Street, Wilson park, Califonia",
//     email: "jiohbdbdb",
//     driverName: "Oluwatomisin Ligali",
//   },
//   {
//     companyName: "Timesage company",
//     phone: "+110203039394",
//     departure: "Johnson Estate, Adams Hospital, Califonia",
//     destination: "24B, St. Paul Street, Wilson park, Califonia",
//     email: "jiohbdbdb",
//     driverName: "Oluwatomisin Ligali",
//   },
// ];
const BrokerPage = async ({ params }: { params: any }) => {
  const session = await getServerAuthSession();
  const links = [
    { path: "/brokers", name: "Brokers" },
    { path: "", name: params?.brokerName },
  ];
  const res = await fetch(
    `${baseUrl}/brokers/profile/orders?provider-email=${session?.user?.email}&broker-name=${params.brokerName}`,
    {
      headers: {
        Authorization: "Bearer " + session?.user?.access_token,
      },
    }
  );

  const data = await res.json();

  return (
    <div className="flex flex-col  grow items-center  px-5 py-2  gap-4">
      <div className="w-full">
        <BreadCrumbs links={links} />
      </div>
      <UploadDoc broker={params?.brokerName} />
      <div className="overflow-scroll max-h-[75vh]    flex flex-col gap-10 custom-scroll-bar pr-4">
        {data &&
          // @ts-ignore
          data?.map((item, index) => (
            <BrokersTrips
              batch={item.batchNumber}
              key={index}
              index={index}
              brokerOrders={item?.brokerOrders}
            />
          ))}
      </div>
    </div>
  );
};

export default BrokerPage;

export const metadata: Metadata = {
  title: `Qwip | Broker  Page`,
  description: "Non Emergency Medical transport",
};
