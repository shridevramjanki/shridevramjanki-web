import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative h-12 w-12 overflow-hidden rounded-full bg-amber-100">
                <Image src="/images/logo.png" alt="Gau Seva Logo" width={48} height={48} className="object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-orange-600">श्री देव राम जानकी गौशाला</span>
                <span className="text-sm text-green-700">Cow Protection Trust</span>
              </div>
            </Link>
            <p className="text-gray-600">
              हमारा मिशन भारत में गौ माता की रक्षा और सेवा करना है। आपके सहयोग से हम हजारों गौ माताओं को सुरक्षित आश्रय प्रदान कर रहे
              हैं।
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="rounded-full bg-orange-100 p-2 text-orange-600 transition-colors hover:bg-orange-200"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="rounded-full bg-orange-100 p-2 text-orange-600 transition-colors hover:bg-orange-200"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="rounded-full bg-orange-100 p-2 text-orange-600 transition-colors hover:bg-orange-200"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="rounded-full bg-orange-100 p-2 text-orange-600 transition-colors hover:bg-orange-200"
              >
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900">त्वरित लिंक</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 transition-colors hover:text-orange-600">
                  हमारे बारे में
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-600 transition-colors hover:text-orange-600">
                  हमारे प्रोजेक्ट
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-600 transition-colors hover:text-orange-600">
                  गैलरी
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-gray-600 transition-colors hover:text-orange-600">
                  प्रशंसापत्र
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 transition-colors hover:text-orange-600">
                  अक्सर पूछे जाने वाले प्रश्न
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 transition-colors hover:text-orange-600">
                  संपर्क करें
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900">संपर्क जानकारी</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-orange-600" />
                <span className="text-gray-600">गौ सेवा ट्रस्ट, 123 गौशाला मार्ग, वृंदावन, मथुरा, उत्तर प्रदेश - 281121</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-orange-600" />
                <span className="text-gray-600">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-orange-600" />
                <span className="text-gray-600">info@gauseva.org</span>
              </li>
            </ul>
            <div className="mt-4 rounded-lg border border-green-200 bg-green-50 p-3">
              <p className="text-sm text-green-800">
                <span className="font-bold">80G छूट उपलब्ध:</span> आपके दान पर आयकर अधिनियम की धारा 80G के तहत कर छूट उपलब्ध
                है।
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900">दान करें</h3>
            <p className="text-gray-600">गौ माता की सेवा के लिए आप QR कोड स्कैन करके सीधे दान कर सकते हैं।</p>
            <div className="flex flex-col items-center space-y-3">
              <div className="rounded-lg border-2 border-orange-200 bg-white p-2">
                <Image
                  src="/images/payment/qr-code.png"
                  alt="Donation QR Code"
                  width={150}
                  height={150}
                  className="h-36 w-36 object-contain"
                />
              </div>
              <p className="text-sm text-orange-600 font-medium">गौ सेवा ट्रस्ट</p>
            </div>
            <div className="mt-4 rounded-lg border border-orange-200 bg-orange-50 p-3">
              <p className="text-sm text-orange-800">
                <span className="font-bold">UPI से दान करें:</span> gauseva@ybl
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm text-gray-600 md:text-left">
              &copy; {new Date().getFullYear()} गौ सेवा ट्रस्ट। सर्वाधिकार सुरक्षित।
            </p>
            <div className="flex gap-4">
              <Link href="/privacy" className="text-sm text-gray-600 hover:text-orange-600">
                गोपनीयता नीति
              </Link>
              <Link href="/terms" className="text-sm text-gray-600 hover:text-orange-600">
                नियम और शर्तें
              </Link>
              <Link href="/sitemap" className="text-sm text-gray-600 hover:text-orange-600">
                साइटमैप
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
