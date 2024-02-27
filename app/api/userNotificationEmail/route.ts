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
            <h4>
                ¡Hola ${formData.user.name}! Recibimos tu aplicación al puesto "${formData.application.name}"
            </h4>
            <br>
            <h4>
                Desde nuestro equipo, vamos a estar revisando tu CV y si tu perfil se ajusta a los requisitos de la búsqueda, nos pondremos en contacto para coordinar una entrevista.
            </h4>
            <h4>
                ¡Agradecemos tu tiempo e interés en participar de este proceso de selección!
            </h4>
            <br>
            <h4>
                Saludos,
            </h4>
            <h4>
                Giardelli & Gonzalez
            </h4>
            <img src="https://giardelli-gonzalez-web.vercel.app/brand.png" alt="Logo" style="width: 250px; height: auto;">
            `
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Failed to Send Email" }, { status: 500 });
    }
}