// src/pages/Projects.jsx
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Cta from "../components/Cta";
import logo from "../assets/whiteLogoCropped.webp";

// Auto-import all Clariant images
const clariantImagesGlob = import.meta.glob(
  "../assets/projects/clariant/*.webp",
  { eager: true }
);

// Auto-import all TMA images
const tmaImagesGlob = import.meta.glob("../assets/projects/tma/*.webp", {
  eager: true,
});

export default function Projects() {
  /* ------------------------------
     Prepare Clariant Image Array
  ------------------------------ */
  const clariantAllImages = Object.keys(clariantImagesGlob)
    .map((key) => ({
      name: key.split("/").pop(),
      src: clariantImagesGlob[key].default,
    }))
    .sort((a, b) => a.name.localeCompare(b.name));

  const clariantOrderedImages = [
    ...clariantAllImages.filter((img) => img.name === "entrance.webp"),
    ...clariantAllImages.filter((img) => img.name !== "entrance.webp"),
  ];

  /* ------------------------------
     Prepare TMA Image Array
  ------------------------------ */
  const tmaAllImages = Object.keys(tmaImagesGlob)
    .map((key) => ({
      name: key.split("/").pop(),
      src: tmaImagesGlob[key].default,
    }))
    .sort((a, b) => a.name.localeCompare(b.name));

  const tmaDesiredOrder = [
    "entry3.webp",
    "tmaentry.webp",
    "tmahuddle.webp",
    "tmahuddle2.webp",
    "tmalibrary.webp",
    "tmapantry.webp",
    "tmapantry2.webp",
    "granite.webp",
    "other.webp",
    "coolshot.webp",
  ];

  const tmaOrderedImages = tmaDesiredOrder
    .map((name) => tmaAllImages.find((img) => img.name === name))
    .filter(Boolean);

  /* ------------------------------
     Carousel State
  ------------------------------ */
  const [clariantIndex, setClariantIndex] = useState(0);
  const [clariantAutoPlay, setClariantAutoPlay] = useState(true);
  const clariantTouchStartX = useRef(null);

  const [tmaIndex, setTmaIndex] = useState(0);
  const [tmaAutoPlay, setTmaAutoPlay] = useState(true);
  const tmaTouchStartX = useRef(null);

  /* ------------------------------
     Animation State
  ------------------------------ */
  const [showTma, setShowTma] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const tmaRef = useRef(null);

  /* Detect mobile once */
  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  /* On scroll, trigger TMA animation */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShowTma(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (tmaRef.current) observer.observe(tmaRef.current);

    return () => observer.disconnect();
  }, []);

  /* Auto Rotate - Clariant */
  useEffect(() => {
    if (!clariantAutoPlay || clariantOrderedImages.length === 0) return;
    const id = setInterval(
      () =>
        setClariantIndex(
          (prev) => (prev + 1) % clariantOrderedImages.length
        ),
      3000
    );
    return () => clearInterval(id);
  }, [clariantAutoPlay, clariantOrderedImages.length]);

  /* Auto Rotate - TMA */
  useEffect(() => {
    if (!tmaAutoPlay || tmaOrderedImages.length === 0) return;
    const id = setInterval(
      () => setTmaIndex((prev) => (prev + 1) % tmaOrderedImages.length),
      3000
    );
    return () => clearInterval(id);
  }, [tmaAutoPlay, tmaOrderedImages.length]);

  /* Swipe Support - Clariant */
  const handleClariantTouchStart = (e) => {
    clariantTouchStartX.current = e.touches[0].clientX;
  };
  const handleClariantTouchEnd = (e) => {
    if (!clariantTouchStartX.current) return;
    const delta = e.changedTouches[0].clientX - clariantTouchStartX.current;

    if (delta > 40)
      setClariantIndex(
        (prev) =>
          (prev - 1 + clariantOrderedImages.length) %
          clariantOrderedImages.length
      );

    if (delta < -40)
      setClariantIndex(
        (prev) => (prev + 1) % clariantOrderedImages.length
      );

    clariantTouchStartX.current = null;
  };

  /* Swipe Support - TMA */
  const handleTmaTouchStart = (e) => {
    tmaTouchStartX.current = e.touches[0].clientX;
  };
  const handleTmaTouchEnd = (e) => {
    if (!tmaTouchStartX.current) return;
    const delta = e.changedTouches[0].clientX - tmaTouchStartX.current;

    if (delta > 40)
      setTmaIndex(
        (prev) =>
          (prev - 1 + tmaOrderedImages.length) % tmaOrderedImages.length
      );

    if (delta < -40)
      setTmaIndex(
        (prev) => (prev + 1) % tmaOrderedImages.length
      );

    tmaTouchStartX.current = null;
  };

  return (
    <div className="min-h-screen w-full bg-white text-black">
      {/* ANIMATION KEYFRAMES */}
      <style>
        {`
          @keyframes slideInLeft {
            0% { opacity: 0; transform: translateX(-60px); }
            100% { opacity: 1; transform: translateX(0); }
          }
          @keyframes slideInRight {
            0% { opacity: 0; transform: translateX(60px); }
            100% { opacity: 1; transform: translateX(0); }
          }
          @keyframes fadeUp {
            0% { opacity: 0; transform: translateY(30px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          .fade-up { animation: fadeUp 0.9s ease-out forwards; }
          .animate-slide-left { animation: slideInLeft 1.1s ease-out forwards; }
          .animate-slide-right { animation: slideInRight 1.1s ease-out forwards; }
        `}
      </style>

      {/* HEADER */}
      <div className="hidden md:block">
        <Header />
      </div>

      {/* MOBILE LOGO */}
      <Link
        to="/"
        className="md:hidden absolute top-5 left-5 z-50 no-underline-hover after:hidden"
      >
        <img src={logo} alt="Ciskos" className="w-20 drop-shadow-xl" />
      </Link>

      {/* INTRO SECTION */}
      <section className="w-full bg-[#1e0033] text-white px-6 pt-[110px] md:pt-[80px] pb-[32px]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-light mb-2">
            Our Project Work
          </h2>
          <p className="text-white/80 text-base md:text-lg leading-relaxed">
            Take a look at some of the projects we’ve completed for clients
            across the tri-state area — including full DIRTT buildouts, office
            transformations, AV integrations, and modern workspace solutions.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto pt-16 md:pt-24 px-6">
        {/* -----------------------------
            PROJECT 1 — CLARIANT
        ------------------------------ */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 items-start ${isMobile ? "fade-up" : "animate-slide-left"}`}>

          {/* LEFT COLUMN - Title + Carousel */}
          <div className="flex flex-col w-full md:pr-10">
            {/* TITLE */}
            <div className="mb-5 inline-block">
              <h1 className="flex items-center gap-3">
                <span className="text-black text-4xl md:text-5xl font-light">
                  Clariant
                </span>
                <span className="text-gray-400 text-base md:text-lg leading-none">•</span>
                <span className="text-gray-500 text-sm md:text-base font-light">
                  New Providence, NJ
                </span>
              </h1>
              <div className="mt-2 h-[3px] bg-[#5b21b6] w-full rounded-full"></div>
            </div>

            {/* DESCRIPTION + BUTTON */}
            <div className="flex flex-col md:flex-row md:items-center gap-3 mb-6 max-w-xl">
              <p className="text-gray-600 text-base md:text-lg m-0">
                A full DIRTT buildout including environmental impact savings,
                workplace technology, and 14,600 sq ft of premium lab & office space.
              </p>

              <a
                href="https://www.clariant.com/dassets/ics/ccic-virtual-tour/index.htm"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-1.5 text-xs font-medium text-white rounded-full bg-[#34107f] shadow-md shrink-0 self-start w-auto hover:shadow-[0_0_14px_#6a3fff] transition-all duration-300"
              >
                Take Virtual Tour
              </a>
            </div>

            {/* CAROUSEL */}
            <div
              className="relative w-full max-w-[1100px] h-[220px] sm:h-[280px] md:h-[330px] lg:h-[380px] xl:h-[420px] rounded-xl overflow-hidden shadow-lg"
              onTouchStart={handleClariantTouchStart}
              onTouchEnd={handleClariantTouchEnd}
            >
              {clariantOrderedImages.map((img, i) => (
                <img
                  key={img.name}
                  src={img.src}
                  alt={img.name}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${i === clariantIndex ? "opacity-100" : "opacity-0"}`}
                  draggable="false"
                />
              ))}
            </div>

            {/* COUNTER */}
            <div className="text-center mt-3 text-gray-700">
              {clariantIndex + 1} of {clariantOrderedImages.length}
            </div>

            {/* CONTROLS */}
            <div className="flex justify-center items-center gap-6 mt-3 md:mt-4 mb-3 md:mb-8">
              <button
                onClick={() =>
                  setClariantIndex((prev) => (prev - 1 + clariantOrderedImages.length) % clariantOrderedImages.length)
                }
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white shadow hover:bg-[#5522cc] hover:text-white transition-all duration-300"
              >
                ←
              </button>

              <button
                onClick={() => setClariantAutoPlay(!clariantAutoPlay)}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white shadow hover:bg-[#5522cc] hover:text-white transition-all duration-300"
              >
                {clariantAutoPlay ? "❚❚" : "▶"}
              </button>

              <button
                onClick={() =>
                  setClariantIndex((prev) => (prev + 1) % clariantOrderedImages.length)
                }
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white shadow hover:bg-[#5522cc] hover:text-white transition-all duration-300"
              >
                →
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN - Specs */}
          <div className="text-gray-800 md:pl-8">
            <h2 className="text-2xl font-semibold mb-4 text-black">Project Details</h2>
            <ul className="list-disc ml-6 mb-8 leading-relaxed">
              <li>5 weeks to build 14,600 sq ft of lab + office space</li>
              <li>955+ ft of DIRTT walls</li>
              <li>305 ft of millwork</li>
              <li>40 ft of switch glass</li>
              <li>Full AV + workplace tech integration</li>
              <li>Film + imaging: graphics, switch film, wallcovering</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4 text-black">Environmental Statistics</h2>
            <ul className="list-disc ml-6 mb-8 leading-relaxed">
              <li>9,360 lbs of construction waste diverted from landfill</li>
              <li>38 lbs VOCs prevented from off-gassing</li>
              <li>68% recycled content in wall solution</li>
              <li>4% bio-based content in wall solution</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4 text-black">Technology Solutions</h2>
            <ul className="list-disc ml-6 mb-10 leading-relaxed">
              <li>Lobby: 75” display + speakers</li>
              <li>Lobby Conference: 75” presenter display</li>
              <li>Demo A: 75” + 55” displays</li>
              <li>Demo B: projector lift, 130” screen, full AV suite</li>
              <li>Small Conference: dual displays + wireless presenter</li>
              <li>Open Collaboration: 55” wireless display</li>
            </ul>
          </div>
        </div>

        {/* DIVIDER — DESKTOP */}
        <div className="hidden md:flex w-full justify-center my-20">
          <div className="w-[90%] h-[2px] bg-gradient-to-r from-transparent via-[#d1d1d1] to-transparent"></div>
        </div>

        {/* DIVIDER — MOBILE */}
        <div className="flex md:hidden w-full justify-center my-12">
          <div className="w-[80%] h-[2px] bg-gradient-to-r from-transparent via-[#d1d1d1] to-transparent"></div>
        </div>

        {/* -----------------------------
            PROJECT 2 — TMA
        ------------------------------ */}
        <div
          ref={tmaRef}
          className={`grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 items-start pb-24 ${showTma ? (isMobile ? "fade-up" : "animate-slide-right") : "opacity-0"
            }`}
        >
          {/* LEFT COLUMN - Specs */}
          <div className="order-2 md:order-1 text-gray-800 md:pr-8">
            <h2 className="text-2xl font-semibold mb-4 text-black">
              Project Overview
            </h2>
            <ul className="list-disc ml-6 mb-8 leading-relaxed">
              <li>Location: Chrysler Building, New York, NY</li>
              <li>Size: 23,000 RSF full floor</li>
              <li>Average population: ~85 employees</li>
              <li>Completion: September 2024</li>
              <li>Design firm: Ted Moudis Associates</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4 text-black">
              Scope of Work
            </h2>
            <ul className="list-disc ml-6 mb-8 leading-relaxed">
              <li>Innovant benching and workstation systems</li>
              <li>Pantry & café furniture installations</li>
              <li>Booth seating & collaboration zones</li>
              <li>Conference room tables & meeting furniture</li>
              <li>Support for private phone & focus rooms</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4 text-black">
              Amenity-Rich Workplace
            </h2>
            <ul className="list-disc ml-6 mb-8 leading-relaxed">
              <li>Café, lounge, pantry social hub</li>
              <li>Multiple conference rooms & open collaboration areas</li>
              <li>Library spaces & custom booth seating</li>
              <li>Hospitality-inspired office environment</li>
            </ul>


          </div>

          {/* RIGHT COLUMN - Title + Carousel */}
          <div className="order-1 md:order-2 flex flex-col w-full md:pl-10">
            {/* TITLE */}
            <div className="mb-5 inline-block">
              <h1 className="flex items-center gap-3">
                <span className="text-black text-3xl md:text-4xl lg:text-5xl font-light">
                  Ted Moudis Associates
                </span>
                <span className="text-gray-400 text-base md:text-lg leading-none">
                  •
                </span>
                <span className="text-gray-500 text-xs md:text-sm lg:text-base font-light">
                  Chrysler Building, NYC
                </span>
              </h1>
              <div className="mt-2 h-[3px] bg-[#5b21b6] w-full rounded-full"></div>
            </div>

            {/* DESCRIPTION */}
            <div className="mb-6 max-w-xl">
              <p className="text-gray-600 text-base md:text-lg m-0">
                An amenity-rich workplace for a leading architecture and design
                firm, featuring Innovant workstations, custom booths, pantry
                seating, collaboration areas, and conference environments —
                designed to support an experiential, hospitality-inspired
                full-floor office within the iconic Chrysler Building.
              </p>
            </div>

            {/* CAROUSEL */}
            <div
              className="relative w-full max-w-[1100px] h-[220px] sm:h-[280px] md:h-[330px] lg:h-[380px] xl:h-[420px] rounded-xl overflow-hidden shadow-lg"
              onTouchStart={handleTmaTouchStart}
              onTouchEnd={handleTmaTouchEnd}
            >
              {tmaOrderedImages.map((img, i) => (
                <img
                  key={img.name}
                  src={img.src}
                  alt={img.name}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${i === tmaIndex ? "opacity-100" : "opacity-0"
                    }`}
                  draggable="false"
                />
              ))}
            </div>

            {/* COUNTER */}
            <div className="text-center mt-3 text-gray-700">
              {tmaIndex + 1} of {tmaOrderedImages.length}
            </div>

            {/* CONTROLS */}
            <div className="flex justify-center items-center gap-6 mt-3 md:mt-4">
              <button
                onClick={() =>
                  setTmaIndex(
                    (prev) =>
                      (prev - 1 + tmaOrderedImages.length) %
                      tmaOrderedImages.length
                  )
                }
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white shadow hover:bg-[#5522cc] hover:text-white transition-all duration-300"
              >
                ←
              </button>

              <button
                onClick={() => setTmaAutoPlay(!tmaAutoPlay)}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white shadow hover:bg-[#5522cc] hover:text-white transition-all duration-300"
              >
                {tmaAutoPlay ? "❚❚" : "▶"}
              </button>

              <button
                onClick={() =>
                  setTmaIndex((prev) => (prev + 1) % tmaOrderedImages.length)
                }
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white shadow hover:bg-[#5522cc] hover:text-white transition-all duration-300"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>

      <Cta />
    </div>
  );
}