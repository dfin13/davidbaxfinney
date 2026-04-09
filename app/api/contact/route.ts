import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, subject, message } = await req.json();

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ error: "Missing fields." }, { status: 400 });
  }

  const subjectLabels: Record<string, string> = {
    recruiting: "Recruiting / Internship Inquiry",
    networking: "Professional Networking",
    entrepreneurship: "Entrepreneurship / Collaboration",
    finance: "Finance / Investing Discussion",
    other: "Something Else",
  };

  const { error } = await resend.emails.send({
    from: "Contact Form <onboarding@resend.dev>",
    to: "davidbaxfinney@gmail.com",
    replyTo: email,
    subject: `[Contact] ${subjectLabels[subject] ?? subject} — ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nSubject: ${subjectLabels[subject] ?? subject}\n\n${message}`,
    html: `
      <div style="font-family:sans-serif;max-width:560px;margin:0 auto;padding:24px">
        <h2 style="margin:0 0 16px;font-size:20px;color:#0B1221">New message from your portfolio</h2>
        <table style="width:100%;border-collapse:collapse;margin-bottom:20px">
          <tr><td style="padding:8px 0;color:#64748b;font-size:13px;width:80px">Name</td><td style="padding:8px 0;font-size:14px;color:#0B1221;font-weight:600">${name}</td></tr>
          <tr><td style="padding:8px 0;color:#64748b;font-size:13px">Email</td><td style="padding:8px 0;font-size:14px;color:#0B1221"><a href="mailto:${email}" style="color:#C8983A">${email}</a></td></tr>
          <tr><td style="padding:8px 0;color:#64748b;font-size:13px">Subject</td><td style="padding:8px 0;font-size:14px;color:#0B1221">${subjectLabels[subject] ?? subject}</td></tr>
        </table>
        <div style="background:#f8fafc;border-left:3px solid #C8983A;padding:16px;border-radius:4px">
          <p style="margin:0;font-size:14px;color:#334155;white-space:pre-wrap">${message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</p>
        </div>
        <p style="margin-top:20px;font-size:12px;color:#94a3b8">Reply directly to this email to respond to ${name}.</p>
      </div>
    `,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Failed to send." }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
