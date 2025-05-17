"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLoading } from "@/context/loading-context";

export const LoadingDialog = () => {
  const { isLoading } = useLoading();

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-[#FEF8F0]">
      <div className="flex flex-col items-center justify-center max-w-[300px] text-center">
        <div className="mb-4">
          <Image
            src="/images/logo.png"
            alt="Gaushala Logo"
            width={80}
            height={80}
            className="mx-auto"
          />
        </div>

        <Image
          src="/images/cow-1.jpg"
          alt="Gomata"
          width={120}
          height={120}
          className="mx-auto rounded-full border-2 border-primary shadow-md mb-4"
        />

        <h2 className="text-2xl font-bold text-primary mb-1 font-serif">
          गौ माता की जय
        </h2>

        <p className="text-lg text-secondary mb-4">वन्दे गो मातरम्</p>

        {/* Traditional spinner */}
        <div className="relative h-10 w-10 mb-2">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary"></div>
        </div>
      </div>
    </div>
  );
};
