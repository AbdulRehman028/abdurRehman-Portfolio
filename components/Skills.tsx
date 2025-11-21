'use client';

import { skills } from '@/data/portfolio-data';
import { useEffect, useRef, useState } from 'react';

export default function Skills() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section id="skills" ref={sectionRef} className="section bg-white">
            <div className="container">
                <h2 className={`section-title ${isVisible ? 'animate-fade-in-down' : 'opacity-0'}`}>
                    Skills & Expertise
                </h2>

                <div className="grid gap-12 max-w-6xl mx-auto">
                    {skills.map((category, categoryIndex) => (
                        <div
                            key={category.category}
                            className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                            style={{ animationDelay: `${0.1 + categoryIndex * 0.15}s` }}
                        >
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">{category.category}</h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                {category.items.map((skill, skillIndex) => (
                                    <div
                                        key={skill}
                                        className="bg-gray-50 border border-gray-200 rounded-xl px-6 py-4 text-center hover:bg-indigo-50 hover:border-indigo-300 hover:shadow-md transition-all cursor-default"
                                        style={{ animationDelay: `${0.2 + categoryIndex * 0.1 + skillIndex * 0.05}s` }}
                                    >
                                        <span className="text-base font-semibold text-gray-700">
                                            {skill}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
