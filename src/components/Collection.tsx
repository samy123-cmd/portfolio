"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const fabrics = [
    {
        category: "CLOUD FABRICS",
        materials: ["Azure Data Factory", "Synapse Analytics", "Microsoft Fabric", "Databricks"],
        texture: "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?q=80&w=2787&auto=format&fit=crop"
    },
    {
        category: "DATA CRAFT",
        materials: ["Python Scripting", "Advanced SQL", "PySpark", "Shell Automation"],
        texture: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop"
    },
    {
        category: "VISUAL WEAVE",
        materials: ["Power BI", "Tableau", "D3.js", "Looker Studio"],
        texture: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=2835&auto=format&fit=crop"
    },
];

const projects = [
    {
        id: "01",
        title: "MIGRATION COUTURE",
        subtitle: "LEGACY TO FABRIC",
        description: "Re-cut legacy pipelines into modular Fabric ensembles. Achieved 35% faster load times through optimized delta lake patterns.",
        image: "/migration-couture.jpeg"
    },
    {
        id: "02",
        title: "REAL-TIME RUNWAY",
        subtitle: "STREAMING ARCHITECTURE",
        description: "Stitched a streaming architecture delivering always-in-season insights. Processed 1M+ events/sec for live retail trends.",
        image: "/real-time-runway.jpeg"
    }
];

export default function Collection() {
    return (
        <section className="relative py-32 px-6 md:px-12 bg-fashion-black text-paper-white overflow-hidden">

            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-white/10 pb-6">
                <div>
                    <h2 className="text-6xl md:text-8xl font-playfair leading-[0.8]">
                        THE <br /> COLLECTION
                    </h2>
                </div>
                <div className="text-right mt-8 md:mt-0">
                    <p className="font-jetbrains text-xs tracking-widest text-gray-500 mb-2">
                        MATERIALS & PIECES
                    </p>
                    <p className="font-inter text-sm max-w-xs ml-auto text-gray-400">
                        A curated selection of technical fabrics and signature engineering pieces.
                    </p>
                </div>
            </div>

            {/* PART 1: FABRIC SWATCHES (Skills) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
                {fabrics.map((fabric, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="group relative h-[400px] border border-white/10 p-6 flex flex-col justify-between overflow-hidden bg-fashion-black/50 backdrop-blur-sm hover:bg-fashion-black hover:border-electric-blue/30 hover:shadow-2xl hover:shadow-electric-blue/10 transition-all duration-500"
                    >
                        {/* Texture Background */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                            <Image src={fabric.texture} alt="texture" fill className="object-cover" />
                        </div>

                        <div className="relative z-10">
                            <h3 className="font-jetbrains text-xs tracking-widest mb-4 border-b border-white/10 pb-2 text-gray-400">
                                {fabric.category}
                            </h3>
                            <ul className="space-y-2">
                                {fabric.materials.map((m, i) => (
                                    <li key={i} className="font-playfair text-2xl italic text-gray-500 group-hover:text-white transition-colors duration-300">
                                        {m}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="relative z-10 font-jetbrains text-[10px] text-gray-600 group-hover:text-electric-blue transition-colors">
                            SWATCH NO. 0{idx + 1}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* PART 2: SIGNATURE PIECES (Projects) */}
            <div className="mb-12">
                <h3 className="font-jetbrains text-xs tracking-widest mb-12 text-center md:text-left text-gray-500">
                    SIGNATURE PIECES — FW '24
                </h3>

                <div className="space-y-24">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center group cursor-pointer"
                        >
                            {/* Image */}
                            <div className="md:col-span-5 relative h-[300px] md:h-[500px] overflow-hidden border border-white/10">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                />
                                <div className="absolute top-4 left-4 bg-fashion-black/80 backdrop-blur-sm border border-white/10 px-3 py-1">
                                    <span className="font-jetbrains text-[10px] tracking-widest text-white">PIECE NO.{project.id}</span>
                                </div>
                            </div>

                            {/* Text */}
                            <div className="md:col-span-7 md:pl-12">
                                <h4 className="font-jetbrains text-electric-blue text-xs tracking-widest mb-2">
                                    {project.subtitle}
                                </h4>
                                <h3 className="text-5xl md:text-7xl font-playfair mb-6 group-hover:italic transition-all duration-300">
                                    {project.title}
                                </h3>
                                <p className="font-inter text-gray-400 text-lg leading-relaxed max-w-md mb-8">
                                    {project.description}
                                </p>

                                <div className="flex items-center gap-2 text-sm font-medium border-b border-white/20 pb-1 w-fit text-gray-400 group-hover:text-electric-blue group-hover:border-electric-blue transition-colors">
                                    VIEW CASE STUDY <ArrowUpRight size={16} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

        </section>
    );
}
