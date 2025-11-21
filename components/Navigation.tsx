'use client';

import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { personalInfo } from '@/data/portfolio-data';

const navLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'Services', id: 'services' },
    { label: 'About', id: 'about' },
];

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        setIsMobileMenuOpen(false);

        if (pathname === '/') {
            // If on home page, smooth scroll
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            // If on other pages, navigate to home with hash
            router.push(`/#${id}`);
        }
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-black/80 backdrop-blur-lg border-b border-gray-900 py-4'
                : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6">
                {/* Desktop Layout */}
                <div className="hidden md:grid grid-cols-3 items-center">
                    {/* Left: Navigation Links */}
                    <div className="flex items-center gap-8">
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => scrollToSection(link.id)}
                                className="text-sm font-medium text-gray-400 hover:text-white transition-colors uppercase tracking-wider"
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>

                    {/* Center: Logo */}
                    <div className="flex justify-center">
                        <button
                            onClick={() => scrollToSection('hero')}
                            className="text-2xl font-bold text-white hover:text-gray-300 transition-colors tracking-tighter"
                        >
                            Mr.Baig
                        </button>
                    </div>

                    {/* Right: Email CTA */}
                    <div className="flex justify-end">
                        <a
                            href={`mailto:${personalInfo.email}`}
                            className="text-sm font-medium text-gray-400 hover:text-white transition-colors tracking-wide group"
                        >
                            Say hi - <span className="text-purple-500 group-hover:text-purple-400 transition-colors">{personalInfo.email}</span> ↗
                        </a>
                    </div>
                </div>

                {/* Mobile Layout (Flex) */}
                <div className="flex md:hidden items-center justify-between">
                    <button
                        onClick={() => scrollToSection('hero')}
                        className="text-xl font-bold text-white"
                    >
                        Mr.Baig
                    </button>

                    <button
                        className="p-2 text-white"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden py-4 bg-black border-t border-gray-900 mt-4">
                        <div className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <button
                                    key={link.id}
                                    onClick={() => scrollToSection(link.id)}
                                    className="text-left px-4 py-2 text-sm font-medium text-gray-400 hover:text-white hover:bg-gray-900 rounded-lg transition-colors uppercase tracking-wider"
                                >
                                    {link.label}
                                </button>
                            ))}
                            <a
                                href={`mailto:${personalInfo.email}`}
                                className="mx-4 px-4 py-2 text-sm font-medium text-purple-500 hover:text-purple-400 transition-colors uppercase tracking-wider"
                            >
                                Say hi - {personalInfo.email} ↗
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
