import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 768) {
        setScrolled(window.scrollY > 10);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close drawer automatically on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled && window.innerWidth >= 768
          ? "bg-[#1e0033]/80 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="relative flex justify-center items-center px-6 md:px-12 py-4 w-full">

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-10 text-sm font-medium text-white">
          <Link to="/" className="desktop-link">Home</Link>
          <Link to="/services" className="desktop-link">Services</Link>
          <Link to="/projects" className="desktop-link">Projects</Link>
          <Link to="/about" className="desktop-link">About</Link>
          <Link to="/shop" className="desktop-link">Shop</Link>
        </nav>

        {/* Desktop Contact Button (NO underline) */}
        <Link
          to="/contact"
          className="no-underline-hover hidden md:inline-block absolute right-12 border border-white px-4 py-1 rounded-md text-white hover:bg-white hover:text-black transition"
        >
          Contact
        </Link>

        {/* Mobile Burger Icon */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden absolute right-2 top-[0.4rem]
                     text-white text-2xl w-11 h-11 rounded-full
                     flex items-center justify-center
                     bg-[#5e3aff55] backdrop-blur-md
                     shadow-sm border border-white/10"
        >
          ☰
        </button>
      </div>

      {/* 📱 Mobile Drawer */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-[#1e0033]/90 backdrop-blur-md transition-transform duration-500 z-50 flex flex-col items-center justify-center space-y-6 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 text-white text-3xl
                     w-10 h-10 rounded-full flex items-center justify-center
                     bg-[#5e3aff33] backdrop-blur-sm border border-white/10 shadow-sm"
        >
          ×
        </button>

        {/* Drawer Links */}
        {[
          { to: "/", label: "Home" },
          { to: "/services", label: "Services" },
          { to: "/projects", label: "Projects" },
          { to: "/about", label: "About" },
          { to: "/shop", label: "Shop" },
        ].map((link) => {
          const isActive = location.pathname === link.to;

          return (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className={`
                text-white text-xl relative pb-1 
                ${isActive ? "font-semibold" : ""}
                ${isActive 
                  ? "no-underline-hover after:w-full after:h-[2px] after:bg-[#b499ff] after:absolute after:left-0 after:-bottom-1 after:rounded-full"
                  : ""
                }
              `}
            >
              {link.label}
            </Link>
          );
        })}

        {/* Drawer Contact — NEVER underlined */}
        <Link
          to="/contact"
          onClick={() => setIsOpen(false)}
          className="no-underline-hover border border-white px-4 py-1 rounded-md text-white hover:bg-white hover:text-black transition"
        >
          Contact
        </Link>
      </div>
    </header>
  );
}