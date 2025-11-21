'use client';

import { experiences } from '@/data/portfolio-data';

export default function Experience() {
    return (
        <section id="experience" className="section bg-black text-white py-24 border-t border-gray-900">
            <div className="container mx-auto px-6">
                <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-16 uppercase">
                    Experience
                </h2>

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className="grid md:grid-cols-[1fr,2fr] gap-8 border-b border-gray-900 pb-12 last:border-0"
                        >
                            <div>
                                <h3 className="text-2xl font-bold mb-2">{exp.company}</h3>
                                <p className="text-gray-500">{exp.duration}</p>
                            </div>

                            <div>
                                <h4 className="text-xl font-bold text-purple-400 mb-4">{exp.position}</h4>
                                <p className="text-gray-400 leading-relaxed mb-6">
                                    {exp.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {exp.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 rounded-full bg-gray-900 text-gray-300 text-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
