// src/components/FloatingWhatsApp.tsx
import React from 'react';

const WHATSAPP_NUMBER = '919945943353'; // your WhatsApp number without "+" or spaces

export default function FloatingWhatsApp() {
  const handleClick = () => {
    const message = encodeURIComponent(
      "Hi, I’d like to know more about your AI, Apps & Billing solutions."
    );
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Chat on WhatsApp"
      className="
        fixed bottom-4 right-4 md:bottom-6 md:right-6
        z-40
        flex items-center justify-center
        h-14 w-14 md:h-16 md:w-16
        rounded-full
        bg-[#25D366]
        shadow-lg shadow-black/20
        hover:bg-[#1ebe5b]
        transition-all
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366] focus:ring-offset-slate-900
      "
    >
      {/* Simple WhatsApp icon as SVG */}
      <svg
        viewBox="0 0 32 32"
        className="h-7 w-7 md:h-8 md:w-8 text-white"
        fill="currentColor"
      >
        <path d="M16.04 4C9.96 4 5 8.96 5 15.02c0 2.47.82 4.75 2.21 6.59L5 27.5l6.09-2.18A10.96 10.96 0 0 0 16.04 26C22.1 26 27.06 21.04 27.06 15S22.1 4 16.04 4zm0 2.09c4.87 0 8.94 4.06 8.94 8.94 0 4.87-4.07 8.93-8.94 8.93-1.66 0-3.23-.47-4.57-1.3l-.33-.2-3.61 1.29 1.25-3.52-.22-.36A8.86 8.86 0 0 1 7.1 15c0-4.88 4.06-8.94 8.94-8.94z" />
        <path d="M13.19 10.81c-.22-.49-.45-.5-.66-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47 0 1.46 1.07 2.87 1.22 3.07.15.2 2.06 3.29 5.08 4.48 2.51.99 3.02.8 3.56.75.54-.05 1.75-.72 1.99-1.43.24-.71.24-1.32.17-1.44-.07-.12-.26-.2-.54-.35-.28-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.66.15-.19.3-.76.96-.94 1.16-.17.2-.35.22-.64.07-.29-.15-1.23-.45-2.34-1.44-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.14-.14.29-.35.44-.52.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.52-.07-.15-.61-1.52-.83-2.08z" />
      </svg>
    </button>
  );
}
