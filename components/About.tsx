'use client';

import { personalInfo } from '@/data/portfolio-data';

export default function About() {
    return (
        <section id="about" className="section bg-black text-white py-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-purple-900/10 to-transparent pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column: Text Content */}
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-800 bg-gray-900/50 backdrop-blur-sm">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-xs font-bold tracking-widest uppercase text-gray-400">About Me</span>
                        </div>

                        <h2 className="text-4xl md:text-6xl font-bold leading-tight tracking-tighter">
                            Crafting digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">masterpieces</span> with code & design.
                        </h2>

                        <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                            <p>
                                {personalInfo.bio}
                            </p>
                            <p>
                                My journey started with a curiosity for how things work on the web, and it has evolved into a passionate pursuit of creating seamless, user-centric digital solutions. I thrive on the challenge of turning complex problems into elegant, intuitive interfaces.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-8 pt-4">
                            <div>
                                <h4 className="text-4xl font-bold text-white mb-1">3+</h4>
                                <p className="text-sm text-gray-500 uppercase tracking-wider">Years Experience</p>
                            </div>
                            <div>
                                <h4 className="text-4xl font-bold text-white mb-1">50+</h4>
                                <p className="text-sm text-gray-500 uppercase tracking-wider">Projects Done</p>
                            </div>
                            <div>
                                <h4 className="text-4xl font-bold text-white mb-1">20+</h4>
                                <p className="text-sm text-gray-500 uppercase tracking-wider">Happy Clients</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Image/Visual */}
                    <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-pink-600 rounded-[2rem] rotate-6 opacity-20 group-hover:rotate-12 transition-transform duration-500 blur-xl" />
                        <div className="relative rounded-[2rem] overflow-hidden border border-gray-800 bg-gray-900 aspect-[4/5]">
                            <img
                                src="https://lh3.googleusercontent.com/a/ACg8ocK0_ns8Vo7eWKYi31GgJ5nRCtypdJTcI-Y82waDqtKGMsqbn4TA=s317-c-no"
                                alt="Portrait"
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                            />

                            {/* Floating Badge */}
                            <div className="absolute bottom-8 left-8 right-8 bg-black/80 backdrop-blur-md p-6 rounded-2xl border border-gray-800 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                                <p className="text-white font-medium">"Design is intelligence made visible."</p>
                                <p className="text-gray-500 text-sm mt-2">- Alina Wheeler</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
