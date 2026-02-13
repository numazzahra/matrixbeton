import React from 'react';
import Button from '../components/ui/Button';

const FloatingWhatsApp = () => {
  const phoneNumber = "6281234567890";
  const message = "Halo MatrixBeton, saya ingin konsultasi tentang beton readymix";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in opacity-0" style={{ animationDelay: '800ms' }}>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-secondary-green flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="28" 
          height="28" 
          viewBox="0 0 24 24" 
          fill="white"
          className="md:w-8 md:h-8"
        >
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.91 2.76 15.79 3.92 17.33L2.09 21.87L6.79 20.09C8.3 21.13 10.12 21.71 12.04 21.71C17.5 21.71 21.95 17.26 21.95 11.8C21.95 6.34 17.5 2 12.04 2ZM12.04 20.15C10.3 20.15 8.62 19.64 7.2 18.71L6.83 18.48L4.18 19.4L5.13 16.86L4.87 16.47C3.86 14.99 3.3 13.29 3.3 11.51C3.3 6.97 6.96 3.31 11.5 3.31C16.04 3.31 19.7 6.97 19.7 11.51C19.7 16.05 16.04 20.15 11.5 20.15H11.04L12.04 20.15Z" />
          <path d="M16.53 13.96C16.33 13.86 15.13 13.27 14.94 13.19C14.75 13.11 14.6 13.07 14.46 13.27C14.32 13.47 13.9 14.01 13.77 14.16C13.64 14.31 13.51 14.33 13.31 14.23C12.49 13.86 11.95 13.56 11.3 12.95C10.79 12.47 10.43 11.88 10.3 11.63C10.17 11.38 10.28 11.26 10.4 11.14C10.51 11.03 10.65 10.85 10.76 10.72C10.87 10.59 10.91 10.5 10.99 10.35C11.07 10.2 11.03 10.07 10.97 9.97C10.91 9.87 10.45 8.66 10.26 8.16C10.08 7.67 9.89 7.69 9.74 7.69C9.6 7.69 9.44 7.69 9.28 7.69C9.12 7.69 8.86 7.75 8.64 7.99C8.42 8.23 7.84 8.78 7.84 9.9C7.84 11.02 8.64 12.1 8.76 12.27C8.88 12.44 10.41 14.83 12.81 15.86C13.3 16.08 13.68 16.21 13.98 16.31C14.47 16.47 14.91 16.45 15.26 16.4C15.65 16.35 16.46 15.83 16.63 15.26C16.8 14.69 16.8 14.2 16.74 14.11C16.68 14.02 16.53 13.96 16.53 13.96Z" />
        </svg>
        <span className="sr-only">Chat via WhatsApp</span>
      </a>
    </div>
  );
};

export default FloatingWhatsApp;