"use client";
import type { Broker } from "~/types/broker.type";
import { User } from "react-feather";
import { useRouter } from "next/navigation";
export const BrokerRow = async ({ broker }: { broker: Broker }) => {
  const router = useRouter();
  return (
    <tr
      onClick={() => router.push(`/brokers/${broker.brokerName}`)}
      className="hover:bg-info cursor-pointer"
    >
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="rounded-full border p-2">
            <User />
          </div>
          <div>
            <div className="font-bold">Hart Hagerty</div>
            <div className="text-sm opacity-50">United States</div>
          </div>
        </div>
      </td>
      <td>
        Zemlak, Daniel and Leannon
        <br />
        <span className="badge badge-ghost badge-sm">
          Desktop Support Technician
        </span>
      </td>
      <td>{broker.brokerName}</td>
      <th>
        <button className="btn btn-ghost btn-xs">details</button>
      </th>
    </tr>
  );
};
