import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaInstagram } from 'react-icons/fa';
import contactBg from '../assets/projects/tma/coolshot.webp';

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    company: '',
    service: '',
    source: '',
    contactMethod: 'email',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xldkljkq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Thank you for your message. We will be in touch shortly.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          address: '',
          company: '',
          service: '',
          source: '',
          contactMethod: 'email',
          message: ''
        });
      } else {
        const data = await response.json();
        if (Object.hasOwn(data, 'errors')) {
          console.error('Formspree Error:', data.errors.map(error => error.message).join(", "));
          alert(`Something went wrong: ${data.errors.map(error => error.message).join(", ")}`);
        } else {
          console.error('Formspree Error:', data);
          alert('Something went wrong. Please try again later.');
        }
      }
    } catch (error) {
      console.error('Submission Error:', error);
      alert('Something went wrong. Please try again later or contact us directly at admin@ciskos.com.');
    } finally {
      setIsSubmitting(false);
    }
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

      <div className="min-h-screen bg-white text-black overflow-x-hidden flex flex-col font-sans">
        <Header />

        {/* --- HERO SECTION --- */}
        {/* Mobile: Standard Padding. Desktop: Taller for overlap effect. */}
        <section className="w-full bg-[#1e0033] text-white px-6 pt-[140px] md:pt-[180px] pb-[60px] lg:pb-[180px] relative overflow-hidden">
          {/* Parallax Background Container */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Architectural Grid Background (Desktop) */}
            <div className="hidden lg:block absolute inset-0 opacity-10 pointer-events-none"
              style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
            </div>

            {/* Floating Orbs */}
            <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#5e3aff] rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-float pointer-events-none" />
            <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-[#3a1c99] rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-float pointer-events-none" style={{ animationDelay: '-3s' }} />
          </div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-6 tracking-tight animate-fade-in">
              Get in Touch
            </h1>
            <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto animate-slide-up delay-200 font-light">
              Ready to transform your workspace? Whether it's a full installation, relocation, or project management, our team is here to bring your vision to life.
            </p>
          </div>
        </section>

        {/* --- MAIN CONTENT WRAPPER --- */}
        {/* Desktop: Negative margin to pull content up over the hero. Grid layout. */}
        <div className="flex-grow w-full max-w-[1400px] mx-auto lg:-mt-32 relative z-20 px-0 lg:px-12 pb-20">

          <div className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-0 shadow-none lg:shadow-2xl lg:rounded-none">

            {/* --- FORM SECTION --- */}
            {/* Mobile: Standard. Desktop: Col-span-7, White Card, Sharp Corners. */}
            <div className="order-1 lg:col-span-7 bg-white px-6 md:px-16 py-12 lg:py-20 flex flex-col justify-center relative border-b lg:border-b-0 lg:border-r border-gray-100">
              {/* Decorative Line (Desktop) */}
              <div className="hidden lg:block absolute top-0 left-0 w-full h-2 bg-[#5e3aff]" />

              <div className="max-w-2xl mx-auto w-full animate-slide-up delay-300">
                <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-2 text-black">
                  Start Your Project
                </h2>
                <p className="text-gray-500 text-sm uppercase tracking-widest mb-12 font-medium">
                  Project Inquiry Form
                </p>

                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Row 1 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2 group">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest group-focus-within:text-[#5e3aff] transition-colors">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b-2 border-gray-200 px-0 py-3 text-gray-900 placeholder-gray-300 focus:outline-none focus:border-[#5e3aff] transition-all rounded-none"
                        placeholder="FULL NAME"
                        required
                      />
                    </div>
                    <div className="space-y-2 group">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest group-focus-within:text-[#5e3aff] transition-colors">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b-2 border-gray-200 px-0 py-3 text-gray-900 placeholder-gray-300 focus:outline-none focus:border-[#5e3aff] transition-all rounded-none"
                        placeholder="EMAIL ADDRESS"
                        required
                      />
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2 group">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest group-focus-within:text-[#5e3aff] transition-colors">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b-2 border-gray-200 px-0 py-3 text-gray-900 placeholder-gray-300 focus:outline-none focus:border-[#5e3aff] transition-all rounded-none"
                        placeholder="(555) 123-4567"
                        required
                      />
                    </div>
                    <div className="space-y-2 group">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest group-focus-within:text-[#5e3aff] transition-colors">Project Address</label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b-2 border-gray-200 px-0 py-3 text-gray-900 placeholder-gray-300 focus:outline-none focus:border-[#5e3aff] transition-all rounded-none"
                        placeholder="STREET ADDRESS"
                        required
                      />
                    </div>
                  </div>

                  {/* Row 3 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2 group">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest group-focus-within:text-[#5e3aff] transition-colors">Company</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b-2 border-gray-200 px-0 py-3 text-gray-900 placeholder-gray-300 focus:outline-none focus:border-[#5e3aff] transition-all rounded-none"
                        placeholder="COMPANY NAME"
                      />
                    </div>
                    <div className="space-y-2 group">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest group-focus-within:text-[#5e3aff] transition-colors">Service Needed</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b-2 border-gray-200 px-0 py-3 text-gray-900 focus:outline-none focus:border-[#5e3aff] transition-all rounded-none appearance-none cursor-pointer"
                      >
                        <option value="">SELECT A SERVICE</option>
                        <option value="installation">Furniture Installation</option>
                        <option value="relocation">Office Relocation</option>
                        <option value="glass">Architectural Glass</option>
                        <option value="storage">Warehousing & Storage</option>
                        <option value="liquidation">Liquidation & Disposal</option>
                        <option value="pm">Project Management</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 4: Source & Contact Method */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2 group">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest group-focus-within:text-[#5e3aff] transition-colors">How did you hear about us?</label>
                      <select
                        name="source"
                        value={formData.source}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b-2 border-gray-200 px-0 py-3 text-gray-900 focus:outline-none focus:border-[#5e3aff] transition-all rounded-none appearance-none cursor-pointer"
                      >
                        <option value="">SELECT AN OPTION</option>
                        <option value="google">Google Search</option>
                        <option value="referral">Referral</option>
                        <option value="social">Social Media</option>
                        <option value="email">Email Campaign</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-4">Preferred Contact Method</label>
                      <div className="flex items-center gap-8">
                        <label className="flex items-center gap-3 cursor-pointer group">
                          <div className={`w-4 h-4 border-2 border-gray-300 flex items-center justify-center transition-colors ${formData.contactMethod === 'email' ? 'border-[#5e3aff]' : 'group-hover:border-[#5e3aff]'}`}>
                            {formData.contactMethod === 'email' && <div className="w-2 h-2 bg-[#5e3aff]" />}
                          </div>
                          <input
                            type="radio"
                            name="contactMethod"
                            value="email"
                            checked={formData.contactMethod === 'email'}
                            onChange={handleChange}
                            className="hidden"
                          />
                          <span className="text-sm font-medium text-gray-600 group-hover:text-black transition-colors uppercase tracking-wider">Email</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer group">
                          <div className={`w-4 h-4 border-2 border-gray-300 flex items-center justify-center transition-colors ${formData.contactMethod === 'phone' ? 'border-[#5e3aff]' : 'group-hover:border-[#5e3aff]'}`}>
                            {formData.contactMethod === 'phone' && <div className="w-2 h-2 bg-[#5e3aff]" />}
                          </div>
                          <input
                            type="radio"
                            name="contactMethod"
                            value="phone"
                            checked={formData.contactMethod === 'phone'}
                            onChange={handleChange}
                            className="hidden"
                          />
                          <span className="text-sm font-medium text-gray-600 group-hover:text-black transition-colors uppercase tracking-wider">Phone</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 group">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest group-focus-within:text-[#5e3aff] transition-colors">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className="w-full bg-transparent border-b-2 border-gray-200 px-0 py-3 text-gray-900 placeholder-gray-300 focus:outline-none focus:border-[#5e3aff] transition-all resize-none rounded-none"
                      placeholder="TELL US ABOUT YOUR PROJECT..."
                      required
                    />
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-5 bg-[#1e0033] hover:bg-[#5e3aff] disabled:bg-gray-400 text-white font-bold tracking-[0.2em] uppercase transition-all duration-500"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                    <p className="text-center text-xs text-gray-400 mt-4 flex items-center justify-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                      Your information is 100% private and secure.
                    </p>
                  </div>
                </form>
              </div>
            </div>

            {/* --- INFO SECTION --- */}
            {/* Mobile: Standard. Desktop: Col-span-5, Dark Block, Offset. */}
            <div className="order-2 lg:col-span-5 bg-black relative text-white flex flex-col justify-center px-6 md:px-16 py-20 lg:py-0 overflow-hidden">

              <div className="relative z-10 max-w-md mx-auto lg:mx-0 animate-slide-up delay-500">
                <div className="w-12 h-1 bg-[#5e3aff] mb-8" />
                <h2 className="text-3xl md:text-4xl font-light mb-2">
                  Reach Us Directly
                </h2>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-10">
                  Elizabeth, New Jersey
                </p>

                <div className="space-y-10 text-lg text-white/80 font-light">
                  <div className="flex items-start gap-6 group cursor-default">
                    <div className="w-12 h-12 border border-white/20 flex items-center justify-center group-hover:border-[#5e3aff] group-hover:text-[#5e3aff] transition-all duration-300 shrink-0">
                      <FaMapMarkerAlt className="text-lg" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Warehouse Address</p>
                      <p className="group-hover:text-white transition-colors leading-relaxed">
                        Elizabeth, NJ <br />
                        Serving the Tri-State Area & Nationwide
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6 group">
                    <div className="w-12 h-12 border border-white/20 flex items-center justify-center group-hover:border-[#5e3aff] group-hover:text-[#5e3aff] transition-all duration-300 shrink-0">
                      <FaEnvelope className="text-lg" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Email</p>
                      <a href="mailto:admin@ciskos.com" className="hover:text-white transition-colors block">
                        admin@ciskos.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-6 group">
                    <div className="w-12 h-12 border border-white/20 flex items-center justify-center group-hover:border-[#5e3aff] group-hover:text-[#5e3aff] transition-all duration-300 shrink-0">
                      <FaPhone className="text-lg" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Phone</p>
                      <a href="tel:9088347418" className="hover:text-white transition-colors block">
                        (908) 834-7418
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-16 pt-12 border-t border-white/10">
                  <div className="flex gap-4">
                    <a href="#" className="w-12 h-12 border border-white/20 flex items-center justify-center hover:bg-[#5e3aff] hover:border-[#5e3aff] transition-all duration-300">
                      <FaInstagram className="text-lg" />
                    </a>
                    <a href="#" className="w-12 h-12 border border-white/20 flex items-center justify-center hover:bg-[#5e3aff] hover:border-[#5e3aff] transition-all duration-300">
                      <FaLinkedin className="text-lg" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}