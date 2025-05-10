"use client";

import { useDonation } from "@/context/DonationContext";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import PaymentDialog from "./payment-dialog";

type DonationInfo = {
  generalDonationDetails: string;
  pujaDonationDetails: string;
  generalAmount: number;
  pujaAmount: number;
};

export default function CombinedDonationDialog() {
  const { isCombinedSummaryOpen, closeCombinedSummary, combinedTotalAmount } =
    useDonation();
  const [showPaymentDialog, setShowPaymentDialog] = useState(false);
  const [donationInfo, setDonationInfo] = useState<DonationInfo>({
    generalDonationDetails: "",
    pujaDonationDetails: "",
    generalAmount: 0,
    pujaAmount: 0,
  });

  // Read donation details from localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const generalDetails =
        localStorage.getItem("generalDonationDetails") || "";
      const pujaDetails = localStorage.getItem("pujaDonationDetails") || "";
      const generalAmount = parseInt(
        localStorage.getItem("generalDonationAmount") || "0",
        10
      );
      const pujaAmount = parseInt(
        localStorage.getItem("pujaDonationAmount") || "0",
        10
      );

      setDonationInfo({
        generalDonationDetails: generalDetails,
        pujaDonationDetails: pujaDetails,
        generalAmount,
        pujaAmount,
      });
    }
  }, [isCombinedSummaryOpen]);

  const handleProceedToPayment = () => {
    closeCombinedSummary();
    setShowPaymentDialog(true);
  };

  // Combine donation details for payment dialog
  const getCombinedDonationDetails = () => {
    let details = "";

    if (donationInfo.generalDonationDetails) {
      details += donationInfo.generalDonationDetails + "\n";
    }

    if (donationInfo.pujaDonationDetails) {
      details += donationInfo.pujaDonationDetails;
    }

    return details;
  };

  return (
    <>
      <Dialog open={isCombinedSummaryOpen} onOpenChange={closeCombinedSummary}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>आपके दान विकल्प</DialogTitle>
            <DialogDescription>
              आपके द्वारा चुने गए दान विकल्पों का विवरण
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            {donationInfo.generalDonationDetails && (
              <div className="space-y-2">
                <h4 className="font-medium">सामान्य दान</h4>
                <div className="rounded-lg bg-green-50 p-3 text-sm">
                  <p className="whitespace-pre-line">
                    {donationInfo.generalDonationDetails}
                  </p>
                  <p className="mt-2 font-medium text-green-700">
                    राशि: ₹{donationInfo.generalAmount}
                  </p>
                </div>
              </div>
            )}

            {donationInfo.pujaDonationDetails && (
              <div className="space-y-2">
                <h4 className="font-medium">पूजा दान</h4>
                <div className="rounded-lg bg-amber-50 p-3 text-sm">
                  <p className="whitespace-pre-line">
                    {donationInfo.pujaDonationDetails}
                  </p>
                  <p className="mt-2 font-medium text-amber-700">
                    राशि: ₹{donationInfo.pujaAmount}
                  </p>
                </div>
              </div>
            )}

            <div className="border-t pt-4">
              <div className="flex items-center justify-between font-bold">
                <span>कुल राशि</span>
                <span className="text-orange-600">₹{combinedTotalAmount}</span>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={closeCombinedSummary}>
              संशोधित करें
            </Button>
            <Button
              onClick={handleProceedToPayment}
              className="bg-orange-600 hover:bg-orange-700"
            >
              भुगतान करें
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Payment Dialog */}
      <PaymentDialog
        showPaymentDialog={showPaymentDialog}
        setShowPaymentDialog={setShowPaymentDialog}
        totalAmount={combinedTotalAmount}
        isGreen={false}
        donationDetails={getCombinedDonationDetails()}
      />
    </>
  );
}
