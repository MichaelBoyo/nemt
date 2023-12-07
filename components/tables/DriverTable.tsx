import { DriverRow } from "~/components/rows/DriverRow";
import type { Driver } from "~/types/driver.type";
export const DriversTable = ({ drivers }: { drivers: Driver[] }) => {
  return (
    <div className="overflow-x-auto w-max">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            {tableHeaders.map((header) => (
              <th key={header}>{header}</th>
            ))}

            <th></th>
          </tr>
        </thead>
        <tbody>
          {drivers.map((driver, index) => (
            <DriverRow driver={driver} key={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const tableHeaders = ["First Name", "Last Name", "Email", "Phone Number"];
