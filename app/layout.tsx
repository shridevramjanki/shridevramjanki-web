import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Shri DevRam Janki Gaushala",
  description:
    "हमारा मिशन गौ माता की रक्षा और सेवा करना है, जो हमारी संस्कृति का अभिन्न अंग हैं। हम गौ माताओं को सुरक्षित आश्रय, पौष्टिक आहार और उचित चिकित्सा देखभाल प्रदान करते हैं। साथ ही, हम लोगों को गौ संरक्षण के महत्व के बारे में जागरूक करते हैं और गौ आधारित उत्पादों को बढ़ावा देते हैं।",
  keywords: "cow donation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
