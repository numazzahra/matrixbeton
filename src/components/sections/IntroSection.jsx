import React from 'react';
import Container from '../layout/Container';

const IntroSection = () => {
  return (
    <section id="beton" className="py-16 md:py-24 lg:py-32 bg-gray-light">  {/* ← ID HARUS "beton" */}
      <Container>
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
          <div>
            <h2 className="font-cabin font-bold text-primary-black text-3xl md:text-4xl lg:text-5xl leading-tight">
              APA ITU <br />
              <span className="text-primary-black">BETON READY MIX</span>
            </h2>
          </div>
          
          <div>
            <p className="font-poppins text-gray-medium text-base md:text-lg lg:text-xl leading-relaxed">
              Beton readymix adalah beton siap pakai yang diproduksi di batching plant dengan komposisi material yang terkontrol, 
              lalu dikirim menggunakan truck mixer langsung ke lokasi proyek.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default IntroSection;