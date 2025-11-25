import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Cta from '../components/Cta';
import heroBg from '../assets/ciskoHero.webp';
import officeImage from '../assets/projects/TMAPrivateOffice.webp';
import teamImage from '../assets/projects/Breathewall.webp';

const FadeInSection = ({ children, className = '', delay = 0 }) => {
  return (
    <div className={`animate-fade-in ${className}`} style={{ animationDelay: `${delay}ms` }}>
      {children}
    </div>
  );
};

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>About Us | Ciskos</title>
        <meta
          name="description"
          content="Over 34 years of excellence in office furniture installation and workspace solutions. Learn about Ciskos and our commitment to quality."
        />
      </Helmet>

      <div className="min-h-screen bg-white text-black overflow-x-hidden">
        <Header />

        {/* --- Hero Section --- */}
        <section className="w-full bg-[#1e0033] text-white pt-[100px] pb-[40px] px-6 relative overflow-hidden min-h-[280px]">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-light mb-6 tracking-tight animate-fade-in">
              About Ciskos
            </h1>
            <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-light animate-slide-up delay-200">
              Building the foundation for your success.
            </p>
          </div>
        </section>

        {/* --- Intro Section --- */}
        <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
            <div className="w-full md:w-1/2 space-y-8">
              <FadeInSection>
                <h2 className="text-4xl md:text-5xl font-light text-black leading-tight">
                  Cultivating <span className="text-[#5e3aff]">Culture</span> & <br />
                  Creativity
                </h2>
                <div className="w-20 h-1 bg-[#5e3aff] rounded-full" />
              </FadeInSection>

              <FadeInSection delay={200}>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Office spaces contribute to developing a proper identity and culture to its company, helping to promote collaboration and creativity. When it comes to choosing furniture and accessories for your office, as well as installing it and cultivating the space, it's imperative that it's done right.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mt-6">
                  While the office landscape is rapidly changing, with our team of experts you don't have to worry about falling behind. We pride ourselves on delivering nothing but excellence when it comes to bringing your vision to life.
                </p>
              </FadeInSection>
            </div>

            <div className="w-full md:w-1/2">
              <FadeInSection delay={400}>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl group">
                  <img
                    src={officeImage}
                    alt="Modern Office Space"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </FadeInSection>
            </div>
          </div>
        </section>

        {/* --- Experience Section (Dark) --- */}
        <section className="w-full bg-[#1e0033] text-white py-32 px-6 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:30px_30px]" />

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <FadeInSection>
              <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-[#a38aff] text-sm font-medium tracking-wider mb-8 border border-white/10">
                ESTABLISHED EXCELLENCE
              </span>
              <h2 className="text-5xl md:text-7xl font-light mb-8 leading-tight">
                34+ Years of <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a38aff] to-white">
                  Unrivaled Experience
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-light max-w-3xl mx-auto">
                CTI has a "wide range of knowledge in every aspect of commercial and residential office installation". No matter the size of the project, we work with our clients from start to finish to ensure their complete satisfaction.
              </p>
            </FadeInSection>
          </div>
        </section>

        {/* --- Team & Network Section --- */}
        <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row-reverse items-center gap-16 md:gap-24">
            <div className="w-full md:w-1/2 space-y-8">
              <FadeInSection>
                <h2 className="text-4xl md:text-5xl font-light text-black leading-tight">
                  Expert Crews & <br />
                  <span className="text-[#5e3aff]">Industry Depth</span>
                </h2>
                <div className="w-20 h-1 bg-[#5e3aff] rounded-full" />
              </FadeInSection>

              <FadeInSection delay={200}>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our crews are highly trained, experienced and ready to tackle projects of any size. We understand that the installation process is the final touch in creating your ideal workspace, and we treat it with the precision it deserves.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mt-6">
                  Our contacts run deep in the industry. In addition to working with companies directly, we maintain strong relationships with manufacturers and dealers, ensuring a seamless process from logistics to final installation.
                </p>
              </FadeInSection>
            </div>

            <div className="w-full md:w-1/2">
              <FadeInSection delay={400}>
                <div className="relative aspect-[3/4] md:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl group">
                  <img
                    src={teamImage}
                    alt="Installation Team Work"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </FadeInSection>
            </div>
          </div>
        </section>

        <Cta />
      </div>
    </>
  );
}