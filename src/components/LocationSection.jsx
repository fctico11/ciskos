import tristate from '../assets/icons/furn.png';
import paIcon from '../assets/icons/furn.png';
import mdIcon from '../assets/icons/furn.png';
import usaIcon from '../assets/icons/furn.png';


export default function LocationSection() {
    return (
        <section className="w-full bg-[#120025] py-20 px-6 md:px-16 text-white">
            <div className="max-w-5xl mx-auto">

                {/* Title & Subtitle */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-semibold">Areas We Serve</h2>
                    <p className="text-white/70 mt-2">Covering the Northeast and more</p>
                </div>

                {/* Region List */}
                <div className="space-y-12">
                    {[ 
                        { icon: tristate, title: "Tri-State Area", desc: "New Jersey, New York, Connecticut" },
                        { icon: paIcon, title: "Pennsylvania", desc: "All major cities and surrounding areas" },
                        { icon: mdIcon, title: "Maryland", desc: "Full coverage of Maryland regions" },
                        { icon: usaIcon, title: "USA Wide", desc: "Available nationwide upon request" },
                    ].map((item, i) => (
                        <div key={i} className="flex items-center justify-between space-x-6 border-b border-white/10 pb-6">
                            <div className="flex items-center space-x-4">
                                <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
                                    <img src={item.icon} alt="" className="w-8 h-8 opacity-80" />
                                </div>
                                <h3 className="text-lg md:text-xl font-medium">{item.title}</h3>
                            </div>
                            <p className="text-sm md:text-base text-white/60 text-right max-w-xs">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
