import { EmailTemplate } from "@/components/emails/userPositionApplication";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const emailData = await request.json();

    const data = await resend.emails.send({
      from: "Alerta de aplicación de usuario <onboarding@resend.dev>",
      to: ["maiarumartin@hotmail.com"],
      subject: `Nuevo Aplicante para ${emailData.application.name}`,
      react: EmailTemplate(emailData),
      text: "", // You can provide a plain text version if needed
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}