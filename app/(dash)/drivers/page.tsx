import { getServerAuthSession } from "~/lib/authoptions";
import { baseUrl } from "~/lib";
import { redirect } from "next/navigation";
import { DriversTable } from "~/components/tables/DriverTable";
import Pagination from "~/components/Pagination";
import { Metadata } from "next";
import { InviteDriverButton } from "~/components/actionButtons/InviteDriverButton";
export default async function Drivers({ searchParams }: { searchParams: any }) {
  const session = await getServerAuthSession();
  const res = await fetch(
    `${baseUrl}/profile/providers/drivers?email=${session?.user.email}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + session?.user.access_token,
      },
    }
  );
  if (!res.ok) {
    return redirect("/sign-in");
  }
  const data = await res.json();
  console.log({ data });
  return (
    <div className="flex flex-col rounded-lg  grow m-5 p-5  gap-4 ">
      <div className="stats shadow w-max ">
        <div className="stat">
          <div className="stat-title">Total Drivers</div>
          <div className="stat-value">{data?.length}</div>
          <div className="stat-desc">21% more than last month</div>
          <InviteDriverButton />
        </div>
      </div>

      <DriversTable drivers={data} />
      <Pagination
        searchParams={searchParams}
        totalPages={data?.totalPages || 1}
      />
    </div>
  );
}

export const metadata: Metadata = {
  title: "Qwip  | Drivers",
  description: "Non Emergency Medical transport",
};
