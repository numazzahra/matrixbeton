import React from 'react';
import Container from './Container';
import Button from '../ui/Button';

const Footer = () => {
  return (
    <footer className="bg-gray-dark text-primary-white py-16 md:py-20 lg:py-24">
      <Container>
        {/* GRID 3 KOLOM */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 lg:gap-20">
          
          {/* ===== KOLOM 1 - BRAND & AREA ===== */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-cabin font-bold text-primary-white text-2xl md:text-3xl lg:text-4xl mb-2">
              MatrixBeton
            </h3>
            <p className="font-poppins text-primary-white/70 text-base md:text-lg leading-relaxed">
              Solusi beton readymix & pompa beton untuk proyek rumah hingga bangunan bertingkat.
            </p>
            <div className="pt-2">
              <h4 className="font-cabin font-semibold text-primary-white text-lg md:text-xl mb-2">
                Area Layanan
              </h4>
              <p className="font-poppins text-primary-white/70 text-base md:text-lg">
                Jabodetabek Sekitarnya
              </p>
            </div>
          </div>

          {/* ===== KOLOM 2 - NAVIGASI CEPAT ===== */}
          <div className="flex flex-col space-y-4">
            <h4 className="font-cabin font-semibold text-primary-white text-lg md:text-xl mb-2">
              Navigasi Cepat
            </h4>
            <ul className="flex flex-col space-y-3">
              {['Beranda', 'Galeri', 'Beton Readymix', 'Cara Pemesanan', 'Pompa Beton', 'Harga'].map((item, index) => (
                <li key={index}>
                  <a 
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="font-poppins text-primary-white/70 hover:text-secondary-green transition-colors text-base md:text-lg"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ===== KOLOM 3 - KONTAK ===== */}
          <div className="flex flex-col space-y-4">
            <h4 className="font-cabin font-semibold text-primary-white text-lg md:text-xl mb-2">
              Kontak
            </h4>
            <div className="flex flex-col space-y-2">
              <p className="font-poppins text-primary-white/70 text-base md:text-lg">
                Jam Operasional
              </p>
              <p className="font-poppins text-primary-white/90 text-base md:text-lg font-medium">
                08.00 – 17.00
              </p>
            </div>
            <div className="pt-2">
              <Button 
                variant="whatsapp" 
                size="sm"
                className="px-6 py-3 text-base"
              >
                Hubungi Kami
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-white/20 mt-12 md:mt-16 pt-8 md:pt-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-poppins text-primary-white/60 text-sm md:text-base text-center md:text-left">
            Melayani kebutuhan beton & pompa beton untuk berbagai jenis proyek konstruksi.
          </p>
          <p className="font-poppins text-primary-white/60 text-sm md:text-base">
            © {new Date().getFullYear()} Matrix Beton. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;