"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useDonation } from "@/context/DonationContext";

export default function CombinedDonationBar() {
  const {
    generalDonationSelected,
    pujaDonationSelected,
    combinedTotalAmount,
    showCombinedSummary,
  } = useDonation();

  // Only show the bar if at least one type of donation is selected
  const showBar = generalDonationSelected || pujaDonationSelected;

  if (!showBar) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      className="fixed bottom-0 left-0 right-0 z-50 bg-white p-4 shadow-[0_-4px_10px_rgba(0,0,0,0.1)]"
    >
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div>
          <p className="text-sm text-gray-500">कुल राशि</p>
          <p className="text-2xl font-bold text-orange-600">
            ₹{combinedTotalAmount}
          </p>
          {generalDonationSelected && pujaDonationSelected && (
            <p className="text-xs text-gray-500">
              (दोनों दान और पूजा विकल्प चयनित)
            </p>
          )}
        </div>
        <Button
          className="w-full bg-orange-600 hover:bg-orange-700 sm:w-auto"
          size="lg"
          onClick={showCombinedSummary}
        >
          आगे बढ़ें
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </motion.div>
  );
}
