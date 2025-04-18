import heroBg from "../assets/CiskoHeader.webp";
import logo from "../assets/ciskologo.webp";
import ServicesSection from '../components/ServicesSection';
import LocationSection from '../components/LocationSection';
import LogoCarousel from '../components/LogoCarousel';
import { Helmet } from 'react-helmet-async';


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
                <div className="absolute inset-0 bg-black/40 z-0" />

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center space-y-4">

                    {/* Logo */}
                    <img
                        src={logo}
                        alt="Ciskos Logo"
                        className="w-40 md:w-48 drop-shadow-lg mt-6 md:mt-0" // ✅ bigger on mobile
                    />

                    {/* Desktop Headline */}
                    <h1 className="hidden md:block text-[3.5rem] font-light tracking-tight text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.7)]">
                        Office Furniture Experts - We Do It All
                    </h1>

                    {/* Mobile Headline */}
                    <div className="block md:hidden space-y-2">
                        <h1 className="text-3xl font-normal tracking-tight text-white leading-tight drop-shadow-[0_2px_2px_rgba(0,0,0,0.7)]">
                            Office Furniture Experts
                        </h1>
                        <h2 className="text-2xl font-normal tracking-tight text-white leading-tight drop-shadow-[0_2px_2px_rgba(0,0,0,0.7)]">
                            We Do It All
                        </h2>
                    </div>

                    {/* Subheading */}
                    <p className="text-lg md:text-xl text-white/80 font-light drop-shadow-[0_1px_1px_rgba(0,0,0,0.7)] mt-2">
                        Turning your visions into reality
                    </p>
                </div>
            </section>

            {/* Services Section */}
            <ServicesSection />
            {/*Logos */}
            <LogoCarousel />
            {/* Locations Section */}
            <LocationSection />
        </>
    );
}
