'use client';
/* eslint-disable @next/next/no-img-element */

import { projects } from '@/data/portfolio-data';

export default function Projects() {
    return (
        <section id="projects" className="section bg-black text-white py-24">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase">
                        Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Works</span>
                    </h2>
                    <p className="text-gray-400 max-w-md text-lg pb-2">
                        A collection of projects that showcase my passion for design, development, and problem-solving.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {projects.slice(0, 4).map((project) => {
                        const hasLive = !!project.liveUrl;
                        const hasGithub = !!project.githubUrl;
                        const hasBoth = hasLive && hasGithub;

                        // If both exist, the card itself isn't a link (only buttons are).
                        // If only one exists, the whole card is a link.
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
                                                onClick={(e) => e.stopPropagation()} // Prevent triggering parent click if parent is link (though it shouldn't be if both exist)
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

                <div className="mt-20 text-center">
                    <a href="/projects" className="inline-flex items-center gap-2 text-white border-b border-white pb-1 hover:text-purple-400 hover:border-purple-400 transition-colors uppercase tracking-widest text-sm font-bold">
                        View All Projects
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
