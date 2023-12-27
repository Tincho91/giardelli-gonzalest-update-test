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
            to: formData.user.email,
            subject: "Confirmación de registro",
            html: `
            ¡Hola! Gracias por sumarte a nuestra web! Ya sos parte de nuestra base de datos.
            <br>
            <br>
            Si tu perfil coincide con alguna de nuestras búsquedas activas, nos pondremos en contacto para coordinar una entrevista.
            Agradecemos tu interés en formar parte de nuestro equipo! 
            <br>
            <br>
            Saludos,
            Giardelli & Gonzalez
            `
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Failed to Send Email" }, { status: 500 });
    }
}