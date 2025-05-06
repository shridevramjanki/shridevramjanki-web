"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Info, Heart, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Slider } from "@/components/ui/slider";
import Link from "next/link";
import { contactDetails } from "@/content";

export default function DulaDaanSection() {
  const [showInfoDialog, setShowInfoDialog] = useState(false);
  const [showDonateDialog, setShowDonateDialog] = useState(false);
  const [weight, setWeight] = useState(60); // Default weight in kg
  const [customRate, setCustomRate] = useState(51); // Default rate per kg in rupees

  // Calculate donation amount based on weight and rate
  const donationAmount = weight * customRate;

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-yellow-50 to-white py-16 md:py-20">
      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-yellow-100 opacity-40"></div>
        <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-orange-100 opacity-40"></div>
        <Image
          src="/images/mandala-pattern.png"
          alt="Decorative Pattern"
          width={200}
          height={200}
          className="absolute bottom-10 right-10 opacity-10"
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full bg-yellow-100 px-3 py-1 text-sm font-medium text-yellow-700"
          >
            <span>पारंपरिक दान</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl"
          >
            <span className="text-yellow-600">तुला दान</span> - अपने वजन के
            बराबर दान
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mx-auto mt-4 max-w-2xl text-gray-600"
          >
            तुला दान हिंदू संस्कृति की एक प्राचीन परंपरा है जिसमें व्यक्ति अपने
            वजन के बराबर दान करता है। गौ सेवा के लिए तुला दान करके आप पुण्य के
            भागी बनें।
          </motion.p>
          <Button
            variant="outline"
            size="sm"
            className="mt-4 border-yellow-600 text-yellow-600 hover:bg-yellow-50"
            onClick={() => setShowInfoDialog(true)}
          >
            <Info className="mr-2 h-4 w-4" />
            तुला दान के बारे में अधिक जानें
          </Button>
        </div>

        {/* Tula Daan Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl rounded-2xl bg-white p-6 shadow-lg md:p-8"
        >
          <div className="grid gap-8 md:grid-cols-2">
            <div className="relative overflow-hidden rounded-xl">
              <Image
                src="/images/cow-1.jpg"
                alt="तुला दान"
                width={500}
                height={400}
                className="h-full w-full rounded-xl object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-lg font-semibold text-white">
                  पारंपरिक तुला दान
                </p>
                <p className="text-sm text-white/80">
                  अपने वजन के बराबर गौ सेवा के लिए दान करें
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">
                  अपना तुला दान करें
                </h3>
                <p className="text-gray-600">
                  अपने वजन के अनुसार गौ सेवा के लिए दान करें। प्रति किलोग्राम
                  ₹51 की दर से आपका दान गौ माताओं के कल्याण के लिए उपयोग किया
                  जाएगा।
                </p>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="weight" className="text-base font-medium">
                      अपना वजन (किलोग्राम)
                    </Label>
                    <span className="font-medium text-yellow-600">
                      {weight} kg
                    </span>
                  </div>
                  <Slider
                    id="weight"
                    min={10}
                    max={150}
                    step={1}
                    value={[weight]}
                    onValueChange={(value) => setWeight(value[0])}
                    className="py-4"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="rate" className="text-base font-medium">
                      प्रति किलोग्राम दर (₹)
                    </Label>
                    <span className="font-medium text-yellow-600">
                      ₹{customRate}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    {[51, 101, 151, 251, 501].map((rate) => (
                      <Button
                        key={rate}
                        type="button"
                        variant={customRate === rate ? "default" : "outline"}
                        className={
                          customRate === rate
                            ? "bg-yellow-600 hover:bg-yellow-700"
                            : ""
                        }
                        onClick={() => setCustomRate(rate)}
                      >
                        ₹{rate}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="rounded-lg bg-yellow-50 p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-medium text-gray-900">
                      कुल तुला दान राशि:
                    </span>
                    <span className="text-2xl font-bold text-yellow-600">
                      ₹{donationAmount.toLocaleString("en-IN")}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">
                    {weight} किलोग्राम × ₹{customRate} प्रति किलोग्राम
                  </p>
                </div>

                <Button
                  className="w-full bg-yellow-600 hover:bg-yellow-700"
                  size="lg"
                  onClick={() => setShowDonateDialog(true)}
                >
                  <Heart className="mr-2 h-5 w-5" />
                  तुला दान करें
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Info Dialog */}
        <Dialog open={showInfoDialog} onOpenChange={setShowInfoDialog}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>तुला दान क्या है?</DialogTitle>
              <DialogDescription>
                हिंदू संस्कृति में तुला दान का महत्व
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <p className="text-gray-700">
                तुला दान हिंदू संस्कृति की एक प्राचीन परंपरा है जिसमें व्यक्ति
                अपने वजन के बराबर दान करता है। इसका उल्लेख पुराणों और धार्मिक
                ग्रंथों में मिलता है।
              </p>
              <p className="text-gray-700">
                प्राचीन काल में, राजा अपने वजन के बराबर सोना, चांदी या अन्य
                मूल्यवान वस्तुएं दान करते थे। आज के समय में, लोग अपने वजन के
                बराबर अनाज, फल, मिठाई या धन दान करते हैं।
              </p>
              <p className="text-gray-700">
                तुला दान का उद्देश्य अपने शरीर के वजन के बराबर दान करके अपने
                पापों से मुक्ति पाना और पुण्य अर्जित करना है। यह माना जाता है कि
                तुला दान करने से व्यक्ति को दीर्घायु, स्वास्थ्य और समृद्धि
                प्राप्त होती है।
              </p>
              <p className="text-gray-700">
                हमारी गौशाला में, आप अपने वजन के अनुसार गौ सेवा के लिए दान कर
                सकते हैं। आपका दान गौ माताओं के भरण-पोषण, चिकित्सा और देखभाल के
                लिए उपयोग किया जाएगा।
              </p>
            </div>
            <DialogFooter>
              <Button onClick={() => setShowInfoDialog(false)}>बंद करें</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Donate Dialog */}
        <Dialog open={showDonateDialog} onOpenChange={setShowDonateDialog}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>तुला दान</DialogTitle>
              <DialogDescription>
                अपने वजन के बराबर गौ सेवा के लिए दान
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-6 py-4">
              <div className="rounded-lg bg-yellow-50 p-4">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-900">आपका वजन:</span>
                  <span className="font-bold text-yellow-600">
                    {weight} किलोग्राम
                  </span>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <span className="font-medium text-gray-900">
                    प्रति किलोग्राम दर:
                  </span>
                  <span className="font-bold text-yellow-600">
                    ₹{customRate}
                  </span>
                </div>
                <div className="mt-4 border-t border-yellow-200 pt-2">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-medium text-gray-900">
                      कुल दान राशि:
                    </span>
                    <span className="text-xl font-bold text-yellow-600">
                      ₹{donationAmount.toLocaleString("en-IN")}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-center text-sm text-gray-600">
                  आप निम्न विकल्पों में से किसी एक का उपयोग करके दान कर सकते हैं
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  <Button className="bg-yellow-600 hover:bg-yellow-700">
                    <Heart className="mr-2 h-4 w-4" />
                    ऑनलाइन दान करें
                  </Button>
                  <Button variant="outline">UPI से दान करें</Button>
                </div>
                <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-3 text-center">
                  <p className="text-sm text-yellow-800">
                    <span className="font-medium">UPI ID:</span> gauseva@ybl
                  </p>
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => setShowDonateDialog(false)}
              >
                बाद में
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="rounded-xl bg-gradient-to-r from-yellow-500 to-orange-500 p-8 text-center text-white shadow-lg"
        >
          <h3 className="mb-4 text-2xl font-bold">
            तुला दान - एक पारंपरिक पुण्य कर्म
          </h3>
          <p className="mb-6 text-yellow-100">
            अपने वजन के बराबर दान करके आप गौ माताओं के कल्याण में सहयोग कर सकते
            हैं और पुण्य के भागी बन सकते हैं।
          </p>
          <Link href={contactDetails.call_ankit}>
            <Button
              size="lg"
              variant="outline"
              className="border-white bg-white/10 text-white hover:bg-white/20"
            >
              <Phone className="mr-2 h-5 w-5" />
              संपर्क करें
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
