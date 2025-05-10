"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";

type DonationContextType = {
  generalDonationSelected: boolean;
  pujaDonationSelected: boolean;
  combinedTotalAmount: number;
  setGeneralDonationSelected: (selected: boolean) => void;
  setPujaDonationSelected: (selected: boolean) => void;
  setGeneralDonationAmount: (amount: number) => void;
  setPujaDonationAmount: (amount: number) => void;
  showCombinedSummary: () => void;
  isCombinedSummaryOpen: boolean;
  closeCombinedSummary: () => void;
};

const DonationContext = createContext<DonationContextType | undefined>(
  undefined
);

export function DonationProvider({ children }: { children: ReactNode }) {
  const [generalDonationSelected, setGeneralDonationSelected] = useState(false);
  const [pujaDonationSelected, setPujaDonationSelected] = useState(false);
  const [generalDonationAmount, setGeneralDonationAmount] = useState(0);
  const [pujaDonationAmount, setPujaDonationAmount] = useState(0);
  const [isCombinedSummaryOpen, setIsCombinedSummaryOpen] = useState(false);

  const combinedTotalAmount = generalDonationAmount + pujaDonationAmount;

  const showCombinedSummary = () => {
    setIsCombinedSummaryOpen(true);
  };

  const closeCombinedSummary = () => {
    setIsCombinedSummaryOpen(false);
  };

  return (
    <DonationContext.Provider
      value={{
        generalDonationSelected,
        pujaDonationSelected,
        combinedTotalAmount,
        setGeneralDonationSelected,
        setPujaDonationSelected,
        setGeneralDonationAmount,
        setPujaDonationAmount,
        showCombinedSummary,
        isCombinedSummaryOpen,
        closeCombinedSummary,
      }}
    >
      {children}
    </DonationContext.Provider>
  );
}

export function useDonation() {
  const context = useContext(DonationContext);
  if (context === undefined) {
    throw new Error("useDonation must be used within a DonationProvider");
  }
  return context;
}
