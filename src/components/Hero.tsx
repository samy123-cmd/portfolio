"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import MagneticButton from "./MagneticButton";
import { Download, ArrowDown } from "lucide-react";
import { useRef } from "react";

export default function Hero() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={containerRef} className="relative min-h-screen w-full bg-fashion-black text-paper-white overflow-hidden pt-24 pb-12 px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-6">

            {/* Background Texture - Grid Lines */}
            <div className="absolute inset-0 pointer-events-none z-0 opacity-10"
                style={{ backgroundImage: 'linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)', backgroundSize: '20vh 20vh' }}>
            </div>

            {/* LEFT COLUMN: Typography & Intro */}
            <div className="md:col-span-7 flex flex-col justify-between relative z-10 h-full">

                {/* Top Meta */}
                <div className="flex justify-between items-start border-b border-white/10 pb-6 mb-12">
                    <div className="font-jetbrains text-xs tracking-widest text-gray-400">
                        VOL. 01 — 2025 EDITION
                    </div>
                    <div className="font-jetbrains text-xs tracking-widest text-electric-blue">
                        PUNE / FABRIC / ETL
                    </div>
                </div>

                {/* Masthead */}
                <div className="mb-auto">
                    <motion.h1
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                        className="text-[15vw] md:text-[11vw] leading-[0.8] font-playfair tracking-tighter mix-blend-difference"
                    >
                        AYUSHI
                        <br />
                        <span className="ml-[10vw] italic text-gray-500">VIJAY</span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 1 }}
                        className="mt-8 flex items-center gap-4"
                    >
                        <div className="h-[1px] w-24 bg-electric-blue" />
                        <h2 className="text-xl md:text-3xl font-light tracking-wide uppercase">
                            The Data Couturier
                        </h2>
                    </motion.div>
                </div>

                {/* Intro Copy */}
                <div className="mt-12 md:mt-24 max-w-md">
                    <p className="font-inter text-sm md:text-base text-gray-300 leading-relaxed text-justify mb-8">
                        Weaving raw data into high-performance insights.
                        Specializing in <span className="text-white font-medium">Microsoft Fabric</span>, <span className="text-white font-medium">Azure Synapse</span>, and <span className="text-white font-medium">Enterprise ETL</span>.
                        Designed for scalability, tailored for intelligence.
                    </p>

                    <MagneticButton>
                        <a
                            href="/resume.pdf"
                            download
                            className="group relative flex items-center gap-4 px-8 py-4 border border-white/20 bg-transparent overflow-hidden transition-all duration-500 hover:border-white"
                        >
                            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]" />

                            <div className="relative z-10 flex flex-col items-start mix-blend-difference text-white">
                                <span className="font-jetbrains text-[10px] tracking-[0.2em] uppercase">
                                    SS '25 COLLECTION
                                </span>
                                <span className="font-playfair text-xl italic leading-none mt-1">
                                    Get the Lookbook
                                </span>
                            </div>

                            <Download size={18} className="relative z-10 mix-blend-difference text-white group-hover:animate-bounce" />
                        </a>
                    </MagneticButton>
                </div>
            </div>

            {/* RIGHT COLUMN: Visual Editorial */}
            <div className="md:col-span-5 relative h-[50vh] md:h-auto mt-12 md:mt-0">
                <motion.div
                    style={{ y, opacity }}
                    className="relative w-full h-full border border-white/10 p-4"
                >
                    {/* Image Container */}
                    <div className="relative w-full h-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 ease-out">
                        <Image
                            src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=2070&auto=format&fit=crop"
                            alt="Editorial Fashion Tech"
                            fill
                            className="object-cover"
                            priority
                        />

                        {/* Overlays */}
                        <div className="absolute inset-0 bg-gradient-to-t from-fashion-black/80 to-transparent opacity-60" />

                        {/* Floating Data Elements */}
                        <div className="absolute bottom-6 left-6 font-jetbrains text-[10px] text-white/80 space-y-1">
                            <p>/// SYSTEM.FABRIC.INIT</p>
                            <p>/// PIPELINE.STATUS: ACTIVE</p>
                            <p>/// LATENCY: 12ms</p>
                        </div>

                        {/* Barcode */}
                        <div className="absolute top-6 right-6 opacity-50">
                            <div className="flex gap-[2px] h-8">
                                {[...Array(20)].map((_, i) => (
                                    <div key={i} className={`w-[${i % 3 === 0 || i % 7 === 0 ? '3px' : '1px'}] bg-white`} />
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="font-jetbrains text-[10px] tracking-widest opacity-50">SCROLL TO VIEW COLLECTION</span>
                <ArrowDown size={14} className="animate-bounce opacity-50" />
            </motion.div>

        </section>
    );
}
