"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Phone, ArrowRight } from "lucide-react";
import MagneticButton from "./MagneticButton";

export default function Backstage() {
    return (
        <section className="relative py-32 px-6 md:px-12 min-h-[80vh] flex flex-col justify-between bg-fashion-black text-paper-white overflow-hidden">

            {/* Background Grid */}
            <div className="absolute inset-0 pointer-events-none opacity-5"
                style={{ backgroundImage: 'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)', backgroundSize: '10vh 10vh' }}>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto w-full">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 border-b border-white/10 pb-8">
                    <h2 className="text-[10vw] font-playfair leading-[0.8] mix-blend-difference">
                        BOOKINGS
                    </h2>
                    <div className="text-right mt-8 md:mt-0">
                        <p className="font-jetbrains text-xs tracking-widest text-gray-500 mb-2">
                            AGENCY: INDEPENDENT
                        </p>
                        <p className="font-jetbrains text-xs tracking-widest text-electric-blue">
                            STATUS: OPEN FOR FW '25
                        </p>
                    </div>
                </div>

                {/* Contact Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">

                    {/* Left: Intro */}
                    <div>
                        <p className="font-playfair text-3xl md:text-4xl leading-tight mb-12">
                            Available for global runways in Data Engineering & Cloud Couture.
                        </p>

                        <MagneticButton>
                            <a href="mailto:vijayayushi0@gmail.com" className="group flex items-center gap-4 text-xl font-light hover:text-electric-blue transition-colors">
                                <span className="border-b border-white/20 pb-1 group-hover:border-electric-blue">REQUEST A FITTING</span>
                                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                            </a>
                        </MagneticButton>
                    </div>

                    {/* Right: Details */}
                    <div className="space-y-8 font-jetbrains text-sm tracking-wide text-gray-400">
                        <div className="flex justify-between border-b border-white/10 pb-4 hover:text-white transition-colors cursor-default">
                            <span>EMAIL</span>
                            <a href="mailto:vijayayushi0@gmail.com" className="hover:text-electric-blue">VIJAYAYUSHI0@GMAIL.COM</a>
                        </div>

                        <div className="flex justify-between border-b border-white/10 pb-4 hover:text-white transition-colors cursor-default">
                            <span>LINKEDIN</span>
                            <a href="https://linkedin.com/in/ayushivijay" target="_blank" className="hover:text-electric-blue">/IN/AYUSHIVIJAY</a>
                        </div>

                        <div className="flex justify-between border-b border-white/10 pb-4 hover:text-white transition-colors cursor-default">
                            <span>PHONE</span>
                            <span>+91 9509145561</span>
                        </div>

                        <div className="flex justify-between border-b border-white/10 pb-4 hover:text-white transition-colors cursor-default">
                            <span>BASE</span>
                            <span>PUNE, MAHARASHTRA</span>
                        </div>
                    </div>

                </div>

            </div>

            {/* Footer */}
            <footer className="relative z-10 flex justify-between items-end mt-24 font-jetbrains text-[10px] text-gray-600 uppercase tracking-widest">
                <div>
                    © 2025 AYUSHI VIJAY
                </div>
                <div className="text-right">
                    THE DATA COUTURIER<br />
                    ALL RIGHTS RESERVED
                </div>
            </footer>

        </section>
    );
}
