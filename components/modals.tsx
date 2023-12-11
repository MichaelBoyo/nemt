import { InviteDriver } from "./forms/InviteDrriver";
import { AddBroker } from "./forms/AddBroker";
import { AssignDriver } from "./forms/AssignDriver";
import { getDrivers } from "~/lib/drivers/loader";
import { GenerateInvoice } from "./forms/GenerateInvoice";

export const Modals = async () => {
  const drivers = await getDrivers();
  console.log({ drivers });
  return (
    <>
      <InviteDriver />
      <AddBroker />
      <AssignDriver drivers={drivers} />
      <GenerateInvoice />
    </>
  );
};
