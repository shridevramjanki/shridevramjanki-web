"use client";

import type React from "react";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check, ArrowRight, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { contactDetails } from "@/content";
import Link from "next/link";

export default function ShelterCostsSection() {
  const [showContactDialog, setShowContactDialog] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-green-50 to-white py-16 md:py-20">
      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-green-100 opacity-40"></div>
        <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-green-100 opacity-40"></div>
        <Image
          src="/images/mandala-pattern.png"
          alt="Decorative Pattern"
          width={200}
          height={200}
          className="absolute bottom-10 left-10 opacity-10"
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700"
          >
            <span>गौशाला निर्माण</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl"
          >
            <span className="text-green-600">गौशाला निर्माण</span> में सहयोग
            करें
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mx-auto mt-4 max-w-2xl text-gray-600"
          >
            गौशाला के निर्माण और विस्तार के लिए आप अपनी इच्छानुसार सहयोग कर सकते
            हैं। गौशाला निर्माण से संबंधित जानकारी के लिए हमसे संपर्क करें।
          </motion.p>
        </div>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-4xl rounded-2xl bg-white p-6 shadow-lg md:p-8"
        >
          <div className="grid gap-8 md:grid-cols-2">
            <div className="relative overflow-hidden rounded-xl border">
              <Image
                src="/images/shelter.jpg"
                alt="गौशाला निर्माण"
                width={600}
                height={400}
                className="h-full w-full rounded-xl object-cover"
              />
            </div>

            <div className="flex flex-col justify-center space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                गौशाला निर्माण के लिए संपर्क करें
              </h3>
              <p className="text-gray-600">
                गौशाला निर्माण एक पवित्र कार्य है। आप इस पुण्य कार्य में सहयोग
                करके गौ माताओं के लिए सुरक्षित आश्रय बनाने में मदद कर सकते हैं।
                विस्तृत जानकारी के लिए हमसे संपर्क करें।
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">फोन नंबर</p>
                    <p className="font-medium text-gray-900">
                      {contactDetails.allPhones}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">ईमेल</p>
                    <p className="font-medium text-gray-900">
                      {contactDetails.email}
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-4">
                <Link href={contactDetails.whatsapp}>
                  <Button
                    className="w-full bg-green-600 hover:bg-green-700"
                    onClick={() => setShowContactDialog(true)}
                  >
                    व्हाट्सएप पर संदेश भेजें
                  </Button>
                </Link>
                <Link href={contactDetails.call_ankit}>
                  <Button variant="outline" className="w-full mt-2">
                    <Phone className="mr-2 h-4 w-4" />
                    संपर्क करें
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Dialog */}
        {/* <Dialog open={showContactDialog} onOpenChange={setShowContactDialog}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>गौशाला निर्माण के लिए संपर्क करें</DialogTitle>
              <DialogDescription>
                अपना विवरण भरें, हम आपसे संपर्क करेंगे
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="name">नाम</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="अपना पूरा नाम दर्ज करें"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">फोन नंबर</Label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="अपना मोबाइल नंबर दर्ज करें"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">ईमेल (वैकल्पिक)</Label>
                <Input
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="अपना ईमेल पता दर्ज करें"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">संदेश</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="गौशाला निर्माण के बारे में अपना संदेश या प्रश्न लिखें"
                  rows={4}
                />
              </div>
            </div>
            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => setShowContactDialog(false)}
              >
                रद्द करें
              </Button>
              <Button onClick={handleSubmit}>भेजें</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog> */}

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
                गौशाला निर्माण का महत्व
              </h3>
              <p className="mb-4 text-amber-100">
                गौशाला का निर्माण गौ माताओं के लिए सुरक्षित और स्वस्थ आश्रय
                प्रदान करने के लिए आवश्यक है। एक अच्छी तरह से निर्मित गौशाला में
                गौ माताओं को सभी मौसमों में सुरक्षा और आराम मिलता है।
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-white" />
                  <span className="text-sm ">
                    गौ माताओं के लिए सुरक्षित आश्रय
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-white" />
                  <span className="text-sm ">
                    सभी मौसमों में सुरक्षा और आराम
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-white" />
                  <span className="text-sm ">स्वच्छ और स्वस्थ वातावरण</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-white" />
                  <span className="text-sm ">
                    आधुनिक सुविधाओं से युक्त गौशाला
                  </span>
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-center">
              <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
                <h4 className="mb-3 text-center text-xl font-bold">
                  विशेष उद्देश्य दान
                </h4>
                <p className="mb-4 text-center text-amber-100">
                  आप अपनी पसंद के अनुसार विशिष्ट उद्देश्यों के लिए दान कर सकते
                  हैं
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
