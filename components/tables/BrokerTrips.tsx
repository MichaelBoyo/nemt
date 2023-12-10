import type { BrokerOrder } from "~/types/trip.model";
import { BrokerOrderRow } from "../rows/BrokerOrderRow";
import { brokersRolestoDisplay } from "~/constants/brokertrips.skilcols";
import { camelToSentence } from "~/lib/sentence";
export const BrokersTrips = ({
  batch,
  brokerOrders,
}: {
  batch: number;
  brokerOrders: BrokerOrder[];
}) => {
  return (
    <div className="overflow-x-auto w-max max-w-[90vw] bg-base-100 rounded-lg shadow-lg custom-scroll-bar">
      <h1 className="p-2 text-primary font-semibold"> Batch {batch}</h1>
      <table className="table">
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>

            {Object.entries(brokerOrders[0]).map(([key, value]) => {
              if (!brokersRolestoDisplay.includes(key)) return;
              return <th key={key}>{camelToSentence(key)}</th>;
            })}

            <th></th>
          </tr>
        </thead>
        <tbody>
          {brokerOrders.map((brokerOrder, index) => (
            <BrokerOrderRow
              batch={batch}
              brokerOrder={brokerOrder}
              key={index}
            />
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
