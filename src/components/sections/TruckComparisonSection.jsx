import React from "react";
import Container from "../layout/Container";
import minimixImage from "../../assets/Minimix.png";
import tmBesarImage from "../../assets/TMBesar.png";

const TruckComparisonSection = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gray-light">
      <Container>
        <h2 className="font-cabin font-bold text-primary-black text-2xl md:text-4xl lg:text-5xl text-center mb-12 md:mb-16">
          PERBEDAAN MINIMIX & TM BESAR
        </h2>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-20">
          <div className="flex flex-col">
            <div className="w-full h-48 md:h-64 mb-4 overflow-hidden bg-gray-100 rounded-lg flex items-center justify-center">
              <img
                src={minimixImage}
                alt="Beton Minimix"
                className="w-full h-full object-contain"
              />
            </div>

            <h4 className="font-cabin font-bold text-primary-black text-xl md:text-2xl mb-3">
              Beton Minimix
            </h4>

            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-primary-black text-lg md:text-xl">-</span>
                <span className="font-poppins text-primary-black text-base md:text-lg">
                  Kapasitas ±2.5–3 m³
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-black text-lg md:text-xl">-</span>
                <span className="font-poppins text-primary-black text-base md:text-lg">
                  Cocok untuk jalan sempit & perumahan
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-black text-lg md:text-xl">-</span>
                <span className="font-poppins text-primary-black text-base md:text-lg">
                  Minimum order lebih fleksibel
                </span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col">
            <div className="w-full h-48 md:h-64 mb-4 overflow-hidden bg-gray-100 rounded-lg flex items-center justify-center">
              <img
                src={tmBesarImage}
                alt="Truck Mixer Besar"
                className="w-full h-full object-contain"
              />
            </div>

            <h4 className="font-cabin font-bold text-primary-black text-xl md:text-2xl mb-3">
              Truck Mixer Besar (TM)
            </h4>

            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-primary-black text-lg md:text-xl">-</span>
                <span className="font-poppins text-primary-black text-base md:text-lg">
                  Kapasitas ±7–7,5 m³
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-black text-lg md:text-xl">-</span>
                <span className="font-poppins text-primary-black text-base md:text-lg">
                  Untuk proyek skala besar
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-black text-lg md:text-xl">-</span>
                <span className="font-poppins text-primary-black text-base md:text-lg">
                  Lebih efisien untuk volume besar
                </span>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TruckComparisonSection;
