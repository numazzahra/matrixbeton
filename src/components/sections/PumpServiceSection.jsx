import React from 'react';
import Container from '../layout/Container';
import layananImage from '../../assets/layanan.jpg'; 

const PumpServiceSection = () => {
  const pumpTypes = [
    {
      title: 'Pompa Mini',
      description: 'Cocok untuk proyek rumah tinggal dan area dengan akses terbatas.',
      range: '14 – 17 meter'
    },
    {
      title: 'Pompa Standar',
      description: 'Digunakan untuk ruko, gudang, dan bangunan bertingkat rendah.',
      range: '18 – 21 meter'
    },
    {
      title: 'Pompa Long Boom',
      description: 'Solusi untuk gedung bertingkat dan area luas dengan jangkauan lebih panjang.',
      range: '24 – 27 meter'
    },
    {
      title: 'Pompa Super Long Boom',
      description: 'Solusi untuk bangunan bertingkat tinggi yang membutuhkan jangkauan ekstra panjang dan fleksibilitas maksimal.',
      range: '31 – 34 meter'
    }
  ];

  return (
    <section id="pompa" className="py-16 md:py-24 lg:py-32 bg-gray-dark">
      <Container>
        <h2 className="font-cabin font-bold text-primary-white text-2xl md:text-4xl lg:text-5xl text-center mb-4">
          APA ITU LAYANAN POMPA BETON
        </h2>
        
        <p className="font-poppins text-primary-white/80 text-base md:text-lg lg:text-xl text-center max-w-4xl mx-auto mb-16 md:mb-20 leading-relaxed">
          Pompa beton mempermudah penyaluran beton ke area yang sulit dijangkau, mempercepat proses pengecoran, dan menghasilkan pekerjaan yang lebih rapi.
        </p>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-20">
          
          <div className="w-full">
            <div 
              className="w-full h-[500px] md:h-[600px] lg:h-[650px] bg-cover bg-center bg-no-repeat rounded-2xl shadow-lg"
              style={{ 
                backgroundImage: `url(${layananImage})`, 
              }}
            >
            
            </div>
          </div>

          <div className="flex flex-col">
            <h3 className="font-cabin font-bold text-primary-white text-xl md:text-2xl lg:text-3xl mb-6 md:mb-8">
              JENIS POMPA BETON
            </h3>
            
            <div className="flex flex-col space-y-6 md:space-y-8">
              {pumpTypes.map((pump, index) => (
                <div key={index} className="flex flex-col">
                  <h4 className="font-cabin font-bold text-secondary-yellow text-lg md:text-xl lg:text-2xl mb-1">
                    {pump.title}
                  </h4>
                  <p className="font-poppins text-primary-white/70 text-base md:text-lg mb-1 leading-relaxed">
                    {pump.description}
                  </p>
                  <p className="font-poppins text-primary-white/70 text-base md:text-lg">
                    Dengan jangkauan pompa <span className="font-bold text-primary-white">{pump.range}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PumpServiceSection;