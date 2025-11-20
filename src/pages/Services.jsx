import { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Cta from '../components/Cta';
import coolshot from '../assets/projects/tma/coolshot.webp';

// --- Data ---

const specializedServices = [
  {
    title: 'Architectural Glass',
    description:
      'Elevate your office with pristine glass solutions. We specialize in office window fronts, acoustic phone booths, and aesthetic glass walls that define modern transparency.',
  },
  {
    title: 'Space Reconfiguration',
    description:
      'Adapt to the future of work. We modify existing layouts, adding partitions or reorienting spaces to meet changing safety and collaborative needs.',
  },
  {
    title: 'Restoration & Repair',
    description:
      'Extend the life of your investment. Our craftsmen expertly repair and touch up furniture, restoring functionality and aesthetics to near-original condition.',
  },
  {
    title: 'Deep Cleaning',
    description:
      'Revitalize your workspace. Our professional cleaning services ensure a sanitized, welcoming environment that reflects the high standards of your organization.',
  },
];

const logisticsServices = [
  {
    title: 'Product Receiving',
    description: 'Secure logistics. Our Union County facility offers meticulous inspection and climate-controlled storage.',
  },
  {
    title: 'Secure Storage',
    description: 'Flexible solutions. Our 60,000 sq ft facility provides secure storage for short-term projects and long-term assets.',
  },
  {
    title: 'White-Glove Shipping',
    description: 'Transport with care. Our specialized fleet ensures your furniture arrives safely and on time.',
  },
  {
    title: 'Disposal & Liquidation',
    description: 'Responsible lifecycle management. Environmentally conscious disposal and value recovery services.',
  },
];

// --- Components ---

const FadeInSection = ({ children, className = '', delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setIsVisible(entry.isIntersecting));
    });
    const currentRef = domRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Services | Ciskos</title>
        <meta
          name="description"
          content="Experience the Ciskos standard. Comprehensive office solutions including installation, logistics, and architectural glass, delivered with precision."
        />
      </Helmet>

      <div className="min-h-screen bg-white text-black overflow-x-hidden">
        <Header />

        {/* --- Hero Section --- */}
        {/* Increased top padding to create space between header and text */}
        <section className="w-full bg-[#1e0033] text-white pt-[220px] pb-[100px] px-6 relative overflow-hidden">
          {/* Abstract Background Shape */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-[#5e3aff]/20 to-transparent pointer-events-none" />

          <div className="max-w-5xl mx-auto text-center relative z-10">
            <h1 className="text-5xl md:text-7xl font-light mb-8 tracking-tight animate-fade-in">
              Our Services
            </h1>
            <p className="text-white/80 text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto font-light animate-slide-up delay-200">
              Comprehensive solutions for the modern workspace. <br className="hidden md:block" />
              Executed with precision, care, and a commitment to excellence.
            </p>
          </div>
        </section>

        {/* --- Section 1: Core Services (Custom Layout) --- */}
        <section className="w-full py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 md:gap-24">

              {/* Left Column: Image (Desktop) / Bottom (Mobile) */}
              {/* On mobile, this comes LAST (order-3). On desktop, it's FIRST (default/order-1) */}
              <div className="w-full md:w-1/2 order-3 md:order-1">
                {/* Removed FadeInSection to ensure visibility */}
                <div className="sticky top-32">
                  <div className="aspect-[3/4] md:aspect-auto md:h-[600px] bg-gray-100 rounded-2xl shadow-xl relative overflow-hidden group">
                    <img
                      src={coolshot}
                      alt="Office Environment"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                </div>
              </div>

              {/* Right Column: Text Blocks */}
              <div className="w-full md:w-1/2 flex flex-col gap-20 order-1 md:order-2">

                {/* Block 1: Furniture Installation */}
                <FadeInSection>
                  <div className="space-y-6">
                    <div className="w-16 h-1 bg-[#5e3aff] rounded-full mb-6" />
                    <h2 className="text-4xl md:text-5xl font-light text-black tracking-tight">
                      Furniture Installation
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Precision installation for all workspace elements. From ancillary furniture and workstations to complex panel systems and lockers, we ensure every piece is placed to perfection. Our team is trained to handle products from all major manufacturers with care and efficiency.
                    </p>
                    <button className="text-[#5e3aff] font-medium hover:text-[#4a2bc2] transition-colors flex items-center gap-2 group">
                      Learn More <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                  </div>
                </FadeInSection>

                {/* Block 2: Office Relocation */}
                <FadeInSection delay={200}>
                  <div className="space-y-6">
                    <div className="w-16 h-1 bg-[#5e3aff] rounded-full mb-6" />
                    <h2 className="text-4xl md:text-5xl font-light text-black tracking-tight">
                      Office Relocation
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Seamless transitions for your evolving business. We manage every detail of your move—packing, transport, and setup—so you can focus on what matters most. Whether you are moving across the hall or across the state, we have you covered.
                    </p>
                    <button className="text-[#5e3aff] font-medium hover:text-[#4a2bc2] transition-colors flex items-center gap-2 group">
                      Learn More <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                  </div>
                </FadeInSection>

              </div>
            </div>
          </div>
        </section>

        {/* --- Section 2: Specialized Solutions (Grid) --- */}
        <section className="w-full py-20 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <FadeInSection>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl text-black font-light mb-4">Specialized Solutions</h2>
                <p className="text-gray-500 max-w-2xl mx-auto">Tailored services to meet the unique demands of your facility.</p>
              </div>
            </FadeInSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {specializedServices.map((service, idx) => (
                <FadeInSection key={idx} delay={idx * 100}>
                  <div className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#5e3aff]/20 h-full flex flex-col">
                    <div className="w-12 h-12 bg-yellow-100 rounded-xl mb-6 flex items-center justify-center text-yellow-600">
                      {/* Icon Placeholder */}
                      <span className="text-xl">★</span>
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 text-black group-hover:text-[#5e3aff] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed flex-grow">
                      {service.description}
                    </p>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        {/* --- Section 3: Logistics & Support (Dark) --- */}
        <section className="w-full py-24 px-6 bg-[#1e0033] text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />

          <div className="max-w-7xl mx-auto relative z-10">
            <FadeInSection>
              <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                <div>
                  <h2 className="text-3xl md:text-5xl font-light mb-2">Logistics & Support</h2>
                  <p className="text-white/60 text-lg">The backbone of a successful project.</p>
                </div>
                <div className="h-[1px] flex-grow bg-white/10 ml-8 hidden md:block mb-4" />
              </div>
            </FadeInSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {logisticsServices.map((service, idx) => (
                <FadeInSection key={idx} delay={idx * 100}>
                  <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-colors duration-300 h-full">
                    <h3 className="text-xl font-semibold mb-3 text-white">
                      {service.title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        <Cta />
      </div>
    </>
  );
}
