import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import VideoSection from "@/components/video-section";
import AboutSection from "@/components/about-section";
import GallerySection from "@/components/gallery-section";
import DonationSection from "@/components/donation-section";
import PujaDonationSection from "@/components/puja-donation";
import Footer from "@/components/footer";
import ShelterCostsSection from "@/components/shelter-cost";
import DulaDaanSection from "@/components/tula-dan";
import DonationProviderWrapper from "@/components/donation-provider-wrapper";
import QuickDonationSection from "@/components/quick-donation-section";
import CowReverenceSection from "@/components/cow-reverence-section";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <QuickDonationSection />
        <AboutSection />
        <VideoSection />
        <CowReverenceSection />
        <GallerySection />
        <DonationProviderWrapper>
          <DonationSection />
          <PujaDonationSection />
        </DonationProviderWrapper>
        <DulaDaanSection />
        <ShelterCostsSection />
      </main>
      <Footer />
    </>
  );
}
