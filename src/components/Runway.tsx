"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const experiences = [
    {
        company: "Bitwise Solutions",
        role: "Data Engineer",
        period: "Mar 2025 – Present",
        location: "Pune, MH",
        description: [
            "Developing and maintaining Microsoft Fabric Pipelines and Dataflows.",
            "Building internal migration accelerator for ADF/Synapse to Fabric.",
            "Creating reusable ETL templates and implementing performance tuning.",
            "Collaborating with Azure and DevOps teams for Lakehouse integration.",
        ],
    },
    {
        company: "Capgemini",
        role: "Senior Analyst",
        period: "Oct 2021 – Feb 2025",
        location: "Pune, MH",
        description: [
            "Designed scalable ETL pipelines using ADF, Informatica, and PySpark.",
            "Developed Power BI dashboards and SQL Server data models.",
            "Automated workflows using UNIX shell scripting and Azure DevOps.",
            "Partnered with stakeholders to convert complex data needs into solutions.",
        ],
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
        <section ref={containerRef} className="relative py-24 px-4 md:px-12 min-h-screen">
            <h2 className="text-[10vw] font-playfair leading-none mb-20 text-center md:text-left opacity-20">
                THE RUNWAY
            </h2>

            <div className="relative max-w-4xl mx-auto">
                {/* Center Line */}
                <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2">
                    <motion.div
                        style={{ height: lineHeight }}
                        className="w-full bg-electric-blue shadow-[0_0_10px_#3b82f6]"
                    />
                </div>

                <div className="space-y-32">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-fashion-black border-2 border-electric-blue rounded-full -translate-x-[calc(50%-0.5px)] mt-2 z-10" />

                            <div className="flex-1 md:w-1/2 relative h-[300px] md:h-auto overflow-hidden group">
                                <div className="absolute inset-0 bg-electric-blue/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <Image
                                    src={index % 2 === 0
                                        ? "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2670&auto=format&fit=crop"
                                        : "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop"
                                    }
                                    alt="Tech Abstract"
                                    fill
                                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                />
                            </div>

                            <div className="flex-1 md:w-1/2 pl-8 md:pl-0">
                                <div className={`flex flex-col ${index % 2 === 0 ? "md:items-start" : "md:items-end md:text-right"}`}>
                                    <span className="font-jetbrains text-electric-blue text-sm mb-2">
                                        {exp.period}
                                    </span>
                                    <h3 className="text-3xl md:text-4xl font-playfair mb-1">
                                        {exp.company}
                                    </h3>
                                    <h4 className="text-xl font-light text-gray-400 mb-4">
                                        {exp.role}
                                    </h4>
                                    <ul className={`space-y-2 text-sm text-gray-300 font-light ${index % 2 === 0 ? "" : "md:items-end"}`}>
                                        {exp.description.map((item, i) => (
                                            <li key={i} className="flex gap-2">
                                                <span className="text-electric-blue/50">▹</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
