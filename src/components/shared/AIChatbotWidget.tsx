'use client';

import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Sparkles, HelpCircle } from 'lucide-react';
import { COLLEGE_INFO, PROGRAMMES } from '@/data/collegeData';

interface Message {
  sender: 'bot' | 'user';
  text: string;
  time: string;
}

const FAQ_RESPONSES: Record<string, string> = {
  courses: `Sree Sakthi College of Arts and Science (Elite Campus) offers 7 premier autonomous degree programmes:
1. B.Com. Computer Applications
2. BBA. Computer Applications
3. B.Sc. Computer Science
4. BCA (Bachelor of Computer Applications)
5. B.Sc. Information Technology
6. B.Sc. Mathematics
7. B.A. English Literature`,

  admissions: `Admissions are currently OPEN for the 2026–2027 Academic Year! You can submit an enquiry online via our Admissions page or visit our campus on Ooty Main Road, Karamadai, Coimbatore. Merit concessions are available for top board exam scorers.`,

  location: `Our Elite Campus is located on Ooty Main Road (NH 181), Karamadai, Coimbatore – 641104, Tamil Nadu. Regular bus transport connects Coimbatore, Mettupalayam, Annur, and Tirupur.`,

  eligibility: `For BCA, B.Sc. CS, and B.Sc. IT: Pass in 10+2 with Mathematics or Computer Science.
For B.Com CA: Pass in 10+2 with Commerce, Accountancy, or Math.
For BBA CA & B.A. English: Pass in 10+2 in any stream.`,

  facilities: `Our Karamadai Elite Campus features:
• 150+ Workstations in air-conditioned Computing Labs
• Central Library with 18,000+ volumes & DELNET digital journals
• Digital Multimedia Language Lab
• Outdoor Athletics Track, Volleyball, and Cricket grounds
• College bus transport across the Coimbatore region`,

  contact: `Official Phone: +91 (0) 4254 262626
Email: ${COLLEGE_INFO.email}
Admissions: ${COLLEGE_INFO.admissionsEmail}
Address: Ooty Main Road, Karamadai, Coimbatore – 641104, Tamil Nadu.`
};

