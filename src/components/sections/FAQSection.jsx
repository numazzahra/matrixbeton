import React, { useState } from 'react';
import Container from '../layout/Container';
import Button from '../ui/Button';
import whatsappIcon from '../../assets/whatsapp.png'; 

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleWhatsAppClick = () => {
    const phoneNumber = "628988882945"; 
    const message = `Halo MatrixBeton, saya ada beberapa pertanyaan seputar:

[Tulis pertanyaan Anda di sini]

Mohon infonya, terima kasih.`;
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const faqItems = [
    {
      question: 'Berapa minimum pemesanan beton readymix?',
      answer: (
        <div className="space-y-4">
          <div>
            <p className="font-cabin font-bold text-primary-white mb-1">
              Truck Mixer Besar (TM Besar)
            </p>
            <p className="font-poppins text-primary-white/70">
              Minimum pemesanan 5 m³. Pemesanan di bawah 5 m³ akan dikenakan biaya tambahan (charge).
            </p>
          </div>
          
          <div>
            <p className="font-cabin font-bold text-primary-white mb-1">
              Truck Mixer Kecil / Minimix (TM Kecil)
            </p>
            <p className="font-poppins text-primary-white/70">
              Minimum pemesanan 3 m³. Pemesanan di bawah 3 m³ akan dikenakan biaya tambahan (charge).
            </p>
          </div>
          
          <p className="font-poppins text-primary-white/70 mt-2">
            Untuk memastikan jenis truck dan perhitungan biaya yang paling sesuai dengan kondisi proyek, silakan konsultasi terlebih dahulu melalui WhatsApp.
          </p>

          <div className="mt-4 pt-2">
            <Button 
              variant="whatsapp" 
              size="default"
              onClick={handleWhatsAppClick}
              className="px-6 py-3 flex items-center gap-2 cursor-pointer"
            >
              <img 
                src={whatsappIcon} 
                alt="" 
                className="w-7 h-7"
              />
              Konsultasi via WhatsApp
            </Button>
          </div>
        </div>
      )
    },
    {
      question: 'Apakah bisa memesan beton untuk jalan sempit?',
      answer: (
        <div className="space-y-2">
          <p className="font-poppins text-primary-white/70">
            Bisa. Kami menyediakan armada Minimix (Truck Mixer Kecil) yang dirancang khusus untuk akses jalan sempit seperti perumahan, gang, atau lokasi dengan keterbatasan manuver.
          </p>
          <p className="font-poppins text-primary-white/70 mt-2">
            Dengan dimensi yang lebih kecil dan kapasitas 3-4 m³, Minimix bisa menjangkau area yang sulit dilalui truck mixer besar.
          </p>
          <div className="mt-4 pt-2">
            <Button 
              variant="whatsapp" 
              size="default"
              onClick={handleWhatsAppClick}
              className="px-6 py-3 flex items-center gap-2 cursor-pointer"
            >
              <img src={whatsappIcon} alt="" className="w-7 h-7" />
              Konsultasi via WhatsApp
            </Button>
          </div>
        </div>
      )
    },
    {
      question: 'Bagaimana jika lokasi proyek sulit dijangkau?',
      answer: (
        <div className="space-y-2">
          <p className="font-poppins text-primary-white/70">
            Tim kami akan melakukan survey lokasi terlebih dahulu untuk menentukan akses terbaik dan jenis pompa yang sesuai. Kami memiliki berbagai jenis pompa dengan jangkauan berbeda.
          </p>
          <p className="font-poppins text-primary-white/70">
            Untuk lokasi dengan akses sangat terbatas, kami bisa menggunakan Pompa Mini atau kombinasi dengan concrete bucket.
          </p>
          <div className="mt-4 pt-2">
            <Button 
              variant="whatsapp" 
              size="default"
              onClick={handleWhatsAppClick}
              className="px-6 py-3 flex items-center gap-2 cursor-pointer"
            >
              <img src={whatsappIcon} alt="" className="w-7 h-7" />
              Konsultasi via WhatsApp
            </Button>
          </div>
        </div>
      )
    },
    {
      question: 'Apakah harga sudah termasuk operator dan BBM?',
      answer: (
        <div className="space-y-2">
          <p className="font-poppins text-primary-white/70">
            Ya, harga sewa pompa sudah termasuk operator berpengalaman dan BBM untuk operasional pompa selama pengecoran berlangsung.
          </p>
          <p className="font-poppins text-primary-white/70">
            Untuk harga beton readymix, biasanya belum termasuk biaya pompa. Keduanya dapat dipesan secara terpisah atau dalam satu paket.
          </p>
          <div className="mt-4 pt-2">
            <Button 
              variant="whatsapp" 
              size="default"
              onClick={handleWhatsAppClick}
              className="px-6 py-3 flex items-center gap-2 cursor-pointer"
            >
              <img src={whatsappIcon} alt="" className="w-7 h-7" />
              Konsultasi via WhatsApp
            </Button>
          </div>
        </div>
      )
    },
    {
      question: 'Apakah harga bisa berubah?',
      answer: (
        <div className="space-y-2">
          <p className="font-poppins text-primary-white/70">
            Harga dapat berubah menyesuaikan dengan fluktuasi harga material, jarak pengiriman, dan kondisi lokasi proyek.
          </p>
          <p className="font-poppins text-primary-white/70">
            Untuk mendapatkan penawaran harga terbaru dan akurat sesuai proyek Anda, silakan hubungi tim marketing kami.
          </p>
          <div className="mt-4 pt-2">
            <Button 
              variant="whatsapp" 
              size="default"
              onClick={handleWhatsAppClick}
              className="px-6 py-3 flex items-center gap-2 cursor-pointer"
            >
              <img src={whatsappIcon} alt="" className="w-7 h-7" />
              Konsultasi via WhatsApp
            </Button>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gray-dark">
      <Container>
        <h2 className="font-cabin font-bold text-primary-white text-2xl md:text-4xl lg:text-5xl text-center mb-12 md:mb-16">
          FAQ
        </h2>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqItems.map((faq, index) => (
            <div key={index} className="border border-primary-white/20 rounded-lg overflow-hidden bg-gray-dark/50">
              <button
                className="w-full px-6 py-4 md:px-8 md:py-5 text-left flex justify-between items-center hover:bg-primary-white/5 transition-colors duration-300"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-cabin font-semibold text-primary-white text-base md:text-lg lg:text-xl">
                  {faq.question}
                </span>
                <span 
                  className={`text-primary-white text-2xl md:text-3xl ml-4 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                >
                  ▼
                </span>
              </button>

              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 py-4 md:px-8 md:py-5 bg-primary-white/5 border-t border-primary-white/20">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FAQSection;