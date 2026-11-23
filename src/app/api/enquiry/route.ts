import { NextResponse } from 'next/server';
import { z } from 'zod';
import { addEnquiry, getEnquiries } from '@/lib/storage';

const enquirySchema = z.object({
  studentName: z.string().min(2, 'Full Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().regex(/^[6-9]\d{9}$/, 'Please enter a valid 10-digit Indian mobile number'),
  programme: z.string().min(1, 'Please select a programme of interest'),
  qualification: z.string().min(2, 'Please specify your qualification or current grade'),
  preferredContact: z.enum(['Phone', 'Email', 'WhatsApp']),
  message: z.string().optional(),
  agreeToPolicy: z.boolean().refine((val) => val === true, {
    message: 'You must agree to the privacy policy'
  })
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = enquirySchema.parse(body);

    const savedRecord = addEnquiry({
      studentName: validatedData.studentName,
      email: validatedData.email,
      phone: validatedData.phone,
      programme: validatedData.programme,
      qualification: validatedData.qualification,
      preferredContact: validatedData.preferredContact,
      message: validatedData.message
    });

    return NextResponse.json({
      success: true,
      message: 'Admission enquiry submitted successfully. Our admissions counsellor will contact you shortly.',
      enquiryId: savedRecord.id
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
      {
        success: false,
        message: 'An unexpected server error occurred. Please try again later.'
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  const enquiries = getEnquiries();
  return NextResponse.json({ success: true, data: enquiries });
}
