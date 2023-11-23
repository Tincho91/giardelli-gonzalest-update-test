import { EmailTemplate } from "@/components/emails/userPositionApplication";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const emailData = await request.json();

    const data = await resend.emails.send({
      from: "Giardelli Gonzalez <Giardelli-Gonzalez@resend.dev>",
      to: emailData.user.email,
      subject: `Aplicación recibida`,
      react: EmailTemplate(emailData),
      text: "",
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}