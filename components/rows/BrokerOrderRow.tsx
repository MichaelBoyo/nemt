"use client";
import type { BrokerOrder } from "~/types/trip.model";
import { AssignDriverButton } from "../actionButtons/AssignDriver";
import { brokersRolestoDisplay } from "~/constants/brokertrips.skilcols";
import { usePathname, useRouter } from "next/navigation";
export const BrokerOrderRow = async ({
  brokerOrder,
  batch,
}: {
  brokerOrder: BrokerOrder;
  batch: number;
}) => {
  const router = useRouter();
  const pathName = usePathname();
  return (
    <tr
      onClick={() => router.push(`${pathName}/${brokerOrder.id}`)}
      className="hover:bg-info  cursor-pointer "
    >
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      {Object.entries(brokerOrder).map(([key, value]) => {
        if (!brokersRolestoDisplay.includes(key)) return;
        return (
          <td className="whitespace-nowrap" key={key}>
            {value}
          </td>
        );
      })}
      {!brokerOrder.driverEmail && (
        <th className="">
          <AssignDriverButton batch={batch} brokerOrderId={brokerOrder.id} />
        </th>
      )}
    </tr>
  );
};
