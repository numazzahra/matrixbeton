import React, { useState, useEffect } from 'react';
import Button from '../ui/Button';

const navigationItems = [
  { label: 'Beranda', href: '#beranda', active: true },
  { label: 'Beton', href: '#beton', active: false },
  { label: 'Pompa', href: '#pompa', active: false },
  { label: 'Harga', href: '#harga', active: false },    // ← LINK KE HARGA
  { label: 'Galeri', href: '#galeri', active: false },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState('Beranda');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = ['beranda', 'beton', 'pompa', 'harga', 'galeri'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        const activeLabel = navigationItems.find(item => 
          item.href === `#${current}`
        )?.label || 'Beranda';
        setActiveItem(activeLabel);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled ? 'bg-black/80 backdrop-blur-md py-3 md:py-4' : 'bg-black/30 backdrop-blur-sm py-4 md:py-7'}
      `}
    >
      <nav className="flex flex-col md:flex-row items-center justify-between px-4 md:px-8 lg:px-32 gap-4 md:gap-12 lg:gap-20">
        {/* Logo */}
        <div className="font-cabin font-bold text-primary-white text-2xl md:text-3xl lg:text-[32px] tracking-[0] leading-normal">
          MatrixBeton
        </div>

        {/* Navigation Links & CTA */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-12 lg:gap-20 w-full md:w-auto">
          <ul className="flex flex-wrap items-center justify-center gap-3 md:gap-6">
            {navigationItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className={`
                    font-cabin text-base md:text-lg lg:text-xl 
                    tracking-[0] leading-normal whitespace-nowrap 
                    transition-colors hover:text-secondary-yellow
                    ${activeItem === item.label 
                      ? 'font-bold text-secondary-yellow' 
                      : 'font-normal text-primary-white'
                    }
                  `}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <Button variant="whatsapp" size="sm">
            <span className="hidden md:inline">Pesan Sekarang</span>
            <span className="md:hidden">Pesan</span>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;