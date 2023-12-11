import { DriverRow } from "~/components/rows/DriverRow";
import type { Driver } from "~/types/driver.type";
export const DriversTable = ({ drivers }: { drivers: Driver[] }) => {
  return (
    <div className="overflow-x-auto max-h-[78vh] overflow-auto custom-scroll-bar w-max bg-base-100 rounded-lg shadow-lg">
      <table className="table">
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

const tableHeaders = ["Name", "Email", "Phone Number", "Available"];
