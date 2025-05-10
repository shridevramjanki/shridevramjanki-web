"use client";

import { ReactNode } from "react";
import { DonationProvider } from "@/context/DonationContext";
import CombinedDonationBar from "./combined-donation-bar";
import CombinedDonationDialog from "./combined-donation-dialog";

export default function DonationProviderWrapper({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <DonationProvider>
      {children}
      <CombinedDonationBar />
      <CombinedDonationDialog />
    </DonationProvider>
  );
}
