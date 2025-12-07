import { motion } from "framer-motion";

const skills = [
    "AutoCAD",
    "Load Calculation",
    "Cable Sizing",
    "Circuit Protection",
    "SLD Creation",
    "Lighting & Power Layouts",
    "DEWA/ADDC Regulations",
    "Networking & IT",
    "MS Office"
];

const languages = ["English", "Malayalam"];

export default function Skills() {
    return (
        <section id="skills" className="py-20">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-12">
                        Professional <span className="text-gradient">Skills</span>
                    </h2>

                    <div className="flex flex-wrap justify-center gap-4 mb-16">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={skill}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.05 }}
                                className="glass-panel px-6 py-3 rounded-full text-gray-300 border border-white/5 hover:border-white/30 transition-colors cursor-default"
                            >
                                {skill}
                            </motion.div>
                        ))}
                    </div>

                    <h3 className="text-2xl font-bold mb-8 text-gray-400">Languages</h3>
                    <div className="flex justify-center gap-6">
                        {languages.map((lang, index) => (
                            <motion.div
                                key={lang}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="text-lg text-white font-medium"
                            >
                                {lang}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
