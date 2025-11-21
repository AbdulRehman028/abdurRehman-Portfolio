'use client';

import { useRef } from 'react';

const services = [

    {
        id: '01',
        title: 'Development',
        description: 'Building robust and scalable web applications using modern technologies to bring your digital vision to life.',
        image: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=400&h=300&fit=crop',
        gradient: 'from-blue-900/50 to-cyan-900/50'
    },
    {
        id: '02',
        title: 'AI Engineering',
        description: 'End-to-end AI development—from model design to deployment—empowering your product with automation, intelligence, and real-time insights.',
        image: 'https://karnavatiuniversity.edu.in/wp-content/uploads/2025/04/artificial-intelligence-in-engineering-1024x576.jpg',
        gradient: 'from-pink-900/50 to-purple-900/50'
    },
    {
        id: '03',
        title: 'Design',
        description: 'Design services are focused on transforming the essence of your brand into a visually appealing and intuitive digital experience.',
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop',
        gradient: 'from-purple-900/50 to-blue-900/50'
    },
];

export default function Services() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = 400;
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section id="services" className="section bg-black text-white py-24">
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between mb-16">
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">SERVICES</h2>
                    <div className="flex gap-4">
                        <button
                            onClick={() => scroll('left')}
                            className="w-12 h-12 rounded-full border border-gray-800 flex items-center justify-center hover:bg-white hover:text-black transition-all"
                            aria-label="Scroll left"
                        >
                            ←
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="w-12 h-12 rounded-full border border-gray-800 flex items-center justify-center hover:bg-white hover:text-black transition-all"
                            aria-label="Scroll right"
                        >
                            →
                        </button>
                    </div>
                </div>

                <div
                    ref={scrollContainerRef}
                    className="flex gap-8 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="min-w-[400px] md:min-w-[600px] bg-[#0a0a0a] border border-gray-900 rounded-[2.5rem] p-10 relative overflow-hidden group hover:border-gray-700 transition-all snap-center"
                        >
                            {/* Background Gradient */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />

                            {/* Bottom Glow Effect */}
                            <div className={`absolute -bottom-20 left-1/2 -translate-x-1/2 w-64 h-64 bg-gradient-to-t ${service.gradient} opacity-20 blur-[80px] group-hover:opacity-40 transition-all duration-500`} />

                            <div className="relative z-10 flex flex-col h-full min-h-[320px] justify-between">
                                {/* Top Section: Image and Description */}
                                <div className="flex items-start justify-between gap-8">
                                    {/* Circular Image */}
                                    <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-gray-900 shadow-2xl shrink-0">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                        />
                                    </div>

                                    {/* Description */}
                                    <p className="text-gray-400 text-lg leading-relaxed max-w-xs text-right">
                                        {service.description}
                                    </p>
                                </div>

                                {/* Bottom Section: Title and Number */}
                                <div className="flex items-end justify-between mt-12">
                                    <h3 className="text-4xl md:text-5xl font-bold tracking-tight group-hover:translate-x-2 transition-transform duration-300">
                                        {service.title}
                                    </h3>
                                    <span className="text-4xl font-medium text-gray-700 group-hover:text-gray-500 transition-colors font-mono">
                                        {service.id}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
