"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Phone } from "lucide-react";

export default function Backstage() {
    return (
        <section className="py-24 px-6 md:px-20 min-h-[50vh] flex flex-col justify-center">
            <div className="max-w-4xl mx-auto w-full text-center">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-[12vw] font-playfair leading-none mb-12 hover:text-electric-blue transition-colors duration-500 cursor-default"
                >
                    BACKSTAGE
                </motion.h2>

                <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
                    <a
                        href="mailto:vijayayushi0@gmail.com"
                        className="flex items-center gap-3 font-jetbrains text-sm hover:text-electric-blue transition-colors group"
                    >
                        <div className="p-3 border border-white/20 rounded-full group-hover:border-electric-blue transition-colors">
                            <Mail size={20} />
                        </div>
                        <span>VIJAYAYUSHI0@GMAIL.COM</span>
                    </a>

                    <a
                        href="https://linkedin.com/in/ayushivijay"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 font-jetbrains text-sm hover:text-electric-blue transition-colors group"
                    >
                        <div className="p-3 border border-white/20 rounded-full group-hover:border-electric-blue transition-colors">
                            <Linkedin size={20} />
                        </div>
                        <span>LINKEDIN.COM/IN/AYUSHIVIJAY</span>
                    </a>

                    <div className="flex items-center gap-3 font-jetbrains text-sm text-gray-400">
                        <div className="p-3 border border-white/20 rounded-full">
                            <Phone size={20} />
                        </div>
                        <span>+91 9509145561</span>
                    </div>
                </div>

                <footer className="mt-24 text-center font-jetbrains text-xs text-gray-600">
                    <p>© 2025 AYUSHI VIJAY. THE DATA COUTURIER.</p>
                </footer>
            </div>
        </section>
    );
}
