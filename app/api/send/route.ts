import { EmailTemplate } from '@/components/emails/mainContactForm';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request : any) {
  try {
    // Extract firstName, email, and message from the request body
    const { firstName, email, message } = await request.json();

    const data = await resend.emails.send({
      from: 'TEST',
      to: [email],
      subject: 'Hello world',
      react: EmailTemplate({ firstName, message }), // Pass message here
      text: `Welcome, ${firstName}!\n\n${message}` // Include message in the text version
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}