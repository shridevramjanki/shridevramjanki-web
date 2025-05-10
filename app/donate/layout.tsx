"use client";

import DonationProviderWrapper from "@/components/donation-provider-wrapper";

export default function DonateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DonationProviderWrapper>{children}</DonationProviderWrapper>;
}
