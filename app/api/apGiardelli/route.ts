import { EmailTemplate } from "@/components/emails/userPositionApplication";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const emailData = await request.json();

    const data = await resend.emails.send({
      from: "Alerta de aplicación de usuario <Giardelli-Gonzalez@resend.dev>",
      to: ["info@giardelli-gonzalez.com"],
      subject: `Nuevo Aplicante para ${emailData.application.name}`,
      react: EmailTemplate(emailData),
      text: "",
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}