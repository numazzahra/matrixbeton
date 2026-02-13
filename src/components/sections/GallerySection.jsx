import React from 'react';
import Container from '../layout/Container';

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
              className="w-full h-[500px] md:h-[600px] bg-cover bg-center bg-no-repeat rounded-2xl shadow-lg"
              style={{ 
                backgroundImage: "url('/images/gallery-1.jpg')",
              }}
            >
              <div className="w-full h-full bg-black/20 flex items-end p-6">
                <span className="font-poppins text-primary-white/80 text-sm">Dokumentasi Proyek 1</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              
              <div 
                className="w-full h-[240px] md:h-[290px] bg-cover bg-center bg-no-repeat rounded-2xl shadow-lg"
                style={{ 
                  backgroundImage: "url('/images/gallery-2.jpg')",
                }}
              >
                <div className="w-full h-full bg-black/20 flex items-end p-4">
                  <span className="font-poppins text-primary-white/80 text-sm">Dokumentasi Proyek 2</span>
                </div>
              </div>
              
              <div 
                className="w-full h-[240px] md:h-[290px] bg-cover bg-center bg-no-repeat rounded-2xl shadow-lg"
                style={{ 
                  backgroundImage: "url('/images/gallery-3.jpg')",
                }}
              >
                <div className="w-full h-full bg-black/20 flex items-end p-4">
                  <span className="font-poppins text-primary-white/80 text-sm">Dokumentasi Proyek 3</span>
                </div>
              </div>
              
              <div 
                className="w-full h-[240px] md:h-[290px] bg-cover bg-center bg-no-repeat rounded-2xl shadow-lg"
                style={{ 
                  backgroundImage: "url('/images/gallery-4.jpg')",
                }}
              >
                <div className="w-full h-full bg-black/20 flex items-end p-4">
                  <span className="font-poppins text-primary-white/80 text-sm">Dokumentasi Proyek 4</span>
                </div>
              </div>
              
              <div 
                className="w-full h-[240px] md:h-[290px] bg-cover bg-center bg-no-repeat rounded-2xl shadow-lg"
                style={{ 
                  backgroundImage: "url('/images/gallery-5.jpg')",
                }}
              >
                <div className="w-full h-full bg-black/20 flex items-end p-4">
                  <span className="font-poppins text-primary-white/80 text-sm">Dokumentasi Proyek 5</span>
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