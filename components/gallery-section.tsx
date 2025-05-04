"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { X, Filter, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const galleryImages = [
  {
    id: 1,
    src: "/images/gallery/cow-1.jpeg",
    alt: "गौशाला में गौ माता",
    category: "cows",
    featured: true,
  },
  {
    id: 2,
    src: "/images/gallery/cow-1.jpeg",
    alt: "आधुनिक गौशाला",
    category: "facilities",
  },
  {
    id: 3,
    src: "/images/gallery/cow-1.jpeg",
    alt: "स्वयंसेवक गौ सेवा करते हुए",
    category: "volunteers",
  },
  {
    id: 4,
    src: "/images/gallery/cow-1.jpeg",
    alt: "गौ माता और बछड़ा",
    category: "cows",
    featured: true,
  },
  {
    id: 5,
    src: "/images/gallery/cow-1.jpeg",
    alt: "गौ पूजा समारोह",
    category: "events",
  },
  {
    id: 6,
    src: "/images/gallery/cow-1.jpeg",
    alt: "चारा भंडार",
    category: "facilities",
  },
  {
    id: 7,
    src: "/images/gallery/cow-1.jpeg",
    alt: "गौ माता का समूह",
    category: "cows",
  },
  {
    id: 8,
    src: "/images/gallery/cow-1.jpeg",
    alt: "गौ चिकित्सा शिविर",
    category: "volunteers",
  },
  {
    id: 9,
    src: "/images/gallery/cow-1.jpeg",
    alt: "गौ दान समारोह",
    category: "events",
  },
  {
    id: 10,
    src: "/images/gallery/cow-1.jpeg",
    alt: "नवजात बछड़ा",
    category: "cows",
  },
];

const categories = [
  { id: "all", name: "सभी" },
  { id: "cows", name: "गौ माता" },
  { id: "facilities", name: "गौशाला" },
  { id: "volunteers", name: "स्वयंसेवक" },
  { id: "events", name: "कार्यक्रम" },
];

export default function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages =
    selectedCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-white to-orange-50 py-16 md:py-20">
      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-20 right-20 h-64 w-64 rounded-full bg-green-100 opacity-40"></div>
        <div className="absolute bottom-20 -left-20 h-64 w-64 rounded-full bg-orange-100 opacity-40"></div>
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
            className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-700"
          >
            <span>हमारी गौशाला की झलक</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl"
          >
            <span className="text-orange-600">गौ माता</span> की तस्वीरें
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mx-auto mt-4 max-w-2xl text-gray-600"
          >
            हमारी गौशाला में गौ माताओं की देखभाल, सुविधाओं और विभिन्न गतिविधियों
            की तस्वीरें देखें। आपके दान से इन पवित्र प्राणियों का जीवन बदल रहा
            है।
          </motion.p>
        </div>

        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          {/* Category Tabs - Desktop */}
          <div className="hidden md:flex md:flex-wrap md:gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={
                  selectedCategory === category.id ? "default" : "outline"
                }
                className={`rounded-full ${
                  selectedCategory === category.id
                    ? "bg-orange-600 text-white hover:bg-orange-700"
                    : "border-orange-200 text-gray-700 hover:bg-orange-50 hover:text-orange-700"
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </Button>
            ))}
          </div>

          {/* Category Dropdown - Mobile */}
          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="flex items-center gap-2 border-orange-200"
                >
                  <Filter className="h-4 w-4" />
                  <span>
                    फ़िल्टर:{" "}
                    {categories.find((c) => c.id === selectedCategory)?.name}
                  </span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                {categories.map((category) => (
                  <DropdownMenuItem
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={
                      selectedCategory === category.id
                        ? "bg-orange-50 font-medium text-orange-600"
                        : ""
                    }
                  >
                    {category.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* <Button
            variant="link"
            className="text-orange-600 hover:text-orange-700"
            onClick={() => setSelectedCategory("all")}
          >
            सभी देखें
          </Button> */}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className={`group cursor-pointer overflow-hidden rounded-xl bg-white shadow-md ${
                image.featured ? "" : ""
              }`}
              onClick={() => setSelectedImage(image.id)}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="text-sm font-medium">{image.alt}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* <div className="mt-10 text-center">
          <Button className="bg-orange-600 hover:bg-orange-700">
            और तस्वीरें देखें
          </Button>
        </div> */}

        {/* Lightbox Modal */}
        <Dialog
          open={selectedImage !== null}
          onOpenChange={(open) => !open && setSelectedImage(null)}
        >
          <DialogContent className="max-w-4xl border-none bg-transparent p-0 shadow-none">
            {selectedImage && (
              <div className="relative overflow-hidden rounded-lg  shadow-2xl">
                <div className="absolute right-2 top-2 z-10">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full bg-black/20 text-white backdrop-blur-sm hover:bg-black/30"
                    onClick={() => setSelectedImage(null)}
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src={
                      galleryImages.find((img) => img.id === selectedImage)
                        ?.src || ""
                    }
                    alt={
                      galleryImages.find((img) => img.id === selectedImage)
                        ?.alt || ""
                    }
                    fill
                    className="object-contain"
                  />
                </div>
                <div className=" p-4">
                  <p className="text-lg font-medium text-white text-center">
                    {galleryImages.find((img) => img.id === selectedImage)?.alt}
                  </p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
