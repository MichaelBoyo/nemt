"use client";
import type { BrokerOrder } from "~/types/trip.model";
import { AssignDriverButton } from "../actionButtons/AssignDriver";
import { brokersRolestoDisplay } from "~/constants/brokertrips.skilcols";
import { usePathname, useRouter } from "next/navigation";
import { GenerateInvoiceButton } from "../actionButtons/GenerateInvoiceButton";
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
      className="hover:bg-info  cursor-pointer w-full"
    >
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      {Object.entries(brokerOrder).map(([key, value]) => {
        if (!brokersRolestoDisplay.includes(key)) return;
        // if (key === "originAddress") {
        //   return (
        //     <td className="whitespace-nowrap" key={key}>
        //       <span className=" bg-green-50 text-success">
        //         {value || "..."}
        //       </span>
        //     </td>
        //   );
        // }
        // if (key === "destinationAddress") {
        //   return (
        //     <td className="whitespace-nowrap" key={key}>
        //       <span className=" bg-red-50 text-error">{value || "..."}</span>
        //     </td>
        //   );
        // }
        return (
          <td className="whitespace-nowrap" key={key}>
            {value || "..."}
          </td>
        );
      })}
      <td className="">
        {!brokerOrder.driverEmail ? (
          <AssignDriverButton batch={batch} brokerOrderId={brokerOrder.id} />
        ) : (
          <GenerateInvoiceButton batch={batch} brokerOrderId={brokerOrder.id} />
        )}
      </td>
    </tr>
  );
};
