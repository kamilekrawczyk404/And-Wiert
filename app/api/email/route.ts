import { type NextRequest, NextResponse } from "next/server";
import Mail from "nodemailer/lib/mailer";
import nodemailer, { Transporter } from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

export async function POST(request: NextRequest) {
  const { name, email, title, emailMessage } = await request.json();

  const transport: Transporter<SMTPTransport.SentMessageInfo> =
    nodemailer.createTransport({
      // @ts-ignore
      secure: true,
      // service: "ovh",
      host: process.env.NEXT_PUBLIC_SMTP_HOST,
      port: process.env.NEXT_PUBLIC_SMTP_PORT,
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL_ADDRESS,
        pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
      },
    });

  const mailOptions: Mail.Options = {
    from: email,
    to: process.env.NEXT_PUBLIC_EMAIL_ADDRESS,
    subject: `Wiadomość od ${name} - ${title}`,
    text: emailMessage,
  };

  const sendEmailPromise = () => {
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, (error) => {
        if (error) {
          reject(error.message);
        } else {
          resolve("Email has been sent");
        }
      });
    });
  };

  try {
    const response = await sendEmailPromise();
    return NextResponse.json({ success: true, message: response });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error,
      status: 500,
    });
  }
}
