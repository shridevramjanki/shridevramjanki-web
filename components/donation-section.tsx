"use client";

import type React from "react";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Check,
  Heart,
  Calendar,
  ArrowRight,
  Shield,
  Award,
  Leaf,
  Copy,
  Mail,
  User,
  Home,
  PhoneIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import Link from "next/link";
import PaymentDialog from "./payment-dialog";
import { useDonation } from "@/context/DonationContext";

const donationOptions = [
  {
    id: "daily",
    title: "दैनिक गौ सेवा",
    amount: 501,
    description: "एक दिन के लिए एक गौ माता का भोजन और देखभाल",
    benefits: [
      "एक गौ माता का एक दिन का चारा",
      "दवाई और चिकित्सा",
      "आश्रय और देखभाल",
    ],
    icon: <Heart className="h-5 w-5" />,
    popular: false,
    image: "/images/cow-1.jpg",
  },
  {
    id: "monthly",
    title: "मासिक गौ दत्तक",
    amount: 3100,
    description: "एक महीने के लिए एक गौ माता को गोद लें",
    benefits: [
      "एक गौ माता का एक महीने का संपूर्ण खर्च",
      "आपके नाम का प्रमाण पत्र",
      "गौशाला की मासिक रिपोर्ट",
      "गौ माता की तस्वीरें और वीडियो",
    ],
    icon: <Calendar className="h-5 w-5" />,
    popular: true,
    image: "/images/cow-2.jpeg",
  },
  {
    id: "yearly",
    title: "वार्षिक गौ दत्तक",
    amount: 31000,
    description: "एक वर्ष के लिए एक गौ माता को गोद लें",
    benefits: [
      "एक गौ माता का एक वर्ष का संपूर्ण खर्च",
      "विशेष प्रमाण पत्र और सम्मान",
      "गौशाला में आपके नाम का फलक",
      "गौशाला भ्रमण का निमंत्रण",
      "मासिक अपडेट और वीडियो कॉल",
    ],
    icon: <Award className="h-5 w-5" />,
    popular: false,
    image: "/images/cow-3.webp",
  },
];

const specificDonations = [
  {
    id: "fodder",
    title: "चारा दान",
    amount: 2100,
    description: "गौ माताओं के लिए हरा चारा और भूसा",
    image: "/images/donation/fodder.jpg",
  },
  {
    id: "medical",
    title: "चिकित्सा दान",
    amount: 5100,
    description: "गौ माताओं के लिए दवाइयां और चिकित्सा सुविधाएं",
    image: "/images/donation/medical.jpg",
  },
  {
    id: "shelter",
    title: "आश्रय निर्माण",
    amount: 11000,
    description: "गौशाला के विस्तार और नए शेड का निर्माण",
    image: "/images/donation/shelter.webp",
  },
  {
    id: "rescue",
    title: "गौ रक्षा अभियान",
    amount: 7100,
    description: "बेसहारा और घायल गौ माताओं को बचाने के लिए",
    image: "/images/donation/rescue.jpg",
  },
];

const quickAmounts = [501, 1100, 2100, 5100, 11000, 21000];

