import React, { useState } from 'react';
import Container from '../layout/Container';

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
              Truck Mixer Mini (TM Mini)
            </p>
            <p className="font-poppins text-primary-white/70">
              Minimum pemesanan 2,5 m³. Pemesanan di bawah 2,5 m³ akan dikenakan biaya tambahan (charge).
            </p>
          </div>
          
          <p className="font-poppins text-primary-white/70 mt-2">
            Untuk memastikan jenis truck dan perhitungan biaya yang paling sesuai dengan kondisi proyek, silakan konsultasi terlebih dahulu melalui WhatsApp.
          </p>
        </div>
      )
    },
    {
      question: 'Apakah bisa memesan beton untuk jalan sempit?',
      answer: (
        <div className="space-y-3">
          <p className="font-poppins text-primary-white/70">
            Bisa. Kami menyesuaikan dengan kondisi lapangan. Untuk pemesanan beton di jalan sempit, tersedia beberapa opsi:
          </p>
          <ul className="list-disc list-inside font-poppins text-primary-white/70 space-y-1 ml-2">
            <li>Menggunakan armada Minimix yang dirancang khusus untuk akses terbatas</li>
            <li>Metode bongkar lain seperti menggunakan concrete pump atau pengecoran manual (POK) sesuai kebutuhan</li>
          </ul>
          <p className="font-poppins text-primary-white/70 mt-2">
            Tim kami siap membantu survey lokasi untuk menentukan metode terbaik dan memastikan akses truck mixer sesuai dengan kondisi di lapangan.
          </p>
        </div>
      )
    },
    {
      question: 'Bagaimana jika lokasi proyek sulit dijangkau?',
      answer: (
        <div className="space-y-3">
          <p className="font-poppins text-primary-white/70">
            Kami akan membantu melakukan survey lokasi terlebih dahulu untuk mengecek tingkat kesulitan akses dan menentukan solusi terbaik.
          </p>
          <p className="font-poppins text-primary-white/70">
            Berdasarkan hasil survey, tim kami akan merekomendasikan jenis armada yang tepat, baik menggunakan Minimix, pompa beton dengan jangkauan sesuai, atau metode pengecoran alternatif lainnya.
          </p>
        </div>
      )
    },
    {
      question: 'Apakah harga sudah termasuk operator dan BBM?',
      answer: (
        <div className="space-y-3">
          <p className="font-poppins text-primary-white/70">
            Berikut rincian komponen harga:
          </p>
          <ul className="list-disc list-inside font-poppins text-primary-white/70 space-y-1 ml-2">
            <li>Harga sewa pompa sudah termasuk operator berpengalaman</li>
            <li>Biaya solar (BBM) untuk operasional sudah termasuk dalam harga</li>
            <li>Biaya tol perjalanan sudah ditanggung oleh kami</li>
            <li>Belum termasuk PPN 11%</li>
            <li>Sarana dan tips di lokasi menjadi tanggung jawab proyek</li>
          </ul>
          <p className="font-poppins text-primary-white/70 mt-2">
            Untuk harga beton readymix, biasanya belum termasuk biaya pompa. Keduanya dapat dipesan secara terpisah atau dalam satu paket sesuai kebutuhan.
          </p>
        </div>
      )
    },
    {
      question: 'Apakah harga bisa berubah?',
      answer: (
        <div className="space-y-3">
          <p className="font-poppins text-primary-white/70">
            Ya, harga dapat berubah menyesuaikan dengan fluktuasi harga bahan material, jarak pengiriman, dan kondisi lokasi proyek.
          </p>
          <p className="font-poppins text-primary-white/70">
            Untuk mendapatkan penawaran harga terbaru dan akurat sesuai spesifikasi proyek Anda, silakan hubungi tim marketing kami.
          </p>
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