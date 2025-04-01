import { useEffect, useRef, useState } from 'react';
import service1 from '../assets/icons/furn.png';
import service2 from '../assets/icons/glass.png';
import service3 from '../assets/icons/furn.png';
import service4 from '../assets/icons/furn.png';

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
        <section ref={sectionRef} className="w-full bg-[#1e0033] py-20 px-6 md:px-16 text-white">
            <div className="max-w-7xl mx-auto">

                {/* Section Heading */}
                <div className={`mb-14 text-center transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                    <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">Our Services</h2>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {services.map((service, i) => (
                        <div
                            key={i}
                            className={`
                                flex flex-col items-center text-center space-y-4
                                bg-[#2b0d4e] rounded-xl py-6 px-4
                                transform transition-all duration-700 ease-out
                                ${visible ? `opacity-100 translate-y-0 delay-${i * 100}` : 'opacity-0 translate-y-6'}
                                hover:scale-105
                            `}
                            style={{ transitionDelay: `${i * 100}ms` }}
                        >
                            <img src={service.img} alt={service.title} className="w-16 h-16" />
                            <h3 className="text-base md:text-lg font-semibold">{service.title}</h3>
                            <p className="text-sm text-white/70">{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
