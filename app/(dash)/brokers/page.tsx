import { getServerAuthSession } from "~/lib/authoptions";
import { baseUrl } from "~/lib";
import { redirect } from "next/navigation";
import { Pagination } from "~/components/Pagination";
import { BrokersTable } from "~/components/tables/BrokerTable";
import { AddBrokerButton } from "~/components/actionButtons/AddBrokerButton";
import { Metadata } from "next";
export default async function Brokers({ searchParams }: { searchParams: any }) {
  const session = await getServerAuthSession();
  const page = searchParams?.page || 0;
  const size = searchParams?.size || 10;
  const res = await fetch(`${baseUrl}/brokers/all?page=${page}&size=${size}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + session?.user.access_token,
    },
  });
  if (!res.ok) {
    return redirect("/sign-in");
  }
  const data = await res.json();
  return (
    <div className="flex flex-col rounded-lg  grow m-5 p-5  gap-4 ">
      <div className="flex items-center gap-10">
        <div className="stats shadow w-max ">
          <div className="stat ">
            <div className="stat-title">Total Brokers</div>
            <div className="stat-value">{data?.length}</div>
            <div className="stat-desc">21% more than last month</div>
            <AddBrokerButton />
          </div>
        </div>
      </div>

      <BrokersTable brokers={data} />
      <Pagination />
    </div>
  );
}

export const metadata: Metadata = {
  title: "Qwip  | Brokers",
  description: "Non Emergency Medical transport",
};
