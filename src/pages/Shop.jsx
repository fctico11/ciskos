import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

export default function Shop() {
    const [listings, setListings] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://opensheet.vercel.app/1agCNHCkc0vwGhMJuXZEuNqVzgjjWSB94uPIDdBzWLNI/Sheet1")
            .then((res) => res.json())
            .then((data) => {
                if (!Array.isArray(data)) {
                    console.error("Invalid data format:", data);
                    setListings([]);
                } else {
                    console.log("Fetched data:", data);
                    setListings(data);
                }
                setLoading(false);
            })
            .catch((err) => {
                console.error("Failed to fetch listings:", err);
                setLoading(false);
            });
    }, []);

    return (
        <>
            <Helmet>
                <title>Ciskos | Shop Furniture</title>
                <meta
                    name="description"
                    content="Browse our current furniture inventory available for sale directly from our Facebook Marketplace listings."
                />
            </Helmet>

            <section className="w-full bg-gradient-to-b from-[#1e0033] to-[#120025] py-16 px-6 md:px-16">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-light tracking-tight text-white mb-8 text-center">
                        Shop Furniture
                    </h1>

                    {loading ? (
                        <p className="text-center text-white/70">Loading listings...</p>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                            {listings.map((item, index) => (
                                <a
                                    key={index}
                                    href={item['FB Link']}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative block bg-white rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(128,90,213,0.6)] overflow-hidden group"
                                >
                                    <img
                                        src={item.Image}
                                        alt={item.Title}
                                        className="w-full h-48 object-cover rounded-t-lg"
                                    />
                                    <div className="p-4">
                                        <h2 className="text-lg font-semibold text-black mb-2">{item.Title}</h2>
                                        <p className="text-purple-700 font-bold text-lg">${item.Price}</p>
                                    </div>

                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-lg font-medium transition-opacity duration-300">
                                        See full listing →
                                    </div>
                                </a>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}