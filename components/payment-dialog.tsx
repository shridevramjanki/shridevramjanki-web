import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import Image from "next/image";
import { Button } from "./ui/button";
import { Check, Copy, User, Home, PhoneIcon, Mail } from "lucide-react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { toast } from "./ui/use-toast";
import { paymentDetails } from "@/content";

const PaymentDialog = ({
  showPaymentDialog,
  setShowPaymentDialog,
  totalAmount,
  isGreen = true,
  donationDetails = "",
}: {
  showPaymentDialog: boolean;
  setShowPaymentDialog: (show: boolean) => void;
  totalAmount: number;
  isGreen?: boolean;
  donationDetails?: string;
}) => {
  const [copiedUPI, setCopiedUPI] = useState(false);
  const [copiedAccount, setCopiedAccount] = useState(false);
  const [showUserDetailsForm, setShowUserDetailsForm] = useState(true);
  const [userDetails, setUserDetails] = useState({
    name: "",
    address: "",
    phone: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: false,
    address: false,
    phone: false,
  });

  // Check for temporary donation amount in local storage
  const [actualAmount, setActualAmount] = useState(totalAmount);

  useEffect(() => {
    const tempAmount = window.localStorage.getItem("temporaryDonationAmount");
    if (tempAmount) {
      setActualAmount(Number(tempAmount));
      // Clear after using
      window.localStorage.removeItem("temporaryDonationAmount");
    } else {
      setActualAmount(totalAmount);
    }
  }, [showPaymentDialog, totalAmount]);

  const primaryColor = isGreen ? "green" : "amber";

  const copyToClipboard = (text: string, type: "upi" | "account") => {
    navigator.clipboard.writeText(text);
    if (type === "upi") {
      setCopiedUPI(true);
      setTimeout(() => setCopiedUPI(false), 2000);
    } else {
      setCopiedAccount(true);
      setTimeout(() => setCopiedAccount(false), 2000);
    }
  };

  const handleUserDetailsSubmit = () => {
    // Validate form
    const errors = {
      name: !userDetails.name.trim(),
      address: !userDetails.address.trim(),
      phone: !userDetails.phone.trim() || !/^\d{10}$/.test(userDetails.phone),
    };

    setFormErrors(errors);

    if (Object.values(errors).some((error) => error)) {
      return; // Don't proceed if there are errors
    }

    // Switch to payment dialog
    setShowUserDetailsForm(false);

    // In a real application, you would send an email here
    // For demo purposes, we'll just show a toast notification
    toast({
      title: "विवरण प्राप्त हुआ",
      description: "आपका विवरण सफलतापूर्वक दर्ज कर लिया गया है।",
      duration: 3000,
    });
  };

  const resetDialog = () => {
    setShowUserDetailsForm(true);
    setUserDetails({
      name: "",
      address: "",
      phone: "",
    });
    setFormErrors({
      name: false,
      address: false,
      phone: false,
    });
    setShowPaymentDialog(false);
  };

  return (
    <Dialog
      open={showPaymentDialog}
      onOpenChange={(open) => {
        if (!open) {
          resetDialog();
        } else {
          setShowPaymentDialog(true);
        }
      }}
    >
      <DialogContent className="sm:max-w-md max-h-[90vh] overflow-hidden flex flex-col">
        {showUserDetailsForm ? (
          // User Details Form
          <>
            <DialogHeader className="flex-shrink-0">
              <DialogTitle>अपना विवरण भरें</DialogTitle>
              <DialogDescription>
                दान प्रक्रिया को पूरा करने के लिए कृपया अपना विवरण भरें
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4 px-2 overflow-y-auto flex-grow">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium">
                  नाम <span className="text-red-500">*</span>
                </Label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
                    <User className="h-4 w-4" />
                  </span>
                  <Input
                    id="name"
                    value={userDetails.name}
                    onChange={(e) =>
                      setUserDetails({ ...userDetails, name: e.target.value })
                    }
                    className={`pl-10 ${
                      formErrors.name
                        ? "border-red-500 focus-visible:ring-red-500"
                        : ""
                    }`}
                    placeholder="अपना पूरा नाम दर्ज करें"
                  />
                </div>
                {formErrors.name && (
                  <p className="text-xs text-red-500">नाम आवश्यक है</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="address" className="text-sm font-medium">
                  पता <span className="text-red-500">*</span>
                </Label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-3 top-3 flex items-start text-gray-500">
                    <Home className="h-4 w-4" />
                  </span>
                  <Textarea
                    id="address"
                    value={userDetails.address}
                    onChange={(e) =>
                      setUserDetails({
                        ...userDetails,
                        address: e.target.value,
                      })
                    }
                    className={`min-h-[80px] pl-10 ${
                      formErrors.address
                        ? "border-red-500 focus-visible:ring-red-500"
                        : ""
                    }`}
                    placeholder="अपना पूरा पता दर्ज करें"
                  />
                </div>
                {formErrors.address && (
                  <p className="text-xs text-red-500">पता आवश्यक है</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm font-medium">
                  फोन नंबर <span className="text-red-500">*</span>
                </Label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
                    <PhoneIcon className="h-4 w-4" />
                  </span>
                  <Input
                    id="phone"
                    type="tel"
                    value={userDetails.phone}
                    onChange={(e) =>
                      setUserDetails({ ...userDetails, phone: e.target.value })
                    }
                    className={`pl-10 ${
                      formErrors.phone
                        ? "border-red-500 focus-visible:ring-red-500"
                        : ""
                    }`}
                    placeholder="10 अंकों का मोबाइल नंबर"
                    maxLength={10}
                  />
                </div>
                {formErrors.phone && (
                  <p className="text-xs text-red-500">
                    सही फोन नंबर दर्ज करें (10 अंक)
                  </p>
                )}
              </div>

              {donationDetails && (
                <div className={`rounded-lg bg-${primaryColor}-50 p-3`}>
                  <div className="space-y-2">
                    <h4 className="font-medium">दान विवरण:</h4>
                    <p className={`text-sm text-${primaryColor}-800`}>
                      {donationDetails}
                    </p>
                    <p className={`font-medium text-${primaryColor}-600`}>
                      कुल: ₹{actualAmount}
                    </p>
                  </div>
                </div>
              )}

              <div className="rounded-lg bg-gray-50 p-3">
                <div className="flex items-start gap-2">
                  <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-800" />
                  <p className="text-xs text-gray-800">
                    आपका विवरण और दान की जानकारी हमारे द्वारा संग्रहित की जाएगी
                    और आपको रसीद भेजने के लिए उपयोग की जाएगी।
                  </p>
                </div>
              </div>
            </div>
            <DialogFooter className="flex-shrink-0 pt-2">
              <Button variant="outline" onClick={() => resetDialog()}>
                बाद में
              </Button>
              <Button
                onClick={handleUserDetailsSubmit}
                className={`bg-${primaryColor}-600 hover:bg-${primaryColor}-700`}
              >
                आगे बढ़ें
              </Button>
            </DialogFooter>
          </>
        ) : (
          // Payment Options
          <>
            <DialogHeader className="flex-shrink-0">
              <DialogTitle>दान भुगतान</DialogTitle>
              <DialogDescription>
                कृपया निम्न विकल्पों में से किसी एक का उपयोग करके भुगतान करें
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-6 py-4 overflow-y-auto flex-grow">
              <div className="flex flex-col items-center justify-center space-y-4">
                <p className={`text-lg font-medium text-${primaryColor}-600`}>
                  ₹{actualAmount}
                </p>
                <div
                  className={`rounded-lg border-2 border-${primaryColor}-200 p-2`}
                >
                  <Image
                    src={paymentDetails.upi.qrCode}
                    alt="Payment QR Code"
                    width={200}
                    height={200}
                    className="h-48 w-48 object-contain"
                  />
                </div>
                <p className="text-sm text-gray-500">
                  QR कोड स्कैन करके भुगतान करें
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-medium">या UPI आईडी का उपयोग करें</h4>
                <div
                  className={`flex items-center gap-2 rounded-md border bg-${primaryColor}-50 p-2`}
                >
                  <span className={`flex-1 text-${primaryColor}-800`}>
                    {paymentDetails.upi.id}
                  </span>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() =>
                      copyToClipboard(paymentDetails.upi.id, "upi")
                    }
                    className="h-8 w-8 p-0"
                  >
                    {copiedUPI ? (
                      <Check className="h-4 w-4 text-green-600" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => {
                    const upiLink = `upi://pay?pa=${
                      paymentDetails.upi.id
                    }&pn=${encodeURIComponent(
                      paymentDetails.upi.name
                    )}&am=${actualAmount}&cu=INR`;
                    window.open(upiLink, "_blank");
                  }}
                >
                  UPI ऐप में खोलें (₹{actualAmount})
                </Button>
              </div>

              <div className="space-y-3">
                <h4 className="font-medium">या बैंक खाते में भुगतान करें</h4>
                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-medium">खाता विवरण</h5>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 px-2"
                      onClick={() =>
                        copyToClipboard(
                          `बैंक: ${paymentDetails.bank.bankName}\nशाखा: ${paymentDetails.bank.branch}\nखाता संख्या: ${paymentDetails.bank.accountNumber}\nIFSC: ${paymentDetails.bank.ifscCode}\nखाता धारक: ${paymentDetails.bank.accountName}`,
                          "account"
                        )
                      }
                    >
                      {copiedAccount ? "कॉपी हो गया" : "कॉपी करें"}
                      {copiedAccount ? (
                        <Check className="ml-1 h-3 w-3" />
                      ) : (
                        <Copy className="ml-1 h-3 w-3" />
                      )}
                    </Button>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">बैंक:</span>
                      <span>{paymentDetails.bank.bankName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">शाखा:</span>
                      <span>{paymentDetails.bank.branch}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">खाता संख्या:</span>
                      <span>{paymentDetails.bank.accountNumber}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">IFSC:</span>
                      <span>{paymentDetails.bank.ifscCode}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">खाता धारक:</span>
                      <span>{paymentDetails.bank.accountName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">राशि:</span>
                      <span className={`font-medium text-${primaryColor}-600`}>
                        कुल: ₹{actualAmount}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <DialogFooter className="flex-shrink-0 pt-2">
              <Button
                variant="outline"
                onClick={() => setShowUserDetailsForm(true)}
              >
                वापस जाएं
              </Button>
              <Button
                onClick={() => resetDialog()}
                className={`bg-${primaryColor}-600 hover:bg-${primaryColor}-700`}
              >
                संपन्न
              </Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default PaymentDialog;
