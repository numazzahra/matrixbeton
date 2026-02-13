import React from 'react';
import Container from '../layout/Container';
import Button from '../ui/Button';

const CTASection = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gray-light">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
          
          <div className="flex flex-col">
            <h2 className="font-cabin font-bold text-primary-black text-3xl md:text-4xl lg:text-5xl mb-4 leading-tight">
              SIAP MULAI <br />
              <span className="text-primary-black">PROYEK ANDA?</span> {/* DIITEMIN! */}
            </h2>
            
            <p className="font-poppins text-gray-medium text-base md:text-lg lg:text-xl mb-8 leading-relaxed">
              Dapatkan beton berkualitas dan layanan pompa beton yang tepat untuk kebutuhan proyek Anda.
            </p>
            
            <Button 
              variant="whatsapp" 
              size="lg"
              className="w-full md:w-auto px-8 py-4 text-lg"
            >
              Pesan via WhatsApp
            </Button>
          </div>

          <div className="w-full">
            <div 
              className="w-full h-[300px] md:h-[350px] lg:h-[400px] bg-cover bg-center bg-no-repeat rounded-2xl shadow-lg"
              style={{ 
                backgroundImage: "url('/images/cta-proyek.jpg')",
              }}
            >
              <div className="w-full h-full bg-black/20 flex items-center justify-center rounded-2xl">
                <span className="font-cabin text-primary-white/80 text-lg md:text-xl">
                 Proyek Konstruksi
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CTASection;