import type { Trip } from "~/types/trip.model";
import { TripRow } from "../rows/TripRow";
export const BrokersTrips = ({ trips }: { trips: Trip[] }) => {
  return (
    <div className="overflow-x-auto w-max bg-base-100 rounded-lg shadow-lg">
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
          {trips.map((trip, index) => (
            <TripRow trip={trip} key={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const tableHeaders = [
  "Company Name",
  "Driver Name",
  "Email",
  "Phone Number",
  "Departure",
  "Destination",
];
