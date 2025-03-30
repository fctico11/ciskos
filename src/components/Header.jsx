import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-[#1e0033]/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center px-6 md:px-12 py-4 w-full">

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-10 items-center text-sm font-medium text-white w-full justify-center">
          <Link to="/" className="hover:underline underline-offset-4 decoration-white transition">
            Home
          </Link>
          <Link to="/services" className="hover:underline underline-offset-4 decoration-white transition">
            Services
          </Link>
          <Link to="/projects" className="hover:underline underline-offset-4 decoration-white transition">
            Projects
          </Link>
          <Link to="/about" className="hover:underline underline-offset-4 decoration-white transition">
            About
          </Link>
        </nav>

        {/* Contact Button */}
        <Link
          to="/contact"
          className="hidden md:inline-block border border-white px-4 py-1 rounded-md text-white hover:bg-white hover:text-black transition"
        >
          Contact
        </Link>

        {/* Mobile Nav Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-[#1e0033]/90 backdrop-blur-md transform transition-transform duration-500 ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        } flex flex-col items-center justify-center space-y-6 z-50`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 text-3xl text-white"
        >
          ×
        </button>

        {/* Mobile Nav Links */}
        <Link to="/" onClick={() => setIsOpen(false)} className="text-white text-xl hover:underline">
          Home
        </Link>
        <Link to="/services" onClick={() => setIsOpen(false)} className="text-white text-xl hover:underline">
          Services
        </Link>
        <Link to="/projects" onClick={() => setIsOpen(false)} className="text-white text-xl hover:underline">
          Projects
        </Link>
        <Link to="/about" onClick={() => setIsOpen(false)} className="text-white text-xl hover:underline">
          About
        </Link>
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

