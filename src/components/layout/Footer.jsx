import React from "react";
import Container from "./Container";
import Button from "../ui/Button";
import whatsappIcon from "../../assets/whatsapp.png"; // Import logo WhatsApp

const Footer = () => {
  // Function untuk handle WhatsApp click
  const handleWhatsAppClick = () => {
    const phoneNumber = "628988882945"; // Ganti dengan nomor HP kamu
    const message =
      "Halo MatrixBeton, saya ingin bertanya seputar layanan beton readymix. Mohon infonya, terima kasih.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <footer className="bg-gray-dark text-primary-white py-16 md:py-20 lg:py-24">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 lg:gap-20">
          <div className="flex flex-col space-y-4">
            <h3 className="font-cabin font-bold text-primary-white text-2xl md:text-3xl lg:text-4xl mb-2">
              MatrixBeton
            </h3>
            <p className="font-poppins text-primary-white/70 text-base md:text-lg leading-relaxed">
              Solusi beton readymix & pompa beton untuk proyek rumah hingga
              bangunan bertingkat.
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
          <div className="flex flex-col space-y-4">
            <h4 className="font-cabin font-semibold text-primary-white text-lg md:text-xl mb-2">
              Navigasi Cepat
            </h4>
            <ul className="flex flex-col space-y-3">
              {[
                "Beranda",
                "Galeri",
                "Beton Readymix",
                "Cara Pemesanan",
                "Pompa Beton",
                "Harga",
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="font-poppins text-primary-white/70 hover:text-secondary-green transition-colors text-base md:text-lg"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col space-y-4">
            <h4 className="font-cabin font-semibold text-primary-white text-lg md:text-xl mb-2">
              Kontak
            </h4>
            <div className="flex flex-col space-y-2">
              <p className="font-poppins text-primary-white/70 text-base md:text-lg">
                Jam Operasional
              </p>
              <p className="font-poppins text-primary-white/90 text-base md:text-lg font-medium">
                07.00 – 24.00
              </p>
            </div>
            <div className="pt-2">
              <Button
                variant="whatsapp"
                size="sm"
                onClick={handleWhatsAppClick}
                className="px-6 py-3 text-base flex items-center gap-2 cursor-pointer"
              >
                <img
                  src={whatsappIcon}
                  alt=""
                  className="w-5 h-5 md:w-6 md:h-6"
                />
                Hubungi Kami
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-4 gap-4">
          <h4 className="font-cabin font-semibold text-primary-white text-lg md:text-xl mb-2">
            Lokasi
          </h4>
          <div className="flex flex-col space-y-4">
            <p className="font-poppins text-primary-white/70 text-base md:text-lg">
              Jl. Raya Ciangsana No.26 - Bogor Regency, Jawa Barat
            </p>
          </div>
          <div className="pt-2">
            <a
              href="https://maps.app.goo.gl/XQDB7Pqs7bXBiG7i6?g_st=iw"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl overflow-hidden cursor-pointer"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d724.7822345683227!2d106.9457697518095!3d-6.375138446184173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e699362e8d5b613%3A0xe84eb2407f071969!2sJl.%20Raya%20Ciangsana%20No.26%2C%20Ciangsana%2C%20Kec.%20Gn.%20Putri%2C%20Kabupaten%20Bogor%2C%20Jawa%20Barat%2016968!5e0!3m2!1sen!2sid!4v1771075061390!5m2!1sen!2sid"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </a>
          </div>
        </div>

        <div className="border-t border-primary-white/20 mt-12 md:mt-16 pt-8 md:pt-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-poppins text-primary-white/60 text-sm md:text-base text-center md:text-left">
            Melayani kebutuhan beton & pompa beton untuk berbagai jenis proyek
            konstruksi.
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
