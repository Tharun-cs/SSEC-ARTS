import { NextResponse } from 'next/server';
import { z } from 'zod';
import { addContactMessage, getContactMessages } from '@/lib/storage';

const contactSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().regex(/^[6-9]\d{9}$/, 'Please enter a valid 10-digit mobile number'),
  subject: z.string().min(3, 'Subject must be at least 3 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters')
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = contactSchema.parse(body);

    const saved = addContactMessage(validatedData);

    return NextResponse.json({
      success: true,
      message: 'Your message has been received. Our administrative office will get back to you soon.',
      contactId: saved.id
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          errors: error.flatten().fieldErrors
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, message: 'Server error processing contact request.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  const contacts = getContactMessages();
  return NextResponse.json({ success: true, data: contacts });
}
