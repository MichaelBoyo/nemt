import { create } from "zustand";

interface BearState {
  bears: number;
  increase: (by: number) => void;
}

export const useBearStore = create<BearState>()((set) => ({
  bears: 0,
  increase: (by) => set((state) => ({ bears: state.bears + by })),
}));

interface InviteDriver {
  open: boolean;
  setOpen: (open: boolean) => void;
}
export const useInviteDriverStore = create<InviteDriver>((set) => ({
  open: true,
  setOpen: (open) => set({ open }),
}));
