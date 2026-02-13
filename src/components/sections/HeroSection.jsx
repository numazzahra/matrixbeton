import React from 'react';
import Container from '../layout/Container';
import Button from '../ui/Button';

const HeroSection = () => {
  return (
    <section id="beranda" className="relative w-full min-h-screen flex items-center">
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <Container size="lg" className="relative z-10 py-20 md:py-32">
        <div className="flex flex-col items-start gap-6 md:gap-8 lg:gap-12 max-w-4xl">
          <h1 
            className="font-cabin font-bold text-primary-white text-3xl md:text-5xl lg:text-[64px] leading-tight animate-fade-in opacity-0"
            style={{ animationDelay: '0ms' }}
          >
            Solusi Beton Readymix & <br />
            Pompa Beton untuk Proyek Anda
          </h1>

          <p 
            className="font-poppins font-normal text-primary-white/90 text-lg md:text-xl lg:text-2xl leading-relaxed animate-fade-up opacity-0"
            style={{ animationDelay: '200ms' }}
          >
            Beton berkualitas dengan pilihan mutu lengkap dan layanan pompa beton
            profesional. Cocok untuk proyek rumah tinggal, ruko, hingga bangunan bertingkat.
          </p>

          <div 
            className="animate-fade-up opacity-0 w-full md:w-auto"
            style={{ animationDelay: '400ms' }}
          >
            <Button variant="whatsapp" size="lg" className="w-full md:w-auto">
              Konsultasi & Pesan via WhatsApp
            </Button>
          </div>
        </div>
      </Container>

    </section>
  );
};

export default HeroSection;