'use client';
/* eslint-disable @next/next/no-img-element */

import { personalInfo } from '@/data/portfolio-data';

export default function Hero() {
    return (
        <section id="hero" className="min-h-screen flex flex-col justify-center bg-[#050505] text-white pt-32 pb-20 relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-50" />

            {/* Curvy Lines Graphic (Top Left) */}
            <div className="absolute -top-20 -left-20 w-[600px] h-[600px] opacity-20 pointer-events-none rotate-12">
                <svg viewBox="0 0 100 100" className="w-full h-full stroke-white stroke-[0.3] fill-none">
                    {Array.from({ length: 30 }).map((_, i) => (
                        <path
                            key={i}
                            d={`M -10 ${10 + i * 3} C 30 ${10 + i * 3}, 30 ${-10 + i * 3}, 60 -10`}
                            className="opacity-50"
                        />
                    ))}
                </svg>
            </div>

            {/* Noise Texture */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center text-center mb-24 relative">
                    {/* 3D Abstract Element (Placeholder for the head model) */}


                    <h1 className="text-[clamp(4rem,11vw,9rem)] font-black leading-[0.85] tracking-tighter uppercase relative z-10">
                        <span className="block text-white mb-2">HI THERE</span>
                        <span className="block text-white">I'M {personalInfo.name}</span>
                        <span className="relative inline-block mt-2">
                            <span className="absolute -inset-2 border-2 border-dashed border-purple-500/50 rounded-lg animate-pulse"></span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-purple-500 to-pink-500 px-2">
                                FULL STACK
                            </span>
                        </span>
                        <span className="block text-white mt-2">DEVELOPER</span>
                    </h1>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-end max-w-6xl mx-auto mt-12">
                    {/* Left column */}
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold uppercase leading-tight mb-8">
                            Discover the<br />
                            professional<br />
                            journey of a<br />
                            Developer.
                        </h2>

                        <a
                            href="/Muhammad Abdulrehman_Resume.pdf"
                            className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-gray-600 hover:bg-white hover:text-black hover:border-white transition-all uppercase text-sm font-bold tracking-widest group"
                        >
                            Resume
                            <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↗</span>
                        </a>
                    </div>

                    {/* Right column */}
                    <div className="text-gray-400 text-base leading-relaxed max-w-md md:ml-auto md:text-right">
                        <p>
                            I am a Full Stack Developer seeking to establish a strong online presence through my own website. With a focus on providing exceptional user experiences, I aim to showcase my expertise and skills to potential clients. By presenting my portfolio and sharing information about my design process, I hope to attract clients who are in need of my services.
                        </p>
                    </div>
                </div>
            </div>
            <div className="absolute top-1/4 right-0 -translate-y-1/2 -translate-x-1/2 w-64 h-64 opacity-80 hidden lg:block pointer-events-none mix-blend-screen">
                <img
                    src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop"
                    alt="Abstract 3D Shape"
                    className="w-full h-full object-cover rounded-full blur-sm"
                />
            </div>
        </section>
    );
}
