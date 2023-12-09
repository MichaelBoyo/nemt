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

export const useAssignDriver = create<ModalProp>((set) => ({
  open: false,
  setOpen: (open) => set({ open }),
}));
