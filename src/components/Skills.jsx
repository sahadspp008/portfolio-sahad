import { motion } from "framer-motion";

const skills = [
    "React", "Next.js", "JavaScript", "TypeScript",
    "Tailwind CSS", "Node.js", "Framer Motion", "Git"
];

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
                        My <span className="text-gradient">Skills</span>
                    </h2>

                    <div className="flex flex-wrap justify-center gap-4">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={skill}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.05 }}
                                className="glass-panel px-6 py-3 rounded-full text-indigo-200 border border-white/5 hover:border-indigo-500/30 transition-colors cursor-default"
                            >
                                {skill}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
