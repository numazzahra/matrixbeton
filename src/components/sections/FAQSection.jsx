import React, { useState } from 'react';
import Container from '../layout/Container';
import Button from '../ui/Button';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

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
              className="px-6 py-3"
            >
              Konsultasi via WhatsApp
            </Button>
          </div>
        </div>
      )
    },
    {
      question: 'Apakah bisa memesan beton untuk jalan sempit?',
      answer: '__________'
    },
    {
      question: 'Bagaimana jika lokasi proyek sulit dijangkau?',
      answer: '__________'
    },
    {
      question: 'Apakah harga sudah termasuk operator dan BBM?',
      answer: '__________'
    },
    {
      question: 'Apakah harga bisa berubah?',
      answer: '__________'
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
                className="w-full px-6 py-4 md:px-8 md:py-5 text-left flex justify-between items-center hover:bg-primary-white/5 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-cabin font-semibold text-primary-white text-base md:text-lg lg:text-xl">
                  {faq.question}
                </span>
                <span className="text-primary-white text-2xl md:text-3xl ml-4">
                  {openIndex === index ? '▲' : '▼'}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 md:px-8 md:py-5 bg-primary-white/5 border-t border-primary-white/20">
                  {typeof faq.answer === 'string' ? (
                    <p className="font-poppins text-primary-white/70">{faq.answer}</p>
                  ) : (
                    faq.answer
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FAQSection;