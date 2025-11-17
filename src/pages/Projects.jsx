// src/pages/Projects.jsx
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import logo from "../assets/whiteLogoCropped.webp";

// Auto-import all Clariant images
const clariantImages = import.meta.glob(
  "../assets/projects/clariant/*.webp",
  { eager: true }
);

export default function Projects() {
  /* ------------------------------
     Prepare Ordered Image Array
  ------------------------------ */
  const allImages = Object.keys(clariantImages)
    .map((key) => ({
      name: key.split("/").pop(),
      src: clariantImages[key].default,
    }))
    .sort((a, b) => a.name.localeCompare(b.name));

  const orderedImages = [
    ...allImages.filter((img) => img.name === "entrance.webp"),
    ...allImages.filter((img) => img.name !== "entrance.webp"),
  ];

  const [index, setIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const touchStartX = useRef(null);

  /* Auto Rotate */
  useEffect(() => {
    if (!autoPlay) return;
    const id = setInterval(
      () => setIndex((prev) => (prev + 1) % orderedImages.length),
      3000
    );
    return () => clearInterval(id);
  }, [autoPlay, orderedImages.length]);

  /* Swipe Support */
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e) => {
    if (!touchStartX.current) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;

    if (delta > 40)
      setIndex((prev) => (prev - 1 + orderedImages.length) % orderedImages.length);
    if (delta < -40)
      setIndex((prev) => (prev + 1) % orderedImages.length);

    touchStartX.current = null;
  };

  return (
    <div className="min-h-screen w-full bg-white text-black">

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

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto pt-32 md:pt-40 px-6">

        {/* GRID SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-28 md:gap-36 items-start">

          {/* LEFT COLUMN */}
          <div className="flex flex-col w-full md:pr-10">

            {/* TITLE + UNDERLINE */}
            <div className="mb-5 inline-block">
              <h1 className="text-black text-4xl md:text-5xl font-light inline-block">
                Clariant Project
              </h1>
              <div className="mt-2 h-[3px] bg-[#5b21b6] w-full rounded-full"></div>
            </div>

            {/* DESCRIPTION + BUTTON INLINE (DESKTOP) */}
            <div className="flex flex-col md:flex-row md:items-center gap-3 mb-8 max-w-xl">
              <p className="text-gray-600 text-base md:text-lg m-0">
                A full DIRTT buildout including environmental impact savings,
                workplace technology, and 14,600 sq ft of premium lab & office space.
              </p>

              <a
                href="https://www.clariant.com/dassets/ics/ccic-virtual-tour/index.htm"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  no-underline-hover after:hidden
                  inline-flex items-center justify-center
                  px-4 py-1.5 text-xs font-medium text-white rounded-full
                  bg-[#34107f] shadow-md
                  hover:shadow-[0_0_14px_#6a3fff]
                  hover:bg-[#34107f]
                  transition-all duration-300
                  shrink-0
                "
                style={{ textDecoration: "none" }}
              >
                Take Virtual Tour
              </a>
            </div>

            {/* WIDE, RECTANGULAR CAROUSEL */}
            <div
              className="
                relative w-full max-w-[1100px]
                h-[220px] sm:h-[280px] md:h-[330px] lg:h-[380px] xl:h-[420px]
                rounded-xl overflow-hidden shadow-lg
              "
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {orderedImages.map((img, i) => (
                <img
                  key={img.name}
                  src={img.src}
                  alt={img.name}
                  className={`
                    absolute inset-0 w-full h-full object-cover
                    transition-opacity duration-700
                    ${i === index ? "opacity-100" : "opacity-0"}
                  `}
                  draggable="false"
                />
              ))}
            </div>

            {/* COUNTER */}
            <div className="text-center mt-4 text-gray-700">
              {index + 1} of {orderedImages.length}
            </div>

            {/* PREMIUM CONTROLS */}
            <div className="flex justify-center items-center gap-6 mt-4">
              <button
                onClick={() =>
                  setIndex((prev) => (prev - 1 + orderedImages.length) % orderedImages.length)
                }
                className="
                  w-9 h-9 flex items-center justify-center rounded-full
                  bg-white shadow
                  hover:bg-[#5522cc] hover:text-white
                  hover:shadow-[0_0_12px_#6a3fff]
                  transition-all duration-300
                "
              >
                ←
              </button>

              <button
                onClick={() => setAutoPlay(!autoPlay)}
                className="
                  w-9 h-9 flex items-center justify-center rounded-full
                  bg-white shadow
                  hover:bg-[#5522cc] hover:text-white
                  hover:shadow-[0_0_12px_#6a3fff]
                  transition-all duration-300
                "
              >
                {autoPlay ? "❚❚" : "▶"}
              </button>

              <button
                onClick={() =>
                  setIndex((prev) => (prev + 1) % orderedImages.length)
                }
                className="
                  w-9 h-9 flex items-center justify-center rounded-full
                  bg-white shadow
                  hover:bg-[#5522cc] hover:text-white
                  hover:shadow-[0_0_12px_#6a3fff]
                  transition-all duration-300
                "
              >
                →
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="text-gray-800 md:pl-8">

            <h2 className="text-2xl font-semibold mb-4 text-black">
              Environmental Statistics
            </h2>
            <ul className="list-disc ml-6 mb-10 leading-relaxed">
              <li>Over 9,360 lbs of construction waste diverted from landfill</li>
              <li>38 lbs VOCs prevented from off-gassing</li>
              <li>68% recycled content in wall solution</li>
              <li>4% bio-based content in wall solution</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4 text-black">Project Details</h2>
            <ul className="list-disc ml-6 mb-10 leading-relaxed">
              <li>5 weeks to build 14,600 sq ft of lab + office space</li>
              <li>955+ ft of DIRTT walls</li>
              <li>305 ft of millwork</li>
              <li>40 ft of switch glass</li>
              <li>Full AV + workplace technology integration</li>
              <li>Film + imaging: graphics, switch film, wallcovering</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4 text-black">
              Technology Solutions
            </h2>
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
      </div>
    </div>
  );
}