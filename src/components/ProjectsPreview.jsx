import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import img1133 from '../assets/projects/IMG_1145.webp';
import privateOffice from '../assets/projects/TMAPrivateOffice.webp';

export default function ProjectsPreview() {
    const [visible, setVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const projects = [
        {
            img: img1133,
            title: 'Floor to Ceiling and Everything In Between',
            desc: 'A stunning living wall installation transforming modern office space. From layout planning to seamless system integration, this project exemplifies our full-scope capabilities and attention to design, detail, and delivery at every stage.',
        },
        {
            img: privateOffice,
            title: 'Private Office Buildout',
            desc: 'Complete transformation of a high-end private executive office suite with custom finishes. This build featured sleek furnishings, integrated tech, and a refined atmosphere tailored to leadership-level comfort and productivity.',
        },
    ];

    return (
        <section
            ref={sectionRef}
            className={`w-full bg-white py-16 px-6 md:px-16 text-black transition-all duration-700 ease-out
                ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
            <div className="max-w-6xl mx-auto">
                {/* Title & Subtitle */}
                <div
                    className={`text-center mb-12 transition-all duration-700 ease-out
                        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                >
                    <h2 className="text-black text-4xl md:text-5xl font-light tracking-tight">Finished Projects</h2>
                    <p className="text-gray-600 mt-3 text-base md:text-lg">
                        See a few of the projects we've helped bring to life — from complete floors to unique custom installs.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`group rounded-xl overflow-hidden shadow-md border border-[#5e3aff33] transition-all duration-700 ease-in-out
                                ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                                hover:shadow-purple-400/40 hover:shadow-lg hover:-translate-y-1`}
                            style={{ transitionDelay: `${index * 150}ms` }}
                        >
                            <img
                                src={project.img}
                                alt={project.title}
                                className="w-full h-64 md:h-80 object-cover object-center transform group-hover:scale-105 group-hover:rotate-1 transition-transform duration-500 ease-out"
                            />
                            <div className="p-5 bg-[#f9f6f2] rounded-b-xl border-t border-gray-200">
                                <h3 className="text-lg md:text-xl font-semibold text-[#493423] mb-1">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-gray-700">{project.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Matched Button */}
                <div
                    className={`flex justify-center transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                >
                    <Link
                        to="/projects"
                        className="relative overflow-hidden px-8 py-3 rounded-full border border-black text-black font-light tracking-wide no-underline
                            transition-all duration-300 backdrop-blur-md bg-black/5 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,0,0,0.2)]
                            before:absolute before:inset-0 before:bg-gradient-to-r before:from-black/10 before:to-transparent before:opacity-0 
                            hover:before:opacity-100 before:transition-opacity before:duration-500"
                        style={{ textDecoration: 'none' }}
                    >
                        See More Projects <span className="ml-2">→</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
