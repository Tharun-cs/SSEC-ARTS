'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { PROGRAMMES } from '@/data/collegeData';

const enquiryFormSchema = z.object({
  studentName: z.string().min(2, 'Please enter your full name (at least 2 characters)'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().regex(/^[6-9]\d{9}$/, 'Please enter a valid 10-digit Indian mobile number'),
  programme: z.string().min(1, 'Please select a programme'),
  qualification: z.string().min(2, 'Please specify your qualification or current grade'),
  preferredContact: z.enum(['Phone', 'Email', 'WhatsApp']),
  message: z.string().optional(),
  agreeToPolicy: z.boolean().refine((val) => val === true, {
    message: 'You must consent to the admission privacy terms'
  })
});

type EnquiryFormData = z.infer<typeof enquiryFormSchema>;

export const AdmissionEnquiryForm: React.FC = () => {
  const [serverStatus, setServerStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
    enquiryId?: string;
  }>({ type: null, message: '' });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<EnquiryFormData>({
    resolver: zodResolver(enquiryFormSchema),
    defaultValues: {
      preferredContact: 'Phone',
      agreeToPolicy: false
    }
  });

  const onSubmit = async (data: EnquiryFormData) => {
    setServerStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      const resData = await response.json();

      if (response.ok && resData.success) {
        setServerStatus({
          type: 'success',
          message: resData.message || 'Admission enquiry submitted successfully!',
          enquiryId: resData.enquiryId
        });
        reset();
      } else {
        setServerStatus({
          type: 'error',
          message:
            typeof resData.errors === 'object'
              ? 'Please correct the highlighted errors in the form.'
              : resData.message || 'Submission failed. Please check your inputs.'
        });
      }
    } catch {
      setServerStatus({
        type: 'error',
        message: 'Network error. Please verify your connection or try again.'
      });
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border-2 border-gray-100 overflow-hidden">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#CF0003] to-[#CF0003] p-6 text-white text-center">
        <span className="text-[11px] font-black tracking-widest text-[#FFCB0B] uppercase bg-black/25 px-3 py-1 rounded-full inline-block mb-2">
          Academic Year 2026–2027
        </span>
        <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight">
          Online Admission Enquiry
        </h3>
        <p className="text-xs sm:text-sm text-red-100 mt-1">
          Autonomous Technical Campus – Karamadai, Coimbatore
        </p>
      </div>

      <div className="p-6 sm:p-8">
        {serverStatus.type === 'success' && (
          <div className="mb-6 p-4 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-start gap-3">
            <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-sm">Enquiry Registered Successfully!</h4>
              <p className="text-xs mt-1 text-emerald-800">{serverStatus.message}</p>
              {serverStatus.enquiryId && (
                <p className="text-xs font-mono text-emerald-950 mt-1 font-bold">
                  Reference ID: {serverStatus.enquiryId}
                </p>
              )}
            </div>
          </div>
        )}

        {serverStatus.type === 'error' && (
          <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200 text-red-900 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-[#CF0003] shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-sm">Submission Error</h4>
              <p className="text-xs mt-0.5 text-red-700">{serverStatus.message}</p>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
          {/* Row 1: Student Name and Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                Candidate Full Name <span className="text-[#CF0003]">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. K. Vigneshwaran"
                {...register('studentName')}
                className={`w-full text-sm px-3.5 py-2.5 rounded border ${
                  errors.studentName ? 'border-red-500 bg-red-50/30' : 'border-gray-300'
                } focus:border-[#CF0003] focus:ring-1 focus:ring-[#CF0003] outline-none transition-colors`}
              />
              {errors.studentName && (
                <p className="text-red-600 text-xs mt-1 font-medium">{errors.studentName.message}</p>
              )}
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                Email Address <span className="text-[#CF0003]">*</span>
              </label>
              <input
                type="email"
                placeholder="e.g. candidate@gmail.com"
                {...register('email')}
                className={`w-full text-sm px-3.5 py-2.5 rounded border ${
                  errors.email ? 'border-red-500 bg-red-50/30' : 'border-gray-300'
                } focus:border-[#CF0003] focus:ring-1 focus:ring-[#CF0003] outline-none transition-colors`}
              />
              {errors.email && (
                <p className="text-red-600 text-xs mt-1 font-medium">{errors.email.message}</p>
              )}
            </div>
          </div>

          {/* Row 2: Mobile Number and Programme */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                10-Digit Mobile Number <span className="text-[#CF0003]">*</span>
              </label>
              <input
                type="tel"
                maxLength={10}
                placeholder="e.g. 9842100000"
                {...register('phone')}
                className={`w-full text-sm px-3.5 py-2.5 rounded border ${
                  errors.phone ? 'border-red-500 bg-red-50/30' : 'border-gray-300'
                } focus:border-[#CF0003] focus:ring-1 focus:ring-[#CF0003] outline-none transition-colors`}
              />
              {errors.phone && (
                <p className="text-red-600 text-xs mt-1 font-medium">{errors.phone.message}</p>
              )}
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                Programme of Interest (7 Degrees) <span className="text-[#CF0003]">*</span>
              </label>
              <select
                {...register('programme')}
                className={`w-full text-sm px-3.5 py-2.5 rounded border bg-white ${
                  errors.programme ? 'border-red-500 bg-red-50/30' : 'border-gray-300'
                } focus:border-[#CF0003] focus:ring-1 focus:ring-[#CF0003] outline-none transition-colors`}
              >
                <option value="">-- Choose from 7 Programmes --</option>
                {PROGRAMMES.map((prog) => (
                  <option key={prog.id} value={prog.name}>
                    {prog.name}
                  </option>
                ))}
              </select>
              {errors.programme && (
                <p className="text-red-600 text-xs mt-1 font-medium">{errors.programme.message}</p>
              )}
            </div>
          </div>

          {/* Row 3: Current Qualification and Preferred Contact */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                Current Qualification / Stream <span className="text-[#CF0003]">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. +2 Bio-Maths / +2 Commerce / +2 CS"
                {...register('qualification')}
                className={`w-full text-sm px-3.5 py-2.5 rounded border ${
                  errors.qualification ? 'border-red-500 bg-red-50/30' : 'border-gray-300'
                } focus:border-[#CF0003] focus:ring-1 focus:ring-[#CF0003] outline-none transition-colors`}
              />
              {errors.qualification && (
                <p className="text-red-600 text-xs mt-1 font-medium">{errors.qualification.message}</p>
              )}
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                Preferred Contact Channel <span className="text-[#CF0003]">*</span>
              </label>
              <div className="grid grid-cols-3 gap-2 mt-1">
                {(['Phone', 'WhatsApp', 'Email'] as const).map((method) => (
                  <label
                    key={method}
                    className="flex items-center justify-center gap-1.5 p-2 rounded border border-gray-200 hover:bg-gray-50 cursor-pointer text-xs font-medium text-gray-700"
                  >
                    <input
                      type="radio"
                      value={method}
                      {...register('preferredContact')}
                      className="accent-[#CF0003]"
                    />
                    <span>{method}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Message / Remarks */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
              Any Specific Queries? (Optional)
            </label>
            <textarea
              rows={3}
              placeholder="Questions regarding bus transport, hostel accommodation, merit scholarships..."
              {...register('message')}
              className="w-full text-sm px-3.5 py-2 rounded border border-gray-300 focus:border-[#CF0003] focus:ring-1 focus:ring-[#CF0003] outline-none transition-colors resize-y"
            />
          </div>

          {/* Privacy Notice Consent */}
          <div className="pt-2">
            <label className="flex items-start gap-2.5 cursor-pointer">
              <input
                type="checkbox"
                {...register('agreeToPolicy')}
                className="mt-1 w-4 h-4 text-[#CF0003] rounded accent-[#CF0003] border-gray-300 focus:ring-[#CF0003]"
              />
              <span className="text-xs text-gray-600 leading-normal">
                I hereby declare that the details provided above are true to the best of my knowledge, and I consent to receive official admission information from Sree Sakthi Engineering College.
              </span>
            </label>
            {errors.agreeToPolicy && (
              <p className="text-red-600 text-xs mt-1 font-medium">{errors.agreeToPolicy.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#CF0003] hover:bg-[#CF0003] disabled:bg-gray-400 text-white font-bold py-3.5 px-6 rounded-md uppercase tracking-wider text-sm flex items-center justify-center gap-2 shadow-sm hover:shadow-md transition-all active:scale-[0.99]"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Submitting Enquiry...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 text-[#FFCB0B]" />
                  <span>Submit Admission Enquiry</span>
                </>
              )}
            </button>
            <p className="text-[11px] text-center text-gray-500 mt-2">
              Autonomous Technical Campus – Karamadai, Coimbatore – 641104
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
