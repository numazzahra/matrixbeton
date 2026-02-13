import React from 'react';
import Container from '../layout/Container';

const AdvantagesSection = () => {
  const advantages = [
    'Mutu beton lebih konsisten',
    'Proses pengecoran lebih cepat',
    'Minimalkan Kesalahan Manual',
    'Cocok untuk proyek kecil hingga besar'
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white">
      <Container>
        <div className="grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden">
          <div 
            className="w-full h-full min-h-[500px] md:min-h-[600px] bg-cover bg-center bg-no-repeat"
            style={{ 
              backgroundImage: "url('/images/keunggulan-beton.jpg')",
            }}
          >
          </div>

          <div className="bg-gray-dark w-full h-full min-h-[500px] md:min-h-[600px] p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <h2 className="font-cabin font-bold text-primary-white text-3xl md:text-4xl lg:text-5xl leading-tight mb-8 md:mb-10">
              Keunggulan <br />
              <span className="text-primary-white">Beton Ready Mix</span>
            </h2>
            
            <ul className="space-y-5 md:space-y-6">
              {advantages.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="text-secondary-yellow text-2xl md:text-3xl font-bold leading-none">
                    ✓
                  </span>
                  <span className="font-poppins text-primary-white/90 text-base md:text-lg lg:text-xl leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AdvantagesSection;