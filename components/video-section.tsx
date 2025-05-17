"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Youtube, ArrowRight } from "lucide-react";
import { contactDetails } from "@/content";

export default function VideoSection() {
  const videos = [
    {
      id: 1,
      embedUrl: "https://www.youtube.com/embed/6AEHeBWmscI",
    },
    {
      id: 2,
      embedUrl: "https://www.youtube.com/embed/IN4an0nus4A",
    },
    {
      id: 3,
      embedUrl: "https://www.youtube.com/embed/l7VT5rPZRWs",
    },
  ];

  return (
    <section
      id="video-section"
      className="relative w-full overflow-hidden bg-gradient-to-br from-green-50 via-white to-orange-50 py-12 md:py-16 lg:py-20"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-orange-100 opacity-40"></div>
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-green-100 opacity-40"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            <span className="text-orange-600">वीडियो</span>{" "}
            <span className="text-green-700">गैलरी</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            गौशाला के कार्यों और गतिविधियों का प्रत्यक्ष दर्शन करें, और जानें कि
            आपके दान का उपयोग कैसे किया जाता है।
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {videos.map((video) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: video.id * 0.1 }}
              className="overflow-hidden rounded-xl bg-white shadow-lg transition-all hover:shadow-xl"
            >
              <div className="aspect-video w-full overflow-hidden">
                <iframe
                  className="h-full w-full"
                  src={video.embedUrl}
                  title={`Video ${video.id}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 flex justify-center"
        >
          <Link
            href={contactDetails.youtube}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="group bg-red-600 text-base hover:bg-red-700"
            >
              <Youtube className="mr-2 h-5 w-5" />
              हमारे यूट्यूब चैनल पर और वीडियो देखें
              <ArrowRight className="ml-2 h-4 w-0 transition-all group-hover:w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
