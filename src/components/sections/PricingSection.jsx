import React from 'react';
import Container from '../layout/Container';
import Button from '../ui/Button';
import truckImage from '../../assets/truck.png'; 
import whatsappIcon from '../../assets/whatsapp.png';

const PricingSection = () => {
  const pumpPrices = [
    {
      title: 'Pompa Mini',
      subtitle: 'Portable',
      image: truckImage, 
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
      image: truckImage, 
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
      image: truckImage,
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
      image: truckImage, 
      prices: [
        { volume: 'Volume 1-25 M³', price: 'Rp 5.000.000' },
        { volume: 'Volume 25-50 M³', price: 'Rp 5.300.000' },
        { volume: 'Volume 51-75 M³', price: 'Rp 5.600.000' },
        { volume: 'Volume 76-100 M³', price: 'Rp 5.900.000' }
      ]
    }
  ];

  const handleWhatsAppClick = (pumpTitle, pumpSubtitle) => {
    const phoneNumber = "628988882945"; 
    
    let message = "";
    
    if (pumpTitle === "Pompa Mini") {
      message = "Halo MatrixBeton, saya ingin pesan Pompa Mini:"
        + "%0a%0a- Volume: [1-25 / 25-50 / 51-75 / 76-100] m³"
        + "%0a- Lokasi proyek: [alamat]"
        + "%0a- Akses jalan: [sempit/sedang/luas]"
        + "%0a%0aMohon info ketersediaan dan harga untuk Pompa Mini. Terima kasih.";
    } 
    else if (pumpTitle === "Pompa Standar") {
      message = "Halo MatrixBeton, saya ingin pesan Pompa Standar:"
        + "%0a%0a- Volume: [1-25 / 25-50 / 51-75 / 76-100] m³"
        + "%0a- Lokasi proyek: [alamat]"
        + "%0a- Tinggi bangunan: [rendah/sedang]"
        + "%0a%0aMohon info ketersediaan dan harga untuk Pompa Standar. Terima kasih.";
    }
    else if (pumpTitle === "Pompa Long Boom") {
      message = "Halo MatrixBeton, saya ingin pesan Pompa Long Boom:"
        + "%0a%0a- Volume: [1-25 / 25-50 / 51-75 / 76-100] m³"
        + "%0a- Lokasi proyek: [alamat]"
        + "%0a- Tinggi bangunan: [lantai]"
        + "%0a- Jangkauan dibutuhkan: [meter]"
        + "%0a%0aMohon info ketersediaan dan harga untuk Pompa Long Boom. Terima kasih.";
    }
    else if (pumpTitle === "Pompa Super Long Boom") {
      message = "Halo MatrixBeton, saya ingin pesan Pompa Super Long Boom:"
        + "%0a%0a- Volume: [1-25 / 25-50 / 51-75 / 76-100] m³"
        + "%0a- Lokasi proyek: [alamat]"
        + "%0a- Tinggi bangunan: [lantai]"
        + "%0a- Jangkauan maksimal: [meter]"
        + "%0a%0aMohon info ketersediaan dan harga untuk Pompa Super Long Boom. Terima kasih.";
    }
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section 
      id="harga"  
      className="py-16 md:py-24 lg:py-32 bg-gray-light"
    >
      <Container>
        <h2 className="font-cabin font-bold text-primary-black text-2xl md:text-4xl lg:text-5xl text-center mb-12 md:mb-16">
          HARGA SEWA POMPA BETON
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
          {pumpPrices.map((pump, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full">
              
              <div className="p-6 md:p-8 border-b border-gray-border">
                <div className="flex items-center gap-4">
                  <div 
                    className="w-20 h-20 md:w-24 md:h-24 bg-cover bg-center bg-no-repeat rounded-lg flex-shrink-0"
                    style={{ 
                      backgroundImage: `url(${pump.image})`,
                    }}
                  >
                  </div>
                  
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

              <div className="px-6 md:px-8 pb-6 md:pb-8">
                <Button 
                  variant="whatsapp" 
                  size="default"
                  onClick={() => handleWhatsAppClick(pump.title, pump.subtitle)}
                  className="w-full flex items-center justify-center gap-2 cursor-pointer"
                >
                  <img 
                    src={whatsappIcon} 
                    alt="" 
                    className="w-5 h-5 md:w-6 md:h-6"
                  />
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