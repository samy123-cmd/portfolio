"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import MagneticButton from "./MagneticButton";
import { Download } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative h-screen w-full flex flex-col justify-between p-6 md:p-20 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <Image
                    src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=2574&auto=format&fit=crop"
                    alt="Fashion Tech Background"
                    fill
                    className="object-cover opacity-20 grayscale mix-blend-overlay"
                    priority
                />
                <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-gradient-to-b from-electric-blue/10 to-transparent blur-[100px]" />
                <div className="absolute bottom-0 left-0 w-[30vw] h-[30vh] bg-gradient-to-t from-white/5 to-transparent blur-[80px]" />
            </div>

            {/* Header / Nav */}
            <div className="relative z-20 flex justify-between items-start">
                <div className="font-playfair text-xl tracking-widest">AV.</div>
                <MagneticButton>
                    <a
                        href="/resume.pdf"
                        download
                        className="flex items-center gap-2 px-6 py-3 border border-white/20 rounded-full hover:bg-white hover:text-fashion-black transition-colors duration-300 backdrop-blur-sm"
                    >
                        <span className="font-jetbrains text-xs tracking-wider">RESUME</span>
                        <Download size={14} />
                    </a>
                </MagneticButton>
            </div>

            {/* Masthead */}
            <div className="relative z-10 mt-10 md:mt-0">
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                >
                    <h1 className="text-[15vw] leading-[0.8] tracking-tighter font-playfair mix-blend-difference text-paper-white">
                        AYUSHI
                        <br />
                        <span className="ml-[12vw]">VIJAY</span>
                    </h1>
                </motion.div>
            </div>

            {/* Subtitle / Tech Specs */}
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-end pb-4 md:pb-0">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="font-jetbrains text-xs text-gray-400 max-w-xs space-y-1"
                >
                    <p>PUNE, MH | +91 9509145561</p>
                    <p>VIJAYAYUSHI0@GMAIL.COM</p>
                    <div className="pt-4 flex gap-2">
                        <span className="px-3 py-1 border border-white/20 rounded-full text-[10px]">DATA ENGINEER</span>
                        <span className="px-3 py-1 border border-white/20 rounded-full text-[10px]">ETL SPECIALIST</span>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="text-right mt-8 md:mt-0"
                >
                    <h2 className="text-3xl md:text-5xl font-playfair italic text-electric-blue">
                        The Data Couturier
                    </h2>
                    <p className="font-jetbrains text-[10px] mt-2 text-gray-400 tracking-widest">
                        EST. 2021 — WEAVING DATA INTO INSIGHTS
                    </p>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 hidden md:block"
            >
                <div className="w-[1px] h-24 bg-gradient-to-b from-white to-transparent" />
            </motion.div>
        </section>
    );
}
