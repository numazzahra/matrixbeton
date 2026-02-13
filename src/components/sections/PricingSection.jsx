import React from 'react';
import Container from '../layout/Container';
import Button from '../ui/Button';

const PricingSection = () => {
  const pumpPrices = [
    {
      title: 'Pompa Mini',
      subtitle: 'Portable',
      image: '/images/truck-mini.jpg',
      prices: [
        { volume: 'Volume 1-25 M³', price: 'Rp 3.800.000' },
        { volume: 'Volume 25-50 M³', price: 'Rp 4.100.000' },
        { volume: 'Volume 51-75 M³', price: 'Rp 4.400.000' },
        { volume: 'Volume 76-100 M³', price: 'Rp 4.700.000' }
      ]
    },
    {
      title: 'Pompa Standar',
      subtitle: 'Standar',
      image: '/images/truck-standar.jpg',
      prices: [
        { volume: 'Volume 1-25 M³', price: 'Rp 3.800.000' },
        { volume: 'Volume 25-50 M³', price: 'Rp 4.100.000' },
        { volume: 'Volume 51-75 M³', price: 'Rp 4.400.000' },
        { volume: 'Volume 76-100 M³', price: 'Rp 4.700.000' }
      ]
    },
    {
      title: 'Pompa Long Boom',
      subtitle: 'Long Boom',
      image: '/images/truck-long-boom.jpg',
      prices: [
        { volume: 'Volume 1-25 M³', price: 'Rp 5.000.000' },
        { volume: 'Volume 25-50 M³', price: 'Rp 5.300.000' },
        { volume: 'Volume 51-75 M³', price: 'Rp 5.600.000' },
        { volume: 'Volume 76-100 M³', price: 'Rp 5.900.000' }
      ]
    },
    {
      title: 'Pompa Super Long Boom',
      subtitle: 'Super Long Boom',
      image: '/images/truck-super-long.jpg',
      prices: [
        { volume: 'Volume 1-25 M³', price: 'Rp 5.000.000' },
        { volume: 'Volume 25-50 M³', price: 'Rp 5.300.000' },
        { volume: 'Volume 51-75 M³', price: 'Rp 5.600.000' },
        { volume: 'Volume 76-100 M³', price: 'Rp 5.900.000' }
      ]
    }
  ];

  return (
    <section 
      id="harga"  // ← UBAH DARI "harga-sewa" JADI "harga"!
      className="py-16 md:py-24 lg:py-32 bg-gray-light"
    >
      <Container>
        {/* JUDUL UTAMA */}
        <h2 className="font-cabin font-bold text-primary-black text-2xl md:text-4xl lg:text-5xl text-center mb-12 md:mb-16">
          HARGA SEWA POMPA BETON
        </h2>

        {/* GRID 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
          {pumpPrices.map((pump, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full">
              
              {/* HEADER DENGAN FOTO + TITLE */}
              <div className="p-6 md:p-8 border-b border-gray-border">
                <div className="flex items-center gap-4">
                  {/* FOTO ICON TRUCK PERSEGI */}
                  <div 
                    className="w-20 h-20 md:w-24 md:h-24 bg-cover bg-center bg-no-repeat rounded-lg flex-shrink-0"
                    style={{ 
                      backgroundImage: `url('${pump.image}')`,
                    }}
                  >
                    {/* FALLBACK KALO FOTO GA ADA */}
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center rounded-lg">
                      <span className="font-cabin text-gray-500 text-xs">🚛</span>
                    </div>
                  </div>
                  
                  {/* TITLE & SUBTITLE - WARNA KUNING */}
                  <div className="flex flex-col">
                    <h3 className="font-cabin font-bold text-secondary-yellow text-2xl md:text-3xl mb-1">
                      {pump.title}
                    </h3>
                    <p className="font-poppins text-gray-medium text-base md:text-lg">
                      {pump.subtitle}
                    </p>
                  </div>
                </div>
              </div>

              {/* PRICE LIST - VOLUME KIRI, HARGA KANAN (BOLD HITAM) */}
              <div className="p-6 md:p-8 flex-grow">
                <div className="space-y-4">
                  {pump.prices.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center">
                      <span className="font-poppins text-gray-medium text-sm md:text-base">
                        {item.volume}
                      </span>
                      <span className="font-cabin font-bold text-primary-black text-base md:text-lg">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* BUTTON WHATSAPP */}
              <div className="px-6 md:px-8 pb-6 md:pb-8">
                <Button 
                  variant="whatsapp" 
                  size="default"
                  className="w-full"
                >
                  Pesan via WhatsApp
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default PricingSection;