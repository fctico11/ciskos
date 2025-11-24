import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will be in touch shortly.');
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Ciskos</title>
        <meta
          name="description"
          content="Get in touch with Ciskos for your office furniture installation and relocation needs. Serving NJ, NY, PA, and beyond."
        />
      </Helmet>

      <div className="min-h-screen bg-[#1e0033] text-white overflow-x-hidden relative">
        <Header />

        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#5e3aff] rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-float" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#3a1c99] rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-float" style={{ animationDelay: '-2s' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 pt-32 pb-20">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

            {/* Left Side: Contact Info */}
            <div className="w-full lg:w-5/12 space-y-12 pt-8">
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl font-light tracking-tight leading-tight">
                  Let's Build <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a38aff] to-white">
                    Something Great.
                  </span>
                </h1>
                <p className="text-white/70 text-lg leading-relaxed max-w-md">
                  Whether you have a question about our services, need a quote for a project, or just want to say hello, our team is ready to answer all your questions.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-[#5e3aff] group-hover:bg-[#5e3aff] group-hover:text-white transition-colors duration-300 shrink-0">
                    <FaEnvelope className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Email Us</h3>
                    <a href="mailto:cisko11@yahoo.com" className="text-white/60 hover:text-white transition-colors">
                      cisko11@yahoo.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-[#5e3aff] group-hover:bg-[#5e3aff] group-hover:text-white transition-colors duration-300 shrink-0">
                    <FaPhone className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Call Us</h3>
                    <a href="tel:9088347418" className="text-white/60 hover:text-white transition-colors">
                      (908) 834-7418
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-[#5e3aff] group-hover:bg-[#5e3aff] group-hover:text-white transition-colors duration-300 shrink-0">
                    <FaMapMarkerAlt className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Location</h3>
                    <p className="text-white/60">
                      Elizabeth, NJ <br />
                      Serving the Tri-State Area & Nationwide
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Glassmorphism Form */}
            <div className="w-full lg:w-7/12">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white/80 ml-1">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#5e3aff] focus:bg-white/10 transition-all"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white/80 ml-1">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#5e3aff] focus:bg-white/10 transition-all"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white/80 ml-1">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#5e3aff] focus:bg-white/10 transition-all"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white/80 ml-1">Company</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#5e3aff] focus:bg-white/10 transition-all"
                        placeholder="Company Name"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80 ml-1">Service Type</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#5e3aff] focus:bg-white/10 transition-all appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-[#1e0033]">Select a service...</option>
                      <option value="installation" className="bg-[#1e0033]">Furniture Installation</option>
                      <option value="relocation" className="bg-[#1e0033]">Office Relocation</option>
                      <option value="glass" className="bg-[#1e0033]">Architectural Glass</option>
                      <option value="storage" className="bg-[#1e0033]">Warehousing & Storage</option>
                      <option value="other" className="bg-[#1e0033]">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80 ml-1">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#5e3aff] focus:bg-white/10 transition-all resize-none"
                      placeholder="Tell us about your project..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#5e3aff] to-[#3a1c99] text-white font-medium tracking-wide shadow-lg hover:shadow-[#5e3aff]/25 hover:scale-[1.02] transition-all duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}