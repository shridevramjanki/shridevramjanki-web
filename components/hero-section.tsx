"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Heart, Info, ArrowRight, Star } from "lucide-react";
import { motion } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [currentSlogan, setCurrentSlogan] = useState(0);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setCurrentSlogan((prev) => (prev + 1) % slogans.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  const slogans = [
    "गौ सेवा, सबसे बड़ा पुण्य कार्य",
    "गौ माता की सेवा, हमारी संस्कृति की पहचान",
    "एक गौ दान, अनंत पुण्य का भंडार",
    "गौ रक्षा, राष्ट्र रक्षा",
  ];

  const images = [
    "/images/banner.png",
    "/images/cow-2.jpeg",
    "/images/cow-3.jpeg",
    "/images/cow-1.jpeg",
  ];

  return (
    <section className="relative w-full overflow-hidden min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50 py-12 md:py-16 lg:py-20">
      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-orange-100 opacity-60"></div>
        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-green-100 opacity-60"></div>
        <div className="absolute top-1/4 right-1/4 h-20 w-20 rounded-full bg-yellow-200 opacity-30"></div>
        <Image
          src="/images/mandala-pattern.png"
          alt="Decorative Pattern"
          width={300}
          height={300}
          className="absolute bottom-0 left-0 opacity-10"
        />
        <Image
          src="/images/mandala-pattern.png"
          alt="Decorative Pattern"
          width={200}
          height={200}
          className="absolute top-0 right-0 opacity-10"
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center space-y-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-700">
              <Star className="h-4 w-4 fill-orange-500 text-orange-500" />
              <span>भारत की सबसे विश्वसनीय गौशाला</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter text-gray-900 sm:text-5xl md:text-6xl">
                <span className="text-orange-600">गौ माता</span> की सेवा,{" "}
                <span className="text-green-700">धर्म की रक्षा</span>
              </h1>

              <div className="h-16 overflow-hidden md:h-20">
                {mounted && (
                  <motion.p
                    key={currentSlogan}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-[600px] text-xl font-medium text-gray-700 md:text-2xl"
                  >
                    {slogans[currentSlogan]}
                  </motion.p>
                )}
              </div>

              <p className="max-w-[600px] text-gray-600 md:text-lg">
                आपका दान गौ माता को आश्रय, भोजन और चिकित्सा सहायता प्रदान करने
                में मदद करता है। हमारे मिशन में शामिल हों और इन पवित्र प्राणियों
                को सम्मानजनक जीवन दें।
              </p>
            </div>

            <div className="flex flex-col gap-4 pt-4 sm:flex-row">
              <Button
                size="lg"
                className="group bg-orange-600 text-base hover:bg-orange-700"
              >
                <Heart className="mr-2 h-5 w-5" />
                अभी दान करें
                <ArrowRight className="ml-2 h-4 w-0 transition-all group-hover:w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-green-700 text-base text-green-700 hover:bg-green-50"
              >
                <Info className="mr-2 h-5 w-5" />
                और जानें
              </Button>
            </div>

            {/* <div className="mt-6 flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="inline-block h-10 w-10 overflow-hidden rounded-full border-2 border-white"
                    >
                      <Image
                        src={`/placeholder.svg?height=40&width=40`}
                        width={40}
                        height={40}
                        alt={`Donor ${i}`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  <span className="font-bold text-orange-600">12,047+</span>{" "}
                  दानदाताओं से जुड़ें
                </span>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  <span className="font-bold text-green-700">4.9/5</span> रेटिंग
                  (2,300+ समीक्षाएँ)
                </span>
              </div>
            </div> */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-xl bg-orange-100 md:-right-8 md:-top-8 md:h-32 md:w-32"></div>
            <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-xl bg-green-100 md:-bottom-8 md:-left-8 md:h-32 md:w-32"></div>

            <div className="relative z-10 w-full max-w-lg overflow-hidden rounded-2xl border-4 border-white shadow-2xl">
              <Carousel className="w-full" plugins={[plugin.current as any]}>
                <CarouselContent>
                  {images.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="overflow-hidden">
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={`गौ माता ${index + 1}`}
                          width={600}
                          height={400}
                          className="aspect-[4/3] h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </Carousel>
            </div>

            <div className="absolute -bottom-6 right-6 z-20 rounded-lg bg-white p-3 shadow-lg md:p-4">
              <div className="flex flex-col items-center">
                <div className="text-center">
                  <p className="text-xl font-bold text-orange-600 md:text-2xl">
                    300+
                  </p>
                  <p className="text-xs text-gray-500 md:text-sm">
                    गौ माता की रक्षा
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* 
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4"
        >
          <div className="rounded-xl bg-white p-4 shadow-md transition-transform hover:-translate-y-1 hover:shadow-lg">
            <div className="flex flex-col items-center text-center">
              <div className="mb-2 rounded-full bg-orange-100 p-2">
                <Image
                  src="/images/icon-cow.png"
                  alt="Cow Icon"
                  width={32}
                  height={32}
                  className="h-8 w-8"
                />
              </div>
              <p className="text-2xl font-bold text-orange-600">1,247+</p>
              <p className="text-sm text-gray-500">गौ माता संरक्षित</p>
            </div>
          </div>
          <div className="rounded-xl bg-white p-4 shadow-md transition-transform hover:-translate-y-1 hover:shadow-lg">
            <div className="flex flex-col items-center text-center">
              <div className="mb-2 rounded-full bg-green-100 p-2">
                <Image
                  src="/images/icon-ashram.png"
                  alt="Ashram Icon"
                  width={32}
                  height={32}
                  className="h-8 w-8"
                />
              </div>
              <p className="text-2xl font-bold text-green-700">24</p>
              <p className="text-sm text-gray-500">गौशालाएँ</p>
            </div>
          </div>
          <div className="rounded-xl bg-white p-4 shadow-md transition-transform hover:-translate-y-1 hover:shadow-lg">
            <div className="flex flex-col items-center text-center">
              <div className="mb-2 rounded-full bg-orange-100 p-2">
                <Image
                  src="/images/icon-donation.png"
                  alt="Donation Icon"
                  width={32}
                  height={32}
                  className="h-8 w-8"
                />
              </div>
              <p className="text-2xl font-bold text-orange-600">₹4.3 करोड़</p>
              <p className="text-sm text-gray-500">कुल दान</p>
            </div>
          </div>
          <div className="rounded-xl bg-white p-4 shadow-md transition-transform hover:-translate-y-1 hover:shadow-lg">
            <div className="flex flex-col items-center text-center">
              <div className="mb-2 rounded-full bg-green-100 p-2">
                <Image
                  src="/images/icon-calendar.png"
                  alt="Calendar Icon"
                  width={32}
                  height={32}
                  className="h-8 w-8"
                />
              </div>
              <p className="text-2xl font-bold text-green-700">18</p>
              <p className="text-sm text-gray-500">वर्षों का अनुभव</p>
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
