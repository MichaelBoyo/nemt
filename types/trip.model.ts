export type Trip = {
  batchNumber: number;
  dateTimeCreated: string;
  brokerOrders: BrokerOrder[];
};

export type BrokerOrder = {
  id: number;
  bookingId: string;
  costOverride: boolean;
  brokerName: string;
  providerName: string;
  clientName: string;
  expectedDateTimePickup: string;
  dateTimePickUp: string | null;
  clientPhonePickUp: string;
  pickUpComment: string;
  requestedDateTimeDropOff: string;
  originSite: string;
  originAddress: string;
  destinationSite: string;
  destinationAddress: string;
  directDistance: string;
  passengerType: string;
  spaceType: string;
  bookingPurpose: string;
  assignStatus: string;
  driverName: null | string;
  driverEmail: null | string;
  dateTimeOrderAssigned: null | string;
  dateTimeCreated: string | string;
  dateTimeDropOff: null | string;
};
