import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="py-20 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
                        About <span className="text-gradient">Me</span>
                    </h2>

                    <div className="glass-panel p-8 md:p-12 rounded-3xl">
                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                            [About Content Placeholder]
                            <br />
                            Passionate developer with a knack for creating immersive digital experiences.
                            I specialize in building performant web applications using modern technologies.
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            Based in [Location], I enjoy solving complex problems and turning ideas into reality.
                            Always learning, always improving.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
