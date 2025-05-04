import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import GallerySection from "@/components/gallery-section"
import DonationSection from "@/components/donation-section"
import PujaDonationSection from "@/components/puja-donation"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        {/* <GallerySection /> */}
        {/* <DonationSection /> */}
        {/* <PujaDonationSection /> */}
      </main>
      <Footer />
    </>
  )
}
