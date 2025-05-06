"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Calendar,
  Heart,
  Gift,
  Cake,
  Users,
  ArrowRight,
  Copy,
  Check,
  User,
  Home,
  PhoneIcon,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Link from "next/link";
import { contactDetails } from "@/content";

const pujaOptions = [
  {
    id: "birthday",
    title: "जन्मदिन पूजा",
    amount: 1100,
    description: "जन्मदिन के अवसर पर गौ पूजा और आशीर्वाद",
    benefits: [
      "गौ पूजा और आरती",
      "प्रसाद वितरण",
      "गौ माताओं को विशेष आहार",
      "आशीर्वाद प्रमाण पत्र",
    ],
    icon: <Cake className="h-5 w-5" />,
    image: "/images/puja/pujan-1.jpg",
  },
  {
    id: "anniversary",
    title: "वार्षिकोत्सव पूजा",
    amount: 2100,
    description: "विवाह वार्षिकोत्सव पर विशेष गौ पूजा",
    benefits: [
      "दंपति के लिए विशेष पूजा",
      "गौ माताओं को खिलाना",
      "आशीर्वाद प्रमाण पत्र",
      "स्मृति चिन्ह",
    ],
    icon: <Gift className="h-5 w-5" />,
    image: "/images/puja/pujan-3.webp",
  },
  {
    id: "festival",
    title: "त्योहार पूजा",
    amount: 1501,
    description: "दिवाली, होली, दशहरा जैसे त्योहारों पर पूजा",
    benefits: [
      "त्योहार विशेष पूजा",
      "गौ माताओं को विशेष आहार",
      "प्रसाद",
      "आशीर्वाद प्रमाण पत्र",
    ],
    icon: <Calendar className="h-5 w-5" />,
    image: "/images/puja/puja-2.webp",
  },
  {
    id: "memorial",
    title: "स्मृति पूजा",
    amount: 5100,
    description: "दिवंगत आत्माओं की शांति के लिए पूजा",
    benefits: [
      "शांति पाठ",
      "गौ दान",
      "पिंडदान",
      "श्राद्ध कर्म",
      "स्मृति प्रमाण पत्र",
    ],
    icon: <Heart className="h-5 w-5" />,
    image: "/images/puja/puja4.jpeg",
  },
];

const additionalItems = [
  { id: "prasad", title: "विशेष प्रसाद", amount: 251 },
  { id: "flowers", title: "विशेष पुष्प माला", amount: 151 },
  { id: "dakshina", title: "पंडित दक्षिणा", amount: 501 },
  { id: "certificate", title: "विशेष प्रमाण पत्र", amount: 201 },
];

