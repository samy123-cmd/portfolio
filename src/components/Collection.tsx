"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const skills = [
    { category: "Cloud & DevOps", items: ["Azure ADF", "Synapse", "Fabric", "DevOps"] },
    { category: "Languages", items: ["Python", "C", "Shell Scripting", "SQL"] },
    { category: "Databases", items: ["SQL Server", "Oracle", "MySQL", "Teradata"] },
    { category: "ETL / BI", items: ["Informatica", "Talend", "Power BI", "Tableau"] },
];

export default function Collection() {
    return (
        <section className="relative py-24 px-4 md:px-12 bg-fashion-black overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <Image
                    src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2574&auto=format&fit=crop"
                    alt="Fabric Texture"
                    fill
                    className="object-cover"
                />
            </div>
            <div className="relative max-w-6xl mx-auto z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <h2 className="text-[8vw] md:text-6xl font-playfair leading-none">
                        THE <br /> COLLECTION
                    </h2>
                    <p className="font-jetbrains text-sm text-gray-400 max-w-xs text-right mt-4 md:mt-0">
                        A CURATED SELECTION OF TECHNICAL FABRICS AND MATERIALS
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skills.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group border border-white/10 p-6 hover:bg-white/5 transition-colors duration-500"
                        >
                            <h3 className="font-playfair text-xl mb-6 text-electric-blue">
                                {category.category}
                            </h3>
                            <ul className="space-y-3">
                                {category.items.map((skill, i) => (
                                    <li key={i} className="flex items-center justify-between font-jetbrains text-sm border-b border-white/5 pb-2 group-hover:border-white/20 transition-colors">
                                        <span>{skill}</span>
                                        <span className="opacity-0 group-hover:opacity-100 transition-opacity text-xs text-gray-500">
                                            100%
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
