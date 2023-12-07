import { create } from "zustand";

interface BearState {
  bears: number;
  increase: (by: number) => void;
}

export const useBearStore = create<BearState>()((set) => ({
  bears: 0,
  increase: (by) => set((state) => ({ bears: state.bears + by })),
}));

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
