const phoneAnkit = "+919179780705";
const phoneAbadh = "+919691659229";
const phoneParvesh = "+919753540068";
const bankDetails = {
  accountName: "श्री देव राम जानकी गौशाला",
  accountNumber: "3610523573",
  ifscCode: "CBIN0281027",
  bankName: "सेंट्रल बैंक ऑफ इंडिया",
  branch: "गाडरवारा शाखा",
};
export const contactDetails = {
  name: "श्री महंत बालकदास जी महाराज",
  email: "shridevramjanki@gmail.com",
  phone_parvesh: phoneParvesh,
  phone_ankit: phoneAnkit,
  phone_abadh: phoneAbadh,
  allPhones: `${phoneAnkit}, ${phoneAbadh}, ${phoneParvesh}`,
  call_ankit: "tel:" + phoneAnkit,
  call_abadh: "tel:" + phoneAbadh,
  call_parvesh: "tel:" + phoneParvesh,
  address:
    "श्री देवराम जानकी गौशाला, ग्राम बगदरा,तहसील गाडरवारा, जिला नरसिंहपुर, मध्य प्रदेश – 487551",
  facebook: "https://www.facebook.com/share/1FwvsPYGci/",
  instagram:
    "https://www.instagram.com/shridevramjankigaushala?igsh=bjB2Y3pueG45dWlu",
  youtube: "https://www.youtube.com/@ShriDevRamJankiGaushala",
  whatsapp: "https://wa.me/919179780705",
  bankDetails: bankDetails,
};

export const paymentDetails = {
  upi: {
    id: "12350887@cbin",
    name: "Shri DevRam Janki Gaushala",
    qrCode: "/images/payment/qr.png",
  },
  bank: bankDetails,
};

export const statsDetails = {
  cows: "300+",
  yoe: new Date().getFullYear() - 2015,
  teamMembers: "20+",
  shelters: "1",
  awards: "5+",
};
