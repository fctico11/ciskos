import { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import logoData from '../helpers/getLogoData';

export default function LogoCarousel() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative bg-[#0d001a] py-24 overflow-visible z-10 px-6 md:px-16 text-white">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className={`mb-14 text-center transition-all duration-700 ${fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight">Our Systems</h2>
          <p className="mt-4 text-sm md:text-base text-white/70 font-light">
            We specialize in a variety of systems such as those seen below, among others.
          </p>
        </div>

        {/* Glow Layer */}
        

        {/* Marquee Logos */}
        <div className={`relative z-10 transition-opacity duration-1000 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
          <Marquee speed={50} gradient={false} pauseOnHover className="overflow-visible">
            {logoData.map(({ src, alt }, idx) => (
              <div
                key={idx}
                className="group relative px-10 flex items-center justify-center overflow-visible"
                style={{ minHeight: '140px' }} // ensures room for scale effect
              >
                <div
                  className="relative transition-transform duration-300 ease-in-out transform group-hover:scale-[1.3] group-hover:z-30"
                  style={{ willChange: 'transform' }}
                >
                  <img
                    src={src}
                    alt={alt}
                    className="w-24 h-24 md:w-28 md:h-28 object-contain relative z-10"
                  />
                  {/* Glowing background */}
                  <div className="absolute inset-0 rounded-full blur-3xl bg-purple-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
                </div>
              </div>
            ))}
          </Marquee>
        </div>

      </div>
    </section>
  );
}
