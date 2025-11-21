'use client';
/* eslint-disable @next/next/no-img-element */

import { personalInfo } from '@/data/portfolio-data';

export default function Footer() {
    return (
        <footer className="bg-black text-white pt-32 pb-12 border-t border-gray-900">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center text-center mb-32">
                    <h2 className="text-[clamp(3rem,8vw,7rem)] font-black leading-[0.9] tracking-tighter uppercase mb-12">
                        LET'S <span className="inline-block rounded-full overflow-hidden align-middle mx-2 w-[1em] h-[1em] relative top-[-0.1em]">
                            <img
                                src="https://lh3.googleusercontent.com/a/ACg8ocK0_ns8Vo7eWKYi31GgJ5nRCtypdJTcI-Y82waDqtKGMsqbn4TA=s317-c-no"
                                alt="Portrait"
                                className="w-full h-full object-cover grayscale"
                            />
                        </span> CREATE<br />
                        GREAT THINGS.
                    </h2>

                    <a
                        href={`mailto:${personalInfo.email}`}
                        className="inline-flex items-center gap-2 px-10 py-4 rounded-full border border-gray-700 hover:bg-white hover:text-black transition-all uppercase text-sm font-bold tracking-wider"
                    >
                        Discuss Work ↗
                    </a>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-gray-900 text-gray-500 text-sm uppercase tracking-wider">
                    <div className="flex gap-6 mb-4 md:mb-0">
                        {personalInfo.social.map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                className="hover:text-white transition-colors"
                            >
                                {social.name}
                            </a>
                        ))}
                    </div>
                    <p>© {new Date().getFullYear()} {personalInfo.name}</p>
                </div>
            </div>
        </footer>
    );
}