export default function PujaDonationSection() {
  const [selectedPujas, setSelectedPujas] = useState<{
    [key: string]: boolean;
  }>({});
  const [selectedItems, setSelectedItems] = useState<{
    [key: string]: boolean;
  }>({});
  const [showSummaryDialog, setShowSummaryDialog] = useState(false);
  const [showUserDetailsDialog, setShowUserDetailsDialog] = useState(false);
  const [showPaymentDialog, setShowPaymentDialog] = useState(false);
  const [copiedUPI, setCopiedUPI] = useState(false);
  const [copiedAccount, setCopiedAccount] = useState(false);
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

  const togglePuja = (pujaId: string) => {
    setSelectedPujas((prev) => ({
      ...prev,
      [pujaId]: !prev[pujaId],
    }));
  };

  const toggleItem = (itemId: string) => {
    setSelectedItems((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  const calculateTotal = () => {
    let total = 0;

    // Add puja amounts
    Object.entries(selectedPujas).forEach(([id, selected]) => {
      if (selected) {
        const puja = pujaOptions.find((p) => p.id === id);
        if (puja) total += puja.amount;
      }
    });

    // Add additional items
    Object.entries(selectedItems).forEach(([id, selected]) => {
      if (selected) {
        const item = additionalItems.find((i) => i.id === id);
        if (item) total += item.amount;
      }
    });

    return total;
  };

  const handleProceedToUserDetails = () => {
    setShowSummaryDialog(false);
    setShowUserDetailsDialog(true);
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

    // Close user details dialog and open payment dialog
    setShowUserDetailsDialog(false);
    setShowPaymentDialog(true);

    // In a real application, you would send an email here
    // For demo purposes, we'll just show a toast notification
    sendPujaDetailsEmail();
  };

  const sendPujaDetailsEmail = () => {
    // Get selected puja details
    const selectedPujasList = Object.entries(selectedPujas)
      .filter(([_, selected]) => selected)
      .map(([id]) => {
        const puja = pujaOptions.find((p) => p.id === id);
        return puja ? `${puja.title} (₹${puja.amount})` : null;
      })
      .filter(Boolean);

    const selectedItemsList = Object.entries(selectedItems)
      .filter(([_, selected]) => selected)
      .map(([id]) => {
        const item = additionalItems.find((i) => i.id === id);
        return item ? `${item.title} (₹${item.amount})` : null;
      })
      .filter(Boolean);

    // Simulate sending an email
    console.log("Sending puja details email:", {
      to: "info@gauseva.org",
      subject: "नई पूजा बुकिंग - " + userDetails.name,
      body: `
        यजमान विवरण:
        नाम: ${userDetails.name}
        पता: ${userDetails.address}
        फोन: ${userDetails.phone}
        
        पूजा विवरण:
        ${
          selectedPujasList.length
            ? "चयनित पूजा: " + selectedPujasList.join(", ")
            : ""
        }
        ${
          selectedItemsList.length
            ? "अतिरिक्त सामग्री: " + selectedItemsList.join(", ")
            : ""
        }
        
        कुल राशि: ₹${calculateTotal()}
      `,
    });

    // Show success toast
    toast({
      title: "पूजा विवरण भेजा गया",
      description: "आपकी पूजा बुकिंग का विवरण हमें प्राप्त हो गया है। धन्यवाद!",
      duration: 5000,
    });
  };

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

  const totalAmount = calculateTotal();
  const hasSelections =
    Object.values(selectedPujas).some((v) => v) ||
    Object.values(selectedItems).some((v) => v);

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-amber-50 to-white py-16 md:py-20 z-50">
      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-orange-100 opacity-40"></div>
        <div className="absolute top-20 -right-20 h-64 w-64 rounded-full bg-amber-100 opacity-40"></div>
        <Image
          src="/images/mandala-pattern.png"
          alt="Decorative Pattern"
          width={200}
          height={200}
          className="absolute top-10 left-10 opacity-10"
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-700"
          >
            <span>विशेष अवसर</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl"
          >
            <span className="text-amber-600">गौ पूजा</span> दान
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mx-auto mt-4 max-w-2xl text-gray-600"
          >
            विशेष अवसरों पर गौ पूजा करवाकर आशीर्वाद प्राप्त करें। जन्मदिन,
            वार्षिकोत्सव, या किसी भी शुभ अवसर पर गौ माता की पूजा करवाएं।
          </motion.p>
        </div>

        {/* Puja Options */}
        <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {pujaOptions.map((option, index) => (
            <motion.div
              key={option.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className={`group overflow-hidden rounded-xl ${
                selectedPujas[option.id] ? "ring-2 ring-amber-500" : ""
              } bg-white shadow-md transition-all duration-300 hover:shadow-lg`}
            >
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
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                      {option.icon}
                    </div>
                    <span className="font-medium text-amber-600">
                      ₹{option.amount}
                    </span>
                  </div>
                  <Button
                    size="sm"
                    variant={selectedPujas[option.id] ? "default" : "outline"}
                    className={
                      selectedPujas[option.id]
                        ? "bg-amber-600 hover:bg-amber-700"
                        : "border-amber-600 text-amber-600 hover:bg-amber-50"
                    }
                    onClick={() => togglePuja(option.id)}
                  >
                    {selectedPujas[option.id] ? "चयनित ✓" : "चयन करें"}
                  </Button>
                </div>
                <ul className="space-y-1">
                  {option.benefits.slice(0, 3).map((benefit, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm text-gray-600"
                    >
                      <span className="mt-1 h-1 w-1 flex-shrink-0 rounded-full bg-amber-500"></span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                  {option.benefits.length > 3 && (
                    <li className="text-sm text-amber-600">
                      + {option.benefits.length - 3} और लाभ
                    </li>
                  )}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Items */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 rounded-xl bg-amber-50 p-6 shadow-md"
        >
          <h3 className="mb-4 text-xl font-bold text-gray-900">
            अतिरिक्त पूजा सामग्री
          </h3>
          <p className="mb-6 text-gray-600">
            अपनी पूजा में अतिरिक्त सामग्री जोड़ें
          </p>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {additionalItems.map((item) => (
              <Card
                key={item.id}
                className={`cursor-pointer transition-all hover:-translate-y-1 ${
                  selectedItems[item.id] ? "ring-2 ring-amber-500" : ""
                }`}
                onClick={() => toggleItem(item.id)}
              >
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{item.title}</span>
                    <span className="text-amber-600">₹{item.amount}</span>
                  </div>
                  <div className="mt-2 flex justify-end">
                    {selectedItems[item.id] && (
                      <span className="text-amber-600">चयनित ✓</span>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Fixed Bottom Total Bar */}
        {hasSelections && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-0 left-0 right-0 z-50 bg-white p-4 shadow-[0_-4px_10px_rgba(0,0,0,0.1)]"
          >
            <div className="container mx-auto flex flex-col items-center justify-between gap-4 sm:flex-row">
              <div>
                <p className="text-sm text-gray-500">कुल राशि</p>
                <p className="text-2xl font-bold text-amber-600">
                  ₹{totalAmount}
                </p>
              </div>
              <Button
                className="w-full bg-amber-600 hover:bg-amber-700 sm:w-auto"
                size="lg"
                onClick={() => setShowSummaryDialog(true)}
              >
                आगे बढ़ें
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        )}

        {/* Order Summary Dialog */}
        <Dialog open={showSummaryDialog} onOpenChange={setShowSummaryDialog}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>आपके पूजा विकल्प</DialogTitle>
              <DialogDescription>
                आपके द्वारा चुने गए पूजा विकल्पों का विवरण
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <h4 className="font-medium">चयनित पूजा</h4>
                {Object.entries(selectedPujas).some(
                  ([_, selected]) => selected
                ) ? (
                  <ul className="space-y-2">
                    {Object.entries(selectedPujas).map(([id, selected]) => {
                      if (!selected) return null;
                      const puja = pujaOptions.find((p) => p.id === id);
                      if (!puja) return null;
                      return (
                        <li
                          key={id}
                          className="flex items-center justify-between"
                        >
                          <span>{puja.title}</span>
                          <span className="font-medium">₹{puja.amount}</span>
                        </li>
                      );
                    })}
                  </ul>
                ) : (
                  <p className="text-gray-500">कोई पूजा चयनित नहीं है</p>
                )}
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">अतिरिक्त सामग्री</h4>
                {Object.entries(selectedItems).some(
                  ([_, selected]) => selected
                ) ? (
                  <ul className="space-y-2">
                    {Object.entries(selectedItems).map(([id, selected]) => {
                      if (!selected) return null;
                      const item = additionalItems.find((i) => i.id === id);
                      if (!item) return null;
                      return (
                        <li
                          key={id}
                          className="flex items-center justify-between"
                        >
                          <span>{item.title}</span>
                          <span className="font-medium">₹{item.amount}</span>
                        </li>
                      );
                    })}
                  </ul>
                ) : (
                  <p className="text-gray-500">
                    कोई अतिरिक्त सामग्री चयनित नहीं है
                  </p>
                )}
              </div>

              <div className="border-t pt-4">
                <div className="flex items-center justify-between font-bold">
                  <span>कुल राशि</span>
                  <span className="text-amber-600">₹{totalAmount}</span>
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
                onClick={handleProceedToUserDetails}
                className="bg-amber-600 hover:bg-amber-700"
              >
                विवरण भरें
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* User Details Dialog */}
        <Dialog
          open={showUserDetailsDialog}
          onOpenChange={setShowUserDetailsDialog}
        >
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>अपना विवरण भरें</DialogTitle>
              <DialogDescription>
                पूजा बुकिंग प्रक्रिया को पूरा करने के लिए कृपया अपना विवरण भरें
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="puja-name" className="text-sm font-medium">
                  नाम <span className="text-red-500">*</span>
                </Label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
                    <User className="h-4 w-4" />
                  </span>
                  <Input
                    id="puja-name"
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
                <Label htmlFor="puja-address" className="text-sm font-medium">
                  पता <span className="text-red-500">*</span>
                </Label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-3 top-3 flex items-start text-gray-500">
                    <Home className="h-4 w-4" />
                  </span>
                  <Textarea
                    id="puja-address"
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
                <Label htmlFor="puja-phone" className="text-sm font-medium">
                  फोन नंबर <span className="text-red-500">*</span>
                </Label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
                    <PhoneIcon className="h-4 w-4" />
                  </span>
                  <Input
                    id="puja-phone"
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

              <div className="rounded-lg bg-amber-50 p-3">
                <div className="flex items-start gap-2">
                  <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-600" />
                  <p className="text-xs text-amber-800">
                    आपका विवरण और पूजा की जानकारी हमारे द्वारा संग्रहित की जाएगी
                    और आपको पूजा की पुष्टि भेजने के लिए उपयोग की जाएगी।
                  </p>
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => setShowUserDetailsDialog(false)}
              >
                वापस जाएं
              </Button>
              <Button
                onClick={handleUserDetailsSubmit}
                className="bg-amber-600 hover:bg-amber-700"
              >
                भुगतान करें
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Payment Dialog */}
        <Dialog open={showPaymentDialog} onOpenChange={setShowPaymentDialog}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>पूजा दान भुगतान</DialogTitle>
              <DialogDescription>
                कृपया निम्न विकल्पों में से किसी एक का उपयोग करके भुगतान करें
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-6 py-4">
              <div className="flex flex-col items-center justify-center space-y-4">
                <p className="text-lg font-medium text-amber-600">
                  ₹{totalAmount}
                </p>
                <div className="rounded-lg border-2 border-amber-200 p-2">
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
                <div className="flex items-center gap-2 rounded-md border bg-amber-50 p-2">
                  <span className="flex-1 text-amber-800">gauseva@ybl</span>
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
              </div>

              <div className="space-y-3">
                <h4 className="font-medium">या बैंक खाते में भुगतान करें</h4>
                <div className="rounded-md border bg-gray-50 p-3 text-sm">
                  <p>
                    <span className="font-medium">खाता नाम:</span> गौ सेवा
                    ट्रस्ट
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

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 p-8 text-white shadow-lg"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-2xl font-bold">
                पूजा के बारे में अधिक जानकारी
              </h3>
              <p className="mb-4 text-amber-100">
                हमारी गौशाला में पूजा करवाने से आपको और आपके परिवार को गौ माता
                का विशेष आशीर्वाद मिलता है। सभी पूजाएँ वैदिक मंत्रोच्चार के साथ
                अनुभवी पंडितों द्वारा की जाती हैं।
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Users className="h-5 w-5 flex-shrink-0" />
                  <span>
                    आप और आपके परिवार के सदस्य पूजा में शामिल हो सकते हैं
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 flex-shrink-0" />
                  <span>पूजा की तिथि से कम से कम 3 दिन पहले बुकिंग करें</span>
                </li>
                <li className="flex items-center gap-2">
                  <Heart className="h-5 w-5 flex-shrink-0" />
                  <span>
                    आपका दान गौ माताओं के कल्याण के लिए उपयोग किया जाएगा
                  </span>
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-center">
              <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
                <h4 className="mb-3 text-center text-xl font-bold">
                  विशेष अवसर पूजा
                </h4>
                <p className="mb-4 text-center text-amber-100">
                  किसी भी विशेष अवसर के लिए कस्टम पूजा पैकेज भी उपलब्ध हैं
                </p>
                <Link href={contactDetails.call_ankit}>
                  <Button
                    variant="outline"
                    className="w-full border-white bg-white/10 text-white hover:bg-white/20"
                    onClick={() => {}}
                  >
                    संपर्क करें
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
