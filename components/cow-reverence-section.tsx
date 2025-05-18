"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CowReverenceSection() {
  return (
    <section
      id="cow-reverence-section"
      className="relative w-full overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-white py-16 md:py-24"
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
        <Image
          src="/images/mandala-pattern.png"
          alt="Decorative Pattern"
          width={300}
          height={300}
          className="absolute -top-20 right-1/4 rotate-45 opacity-10"
        />
        <div className="absolute bottom-40 right-20 h-40 w-40 rounded-full bg-yellow-100 opacity-30"></div>
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
            <span>गो सेवा महिमा</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl"
          >
            <span className="text-orange-600">वन्दे धेनु मातरम्</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mx-auto mt-4 h-1 w-24 rounded-full bg-orange-500"
          ></motion.div>
        </div>

        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl bg-white/90 p-6 shadow-xl backdrop-blur-sm md:p-8 lg:p-10"
          >
            {/* Decorative cow silhouette watermark */}
            <div className="absolute -right-16 bottom-0 opacity-5">
              <Image
                src="/images/cow-silhouette.png"
                alt="Cow Silhouette"
                width={300}
                height={300}
                className="opacity-20"
              />
            </div>

            <div className="mb-8 text-center">
              <div className="mb-4 inline-block rounded-full bg-orange-100 p-2">
                <Image
                  src="/images/om.png"
                  alt="Om Symbol"
                  width={40}
                  height={40}
                  className="h-8 w-8 opacity-80"
                />
              </div>
              <p className="text-xl font-medium text-orange-700 leading-relaxed">
                गोषु भक्तश्च लभते यद् यदिच्छति मानवा:।
                <br />
                स्त्रियोSपि भक्ता या गोषु ताश्च काममवाप्नुयु:।।
                <br />
                पुत्रार्थी लभते पुत्रं कन्यार्थी तामवाप्नयात्।
                <br />
                धनार्थी लभते वित्तं धर्मार्थी धर्ममवाप्नुयात्।।
                <br />
                विद्यार्थी चाप्नुयात् विद्यां सुखार्थी प्राप्नुयात् सुखम्।
                <br />न किंचिद् दुर्लभो चैव गवां भक्तस्य भारत।।
              </p>
              <p className="mt-3 text-sm font-medium text-gray-600">
                महाभारत अनु.83।50-52
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-lg">
                गायों की सेवा करने वाले गोभक्त को संसार में कुछ भी दुर्लभ नहीं
                है, ऐसा महर्षि वेदव्यास का वचन है।
              </p>

              <p>
                भगवान् श्री राम के पूर्वज राजा दिलीप की गो भक्ति इस बात का
                प्रमाण है कि - उन्होंने अपनी धर्मपत्नी सहित "नंदिनी नामक" गाय
                माता की सेवा की तो उन्हें पुत्र रत्न की प्राप्ति हुई।
              </p>

              <div className="my-6 flex items-center space-x-3">
                <div className="h-px flex-1 bg-orange-200"></div>
                <div className="text-orange-500">॥</div>
                <div className="h-px flex-1 bg-orange-200"></div>
              </div>

              <p>
                हमारे धर्मग्रंथों एवं शास्त्रों में वचन मिलता है - "गाय विश्व की
                माता है" गावो विश्वस्य मातर:, शास्त्र वचन है कि - गायों के शरीर
                में तैंतीस कोटि देवताओं का वास है। ऐसी गो माता के शरीर को
                खुजलाने से या उनके शरीर के कीटाणुओं को दूर करने से मनुष्य अपने
                समस्त पापों को धो डालता है। गायों को "गो-ग्रास" दान करने से
                महान् पुण्य की प्राप्ति होती है। गायों को चराकर उन्हें जलाशय तक
                घुमाकर जल पिलाने से मनुष्य अनंत वर्षों तक स्वर्ग में निवास करता
                है। गायों के लिये गोचर भूमि की व्यवस्था कर मनुष्य नि:संदेह
                अश्वमेध यज्ञ का फल प्राप्त करता है। गायों की आवासीय व्यवस्था
                हेतु गोशाला का निर्माण कर मनुष्य परे नगर का स्वामी बन जाता है और
                उन्हें नमक खिलाने से मनुष्य को महान् सौभाग्य की प्राप्ति होती
                है।
              </p>

              <div className="my-8 rounded-xl bg-orange-50 p-5 text-center">
                <p className="text-xl font-medium text-orange-700 leading-relaxed">
                  गवां कण्डूयनान्मर्त्य: सर्वं पापों व्यपोहति।
                  <br />
                  तासां ग्रासप्रदानेन महत्पुण्यमवाप्नुयात्।।
                  <br />
                  तासां च प्रचरं कृत्त्वा तथैव सलिलाशयम्।
                  <br />
                  स्वर्गलोक मुखाग्नि बहून्यब्दगणानि तु।।
                  <br />
                  तासां प्रचारभूमिं तु कृत्त्वा प्रप्नोति मानव:।
                  <br />
                  अश्वमेधस्य यज्ञस्य फलं प्राप्नोत्यशंसयम्।।
                  <br />
                  तासामावसथं कृत्त्वा नगराधिपतिर्भवेत्।
                  <br />
                  तथा लवणदानेन सौभाग्य महदश्नुते।।
                </p>
                <p className="mt-3 text-sm font-medium text-gray-600">
                  विष्णु धर्मोत्तर पुराण
                </p>
              </div>

              <div className="my-6 flex items-center space-x-3">
                <div className="h-px flex-1 bg-orange-200"></div>
                <div className="text-orange-500">॥</div>
                <div className="h-px flex-1 bg-orange-200"></div>
              </div>

              <p>
                उपर्युक्त धर्मशास्त्रों के धर्मोपदेश से प्रभावित होकर ही मेरे
                द्वारा "मध्यप्रदेश गो संवर्द्धन बोर्ड" के दायित्व निर्वहन काल
                में "प्रदेश की आठ करोड़ की मनुष्य आबादी से" अपील की गई है कि -
                "गो-ग्रास के निमित्त प्रतिदिन अपने घर से एक रोटी निकालने अपनी
                भारतीय सनातनी परम्परा का युगानुकुल नवाचार किया जाना आवश्यक ही
                नहीं अनिवार्य होना चाहिए", तदनुसार हम आप भोजन करने से पूर्व
                "गो-ग्रास के निमित्त" रुपये दस (₹10) प्रतिदिन एक गुल्लक में
                अवश्य डालें - " गो-ग्रास निकालने की हिन्दू परिवारों की यह पवित्र
                परम्परा इस आपाधापी के युग में लुप्त और सुप्त न होने पाये;
                प्रतिदिन दस रुपया निकालने पर एक वर्ष में तीन हजार छह सौ पचास
                रुपया संकलित हो जाते हैं। गोपाष्टमी के दिन इस संकलित राशि को
                गो-ग्रास के रूप में हम अपनी गांव की गोशाला में (श्रीदेवरामजानकी
                गोशाला, खिरका मंदिर गाडरवारा) में समर्पित कर पुण्य के भावी बनें,
                हमें गोमाता का आशीर्वाद तो मिलेगा ही; हमें धर्म, अर्थ, काम और
                मोक्ष इन चतुर्विध पुरुषार्थ का भी लाभ मिलेगा।
              </p>

              <p>
                गाडरवारा स्थित "श्री देवरामजानकी मंदिर" (खिरका मंदिर) के महंत
                श्री बालकदास जी महाराज गो सेवा-गो भक्ति के श्रेष्ठ उदाहरण हैं -
                हम आप सभी श्रद्धालु जन उनके इस गो-भक्ति के आदर्श को मन से
                स्वीकार करें।
              </p>

              <div className="mt-10 rounded-xl bg-gradient-to-r from-orange-50 to-amber-50 p-5 text-right">
                <p className="text-gray-700">मेरी अनंत शुभकामनायें -</p>
                <p className="text-xl font-medium text-orange-800">
                  महामण्डलेश्वर
                </p>
                <p className="text-xl font-medium text-orange-800">
                  स्वामी अखिलेश्वरानंद गिरि
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
