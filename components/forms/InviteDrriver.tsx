"use client";
import { useInviteDriverStore } from "~/zustand";
import Modal from "../Modal";

export const InviteDrriver = () => {
  const { open, setOpen } = useInviteDriverStore();

  return (
    <Modal open={open} close={() => setOpen(false)}>
      <p>Invite Driver</p>
    </Modal>
  );
};
