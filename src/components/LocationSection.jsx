import { useEffect, useRef, useState } from 'react';
import tristate from '../assets/icons/furn.png';
import paIcon from '../assets/icons/furn.png';
import mdIcon from '../assets/icons/furn.png';
import usaIcon from '../assets/icons/furn.png';

export default function LocationSection() {
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
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="w-full bg-[#f8f5ff] py-12 px-6 md:px-16 text-black"
        >
            <div className="max-w-5xl mx-auto">

                {/* Title & Subtitle */}
                <div
                    className={`text-center mb-10 transition-all duration-700 ease-out
                        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
                >
                    <h2 className="relative text-black text-4xl md:text-5xl font-light tracking-tight ">
                        Areas We Serve
                    </h2>
                    <p className="text-gray-600 mt-1">Covering the Northeast and more</p>
                </div>

                {/* Region List */}
                <div className="space-y-6">
                    {[
                        { icon: tristate, title: "Tri-State Area", desc: "New Jersey, New York, Connecticut" },
                        { icon: paIcon, title: "Pennsylvania", desc: "All major cities and surrounding areas" },
                        { icon: mdIcon, title: "Maryland", desc: "Full coverage of Maryland regions" },
                        { icon: usaIcon, title: "USA Wide", desc: "Available nationwide upon request" },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className={`flex items-center justify-between space-x-4 border-b border-gray-200 pb-4 group
                                transition-all duration-700 ease-out
                                ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
                            style={{ transitionDelay: `${i * 150}ms` }}
                        >
                            <div className="flex items-center space-x-3">
                                <div
                                    className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center
                                        transition-colors duration-300 group-hover:bg-purple-100"
                                >
                                    <img src={item.icon} alt="" className="w-6 h-6 opacity-80" />
                                </div>
                                <h3 className="text-black text-base md:text-lg font-medium relative after:block after:h-0.5 after:bg-purple-500 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 group-hover:after:scale-x-100">
                                    {item.title}
                                </h3>
                            </div>
                            <p className="text-gray-500 text-sm md:text-base text-right max-w-xs">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}