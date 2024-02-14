import { NextResponse } from "next/server";
import ContactEmail from "@/emails/contact-email";
import { render } from "@react-email/render";

import { sendEmail } from "@/lib/email";
import ContactForm from "@/components/pages/home/contact-form";

export const POST = async (req: Request) => {
  const data = await req.json();

  if (!data.name || !data.email || !data.subject || !data.message) {
    return NextResponse.json({ message: "Bad request" }, { status: 400 });
  }

  try {
    await sendEmail({
      to: "lucamezza4@gmail.com",
      subject: `New Contact: ${data.subject}`,
      html: render(
        ContactEmail({
          values: {
            name: data.name,
            email: data.email,
            subject: data.subject,
            message: data.message,
          },
        })
      ),
    });

    return NextResponse.json(
      { message: "Successfully sent Email." },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 400 });
  }

  return NextResponse.json({ message: "Test" }, { status: 200 });
};
