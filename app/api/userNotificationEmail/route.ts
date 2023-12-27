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
            subject: "Confirmación de aplicación a empleo",
            html: `
                <h3>
                ¡Hola! Recibimos tu aplicación para el puesto "${formData.application.name}". 
                <br>
                <br>
                Desde nuestro equipo, vamos a estar revisando tu CV y si tu perfil coincide con las necesidades que estamos buscando, nos pondremos en contacto para coordinar una entrevista.
                ¡Agradecemos tu interés en participar de este proceso de selección! 
                <br>
                <br>
                Saludos,
                Giardelli & Gonzalez.
                </h3>
            `
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Failed to Send Email" }, { status: 500 });
    }
}