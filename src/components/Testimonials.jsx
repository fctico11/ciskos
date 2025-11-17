import { useState } from 'react';

const testimonials = [
    {
        quote:
            "Ciskos handled our full floor installation with zero disruption to our team. Their crew was punctual, organized, and extremely detail-oriented from offload to final walk-through.",
        name: "Alex R.",
        role: "Project Manager",
        company: "NYC Tech Client",
    },
    {
        quote:
            "From field dimensions to punch list, Ciskos stayed locked in with our timelines and standards. They’re the kind of partner you can trust with dealer-level clients.",
        name: "Jordan M.",
        role: "Account Executive",
        company: "Office Furniture Dealer",
    },
    {
        quote:
            "The crew was professional, efficient, and respectful of our space. Our private offices, workstations, and conference rooms all came together exactly as planned.",
        name: "Taylor S.",
        role: "Operations Director",
        company: "Corporate Office",
    },
];

export default function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0);

    const handlePrev = () => {
        setActiveIndex((prev) =>
            prev === 0 ? testimonials.length - 1 : prev - 1
        );
    };

    const handleNext = () => {
        setActiveIndex((prev) =>
            prev === testimonials.length - 1 ? 0 : prev + 1
        );
    };

    return (
        <section className="w-full bg-white py-14 px-6 md:px-16 text-black">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-10">
                {/* Left: Title + Description */}
                <div className="md:w-5/12">
                    <h2 className="text-3xl md:text-4xl font-light tracking-tight text-black text-center md:text-left">
                        Client Testimonials
                    </h2>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed mt-5 text-center md:text-left">
                        Here is how past clients feel about our services: from
                        dealers to direct end-users. We focus on clear
                        communication, clean installations, and staying aligned
                        with your schedule, specs, and standards at every step
                        of the project.
                    </p>
                </div>

                {/* Right: Slider */}
                <div className="md:w-7/12">
                    <div className="relative bg-[#f9f6f2] border border-[#5e3aff26] rounded-2xl p-6 md:p-8 shadow-sm overflow-hidden">
                        <div className="flex flex-col justify-between min-h-[220px] md:min-h-[210px]">
                            {/* Quote */}
                            <p className="text-gray-800 text-sm md:text-base leading-relaxed mb-6 transition-all duration-300 ease-out">
                                “{testimonials[activeIndex].quote}”
                            </p>

                            {/* Name / Role + Controls */}
                            <div>
                                <div className="flex flex-col gap-0.5">
                                    <span className="text-sm md:text-base font-medium text-[#493423]">
                                        {testimonials[activeIndex].name}
                                    </span>
                                    <span className="text-xs md:text-sm text-gray-600">
                                        {testimonials[activeIndex].role} ·{" "}
                                        {testimonials[activeIndex].company}
                                    </span>
                                </div>

                                {/* Controls */}
                                <div className="mt-6 flex items-center justify-between">
                                    {/* Arrows */}
                                    <div className="flex items-center gap-2">
                                        <button
                                            type="button"
                                            onClick={handlePrev}
                                            className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 bg-white text-gray-700 text-sm hover:border-[#5e3aff] hover:text-[#5e3aff] transition-colors"
                                            aria-label="Previous testimonial"
                                        >
                                            ←
                                        </button>
                                        <button
                                            type="button"
                                            onClick={handleNext}
                                            className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 bg-white text-gray-700 text-sm hover:border-[#5e3aff] hover:text-[#5e3aff] transition-colors"
                                            aria-label="Next testimonial"
                                        >
                                            →
                                        </button>
                                    </div>

                                    {/* Dots */}
                                    <div className="flex items-center gap-2">
                                        {testimonials.map((_, i) => (
                                            <button
                                                key={i}
                                                type="button"
                                                onClick={() => setActiveIndex(i)}
                                                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                                                    i === activeIndex
                                                        ? "bg-[#5e3aff] w-5"
                                                        : "bg-gray-300"
                                                }`}
                                                aria-label={`Go to testimonial ${i + 1}`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}