export const AIChatbotWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'bot',
      text: `Hello! Welcome to Sree Sakthi College of Arts and Science (Elite Campus – Karamadai). How can I assist you today?`,
      time: 'Just now'
    }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-ssec-chatbot', handleOpen);
    return () => window.removeEventListener('open-ssec-chatbot', handleOpen);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const getBotResponse = (query: string): string => {
    const q = query.toLowerCase();
    if (q.includes('course') || q.includes('programme') || q.includes('degree') || q.includes('branch')) {
      return FAQ_RESPONSES.courses;
    }
    if (q.includes('admission') || q.includes('apply') || q.includes('fee') || q.includes('seat')) {
      return FAQ_RESPONSES.admissions;
    }
    if (q.includes('location') || q.includes('where') || q.includes('address') || q.includes('reach')) {
      return FAQ_RESPONSES.location;
    }
    if (q.includes('eligible') || q.includes('qualification') || q.includes('mark') || q.includes('criteria')) {
      return FAQ_RESPONSES.eligibility;
    }
    if (q.includes('facility') || q.includes('lab') || q.includes('hostel') || q.includes('bus') || q.includes('sports')) {
      return FAQ_RESPONSES.facilities;
    }
    if (q.includes('contact') || q.includes('phone') || q.includes('number') || q.includes('email')) {
      return FAQ_RESPONSES.contact;
    }
    return `Thank you for your question. For detailed admissions counseling regarding our 7 degree programmes at the Elite Campus, please reach out to our desk at +91 (0) 4254 262626 or submit the online enquiry on our Admissions page!`;
  };

  const handleSend = (textToSend?: string) => {
    const text = textToSend || input;
    if (!text.trim()) return;

    const userMsg: Message = {
      sender: 'user',
      text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');

    setTimeout(() => {
      const botReply: Message = {
        sender: 'bot',
        text: getBotResponse(text),
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, botReply]);
    }, 500);
  };

  return (
    <>
      {/* Fixed Floating Trigger Button (Matches Reference: White Circle, Red Robot, Golden Yellow Border) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white border-[4px] border-[#FFCB0B] shadow-2xl flex items-center justify-center transition-transform duration-200 hover:scale-108 active:scale-95 group focus:outline-none"
        aria-label="Open Sree Sakthi Elite Campus Assistant"
      >
        <svg
          className="w-7 h-7 sm:w-8 sm:h-8 text-[#CF0003] fill-[#CF0003] transition-transform group-hover:scale-105"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 2a8 8 0 0 0-8 8v2a3 3 0 0 0 2 2.83V16a4 4 0 0 0 4 4h4a4 4 0 0 0 4-4v-1.17A3 3 0 0 0 20 12v-2a8 8 0 0 0-8-8z"
            fill="currentColor"
          />
          <circle cx="9" cy="11" r="1.5" fill="#FFFFFF" />
          <circle cx="15" cy="11" r="1.5" fill="#FFFFFF" />
          <path
            d="M9.5 14.5a3 3 0 0 0 5 0"
            stroke="#FFFFFF"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />
        </svg>

        <span className="absolute -top-0.5 -right-0.5 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border-2 border-white"></span>
        </span>
      </button>

      {/* Chat Window Modal */}
      {isOpen && (
        <div className="fixed bottom-22 right-4 sm:right-6 z-50 w-[92vw] sm:w-[380px] bg-white rounded-2xl shadow-2xl border-2 border-gray-200 overflow-hidden flex flex-col h-[520px] animate-in fade-in slide-in-from-bottom-5">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-[#B50004] to-[#CF0003] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white border-2 border-[#FFCB0B] flex items-center justify-center">
                <Bot className="w-5 h-5 text-[#CF0003]" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white leading-tight">Elite Campus Assistant</h4>
                <p className="text-[10px] text-red-100 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Online • Sree Sakthi Elite Campus
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white p-1 rounded-full transition-colors"
              aria-label="Close Assistant"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick FAQ Pills */}
          <div className="p-2.5 bg-gray-50 border-b border-gray-100 flex items-center gap-1.5 overflow-x-auto text-[11px] whitespace-nowrap">
            <button
              onClick={() => handleSend('What programmes are offered?')}
              className="bg-white border border-gray-200 text-gray-700 hover:border-[#CF0003] px-2.5 py-1 rounded-full font-medium"
            >
              Programmes
            </button>
            <button
              onClick={() => handleSend('How to apply for admissions?')}
              className="bg-white border border-gray-200 text-gray-700 hover:border-[#CF0003] px-2.5 py-1 rounded-full font-medium"
            >
              Admissions
            </button>
            <button
              onClick={() => handleSend('What is the campus location?')}
              className="bg-white border border-gray-200 text-gray-700 hover:border-[#CF0003] px-2.5 py-1 rounded-full font-medium"
            >
              Location
            </button>
            <button
              onClick={() => handleSend('Tell me about campus facilities')}
              className="bg-white border border-gray-200 text-gray-700 hover:border-[#CF0003] px-2.5 py-1 rounded-full font-medium"
            >
              Facilities
            </button>
          </div>

          {/* Message List */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 text-xs bg-gray-50/50">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex gap-2.5 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {m.sender === 'bot' && (
                  <div className="w-6 h-6 rounded-full bg-[#CF0003] text-white flex items-center justify-center shrink-0 text-[10px]">
                    <Bot className="w-3.5 h-3.5 text-[#FFCB0B]" />
                  </div>
                )}
                <div
                  className={`max-w-[80%] p-3 rounded-xl whitespace-pre-line leading-relaxed ${
                    m.sender === 'user'
                      ? 'bg-[#CF0003] text-white rounded-br-none'
                      : 'bg-white border border-gray-200 text-gray-800 rounded-bl-none shadow-xs'
                  }`}
                >
                  {m.text}
                  <span
                    className={`block text-[9px] mt-1 text-right ${
                      m.sender === 'user' ? 'text-red-200' : 'text-gray-400'
                    }`}
                  >
                    {m.time}
                  </span>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-white border-t border-gray-200 flex items-center gap-2"
          >
            <input
              type="text"
              placeholder="Ask about courses, admissions..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 text-xs px-3.5 py-2.5 border border-gray-300 rounded-lg focus:border-[#CF0003] focus:ring-1 focus:ring-[#CF0003] outline-none"
            />
            <button
              type="submit"
              className="bg-[#CF0003] hover:bg-[#B50004] text-white p-2.5 rounded-lg transition-colors cursor-pointer"
              aria-label="Send Message"
            >
              <Send className="w-4 h-4 text-[#FFCB0B]" />
            </button>
          </form>

        </div>
      )}
    </>
  );
};
