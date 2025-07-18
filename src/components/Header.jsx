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
        scrolled && window.innerWidth >= 768 ? "bg-[#1e0033]/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="relative flex justify-center items-center px-6 md:px-12 py-4 w-full">

        {/* Centered Desktop Nav */}
        <nav className="hidden md:flex space-x-10 text-sm font-medium text-white">
          <Link to="/" className="desktop-link">Home</Link>
          <Link to="/services" className="desktop-link">Services</Link>
          <Link to="/projects" className="desktop-link">Projects</Link>
          <Link to="/about" className="desktop-link">About</Link>
          <Link to="/shop" className="desktop-link">Shop</Link>
        </nav>

        {/* Contact Button */}
        <Link
          to="/contact"
          className="hidden md:inline-block absolute right-12 border border-white px-4 py-1 rounded-md text-white hover:bg-white hover:text-black transition"
        >
          Contact
        </Link>

        {/* Burger Icon */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden text-white text-3xl absolute right-6 top-1/2 transform -translate-y-1/2"
        >
          ☰
        </button>
      </div>

      {/* ✅ Mobile Drawer */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-[#1e0033]/90 backdrop-blur-md transition-transform duration-500 z-50 flex flex-col items-center justify-center space-y-6 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 text-3xl text-white"
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
        ].map((link) => (
          <Link
            key={link.to}
            to={link.to}
            onClick={() => setIsOpen(false)}
            className="text-white text-xl hover:underline"
          >
            {link.label}
          </Link>
        ))}

        <Link
          to="/contact"
          onClick={() => setIsOpen(false)}
          className="border border-white px-4 py-1 rounded-md text-white hover:bg-white hover:text-black transition"
        >
          Contact
        </Link>
      </div>
    </header>
  );
}