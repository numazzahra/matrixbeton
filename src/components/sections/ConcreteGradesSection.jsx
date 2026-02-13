import React from 'react';
import Container from '../layout/Container';
import Button from '../ui/Button';

const ConcreteGradesSection = () => {
  const grades = [
    'K225 FA / NFA',
    'K250 FA / NFA',
    'K300 FA / NFA',
    'K350 FA / NFA',
    'K400 FA / NFA',
    'K450 FA / NFA'
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-20">
          
          <div className="w-full h-full flex">
            <div 
              className="w-full bg-cover bg-center bg-no-repeat rounded-2xl"
              style={{ 
                backgroundImage: "url('/images/mutu-beton.jpg')",
                minHeight: '400px',
                height: '100%'
              }}
            >
            </div>
          </div>

          <div className="flex flex-col justify-start">
            <h2 className="font-cabin font-bold text-primary-black text-2xl md:text-4xl lg:text-5xl mb-4">
              MUTU BETON YANG TERSEDIA
            </h2>
            
            <p className="font-poppins text-gray-medium text-base md:text-lg lg:text-xl mb-8 leading-relaxed">
              Kami menyediakan mutu beton sesuai kebutuhan struktur bangunan Anda:
            </p>

            <div className="grid grid-cols-2 gap-x-8 gap-y-3 mb-8">
              <div className="space-y-3">
                {grades.slice(0, 3).map((grade, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <span className="text-primary-black text-lg md:text-xl">-</span>
                    <span className="font-poppins font-bold text-primary-black text-base md:text-lg">
                      {grade}
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="space-y-3">
                {grades.slice(3, 6).map((grade, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <span className="text-primary-black text-lg md:text-xl">-</span>
                    <span className="font-poppins font-bold text-primary-black text-base md:text-lg">
                      {grade}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="whatsapp" 
                size="default"
                className="px-8 py-3 text-base md:text-lg font-bold"
              >
                Pesan via WhatsApp
              </Button>
              <Button 
                variant="secondary" 
                size="default"
                className="px-8 py-3 text-base md:text-lg font-bold"
              >
                Cara Pesan
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ConcreteGradesSection;