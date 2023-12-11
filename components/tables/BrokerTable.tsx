import { BrokerRow } from "~/components/rows/BrokerRow";
import type { Broker } from "~/types/broker.type";
export const BrokersTable = ({ brokers }: { brokers: Broker[] }) => {
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
          {brokers.map((broker, index) => (
            <BrokerRow broker={broker} key={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const tableHeaders = ["Broker Name", "Date Created"];
