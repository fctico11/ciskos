import { Link } from "react-router-dom";

export default function Cta() {
    return (
        <section className="w-full bg-white py-24 px-6 md:px-16 text-black overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">

                {/* Left Side: Text */}
                <div className="w-full md:w-1/2 text-center md:text-left space-y-8">
                    <h2 className="text-5xl md:text-7xl font-light text-black tracking-tighter leading-[1.1]">
                        Ready to transform <br className="hidden md:block" />
                        <span className="text-[#5e3aff]">your space?</span>
                    </h2>
                    <p className="text-gray-500 text-lg md:text-xl max-w-xl mx-auto md:mx-0 leading-relaxed font-light">
                        From complex installations to seamless relocations, we bring precision and care to every square foot of your office.
                    </p>
                </div>

                {/* Right Side: Big Circular Button */}
                <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                    <Link
                        to="/contact"
                        className="group relative w-48 h-48 md:w-64 md:h-64 bg-[#5e3aff] rounded-full flex flex-col items-center justify-center text-white transition-all duration-500 hover:scale-105 hover:rotate-3 shadow-2xl hover:shadow-[0_20px_50px_rgba(94,58,255,0.3)] z-10"
                    >
                        <span className="text-xl md:text-2xl font-medium tracking-wide mb-2">Get in Touch</span>

                        {/* Arrow Icon */}
                        <svg
                            className="w-8 h-8 md:w-10 md:h-10 transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" transform="rotate(-45 12 12)" />
                        </svg>

                        {/* Ripple/Pulse Effect behind */}
                        <div className="absolute inset-0 rounded-full border border-[#5e3aff]/30 scale-110 group-hover:scale-125 transition-transform duration-700 ease-out -z-10" />
                        <div className="absolute inset-0 rounded-full border border-[#5e3aff]/10 scale-125 group-hover:scale-150 transition-transform duration-1000 ease-out -z-10" />
                    </Link>
                </div>

            </div>
        </section>
    );
}