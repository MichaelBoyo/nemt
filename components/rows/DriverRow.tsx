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
            <p className="font-bold capitalize">
              {driver.firstName || driver.driverEmail.split("@")[0]}
            </p>
          </div>
        </div>
      </td>

      <td>{driver.driverEmail}</td>
      <td>{"...................."}</td>
    </tr>
  );
};
