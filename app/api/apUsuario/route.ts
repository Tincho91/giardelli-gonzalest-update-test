import { EmailTemplate } from "@/components/emails/mainContactForm";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const formData = await request.json();

    const data = await resend.emails.send({
      from: "Consultas desde Web <giardelli@gonzalez.com>",
      to: ["maiarumartin@hotmail.com"],
      subject: `Consulta de ${formData.name}`,
      react: EmailTemplate(formData),
      text: "",
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}