import { NextResponse } from "next/server";
import { sendPaymentEmail } from "@/lib/email";

export async function POST(request: Request) {
  try {
    const paymentInfo = await request.json();

    // Validate required fields
    if (!paymentInfo.user?.name || !paymentInfo.amount) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Send the email
    const success = await sendPaymentEmail(paymentInfo);

    if (success) {
      return NextResponse.json({
        success: true,
        message: "Email sent successfully",
      });
    } else {
      return NextResponse.json(
        { success: false, message: "Failed to send email" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Error in email API route:", error);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}
