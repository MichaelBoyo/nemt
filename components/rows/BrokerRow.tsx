"use client";
import type { Broker } from "~/types/broker.type";
import { User } from "react-feather";
import { useRouter } from "next/navigation";
export const BrokerRow = async ({ broker }: { broker: Broker }) => {
  const router = useRouter();
  return (
    <tr
      onClick={() =>
        router.push(`/brokers/${broker.brokerName}?id=${broker.id}`)
      }
      className="hover:bg-info cursor-pointer"
    >
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>{broker.brokerName}</td>
      <td>{new Date(broker.dateTimeCreated).toDateString()}</td>
    </tr>
  );
};
