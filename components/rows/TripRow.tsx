import { Plus, PlusCircle } from "react-feather";
import type { Trip } from "~/types/trip.model";
import { AssignDriverButton } from "../actionButtons/AssignDriver";
export const TripRow = async ({ trip }: { trip: Trip }) => {
  return (
    <tr className="hover:bg-info cursor-pointer">
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>{trip.companyName}</td>
      <td>{trip.driverName}</td>
      <td>{trip.email}</td>
      <td>{trip.phone}</td>
      <td>{trip.departure}</td>
      <td>{trip.destination}</td>
      <th>
        <AssignDriverButton />
      </th>
    </tr>
  );
};
