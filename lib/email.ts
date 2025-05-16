import nodemailer from "nodemailer";

type PaymentInfo = {
  user: {
    name: string;
    address: string;
    phone: string;
  };
  amount: number;
  donationType: string;
  paymentMethod: {
    upi: {
      id: string;
      name: string;
      qrCode: string;
    };
    bank: {
      accountName: string;
      accountNumber: string;
      ifscCode: string;
      bankName: string;
      branch: string;
    };
  };
  timestamp: string;
};

// Create a transporter with Gmail and app password
// Note: APP_PASSWORD should be stored in environment variables, not hardcoded
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "shridevramjanki@gmail.com",
    pass: process.env.GMAIL_APP_PASSWORD || "",
  },
});

export const sendPaymentEmail = async (
  paymentInfo: PaymentInfo
): Promise<boolean> => {
  try {
    // Format the HTML content
    const htmlContent = `
      <h2>श्री देवराम जानकी गौशाला - नया दान प्राप्त हुआ</h2>
      <h3>दानदाता विवरण:</h3>
      <p><strong>नाम:</strong> ${paymentInfo.user.name}</p>
      <p><strong>पता:</strong> ${paymentInfo.user.address}</p>
      <p><strong>फोन:</strong> ${paymentInfo.user.phone}</p>
      
      <h3>दान विवरण:</h3>
      <p><strong>राशि:</strong> ₹${paymentInfo.amount}</p>
      <p><strong>दान प्रकार:</strong> ${
        paymentInfo.donationType || "सामान्य दान"
      }</p>
      <p><strong>दिनांक:</strong> ${new Date(
        paymentInfo.timestamp
      ).toLocaleString("hi-IN", {
        timeZone: "Asia/Kolkata",
      })}</p>
      
     
    `;

    // <h3>भुगतान विधि:</h3>
    // <p><strong>UPI आईडी:</strong> ${paymentInfo.paymentMethod.upi.id}</p>
    // <p><strong>बैंक विवरण:</strong></p>
    // <ul>
    //   <li>खाता धारक: ${paymentInfo.paymentMethod.bank.accountName}</li>
    //   <li>खाता संख्या: ${paymentInfo.paymentMethod.bank.accountNumber}</li>
    //   <li>IFSC: ${paymentInfo.paymentMethod.bank.ifscCode}</li>
    //   <li>बैंक: ${paymentInfo.paymentMethod.bank.bankName}</li>
    //   <li>शाखा: ${paymentInfo.paymentMethod.bank.branch}</li>
    // </ul>

    // Configure email options
    const mailOptions = {
      from: "shridevramjanki@gmail.com",
      to: "shridevramjanki@gmail.com",
      subject: `नया दान प्राप्त हुआ - ${paymentInfo.user.name} से ₹${paymentInfo.amount}`,
      html: htmlContent,
    };

    // Send the email
    const result = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", result.response);
    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    return false;
  }
};
