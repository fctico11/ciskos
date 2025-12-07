import { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Cta from '../components/Cta';
import coolshot from '../assets/projects/tma/coolshot.webp';

// --- Data ---

const specializedServices = [
  {
    title: 'Office Relocation',
    description:
      'Seamless transitions for your evolving business. We manage every detail of your move—packing, transport, and setup—so you can focus on what matters most.',
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

const furnitureManufacturers = [
  'Herman Miller',
  'Steelcase',
  'Knoll',
  'Haworth',
  'Teknion',
  'Allsteel',
  'Kimball',
  'National',
  'Bernhardt',
  'Davis',
];

const glassSystems = [
  'DIRTT',
  'Falk',
  'Tecno',
  'Modernfold',
  'NanaWall',
  'Klein',
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

const ServiceModal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Background Gradient/Pattern */}


        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-black transition-colors z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-8 md:p-12">
          <h3 className="text-3xl md:text-4xl font-light mb-6 text-black">{title}</h3>
          <div className="text-gray-600 leading-relaxed space-y-6">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ServicesPage() {
  const [activeModal, setActiveModal] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeModal]);

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
        {/* Reduced top padding based on user feedback */}
        <section className="w-full bg-[#1e0033] text-white pt-[100px] pb-[40px] px-6 relative overflow-hidden min-h-[280px]">
          {/* Abstract Background Shape */}

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-light mb-6 tracking-tight animate-fade-in">
              Our Services
            </h1>
            <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-light animate-slide-up delay-200">
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
                    <button
                      onClick={() => setActiveModal('furniture')}
                      className="text-[#5e3aff] font-medium hover:text-[#4a2bc2] transition-colors flex items-center gap-2 group"
                    >
                      Learn More <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                  </div>
                </FadeInSection>

                {/* Block 2: Architectural Glass/Walls */}
                <FadeInSection delay={200}>
                  <div className="space-y-6">
                    <div className="w-16 h-1 bg-[#5e3aff] rounded-full mb-6" />
                    <h2 className="text-4xl md:text-5xl font-light text-black tracking-tight">
                      Architectural Glass/Walls
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Transform your workspace with premium glass fronts and wall systems. We specialize in installing sophisticated architectural glass solutions including DIRTT, Falk, and Tecno systems—creating modern, transparent environments that enhance collaboration while maintaining acoustic privacy.
                    </p>
                    <button
                      onClick={() => setActiveModal('glass')}
                      className="text-[#5e3aff] font-medium hover:text-[#4a2bc2] transition-colors flex items-center gap-2 group"
                    >
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
              <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 text-center md:text-left">
                <div className="w-full md:w-auto">
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

        {/* --- Modals --- */}
        <ServiceModal
          isOpen={activeModal === 'furniture'}
          onClose={() => setActiveModal(null)}
          title="Furniture Installation"
        >
          <div className="space-y-10">
            <div>
              <h4 className="text-2xl font-semibold text-[#5e3aff] mb-4">Our Process</h4>
              <p className="text-lg text-gray-700">
                We are involved in the whole process from field dimensions to punch lists. Our project managers work closely with your team to ensure every detail is accounted for. We verify site conditions, coordinate delivery schedules, and manage the installation with precision to minimize downtime and ensure a flawless execution.
              </p>
            </div>

            <div>
              <h4 className="text-2xl font-semibold text-[#5e3aff] mb-6">Manufacturers & Systems</h4>
              <p className="mb-6 text-lg text-gray-700">
                Our certified installers are experienced with a wide range of furniture systems and products from leading manufacturers, including:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {furnitureManufacturers.map((brand, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-[#5e3aff]/5 transition-colors duration-300 group"
                  >
                    <span className="w-2 h-2 bg-[#5e3aff] rounded-full group-hover:scale-150 transition-transform" />
                    <span className="text-xl font-medium text-gray-800 group-hover:text-[#5e3aff] transition-colors">{brand}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ServiceModal>

        <ServiceModal
          isOpen={activeModal === 'glass'}
          onClose={() => setActiveModal(null)}
          title="Architectural Glass/Walls"
        >
          <div className="space-y-10">
            <div>
              <h4 className="text-2xl font-semibold text-[#5e3aff] mb-4">Modern Glass Solutions</h4>
              <p className="text-lg text-gray-700">
                Create inspiring workspaces with state-of-the-art glass wall systems. Our expert installers bring precision and care to every project, from office fronts and conference rooms to acoustic phone booths and collaborative spaces. We transform environments with transparent, modern aesthetics that promote openness while providing necessary privacy and sound control.
              </p>
            </div>

            <div>
              <h4 className="text-2xl font-semibold text-[#5e3aff] mb-6">Glass Systems & Manufacturers</h4>
              <p className="mb-6 text-lg text-gray-700">
                We specialize in installing premium architectural glass systems from industry-leading manufacturers:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {glassSystems.map((system, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-[#5e3aff]/5 transition-colors duration-300 group"
                  >
                    <span className="w-2 h-2 bg-[#5e3aff] rounded-full group-hover:scale-150 transition-transform" />
                    <span className="text-xl font-medium text-gray-800 group-hover:text-[#5e3aff] transition-colors">{system}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ServiceModal>

        <ServiceModal
          isOpen={activeModal === 'relocation'}
          onClose={() => setActiveModal(null)}
          title="Office Relocation"
        >
          <div className="space-y-10">
            <div>
              <h4 className="text-2xl font-semibold text-[#5e3aff] mb-4">Seamless Transitions</h4>
              <p className="text-lg text-gray-700">
                Moving your office shouldn't mean pausing your business. Our relocation experts handle every aspect of the move, from detailed planning and packing to secure transport and efficient setup at your new location. We ensure your technology, furniture, and files are moved safely and organized exactly how you need them.
              </p>
            </div>

            <div>
              <h4 className="text-2xl font-semibold text-[#5e3aff] mb-6">Relocation Services</h4>
              <p className="mb-6 text-lg text-gray-700">
                We offer a comprehensive suite of relocation services tailored to your specific needs:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Project Management',
                  'Packing & Unpacking',
                  'IT & Server Relocation',
                  'Furniture Disassembly/Reassembly',
                  'Secure Crate Rental',
                  'Post-Move Support'
                ].map((service, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-[#5e3aff]/5 transition-colors duration-300 group"
                  >
                    <span className="w-2 h-2 bg-[#5e3aff] rounded-full group-hover:scale-150 transition-transform" />
                    <span className="text-xl font-medium text-gray-800 group-hover:text-[#5e3aff] transition-colors">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ServiceModal>

      </div>
    </>
  );
}
