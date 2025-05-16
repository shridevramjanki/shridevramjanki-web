"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  CreditCard,
  Landmark,
  QrCode,
  Copy,
  Check,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { paymentDetails } from "@/content";

export default function QuickDonationSection() {
  const [copyStatus, setCopyStatus] = useState<{ [key: string]: boolean }>({});

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopyStatus({ ...copyStatus, [field]: true });
    setTimeout(() => {
      setCopyStatus({ ...copyStatus, [field]: false });
    }, 2000);
  };

  return (
    <section
      id="quick-donation-section"
      className="py-16 bg-gradient-to-br from-white to-orange-50/30"
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-3xl border border-orange-200 bg-gradient-to-br from-orange-50/80 via-white to-green-50/80 p-8 shadow-xl"
        >
          <div className="mb-8 text-center">
            <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-700">
              <CreditCard className="h-4 w-4 text-orange-500" />
              <span>सीधे दान करें</span>
            </div>
            <h3 className="text-3xl font-bold tracking-tight text-gray-900">
              <span className="text-orange-600">तत्काल दान</span> करें
            </h3>
            <p className="mt-2 text-gray-600">गौशाला के लिए आर्थिक सहयोग</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Bank Details Section */}
            <div className="relative overflow-hidden rounded-2xl border border-green-100 bg-gradient-to-br from-green-50 to-white p-6 shadow-md transition-transform hover:-translate-y-1 hover:shadow-lg">
              <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-green-100 opacity-60"></div>
              <div className="relative z-10">
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-full bg-green-100 p-2.5">
                    <Landmark className="h-5 w-5 text-green-700" />
                  </div>
                  <h4 className="text-xl font-bold text-green-800">
                    बैंक विवरण
                  </h4>
                </div>
                <div className="space-y-4">
                  <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
                    <span className="text-sm font-medium text-gray-600">
                      खाता नाम:
                    </span>
                    <div className="flex w-full items-center justify-between gap-1 sm:w-auto sm:justify-start">
                      <span className="text-sm font-semibold text-gray-800 line-clamp-1">
                        {paymentDetails.bank.accountName}
                      </span>
                      <button
                        onClick={() =>
                          copyToClipboard(
                            paymentDetails.bank.accountName,
                            "accountName"
                          )
                        }
                        className="flex-shrink-0 rounded-full p-1 hover:bg-green-100"
                        title="Copy to clipboard"
                      >
                        {copyStatus["accountName"] ? (
                          <Check className="h-3.5 w-3.5 text-green-600" />
                        ) : (
                          <Copy className="h-3.5 w-3.5 text-gray-400" />
                        )}
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
                    <span className="text-sm font-medium text-gray-600">
                      खाता संख्या:
                    </span>
                    <div className="flex w-full items-center justify-between gap-1 sm:w-auto sm:justify-start">
                      <span className="text-sm font-semibold text-gray-800">
                        {paymentDetails.bank.accountNumber}
                      </span>
                      <button
                        onClick={() =>
                          copyToClipboard(
                            paymentDetails.bank.accountNumber,
                            "accountNumber"
                          )
                        }
                        className="flex-shrink-0 rounded-full p-1 hover:bg-green-100"
                        title="Copy to clipboard"
                      >
                        {copyStatus["accountNumber"] ? (
                          <Check className="h-3.5 w-3.5 text-green-600" />
                        ) : (
                          <Copy className="h-3.5 w-3.5 text-gray-400" />
                        )}
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
                    <span className="text-sm font-medium text-gray-600">
                      IFSC कोड:
                    </span>
                    <div className="flex w-full items-center justify-between gap-1 sm:w-auto sm:justify-start">
                      <span className="text-sm font-semibold text-gray-800">
                        {paymentDetails.bank.ifscCode}
                      </span>
                      <button
                        onClick={() =>
                          copyToClipboard(
                            paymentDetails.bank.ifscCode,
                            "ifscCode"
                          )
                        }
                        className="flex-shrink-0 rounded-full p-1 hover:bg-green-100"
                        title="Copy to clipboard"
                      >
                        {copyStatus["ifscCode"] ? (
                          <Check className="h-3.5 w-3.5 text-green-600" />
                        ) : (
                          <Copy className="h-3.5 w-3.5 text-gray-400" />
                        )}
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
                    <span className="text-sm font-medium text-gray-600">
                      बैंक:
                    </span>
                    <span className="text-sm font-semibold text-gray-800">
                      {paymentDetails.bank.bankName}
                    </span>
                  </div>
                  <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
                    <span className="text-sm font-medium text-gray-600">
                      शाखा:
                    </span>
                    <span className="text-sm font-semibold text-gray-800">
                      {paymentDetails.bank.branch}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* UPI Section */}
            <div className="relative overflow-hidden rounded-2xl border border-orange-100 bg-gradient-to-br from-orange-50 to-white p-6 shadow-md transition-transform hover:-translate-y-1 hover:shadow-lg">
              <div className="absolute -left-4 -top-4 h-16 w-16 rounded-full bg-orange-100 opacity-60"></div>
              <div className="relative z-10">
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-full bg-orange-100 p-2.5">
                    <QrCode className="h-5 w-5 text-orange-600" />
                  </div>
                  <h4 className="text-xl font-bold text-orange-700">
                    UPI विवरण
                  </h4>
                </div>
                <div className="flex flex-col items-center space-y-4">
                  <div className="relative h-40 w-40 overflow-hidden rounded-xl border-4 border-white bg-white p-2 shadow-md transition-all duration-300 hover:scale-105">
                    <Image
                      src={paymentDetails.upi.qrCode}
                      alt="UPI QR Code"
                      width={200}
                      height={200}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="space-y-2 text-center">
                    <p className="text-sm font-medium text-gray-600">UPI ID:</p>
                    <div className="flex flex-wrap items-center justify-center gap-2">
                      <span className="max-w-full overflow-hidden text-ellipsis rounded-full bg-white px-4 py-2 text-sm font-medium text-orange-700 shadow-sm ring-1 ring-orange-100">
                        {paymentDetails.upi.id}
                      </span>
                      <button
                        onClick={() =>
                          copyToClipboard(paymentDetails.upi.id, "upiId")
                        }
                        className="rounded-full bg-orange-100 p-2 hover:bg-orange-200"
                        title="Copy UPI ID"
                      >
                        {copyStatus["upiId"] ? (
                          <Check className="h-4 w-4 text-green-600" />
                        ) : (
                          <Copy className="h-4 w-4 text-orange-600" />
                        )}
                      </button>
                    </div>
                    <p className="text-xs text-gray-500">
                      {paymentDetails.upi.name}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="#donation-section"
              className="block w-full sm:inline-block sm:w-auto"
            >
              <Button
                size="lg"
                className="group w-full bg-gradient-to-r from-orange-500 to-orange-600 text-base shadow-md hover:from-orange-600 hover:to-orange-700 sm:w-auto"
              >
                <CreditCard className="mr-2 h-5 w-5" />
                <span className="whitespace-nowrap">
                  विस्तृत दान विकल्प देखें
                </span>
                <ArrowRight className="ml-2 h-4 w-0 transition-all group-hover:w-4" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
