"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Users,
  Award,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
} from "lucide-react";
import { contactDetails, statsDetails } from "@/content";
import Link from "next/link";

export default function AboutSection() {
  const establishmentYear = 2015;
  const currentYear = new Date().getFullYear();
  const yearsActive = currentYear - establishmentYear;

  const teamMembers = [
    {
      id: 1,
      name: contactDetails.name,
      role: "संस्थापक एवं अध्यक्ष",
      image: "/images/team/founder.png",
    },
    {
      id: 2,
      name: "श्री प्रेवेश जी राय",
      role: "कौशाध्यक्ष",
      image: "/images/team/cofounder.png",
      phone: contactDetails.phone_parvesh,
    },
    {
      id: 3,
      name: "श्री महेशकांत जी पटैल",
      role: "उपाध्यक्ष",
      image: "/images/team/co.png",
    },
    {
      id: 4,
      name: "श्री अंकित सिंह राजपूत",
      role: "वेबसाइट व्यवस्थापक",
      image: "/images/team/ankit.png",
      phone: contactDetails.phone_ankit,
    },
    {
      id: 5,
      name: "श्री संतअवध बिहारीदास जी",
      role: "सह संचालक",
      image: "/images/team/team-a-6.png",
    },
    {
      id: 5,
      name: "महामंडलेश्वर स्वामी अखिलेश्वरानंद गिरी जी महाराज",
      role: "हमारे मार्गदर्शक और प्रेरणा स्रोत (मध्यप्रदेश गौ संवर्धन कार्य परिषद के अध्यक्ष पूर्व राज्यमंत्री दर्जा प्राप्त)",
      image: "/images/team/team-a-5.png",
    },
  ];

  const stats = [
    {
      id: 1,
      value: statsDetails.teamMembers,
      label: "कर्मचारी",
      icon: <Users className="h-5 w-5" />,
    },
    {
      id: 2,
      value: statsDetails.yoe,
      label: "वर्षों का अनुभव",
      icon: <Calendar className="h-5 w-5" />,
    },
    {
      id: 3,
      value: statsDetails.shelters,
      label: "गौशालाएँ",
      icon: <MapPin className="h-5 w-5" />,
    },
    {
      id: 4,
      value: statsDetails.awards,
      label: "पुरस्कार",
      icon: <Award className="h-5 w-5" />,
    },
  ];

  return (
    <section
      id="about-us-section"
      className="relative w-full overflow-hidden bg-gradient-to-br from-orange-50 to-white py-16 md:py-20"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-green-100 opacity-40"></div>
        <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-orange-100 opacity-40"></div>
        <Image
          src="/images/mandala-pattern.png"
          alt="Decorative Pattern"
          width={200}
          height={200}
          className="absolute bottom-10 left-10 opacity-10"
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
            <span>हमारी कहानी</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl"
          >
            <span className="text-orange-600">गौ सेवा</span> के {yearsActive}{" "}
            वर्ष
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mx-auto mt-4 max-w-2xl text-gray-600"
          >
            हमारी यात्रा, हमारा मिशन और हमारी टीम के बारे में जानें। हम{" "}
            {establishmentYear} से गौ माता की सेवा में समर्पित हैं।
          </motion.p>
        </div>

        {/* Our Story */}
        <div className="mb-16 grid gap-8 md:grid-cols-2 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl h-[600px]"
          >
            <Image
              src="/images/collage.png"
              alt="गौशाला का इतिहास"
              width={500}
              height={300}
              className="w-full rounded-2xl object-contain"
            />
            <div className="absolute bottom-4 right-4 rounded-lg bg-white/90 p-2 backdrop-blur-sm">
              <p className="text-sm font-medium text-gray-900">
                स्थापना: {establishmentYear}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center space-y-4"
          >
            <h3 className="text-2xl font-bold text-gray-900">हमारी कहानी</h3>
            <div className="space-y-4 text-gray-600">
              <p>
                श्री देव राम जानकी गौशाला की स्थापना {establishmentYear} में{" "}
                {contactDetails.name} द्वारा की गई थी। उनका हृदय उन बेसहारा और
                पीड़ित गौ माताओं की वेदना से व्याकुल हो उठा जो सड़कों पर भटकने
                को मजबूर थीं, जिन्हें न भोजन मिल रहा था, न ही सुरक्षित आश्रय। इस
                करुण स्थिति को देखकर उन्होंने एक संकल्प लिया — गौ सेवा को अपना
                जीवन उद्देश्य बनाने का।
              </p>
              <p>
                हम मानते हैं कि "गो सेवा ही सबसे बड़ी सेवा है", क्योंकि गौ माता
                न केवल हमारी संस्कृति और धर्म का प्रतीक हैं, बल्कि संपूर्ण
                सृष्टि के कल्याण का आधार भी हैं। हमारी भारतीय परंपरा में गाय को
                माँ का स्थान दिया गया है — जो बिना किसी अपेक्षा के हमें देती है:
                दूध, खाद, औषधीय पंचगव्य और आत्मिक शांति।
              </p>
              <p>
                एक छोटी सी शुरुआत से शुरू होकर, आज हमारी एकमात्र गौशाला में 300
                से अधिक गौ माताओं को स्नेहपूर्वक आश्रय, देखभाल और सुरक्षा प्रदान
                की जा रही है। यहाँ हर एक गाय को परिवार के सदस्य की तरह माना जाता
                है — बीमार होने पर उपचार, वृद्ध होने पर सेवा, और हर दिन स्नेह से
                भरा व्यवहार।
              </p>
              <p>
                हमारा उद्देश्य केवल गौ माता की रक्षा तक सीमित नहीं है। हम उनके
                माध्यम से भारतीय संस्कृति, सनातन परंपराओं और करुणा के मूल
                मूल्यों को भी जीवित रखना चाहते हैं। हमारे कार्यों के पीछे यही
                भावना है — सद्भाव, सेवा और संस्कृति की रक्षा।
              </p>
              <p>
                श्री देव राम जानकी गौशाला न केवल एक स्थान है, बल्कि यह एक आंदोलन
                है — उन सभी के लिए जो यह मानते हैं कि गो सेवा, वास्तव में लोक
                सेवा और आत्म सेवा है।
              </p>
            </div>

            {/* <div className="pt-4">
              <Button className="group bg-orange-600 hover:bg-orange-700">
                और जानें
                <ArrowRight className="ml-2 h-4 w-0 transition-all group-hover:w-4" />
              </Button>
            </div> */}
          </motion.div>
        </div>

        {/* Mission & Vision */}
        <div className="mb-16 grid gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 p-6 shadow-md"
          >
            {/* <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-200">
              <Image
                src="/images/icon-mission.png"
                alt="Mission Icon"
                width={32}
                height={32}
                className="h-6 w-6"
              />
            </div> */}
            <h3 className="mb-3 text-xl font-bold text-gray-900">हमारा मिशन</h3>
            <p className="text-gray-700">
              हमारा मिशन गौ माता की रक्षा और सेवा करना है, जो हमारी संस्कृति का
              अभिन्न अंग हैं। हम गौ माताओं को सुरक्षित आश्रय, पौष्टिक आहार और
              उचित चिकित्सा देखभाल प्रदान करते हैं। साथ ही, हम लोगों को गौ
              संरक्षण के महत्व के बारे में जागरूक करते हैं और गौ आधारित उत्पादों
              को बढ़ावा देते हैं।
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="rounded-xl bg-gradient-to-br from-green-50 to-green-100 p-6 shadow-md"
          >
            {/* <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-200">
              <Image
                src="/images/icon-vision.png"
                alt="Vision Icon"
                width={32}
                height={32}
                className="h-6 w-6"
              />
            </div> */}
            <h3 className="mb-3 text-xl font-bold text-gray-900">
              हमारा विज़न
            </h3>
            <p className="text-gray-700">
              हमारा विज़न एक ऐसा समाज बनाना है जहां हर गौ माता को सम्मान और
              देखभाल मिले। हम चाहते हैं कि भारत में कोई भी गौ माता बेसहारा न हो
              और सभी को उचित आश्रय मिले। हम गौ संरक्षण को एक राष्ट्रीय आंदोलन
              बनाना चाहते हैं और गौ आधारित अर्थव्यवस्था को बढ़ावा देना चाहते
              हैं।
            </p>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 grid grid-cols-2 gap-4 md:grid-cols-4"
        >
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="rounded-xl bg-white p-6 text-center shadow-md transition-transform hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                {stat.icon}
              </div>
              <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-sm text-gray-500">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Team */}
        <div className="mb-16">
          <div className="mb-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900">हमारी टीम</h3>
            <p className="mt-2 text-gray-600">
              हमारे समर्पित टीम सदस्य जो गौ सेवा के लिए प्रतिबद्ध हैं
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group overflow-hidden rounded-xl bg-white text-center shadow-md transition-all duration-300 hover:shadow-lg"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-gray-900">
                    {member.name}
                  </h4>
                  <p className="text-sm text-gray-600">{member.role}</p>
                  {member.phone && (
                    <p className="text-sm text-gray-500">{member.phone}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* <div className="mt-8 text-center">
            <Button
              variant="outline"
              className="border-orange-600 text-orange-600 hover:bg-orange-50"
            >
              पूरी टीम देखें
            </Button>
          </div> */}
        </div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 p-8 text-white shadow-lg"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-2xl font-bold">हमसे संपर्क करें</h3>
              <p className="mb-6 text-orange-100">
                गौ सेवा या दान के बारे में अधिक जानकारी के लिए हमसे संपर्क करें।
                हमारी टीम आपकी सहायता के लिए तत्पर है।
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 flex-shrink-0" />
                  <span>{contactDetails.address} </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 flex-shrink-0" />
                  <span>{contactDetails.allPhones}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 flex-shrink-0" />
                  <span>{contactDetails.email}</span>
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-center">
              <Link href={contactDetails.call_ankit}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white bg-white/10 hover:bg-white/20"
                >
                  संपर्क करें
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