export default function DonationSection() {
  const [selectedDonations, setSelectedDonations] = useState<{
    [key: string]: boolean;
  }>({});
  const [selectedSpecific, setSelectedSpecific] = useState<{
    [key: string]: boolean;
  }>({});
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [showSummaryDialog, setShowSummaryDialog] = useState(false);
  const [showPaymentDialog, setShowPaymentDialog] = useState(false);

  // Use donation context
  const { setGeneralDonationSelected, setGeneralDonationAmount } =
    useDonation();

  const toggleDonation = (donationId: string) => {
    setSelectedDonations((prev) => {
      const newState = { ...prev };
      // Unselect all other options first (radio button behavior)
      Object.keys(newState).forEach((key) => {
        newState[key] = false;
      });
      // Toggle the selected one
      newState[donationId] = !prev[donationId];
      return newState;
    });
  };

  const toggleSpecific = (donationId: string) => {
    setSelectedSpecific((prev) => ({
      ...prev,
      [donationId]: !prev[donationId],
    }));
  };

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setSelectedAmount(null);
  };

  const calculateTotal = () => {
    // If we're in direct payment mode (from custom donation section)
    if (
      showPaymentDialog &&
      selectedAmount === null &&
      customAmount === "" &&
      !Object.values(selectedDonations).some((v) => v) &&
      !Object.values(selectedSpecific).some((v) => v)
    ) {
      return selectedAmount || (customAmount ? Number(customAmount) : 0);
    }

    let total = 0;

    // Add main donation options
    Object.entries(selectedDonations).forEach(([id, selected]) => {
      if (selected) {
        const donation = donationOptions.find((d) => d.id === id);
        if (donation) total += donation.amount;
      }
    });

    // Add specific donations
    Object.entries(selectedSpecific).forEach(([id, selected]) => {
      if (selected) {
        const donation = specificDonations.find((d) => d.id === id);
        if (donation) total += donation.amount;
      }
    });

    // Add selected or custom amount
    if (selectedAmount) {
      total += selectedAmount;
    } else if (customAmount) {
      total += Number.parseInt(customAmount) || 0;
    }

    return total;
  };

  const handleProceedToPayment = () => {
    setShowSummaryDialog(false);
    setShowPaymentDialog(true);
  };

  // Generate donation details summary for PaymentDialog
  const getDonationDetailsSummary = () => {
    const selectedDonationsList = Object.entries(selectedDonations)
      .filter(([_, selected]) => selected)
      .map(([id]) => {
        const donation = donationOptions.find((d) => d.id === id);
        return donation ? `${donation.title} (₹${donation.amount})` : null;
      })
      .filter(Boolean);

    const selectedSpecificList = Object.entries(selectedSpecific)
      .filter(([_, selected]) => selected)
      .map(([id]) => {
        const donation = specificDonations.find((d) => d.id === id);
        return donation ? `${donation.title} (₹${donation.amount})` : null;
      })
      .filter(Boolean);

    const customDonation = selectedAmount
      ? `स्वेच्छा से दान (₹${selectedAmount})`
      : customAmount
      ? `स्वेच्छा से दान (₹${customAmount})`
      : null;

    let details = "";

    if (selectedDonationsList.length > 0) {
      details += `मुख्य दान: ${selectedDonationsList.join(", ")}\n`;
    }

    if (selectedSpecificList.length > 0) {
      details += `विशेष दान: ${selectedSpecificList.join(", ")}\n`;
    }

    if (customDonation) {
      details += customDonation;
    }

    return details;
  };

  // Calculate total and update context
  const totalAmount = calculateTotal();
  const hasSelections =
    Object.values(selectedDonations).some((v) => v) ||
    Object.values(selectedSpecific).some((v) => v) ||
    selectedAmount !== null ||
    customAmount !== "";

  // Update context when selections change
  useEffect(() => {
    // Only update global donation context if selections are made outside the custom donation section
    const hasGlobalSelections =
      Object.values(selectedDonations).some((v) => v) ||
      Object.values(selectedSpecific).some((v) => v);

    if (hasGlobalSelections) {
      setGeneralDonationSelected(true);
      setGeneralDonationAmount(totalAmount);

      // Store the donation details in local storage for the combined dialog
      window.localStorage.setItem(
        "generalDonationDetails",
        getDonationDetailsSummary()
      );
      window.localStorage.setItem(
        "generalDonationAmount",
        totalAmount.toString()
      );
    } else {
      // Don't update global context for direct payments from custom section
      if (!showPaymentDialog) {
        setGeneralDonationSelected(false);
        setGeneralDonationAmount(0);
        window.localStorage.removeItem("generalDonationDetails");
        window.localStorage.removeItem("generalDonationAmount");
      }
    }
  }, [
    selectedDonations,
    selectedSpecific,
    totalAmount,
    showPaymentDialog,
    setGeneralDonationSelected,
    setGeneralDonationAmount,
    getDonationDetailsSummary,
  ]);

  return (
    <section
      id="donation-section"
      className="relative w-full overflow-hidden bg-gradient-to-br from-green-50 to-white py-16 md:py-20 z-40"
    >
      {/* Decorative Elements */}
      {/* <div className="absolute inset-0 z-0">
        <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-orange-100 opacity-40"></div>
        <div className="absolute top-20 -left-20 h-64 w-64 rounded-full bg-green-100 opacity-40"></div>
        <Image
          src="/images/mandala.png"
          alt="Decorative Pattern"
          width={200}
          height={200}
          className="absolute top-10 right-10 opacity-50 object-contain"
        />
      </div> */}

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700"
          >
            <span>गौ सेवा में सहयोग करें</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl"
          >
            <span className="text-green-700">दान</span> के विकल्प
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mx-auto mt-4 max-w-2xl text-gray-600"
          >
            आप अपनी क्षमता और इच्छा अनुसार गौ सेवा में सहयोग कर सकते हैं। आपका
            हर दान गौ माताओं के कल्याण के लिए महत्वपूर्ण है।
          </motion.p>
        </div>

        {/* Main Donation Options */}
        <div className="mb-16 grid gap-6 md:grid-cols-3">
          {donationOptions.map((option) => (
            <motion.div
              key={option.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className={`group overflow-hidden rounded-xl relative transition-all duration-300 hover:shadow-lg ${
                selectedDonations[option.id]
                  ? "ring-2 ring-green-500 shadow-lg"
                  : "bg-white shadow-md"
              } ${option.popular ? "border-orange-200" : ""}`}
            >
              {option.popular && (
                <div className="absolute -right-9 top-4 z-10 rotate-45 bg-orange-500 px-12 py-1 text-xs font-medium text-white">
                  लोकप्रिय
                </div>
              )}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={option.image || "/placeholder.svg"}
                  alt={option.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-lg font-semibold text-white">
                    {option.title}
                  </p>
                  <p className="text-sm text-white/80">{option.description}</p>
                </div>
              </div>
              <div className="p-4">
                <div className="mb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-600">
                        {option.icon}
                      </div>
                      <span className="text-xl font-bold text-gray-900">
                        ₹{option.amount}
                      </span>
                    </div>
                    <Button
                      size="sm"
                      variant={
                        selectedDonations[option.id] ? "default" : "outline"
                      }
                      className={
                        selectedDonations[option.id]
                          ? "bg-green-600 hover:bg-green-700"
                          : "border-green-600 text-green-600 hover:bg-green-50"
                      }
                      onClick={() => toggleDonation(option.id)}
                    >
                      {selectedDonations[option.id]
                        ? "चयनित ✓"
                        : option.id === "daily"
                        ? "दान करें"
                        : "गोद लें"}
                    </Button>
                  </div>
                  {option.id === "monthly" && (
                    <span className="text-gray-500">/माह</span>
                  )}
                  {option.id === "yearly" && (
                    <span className="text-gray-500">/वर्ष</span>
                  )}
                </div>
                <ul className="space-y-2">
                  {option.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span className="text-sm text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Specific Donation Needs */}
        <div className="mb-16">
          <div className="mb-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900">
              विशेष आवश्यकताएं
            </h3>
            <p className="mt-2 text-gray-600">
              आप इन विशेष आवश्यकताओं के लिए भी दान कर सकते हैं
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {specificDonations.map((donation, index) => (
              <motion.div
                key={donation.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className={`group overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-lg ${
                  selectedSpecific[donation.id] ? "ring-2 ring-green-500" : ""
                }`}
                onClick={() => toggleSpecific(donation.id)}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={donation.image || "/placeholder.svg"}
                    alt={donation.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-lg font-semibold text-white">
                      {donation.title}
                    </p>
                    <p className="text-sm text-white/80">
                      {donation.description}
                    </p>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-orange-600">
                      ₹{donation.amount}
                    </span>
                    {selectedSpecific[donation.id] ? (
                      <span className="text-green-600">चयनित ✓</span>
                    ) : (
                      <span className="text-sm text-gray-500">
                        चयन करने के लिए क्लिक करें
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Custom Donation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl rounded-2xl bg-white p-6 shadow-lg md:p-8"
        >
          <div className="mb-6 text-center">
            <h3 className="text-2xl font-bold text-gray-900">
              अपनी इच्छानुसार दान करें
            </h3>
            <p className="mt-2 text-gray-600">
              आप अपनी इच्छा अनुसार राशि चुन सकते हैं
            </p>
          </div>

          <div className="mb-6 grid grid-cols-3 gap-3 sm:grid-cols-6">
            {quickAmounts.map((amount) => (
              <button
                key={amount}
                type="button"
                className={`rounded-lg border p-3 text-center transition-all hover:border-green-500 hover:bg-green-50 ${
                  selectedAmount === amount
                    ? "border-green-500 bg-green-50 font-medium text-green-700"
                    : "border-gray-200 text-gray-700"
                }`}
                onClick={() => handleAmountSelect(amount)}
              >
                ₹{amount}
              </button>
            ))}
          </div>

          <div className="mb-6">
            <label
              htmlFor="custom-amount"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              अन्य राशि (₹)
            </label>
            <input
              type="number"
              id="custom-amount"
              value={customAmount}
              onChange={handleCustomAmountChange}
              placeholder="अपनी इच्छित राशि दर्ज करें"
              className="w-full rounded-lg border border-gray-300 p-3 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
            />
          </div>

          <div className="mb-6 rounded-lg bg-green-50 p-4">
            <div className="flex items-start gap-3">
              <Shield className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
              <div>
                <h4 className="font-medium text-green-800">
                  100% सुरक्षित और पारदर्शी
                </h4>
                <p className="mt-1 text-sm text-green-700">
                  आपका दान पूरी तरह से गौ माताओं के कल्याण के लिए उपयोग किया
                  जाता है। हम नियमित रूप से दानदाताओं को अपडेट भेजते हैं।
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button
              className="w-full bg-green-600 hover:bg-green-700"
              onClick={() => {
                // Use the selected or custom amount directly
                const directAmount =
                  selectedAmount || (customAmount ? Number(customAmount) : 0);
                if (directAmount > 0) {
                  // Direct payment - no global donation tracking
                  setSelectedDonations({});
                  setSelectedSpecific({});

                  // Pass only the direct amount to payment dialog
                  const singleDonation = {
                    amount: directAmount,
                    title: "स्वेच्छा से दान",
                  };

                  // Store a temporary amount for the payment dialog
                  window.localStorage.setItem(
                    "temporaryDonationAmount",
                    directAmount.toString()
                  );

                  // Open payment dialog directly
                  setShowPaymentDialog(true);
                }
              }}
              disabled={!selectedAmount && !customAmount}
            >
              <Heart className="mr-2 h-4 w-4" />
              अभी दान करें
            </Button>
          </div>

          {(selectedAmount || customAmount) && (
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">
                चयनित राशि:{" "}
                <span className="font-medium text-green-600">
                  ₹{selectedAmount || customAmount}
                </span>
              </p>
            </div>
          )}
        </motion.div>

        {/* Order Summary Dialog */}
        <Dialog open={showSummaryDialog} onOpenChange={setShowSummaryDialog}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>आपके दान विकल्प</DialogTitle>
              <DialogDescription>
                आपके द्वारा चुने गए दान विकल्पों का विवरण
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              {/* Main Donation Options */}
              <div className="space-y-2">
                <h4 className="font-medium">गौ दत्तक / सेवा</h4>
                {Object.entries(selectedDonations).some(
                  ([_, selected]) => selected
                ) ? (
                  <ul className="space-y-2">
                    {Object.entries(selectedDonations).map(([id, selected]) => {
                      if (!selected) return null;
                      const donation = donationOptions.find((d) => d.id === id);
                      if (!donation) return null;
                      return (
                        <li
                          key={id}
                          className="flex items-center justify-between"
                        >
                          <span>{donation.title}</span>
                          <span className="font-medium">
                            ₹{donation.amount}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                ) : (
                  <p className="text-gray-500">कोई विकल्प चयनित नहीं है</p>
                )}
              </div>

              {/* Specific Donations */}
              <div className="space-y-2">
                <h4 className="font-medium">विशेष आवश्यकताएं</h4>
                {Object.entries(selectedSpecific).some(
                  ([_, selected]) => selected
                ) ? (
                  <ul className="space-y-2">
                    {Object.entries(selectedSpecific).map(([id, selected]) => {
                      if (!selected) return null;
                      const donation = specificDonations.find(
                        (d) => d.id === id
                      );
                      if (!donation) return null;
                      return (
                        <li
                          key={id}
                          className="flex items-center justify-between"
                        >
                          <span>{donation.title}</span>
                          <span className="font-medium">
                            ₹{donation.amount}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                ) : (
                  <p className="text-gray-500">
                    कोई विशेष आवश्यकता चयनित नहीं है
                  </p>
                )}
              </div>

              {/* Custom Amount */}
              {(selectedAmount || customAmount) && (
                <div className="space-y-2">
                  <h4 className="font-medium">अतिरिक्त राशि</h4>
                  <div className="flex items-center justify-between">
                    <span>स्वेच्छा से दान</span>
                    <span className="font-medium">
                      ₹{selectedAmount || customAmount}
                    </span>
                  </div>
                </div>
              )}

              <div className="border-t pt-4">
                <div className="flex items-center justify-between font-bold">
                  <span>कुल राशि</span>
                  <span className="text-green-600">₹{totalAmount}</span>
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => setShowSummaryDialog(false)}
              >
                संशोधित करें
              </Button>
              <Button
                onClick={handleProceedToPayment}
                className="bg-green-600 hover:bg-green-700"
              >
                भुगतान करें
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Payment Dialog */}
        <PaymentDialog
          setShowPaymentDialog={setShowPaymentDialog}
          showPaymentDialog={showPaymentDialog}
          totalAmount={totalAmount}
          donationDetails={getDonationDetailsSummary()}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 p-8 text-center text-white shadow-lg"
        >
          <h3 className="mb-4 text-2xl font-bold">
            गौ सेवा, सबसे बड़ा पुण्य कार्य
          </h3>
          <p className="mb-6 text-orange-100">
            आपका दान गौ माताओं के जीवन को बदल सकता है। आज ही दान करें और पुण्य
            के भागी बनें।
          </p>
          <Link href="#donation-section">
            <Button
              size="lg"
              variant="outline"
              className="border-white bg-white/10 text-white hover:bg-white/20"
              // onClick={() => setShowSummaryDialog(true)}
            >
              <Heart className="mr-2 h-5 w-5" />
              अभी दान करें
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
