import { Link } from "react-router-dom";

export default function Cta() {
    return (
        <section className="w-full bg-[#1e0033] py-20 px-6 md:px-16 text-white">
            <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
                
                <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4">
                    Interested in our services?
                </h2>

                <p className="text-white/80 text-sm md:text-base max-w-xl leading-relaxed mb-10">
                    Whether you're preparing a full office buildout, upgrading your space,
                    or managing dealer-driven projects — our team is ready to support you
                    with reliable installation, logistics, and project coordination.
                </p>

                {/* White, identical styling to "View All Services" */}
                <Link
                    to="/contact"
                    className="relative overflow-hidden px-8 py-3 rounded-full border border-black text-black font-light tracking-wide no-underline
                               transition-all duration-300 backdrop-blur-md bg-white hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.35)]
                               before:absolute before:inset-0 before:bg-gradient-to-r before:from-black/10 before:to-transparent before:opacity-0
                               hover:before:opacity-100 before:transition-opacity before:duration-500"
                    style={{ textDecoration: 'none' }}
                >
                    Contact Us
                </Link>
            </div>
        </section>
    );
}