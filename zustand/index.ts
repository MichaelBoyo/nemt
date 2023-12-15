import { create } from "zustand";

interface ModalProp {
  open: boolean;
  setOpen: (open: boolean) => void;
}
export const useInviteDriverStore = create<ModalProp>((set) => ({
  open: false,
  setOpen: (open) => set({ open }),
}));

export const useInviteBrokerStore = create<ModalProp>((set) => ({
  open: false,
  setOpen: (open) => set({ open }),
}));

interface AssignDrriverModalProps extends ModalProp {
  brokerOrderId: number;
  batch: number;
  setBrokerOrderId: (brokerOrderId: number) => void;
  setBatch: (batch: number) => void;
}

export const useAssignDriver = create<AssignDrriverModalProps>((set) => ({
  open: false,
  brokerOrderId: 0,
  batch: 0,
  setOpen: (open) => set({ open }),
  setBrokerOrderId: (brokerOrderId) => set({ brokerOrderId }),
  setBatch: (batch) => set({ batch }),
}));

interface GenerateInvoiceProps extends ModalProp {
  brokerOrderId: number;
  driverEmail: string;
  brokerId: number;
  setBrokerOrderId: (brokerOrderId: number) => void;
  setBrokerId: (brokerId: number) => void;
  setDriverEmail: (driverEmail: string) => void;
}

export const useGenerateInvoice = create<GenerateInvoiceProps>((set) => ({
  open: false,
  setOpen: (open) => set({ open }),
  brokerOrderId: 0,
  brokerId: 0,
  setBrokerId: (brokerId) => set({ brokerId }),
  setBrokerOrderId: (brokerOrderId) => set({ brokerOrderId }),
  driverEmail: "",
  setDriverEmail: (driverEmail) => set({ driverEmail }),
}));

interface PopUpProps extends ModalProp {
  data: {
    message: string;
    type: "success" | "error" | "warning" | "info";
  };
  setData: (data: PopUpProps["data"]) => void;
}

export const usePopUpStore = create<PopUpProps>((set) => ({
  open: false,
  setOpen: (open) => set({ open }),
  data: {
    message: "An error occured",
    type: "error",
  },
  setData: (data) => set({ data }),
}));

export const useLogoutStore = create<ModalProp>((set) => ({
  open: false,
  setOpen: (open) => set({ open }),
}));
