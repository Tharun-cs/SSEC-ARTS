'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

const contactFormSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().regex(/^[6-9]\d{9}$/, 'Please enter a valid 10-digit mobile number'),
  subject: z.string().min(3, 'Subject must be at least 3 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters')
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export const ContactForm: React.FC = () => {
  const [serverStatus, setServerStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    setServerStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      const resData = await response.json();

      if (response.ok && resData.success) {
        setServerStatus({
          type: 'success',
          message: resData.message || 'Thank you. Your message has been sent successfully.'
        });
        reset();
      } else {
        setServerStatus({
          type: 'error',
          message: resData.message || 'Failed to submit. Please check your inputs.'
        });
      }
    } catch {
      setServerStatus({
        type: 'error',
        message: 'Network error. Please try again.'
      });
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-xs border border-gray-200 p-6 sm:p-8">
      <h3 className="text-xl font-bold text-[#242424] mb-1">Send a Message</h3>
      <p className="text-xs text-gray-500 mb-6">
        Have questions regarding autonomous programmes, admissions, or campus visits? Send your enquiry to our administrative desk at Punjai Puliampatti.
      </p>

      {serverStatus.type === 'success' && (
        <div className="mb-6 p-4 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <div className="text-xs">{serverStatus.message}</div>
        </div>
      )}

      {serverStatus.type === 'error' && (
        <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200 text-red-900 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-[#CF0003] shrink-0 mt-0.5" />
          <div className="text-xs">{serverStatus.message}</div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
        <div>
          <label className="block text-xs font-bold uppercase text-gray-700 mb-1">
            Full Name <span className="text-[#CF0003]">*</span>
          </label>
          <input
            type="text"
            placeholder="Your Name"
            {...register('fullName')}
            className={`w-full text-sm px-3.5 py-2.5 rounded border ${
              errors.fullName ? 'border-red-500 bg-red-50/20' : 'border-gray-300'
            } focus:border-[#CF0003] focus:ring-1 focus:ring-[#CF0003] outline-none`}
          />
          {errors.fullName && (
            <p className="text-red-600 text-xs mt-1">{errors.fullName.message}</p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase text-gray-700 mb-1">
              Email Address <span className="text-[#CF0003]">*</span>
            </label>
            <input
              type="email"
              placeholder="name@domain.com"
              {...register('email')}
              className={`w-full text-sm px-3.5 py-2.5 rounded border ${
                errors.email ? 'border-red-500 bg-red-50/20' : 'border-gray-300'
              } focus:border-[#CF0003] focus:ring-1 focus:ring-[#CF0003] outline-none`}
            />
            {errors.email && (
              <p className="text-red-600 text-xs mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-gray-700 mb-1">
              Phone Number <span className="text-[#CF0003]">*</span>
            </label>
            <input
              type="tel"
              maxLength={10}
              placeholder="10-digit mobile"
              {...register('phone')}
              className={`w-full text-sm px-3.5 py-2.5 rounded border ${
                errors.phone ? 'border-red-500 bg-red-50/20' : 'border-gray-300'
              } focus:border-[#CF0003] focus:ring-1 focus:ring-[#CF0003] outline-none`}
            />
            {errors.phone && (
              <p className="text-red-600 text-xs mt-1">{errors.phone.message}</p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase text-gray-700 mb-1">
            Subject <span className="text-[#CF0003]">*</span>
          </label>
          <input
            type="text"
            placeholder="e.g. Admission Query / Campus Visit Enquiry"
            {...register('subject')}
            className={`w-full text-sm px-3.5 py-2.5 rounded border ${
              errors.subject ? 'border-red-500 bg-red-50/20' : 'border-gray-300'
            } focus:border-[#CF0003] focus:ring-1 focus:ring-[#CF0003] outline-none`}
          />
          {errors.subject && (
            <p className="text-red-600 text-xs mt-1">{errors.subject.message}</p>
          )}
        </div>

        <div>
          <label className="block text-xs font-bold uppercase text-gray-700 mb-1">
            Message <span className="text-[#CF0003]">*</span>
          </label>
          <textarea
            rows={4}
            placeholder="Type your message here..."
            {...register('message')}
            className={`w-full text-sm px-3.5 py-2.5 rounded border ${
              errors.message ? 'border-red-500 bg-red-50/20' : 'border-gray-300'
            } focus:border-[#CF0003] focus:ring-1 focus:ring-[#CF0003] outline-none`}
          />
          {errors.message && (
            <p className="text-red-600 text-xs mt-1">{errors.message.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#CF0003] hover:bg-[#CF0003] disabled:bg-gray-400 text-white font-bold py-3 px-6 rounded-md text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-xs"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Sending...</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4 text-[#FFCB0B]" />
              <span>Send Message</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
};
