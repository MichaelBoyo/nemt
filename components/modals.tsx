"use client";
import React from "react";
import { InviteDriver } from "./forms/InviteDrriver";
import { AddBroker } from "./forms/AddBroker";
import { AssignDriver } from "./forms/AssignDriver";

export const Modals = () => {
  return (
    <>
      <InviteDriver />
      <AddBroker />
      <AssignDriver />
    </>
  );
};
