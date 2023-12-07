"use client";
import type { Driver } from "~/types/driver.type";
import { User } from "react-feather";
import { useRouter } from "next/navigation";
export const DriverRow = async ({ driver }: { driver: Driver }) => {
  const router = useRouter();
  return (
    <tr
      onClick={() => router.push(`/drivers/${driver.driverEmail}`)}
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
      <td>{driver.driverEmail}</td>
      <th>
        <button className="btn btn-ghost btn-xs">details</button>
      </th>
    </tr>
  );
};
