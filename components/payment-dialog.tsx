import React, { useState } from "react";
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
import { Check, Copy } from "lucide-react";

const PaymentDialog = ({
  showPaymentDialog,
  setShowPaymentDialog,
  totalAmount,
  isGreen = true,
}: {
  showPaymentDialog: boolean;
  setShowPaymentDialog: any;
  totalAmount: number;
  isGreen?: boolean;
}) => {
  const [copiedUPI, setCopiedUPI] = useState(false);
  const [copiedAccount, setCopiedAccount] = useState(false);

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
  return (
    <Dialog open={showPaymentDialog} onOpenChange={setShowPaymentDialog}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>दान भुगतान</DialogTitle>
          <DialogDescription>
            कृपया निम्न विकल्पों में से किसी एक का उपयोग करके भुगतान करें
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-6 py-4 max-h-[60vh] overflow-y-auto">
          <div className="flex flex-col items-center justify-center space-y-4">
            <p className="text-lg font-medium text-green-600">₹{totalAmount}</p>
            <div className="rounded-lg border-2 border-green-200 p-2">
              <Image
                src="/images/payment/qr-code.png"
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
            <div className="flex items-center gap-2 rounded-md border bg-green-50 p-2">
              <span className="flex-1 text-green-800">gauseva@ybl</span>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => copyToClipboard("gauseva@ybl", "upi")}
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
                const upiLink = `upi://pay?pa=gauseva@ybl&pn=Gau%20Seva%20Trust&am=${totalAmount}&cu=INR`;
                window.open(upiLink, "_blank");
              }}
            >
              UPI ऐप में खोलें (₹{totalAmount})
            </Button>
          </div>

          <div className="space-y-3">
            <h4 className="font-medium">या बैंक खाते में भुगतान करें</h4>
            <div className="rounded-md border bg-gray-50 p-3 text-sm">
              <p>
                <span className="font-medium">खाता नाम:</span> गौ सेवा ट्रस्ट
              </p>
              <p>
                <span className="font-medium">खाता संख्या:</span> 1234567890
              </p>
              <p>
                <span className="font-medium">IFSC कोड:</span> SBIN0012345
              </p>
              <p>
                <span className="font-medium">बैंक:</span> भारतीय स्टेट बैंक
              </p>
              <Button
                size="sm"
                variant="outline"
                className="mt-2 w-full"
                onClick={() =>
                  copyToClipboard(
                    "गौ सेवा ट्रस्ट, 1234567890, SBIN0012345, भारतीय स्टेट बैंक",
                    "account"
                  )
                }
              >
                {copiedAccount ? "कॉपी किया गया ✓" : "बैंक विवरण कॉपी करें"}
              </Button>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button
            onClick={() => setShowPaymentDialog(false)}
            className="bg-green-600 hover:bg-green-700"
          >
            संपन्न
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentDialog;
