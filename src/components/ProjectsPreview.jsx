import { useEffect, useRef, useState } from 'react';
import breathewall from '../assets/projects/IMG_1141.webp';
import img1133 from '../assets/projects/IMG_1145.webp';

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
            img: breathewall,
            title: "Floor to Ceiling and Everything In Between",
            desc: "A stunning living wall installation transforming modern office space.",
        },
        {
            img: img1133,
            title: "Corporate Workspace Setup",
            desc: "Full floor furniture and systems integration for a major corporate client.",
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`group relative rounded-xl overflow-hidden shadow-lg transition-all duration-700 ease-in-out
                                ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                            style={{ transitionDelay: `${index * 150}ms` }}
                        >
                            <img
                                src={project.img}
                                alt={project.title}
                                className="w-full h-64 md:h-80 object-cover object-center transform group-hover:scale-105 group-hover:rotate-1 transition-transform duration-500 ease-out"
                            />
                            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out" />
                            <div className="absolute bottom-4 left-4 right-4 text-white">
                                <h3 className="text-xl font-semibold drop-shadow-lg">{project.title}</h3>
                                <p className="text-sm text-gray-200 drop-shadow">{project.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}