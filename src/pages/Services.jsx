import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import logo from '../assets/ciskologo.webp';


const services = [
  {
    title: 'Furniture Installation',
    description:
      'We install a range of products including but not limited to: Ancillary Furniture, Desks, Seating, Workspace Accessories, Workstations/Cubicles, Conference Rooms, Lockers, File Cabinets, Overheads, Panel Systems, and more.',
  },
  {
    title: 'Architectural Glass',
    description:
      "Whether you're looking for Office Window Fronts, In-Office Phone Booths, Conference Rooms, Aesthetic Walls and more, we provide clean and professional glass installations.",
  },
  {
    title: 'Office Relocation',
    description:
      'We aim to be a One-Stop Shop for your remodeling, relocation, or "starting fresh" needs. We arrange all aspects of your project from pick-up to storage to final installation.',
  },
  {
    title: 'Product Receiving',
    description:
      'Furniture can be delivered directly to our secure warehouse located in Union County, NJ. We inspect and store your product until it’s ready to be installed into its new home.',
  },
  {
    title: 'Disposal & Liquidation',
    description:
      'Our team carefully removes and disposes of outdated furniture in an environmentally friendly manner. We also offer liquidation services for selling used furniture.',
  },
  {
    title: 'Product Shipping and Care',
    description:
      'With our shipping service, your furniture and products are transported safely and efficiently to your desired location — with care every step of the way.',
  },
  {
    title: 'Cleaning Services',
    description: 'We offer optional deep cleaning and maintenance services to keep your workplace fresh and sanitized.',
  },
  {
    title: 'Repairs and Touch-Ups',
    description: 'From small fixes to significant touch-ups, we restore furniture to keep it looking and functioning like new.',
  },
  {
    title: 'Office Reconfiguration',
    description: 'We modify existing spaces to assist changes in the workplace. Add partitions, mobile dividers, sneeze guards, and more.',
  },
  {
    title: 'Storage',
    description: 'Our climate-controlled 60,000 sq ft warehouse in a central Tri-State location is available for short- or long-term storage needs.',
  },
];

export default function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Our Services | Ciskos</title>
        <meta
          name="description"
          content="Explore the full range of office furniture services provided by Ciskos: installation, glass systems, relocation, shipping, storage, and more."
        />
      </Helmet>

      {/* Header */}
      <header className="w-full py-8 px-6 md:px-12 bg-[#0d001a] flex justify-between items-center border-b border-white/10">
        <Link to="/">
          <img src={logo} alt="Ciskos Logo" className="w-28 md:w-32" />
        </Link>
        <h1 className="text-white text-2xl md:text-3xl font-light tracking-tight">Our Services</h1>
      </header>

      {/* Services Description Section */}
      <main className="w-full bg-gradient-to-b from-[#1e0033] to-[#120025] py-20 px-6 md:px-16 text-white">
        <div className="max-w-4xl mx-auto space-y-12">
          <p className="text-lg md:text-xl text-white/80 text-center mb-8">
            At Ciskos, we offer a comprehensive suite of office solutions — from furniture installation and reconfiguration to warehousing, relocation, and more.
          </p>

          {services.map((service, idx) => (
            <div key={idx} className="border-l-4 border-purple-400 pl-6">
              <h3 className="text-2xl md:text-3xl font-semibold mb-2 text-white">
                {service.title}
              </h3>
              <p className="text-white/80 text-sm md:text-base leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </main>

    </>
  );
}
