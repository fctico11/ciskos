import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import service1 from '../assets/icons/furn.png';
import service2 from '../assets/icons/glassIcon.webp';
import service3 from '../assets/icons/relocation.webp';
import service4 from '../assets/icons/truck.webp';

export default function ServicesSection() {
    const [visible, setVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const services = [
        { img: service1, title: "Furniture Installation", desc: "Desks, seating, accessories, cubicles, conference rooms, lockers, file cabinets, and more." },
        { img: service2, title: "Architectural Glass", desc: "Office fronts, phone booths, conference rooms, and other glass installations." },
        { img: service3, title: "Office Relocation & Reconfiguration", desc: "Complete remodeling, relocation, storage, and final installation services." },
        { img: service4, title: "Product Receiving & Shipping", desc: "Secure warehouse receiving, inspection, storage, and delivery in Union County, NJ." }
    ];

    return (
        <section ref={sectionRef} className="w-full bg-white py-20 px-6 md:px-16 text-black">
            <div className="max-w-7xl mx-auto">

                {/* Section Heading with dynamic animation */}
                <div
                    className={`mb-14 text-center transition-all duration-1000 ease-out
                    ${visible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'}`}
                >
                    <h2 className="text-black text-4xl md:text-5xl font-light tracking-tight">
                        Our Services
                    </h2>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                    {services.map((service, i) => (
                        <div
                            key={i}
                            className={`
                                flex flex-col items-center text-center space-y-4
                                bg-gradient-to-b from-[#1e0033] to-[#120025] text-white
                                rounded-xl py-6 px-4
                                transform transition-all duration-500 ease-[cubic-bezier(0.4, 0, 0.2, 1)]
                                ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
                                hover:scale-105 hover:shadow-[0_0_30px_rgba(94,58,255,0.4)]
                            `}
                            style={{ transitionDelay: `${i * 100}ms` }}
                        >
                            <img src={service.img} alt={service.title} className="w-16 h-16" />
                            <h3 className="text-base md:text-lg font-semibold">{service.title}</h3>
                            <p className="text-sm text-white/70">{service.desc}</p>
                        </div>
                    ))}
                </div>

                <div className={`flex justify-center transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                    <Link
                        to="/services"
                        className="relative overflow-hidden px-8 py-3 rounded-full border border-black text-black font-light tracking-wide no-underline
                                transition-all duration-300 backdrop-blur-md bg-black/5 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,0,0,0.2)]
                                before:absolute before:inset-0 before:bg-gradient-to-r before:from-black/10 before:to-transparent before:opacity-0 
                                hover:before:opacity-100 before:transition-opacity before:duration-500"
                        style={{ textDecoration: 'none' }}>
                        View All Services
                    </Link>
                </div>

            </div>
        </section>
    );
}