"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const seasons = [
    {
        collection: "SS '25",
        company: "BITWISE",
        role: "LEAD DATA ENGINEER",
        description: "Draped legacy ETL into modern Fabric silhouettes. Tailored high-performance pipelines for the next season of data.",
        image: "/bitwise.jpeg"
    },
    {
        collection: "FW '21",
        company: "CAPGEMINI",
        role: "SENIOR ANALYST",
        description: "Stitched scalable PySpark workloads for high-volume retail intelligence. A classic collection of robust data modeling.",
        image: "/capgemini.jpeg"
    },
];

export default function Runway() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section ref={containerRef} className="relative py-32 px-6 md:px-12 min-h-screen bg-fashion-black text-paper-white overflow-hidden">

            {/* Section Header */}
            <div className="flex items-baseline gap-4 mb-24 border-b border-white/10 pb-4">
                <h2 className="text-6xl md:text-8xl font-playfair mix-blend-difference">
                    THE RUNWAY
                </h2>
                <span className="font-jetbrains text-xs tracking-widest text-gray-500">
                    CAREER SEASONS
                </span>
            </div>

            <div className="relative max-w-5xl mx-auto">
                {/* Center Line*/}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 md:-translate-x-1/2">
                    <motion.div
                        style={{ height: lineHeight }}
                        className="w-full bg-electric-blue shadow-[0_0_15px_#3b82f6]"
                    />
                </div>

                <div className="space-y-40">
                    {seasons.map((season, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className={`relative flex flex-col md:flex-row gap-12 md:gap-24 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                        >
                            {/* Timeline Marker */}
                            <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-fashion-black border border-white rounded-full md:-translate-x-[calc(50%-0.5px)] mt-2 z-10" />

                            {/* Visual Side */}
                            <div className="flex-1 md:w-1/2 pl-12 md:pl-0">
                                <div className="relative h-[400px] w-full overflow-hidden border border-white/10 group">
                                    <div className="absolute inset-0 bg-electric-blue/10 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <Image
                                        src={season.image}
                                        alt={season.collection}
                                        fill
                                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                                    />

                                    {/* Image Label */}
                                    <div className="absolute bottom-4 right-4 bg-fashion-black/80 backdrop-blur-sm px-3 py-1 border border-white/10">
                                        <span className="font-jetbrains text-[10px] tracking-widest text-white">
                                            LOOK {index + 1}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Content Side */}
                            <div className={`flex-1 md:w-1/2 pl-12 md:pl-0 flex flex-col justify-center ${index % 2 === 0 ? "md:items-start" : "md:items-end md:text-right"}`}>
                                <span className="font-jetbrains text-electric-blue text-xs tracking-widest mb-4 border border-electric-blue/30 px-3 py-1 rounded-full w-fit">
                                    {season.collection}
                                </span>

                                <h3 className="text-4xl md:text-5xl font-playfair mb-2">
                                    {season.company}
                                </h3>

                                <h4 className="text-sm font-jetbrains text-gray-400 mb-8 tracking-wider">
                                    {season.role}
                                </h4>

                                <p className="font-inter text-gray-300 font-light leading-relaxed max-w-sm text-lg italic border-l-2 md:border-l-0 md:border-r-2 border-electric-blue/50 pl-4 md:pl-0 md:pr-4">
                                    &quot;{season.description}&quot;
                                </p>
                            </div>

                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
