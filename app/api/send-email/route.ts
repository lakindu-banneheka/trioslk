    import { NextResponse } from 'next/server';
    import nodemailer from 'nodemailer';

    export async function POST(req: Request) {
      const { name, email, phone, subject, message } = await req.json();

      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      try {
        await transporter.sendMail({
          from: process.env.EMAIL_USER,
          to: process.env.RECIPIENT_EMAIL, // The email address to send to
          replyTo: email, // The sender's email for replies
          subject: `Contact Form Submission from ${name}`,
          html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #333;">
                <h2 style="color: #4CAF50;">New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <p><strong>Message:</strong></p>
                <blockquote style="background-color: #f9f9f9; padding: 10px; border-left: 5px solid #4CAF50;">
                    ${message}
                </blockquote>
                <p style="font-size: 0.9em; color: #777;">This email was sent from your contact form.</p>
            </div>
            `,
        });

        return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
      } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ message: 'Failed to send email.' }, { status: 500 });
      }
    }