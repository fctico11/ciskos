import logo from "../assets/whiteLogoCropped.webp";
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-[#0f001f] text-white pt-16 pb-8 px-6 md:px-16 w-full">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-12">

                {/* Logo + Description */}
                <div className="space-y-4 md:col-span-2">
                    <div className="w-36 mb-2">
                        <img
                            src={logo}
                            alt="Ciskos Logo"
                            className="w-full h-auto object-contain"
                        />
                    </div>

                    {/* Description – neat narrow column */}
                    <p className="text-sm text-white/70 leading-relaxed max-w-xs">
                        Professional office furniture installation, relocation,
                        architectural glass systems, and project support
                        throughout the Tri-State Area and beyond.
                    </p>

                    {/* Social Icons */}
                    <div className="flex items-center space-x-4 pt-3">
                        <a
                            href="https://www.instagram.com/ciskostotalinstall/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="no-underline-hover w-9 h-9 rounded-full bg-white/10 flex items-center justify-center 
                                       transition-all hover:bg-white hover:text-[#5e3aff]"
                        >
                            <FaInstagram className="text-lg" />
                        </a>

                        <a
                            href="#"
                            className="no-underline-hover w-9 h-9 rounded-full bg-white/10 flex items-center justify-center 
                                       transition-all hover:bg-white hover:text-[#5e3aff]"
                        >
                            <FaLinkedin className="text-lg" />
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Quick Links</h3>
                    <ul className="space-y-3 text-white/70 text-sm">
                        <li><Link to="/" className="hover:text-white">Home</Link></li>
                        <li><Link to="/services" className="hover:text-white">Services</Link></li>
                        <li><Link to="/projects" className="hover:text-white">Projects</Link></li>
                        <li><Link to="/about" className="hover:text-white">About</Link></li>
                        <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
                    </ul>
                </div>

                {/* Areas We Serve */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Areas We Serve</h3>
                    <ul className="space-y-3 text-white/70 text-sm">
                        <li>New Jersey</li>
                        <li>New York</li>
                        <li>Pennsylvania</li>
                        <li>Maryland</li>
                        <li>Nationwide (On Request)</li>
                    </ul>
                </div>

                {/* Contact */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Get In Touch</h3>
                    <ul className="space-y-3 text-white/70 text-sm">
                        <li>
                            Email:{" "}
                            <a href="mailto:admin@ciskos.com" className="hover:text-white">
                                admin@ciskos.com
                            </a>
                        </li>
                        <li>
                            Phone:{" "}
                            <a href="tel:9088347418" className="hover:text-white">
                                (908) 834-7418
                            </a>
                        </li>
                        <li>Warehouse: Elizabeth, NJ</li>
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10 mt-10 pt-6 text-center text-xs text-white/60">
                © {new Date().getFullYear()} Ciskos Office Furniture Installation. All rights reserved.
            </div>
        </footer>
    );
}