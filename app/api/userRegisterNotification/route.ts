import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: any) {
    try {
        const formData = await request.json();

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            secure: true,
            auth: {
                user: process.env.SMTP_EMAIL,
                pass: process.env.SMTP_PASSWORD,
            }
        });

        const mailOptions = {
            from: process.env.SMTP_EMAIL,
            to: process.env.SMTP_EMAIL,
            subject: "Nuevo Registro de Usuario",
            html: `
            Un nuevo usuario se subscribió en la web:
            <br>
            <br>
            Nombre: ${formData.user.name}
            <br>
            <br>
            CV: ${formData.user.cv}
            <br>
            <br>
            Email: ${formData.user.email}
            `
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Failed to Send Email" }, { status: 500 });
    }
}