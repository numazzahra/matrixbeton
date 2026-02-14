import React from 'react';
import Container from '../layout/Container';
import Button from '../ui/Button';
import mutuImage from '../../assets/mutu.png';
import whatsappIcon from '../../assets/whatsapp.png'; 

const ConcreteGradesSection = () => {
  const grades = [
    'K225 FA / NFA',
    'K250 FA / NFA',
    'K300 FA / NFA',
    'K350 FA / NFA',
    'K400 FA / NFA',
    'K450 FA / NFA'
  ];

  const scrollToOrdering = () => {
    const element = document.getElementById('cara-pemesanan');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "628988882945"; 
    const message = `Halo MatrixBeton, saya ingin pesan:

- Mutu: [K225/K250/dll]
- Volume: [angka] m³
- Lokasi: [alamat]

Mohon info ketersediaan. Terima kasih.`;
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-20">
          
          <div className="w-full h-full flex">
            <div 
              className="w-full bg-cover bg-center bg-no-repeat rounded-2xl"
              style={{ 
                backgroundImage: `url(${mutuImage})`,
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
                onClick={handleWhatsAppClick}
                className="px-10 py-3 text-base md:text-lg font-bold flex items-center justify-center gap-2 min-w-[220px] md:min-w-[260px] cursor-pointer"
              >
                <img 
                  src={whatsappIcon} 
                  alt="" 
                  className="w-5 h-5 md:w-6 md:h-6"
                />
                Pesan via WhatsApp
              </Button>
              
              <Button 
                variant="secondary" 
                size="default"
                onClick={scrollToOrdering}
                className="px-10 py-3 text-base md:text-lg font-bold min-w-[220px] md:min-w-[260px] flex items-center justify-center cursor-pointer"
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