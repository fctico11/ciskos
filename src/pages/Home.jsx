import heroBg from "../assets/CiskoHeader.webp";
import logo from "../assets/ciskologo.webp";
import ServicesSection from '../components/ServicesSection';
import LocationSection from '../components/LocationSection';
import LogoCarousel from '../components/LogoCarousel';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

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

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center space-y-4 px-4">

                    {/* Logo */}
                    <img
                        src={logo}
                        alt="Ciskos Logo"
                        className="w-40 md:w-48 drop-shadow-lg mt-6 md:mt-0"
                    />

                    {/* Desktop Headline */}
                    <h1 className="hidden md:block text-[3.8rem] font-light tracking-tight text-white drop-shadow-[0_4px_6px_rgba(0,0,0,0.85)]">
                        Office Furniture Experts - We Do It All
                    </h1>

                    {/* Mobile Headline */}
                    <div className="block md:hidden space-y-2">
                        <h1 className="text-[2.2rem] font-normal tracking-tight text-white leading-tight drop-shadow-[0_4px_6px_rgba(0,0,0,0.85)]">
                            Office Furniture Experts
                        </h1>
                        <h2 className="text-[1.7rem] font-normal tracking-tight text-white leading-tight drop-shadow-[0_4px_6px_rgba(0,0,0,0.85)]">
                            We Do It All
                        </h2>
                    </div>

                    {/* Subheading */}
                    <p className="text-lg md:text-2xl text-white/90 font-light drop-shadow-[0_4px_6px_rgba(0,0,0,0.85)] mt-2">
                        Turning your visions into reality
                    </p>

                    {/* Get a Quote Button */}
                    <Link
                        to="/contact"
                        className="no-underline-hover mt-4 inline-block px-6 py-3 rounded-full border border-white text-white font-light tracking-wide
                                   backdrop-blur-md bg-white/10 hover:bg-white/20 hover:scale-105
                                   hover:shadow-[0_0_25px_rgba(94,58,255,0.5)] transition-all duration-300 ease-out shadow-md"
                    >
                        Get a Quote
                    </Link>
                </div>
            </section>

            {/* Services Section */}
            <ServicesSection />
            {/* Logos */}
            <LogoCarousel />
            {/* Locations Section */}
            <LocationSection />
        </>
    );
}