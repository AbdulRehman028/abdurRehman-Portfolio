'use client';
/* eslint-disable @next/next/no-img-element */

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { projects } from '@/data/portfolio-data';

export default function AllProjects() {
    const [activeCategory, setActiveCategory] = useState('All');

    // Mapping for display names and icons
    const tabs = [
        {
            id: 'All', label: 'All Projects', icon: (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
            )
        },
        {
            id: 'AI', label: 'AI', icon: (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3 3 3 0 0 1-3-3V5a3 3 0 0 1 3-3z" />
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                    <line x1="12" y1="19" x2="12" y2="22" />
                    <line x1="8" y1="22" x2="16" y2="22" />
                </svg>
            )
        },
        {
            id: 'Web', label: 'Web Apps', icon: (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                </svg>
            )
        },
        {
            id: 'App', label: 'Mobile', icon: (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                    <line x1="12" y1="18" x2="12.01" y2="18" />
                </svg>
            )
        },

    ];

    const filteredProjects = projects.filter(project =>
        activeCategory === 'All' || project.category === activeCategory
    );

    return (
        <main className="bg-black min-h-screen text-white">
            <Navigation />

            <section className="pt-40 pb-24 px-6">
                <div className="container mx-auto">
                    <div className="text-center mb-20">
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-6">
                            All <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Projects</span>
                        </h1>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-12">
                            A comprehensive archive of my work, featuring web applications, design systems, and experimental projects.
                        </p>

                        {/* Category Tabs */}
                        <div className="flex justify-center">
                            <div className="inline-flex items-center p-2 rounded-full border border-gray-800 bg-gray-900/50 backdrop-blur-sm gap-1">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveCategory(tab.id)}
                                        className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === tab.id
                                            ? 'bg-[#8b5cf6] text-white shadow-[0_0_30px_rgba(139,92,246,0.6)] ring-1 ring-purple-400/50'
                                            : 'text-gray-400 hover:text-white hover:bg-white/5'
                                            }`}
                                    >
                                        {tab.icon}
                                        {tab.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        {filteredProjects.map((project) => {
                            const hasLive = !!project.liveUrl;
                            const hasGithub = !!project.githubUrl;
                            const hasBoth = hasLive && hasGithub;

                            const Wrapper = hasBoth ? 'div' : 'a';
                            const wrapperProps = hasBoth ? {} : {
                                href: project.liveUrl || project.githubUrl || '#',
                                target: '_blank',
                                rel: 'noopener noreferrer'
                            };

                            return (
                                <Wrapper
                                    key={project.id}
                                    {...wrapperProps}
                                    className="group relative flex flex-col gap-6"
                                >
                                    {/* Image Container */}
                                    <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-gray-800 bg-gray-900">
                                        <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />

                                        {/* Floating Action Buttons Container */}
                                        <div className="absolute bottom-6 right-6 flex gap-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-20">

                                            {/* GitHub Button */}
                                            {hasGithub && (
                                                <a
                                                    href={project.githubUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition-colors shadow-lg"
                                                    title="View Code"
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                                    </svg>
                                                </a>
                                            )}

                                            {/* Live Preview Button (Arrow) */}
                                            {hasLive && (
                                                <a
                                                    href={project.liveUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition-colors shadow-lg"
                                                    title="Live Preview"
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <line x1="7" y1="17" x2="17" y2="7"></line>
                                                        <polyline points="7 7 17 7 17 17"></polyline>
                                                    </svg>
                                                </a>
                                            )}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="space-y-3">
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map(tag => (
                                                <span key={tag} className="px-3 py-1 rounded-full border border-gray-800 bg-gray-900/50 text-xs font-medium text-gray-400 uppercase tracking-wider">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <h3 className="text-3xl md:text-4xl font-bold leading-tight group-hover:text-purple-400 transition-colors">
                                            {project.title}
                                        </h3>

                                        <p className="text-gray-400 text-lg line-clamp-2">
                                            {project.description}
                                        </p>
                                    </div>
                                </Wrapper>
                            );
                        })}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
