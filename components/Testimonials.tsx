'use client';
/* eslint-disable @next/next/no-img-element */

export default function Testimonials() {
    return (
        <section id="testimonials" className="section bg-black text-white py-24 border-t border-gray-900">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                        <span className="text-6xl text-gray-800 font-serif absolute -top-8 -left-4">“</span>
                        <h3 className="text-2xl md:text-4xl font-medium leading-tight mb-8 relative z-10">
                            Baig is responsive and helpful. I highly recommend and would be happy to use your service again, an efficient experience.
                        </h3>

                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-800">
                                <img
                                    src="/Awais.jpg"
                                    alt="Client"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div>
                                <p className="font-bold">Dr. Awais</p>
                                <p className="text-sm text-gray-500">Apple School Director</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8 text-gray-400 text-lg leading-relaxed">
                        <p>
                            I believe that great design is not just about aesthetics, but about solving problems and creating meaningful connections between people and technology.
                        </p>
                        <p>
                            My approach combines strategic thinking with creative execution to deliver products that not only look good but perform exceptionally well.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
