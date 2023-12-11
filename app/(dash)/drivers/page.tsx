import { DriversTable } from "~/components/tables/DriverTable";
import Pagination from "~/components/Pagination";
import { Metadata } from "next";
import { InviteDriverButton } from "~/components/actionButtons/InviteDriverButton";
import { getDrivers } from "~/lib/drivers/loader";
export default async function Drivers({ searchParams }: { searchParams: any }) {
  const data = await getDrivers();
  return (
    <div className="flex  rounded-lg  grow m-5 p-5  gap-4 ">
      <div className="stats h-max shadow w-max ">
        <div className="stat">
          <div className="stat-title">Total Drivers</div>
          <div className="stat-value">{data?.length}</div>
          <div className="stat-desc">21% more than last month</div>
          <InviteDriverButton />
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <DriversTable drivers={data} />
        <Pagination
          searchParams={searchParams}
          totalPages={data?.totalPages || 1}
        />
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Qwip  | Drivers",
  description: "Non Emergency Medical transport",
};
