import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir, readFile } from 'fs/promises';
import { existsSync, readFileSync } from 'fs';
import { join } from 'path';
import sgMail from '@sendgrid/mail';

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  service: string;
  message: string;
  honeypot?: string; // Anti-spam field
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json();

    // Honeypot check - if filled, it's likely a bot
    if (data.honeypot) {
      return NextResponse.json(
        { error: 'Invalid submission' },
        { status: 400 }
      );
    }

    // Validate required fields
    if (!data.name || !data.email || !data.service || !data.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Helper function to escape HTML to prevent XSS
    const escapeHtml = (text: string): string => {
      const map: { [key: string]: string } = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;',
      };
      return text.replace(/[&<>"']/g, (m) => map[m]);
    };

    // If SendGrid is configured, send email
    if (process.env.SENDGRID_API_KEY) {
      sgMail.setApiKey(process.env.SENDGRID_API_KEY);

      const msg = {
        to: 'hoosierdarling@gmail.com',
        from: process.env.SENDGRID_FROM_EMAIL || 'hoosierdarling@gmail.com',
        subject: `New Contact Form Submission from ${data.name}`,
        text: `
Name: ${data.name}
Email: ${data.email}
Company: ${data.company || 'Not provided'}
Service Interest: ${data.service}

Message:
${data.message}
        `,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
          <p><strong>Company:</strong> ${escapeHtml(data.company || 'Not provided')}</p>
          <p><strong>Service Interest:</strong> ${escapeHtml(data.service)}</p>
          <h3>Message:</h3>
          <p>${escapeHtml(data.message).replace(/\n/g, '<br>')}</p>
        `,
      };

      await sgMail.send(msg);
    } else {
      // Fallback: Save to JSON file
      const dataDir = join(process.cwd(), 'data');
      const submissionsFile = join(dataDir, 'submissions.json');

      try {
        await mkdir(dataDir, { recursive: true });
      } catch (err) {
        // Directory might already exist
      }

      const submission = {
        ...data,
        timestamp: new Date().toISOString(),
        id: `${Date.now()}-${Math.random().toString(36).substring(2, 11)}`,
      };

      // Read existing submissions or create new array
      let submissions = [];
      try {
        if (existsSync(submissionsFile)) {
          const fileContent = readFileSync(submissionsFile, 'utf8');
          submissions = JSON.parse(fileContent);
        }
      } catch (err) {
        submissions = [];
      }

      submissions.push(submission);

      await writeFile(submissionsFile, JSON.stringify(submissions, null, 2));
    }

    return NextResponse.json(
      { success: true, message: 'Your message has been sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to process submission. Please try again.' },
      { status: 500 }
    );
  }
}
