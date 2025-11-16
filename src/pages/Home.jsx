import heroBg from "../assets/CiskoHeader.webp";
import logo from "../assets/whiteLogoCropped.webp";
import ServicesSection from '../components/ServicesSection';
import LocationSection from '../components/LocationSection';
import LogoCarousel from '../components/LogoCarousel';
import ProjectsPreview from '../components/ProjectsPreview';
import Testimonials from '../components/Testimonials';
import Cta from '../components/Cta';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const splitText = (text) =>
    text.split("").map((char, i) => (
        <span
            key={i}
            className="inline-block opacity-0 animate-letter-fade"
            style={{ animationDelay: `${i * 40}ms` }}
        >
            {char === " " ? "\u00A0" : char}
        </span>
    ));

export default function Home() {
    return (
        <>
            <Helmet>
                <title>Ciskos | Office Furniture Experts</title>
                <meta
                    name="description"
                    content="Ciskos specializes in professional office furniture installation, relocation, and glass systems across the Tri-State and beyond."
                />
                <meta property="og:title" content="Ciskos | Office Furniture Experts" />
                <meta property="og:description" content="We provide end-to-end installation and logistics for modern office systems in NJ, NY, PA and more." />
                <meta property="og:type" content="website" />
            </Helmet>

            {/* Hero Section */}
            <section
                className="relative w-screen h-screen bg-cover bg-center flex flex-col items-center justify-start pt-28 md:pt-32 text-center"
                style={{ backgroundImage: `url(${heroBg})` }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 md:bg-black/40 z-0" />

                {/* Content with gradient background */}
                <div className="relative z-10 flex flex-col items-center space-y-4 px-4
                                bg-gradient-to-b from-black/30 via-black/20 to-transparent
                                rounded-xl p-4 md:p-6">
                    
                    {/* Logo */}
                    <div className="w-40 md:w-48 aspect-[1/1] relative animate-fade-zoom-slow">
                        <img
                            src={logo}
                            alt="Ciskos Logo"
                            className="absolute inset-0 w-full h-full object-contain drop-shadow-lg"
                        />
                    </div>

                    {/* Desktop Headline */}
                    <h1 className="hidden md:block text-[3.8rem] font-light tracking-tight text-white drop-shadow-[0_4px_6px_rgba(0,0,0,0.85)]">
                        {splitText("Office Furniture Experts - We Do It All")}
                    </h1>

                    {/* Mobile Headline */}
                    <div className="block md:hidden space-y-2">
                        <h1 className="text-[2.3rem] font-normal tracking-tight text-white leading-tight drop-shadow-[0_4px_6px_rgba(0,0,0,0.85)]">
                            {splitText("Office Furniture Experts")}
                        </h1>
                        <h2 className="text-[1.7rem] font-normal tracking-tight text-white leading-tight drop-shadow-[0_4px_6px_rgba(0,0,0,0.85)]">
                            {splitText("We Do It All")}
                        </h2>
                    </div>

                    {/* Subheading */}
                    <p className="text-lg md:text-2xl text-white/90 font-light drop-shadow-[0_4px_6px_rgba(0,0,0,0.85)] mt-2 animate-fade-slow">
                        Turning your visions into reality
                    </p>

                    {/* Get a Quote Button */}
                    <Link
                        to="/contact"
                        className="no-underline-hover purple-hover-glow mt-4 inline-block px-6 py-3 rounded-full border border-white text-white font-light tracking-wide
                                backdrop-blur-md bg-white/10 transition-all duration-500 ease-out shadow-md animate-fade-slow delay-1000"
                    >
                        Get a Quote
                    </Link>
                </div>
            </section>

            {/* Services Section */}
            <ServicesSection />
            {/* Logos */}
            <LogoCarousel />

            {/* Projects Preview Section */}
            <ProjectsPreview />

            {/* Spacer */}
            {/* Locations Section */}
            <LocationSection />
            {/* Testimonials Section */}
            <Testimonials />
            {/* Call to Action Section */}
            <Cta />

        </>
    );
}