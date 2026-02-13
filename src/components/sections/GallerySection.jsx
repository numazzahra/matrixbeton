import React from 'react';
import Container from '../layout/Container';
import dokumentasi1 from '../../assets/dokumentasi1.png';
import dokumentasi2 from '../../assets/dokumentasi2.mp4';
import dokumentasi3 from '../../assets/dokumentasi3.png';
import dokumentasi4 from '../../assets/dokumentasi4.png';
import dokumentasi5 from '../../assets/dokumentasi5.mp4';

const GallerySection = () => {
  return (
    <section id="galeri" className="py-16 md:py-24 lg:py-32 bg-gray-dark">
      <Container>
        <h2 className="font-cabin font-bold text-primary-white text-2xl md:text-4xl lg:text-5xl text-center mb-12 md:mb-16">
          GALERI PROYEK
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          
          <div className="md:col-span-1">
            <div 
              className="w-full h-[500px] md:h-[600px] bg-cover bg-center bg-no-repeat rounded-2xl shadow-lg overflow-hidden"
              style={{ 
                backgroundImage: `url(${dokumentasi1})`,
              }}
            >
              <div className="w-full h-full bg-black/20 flex items-end p-6">
              </div>
            </div>
          </div>

          <div className="md:col-span-2 h-[500px] md:h-[600px]">
            <div className="grid grid-cols-2 gap-4 md:gap-6 h-full">
              
              <div className="w-full h-full rounded-2xl shadow-lg overflow-hidden relative">
                <video 
                  src={dokumentasi2}
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/20 flex items-end p-4">
                </div>
              </div>
              
              <div 
                className="w-full h-full bg-cover bg-center bg-no-repeat rounded-2xl shadow-lg overflow-hidden"
                style={{ 
                  backgroundImage: `url(${dokumentasi3})`,
                }}
              >
                <div className="w-full h-full bg-black/20 flex items-end p-4">
                </div>
              </div>
              
              <div 
                className="w-full h-full bg-cover bg-center bg-no-repeat rounded-2xl shadow-lg overflow-hidden"
                style={{ 
                  backgroundImage: `url(${dokumentasi4})`,
                }}
              >
                <div className="w-full h-full bg-black/20 flex items-end p-4">
                </div>
              </div>
              
              <div className="w-full h-full rounded-2xl shadow-lg overflow-hidden relative">
                <video 
                  src={dokumentasi5}
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/20 flex items-end p-4">
                </div>
              </div>
            </div>
          </div>
        </div>

      </Container>
    </section>
  );
};

export default GallerySection;