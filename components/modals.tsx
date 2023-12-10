import { InviteDriver } from "./forms/InviteDrriver";
import { AddBroker } from "./forms/AddBroker";
import { AssignDriver } from "./forms/AssignDriver";
import { getDrivers } from "~/lib/drivers/loader";

export const Modals = async () => {
  const drivers = await getDrivers();
  return (
    <>
      <InviteDriver />
      <AddBroker />
      <AssignDriver drivers={drivers} />
    </>
  );
};
