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

                    <div className="glass-panel p-8 md:p-12 rounded-3xl mb-12">
                        <h3 className="text-2xl font-bold mb-6 text-white">Summary</h3>
                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                            Electrical & Electronics Engineer with practical experience in electrical design, including load calculation, cable sizing, circuit protection, lighting & power layouts, and single-line diagrams.
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                            Experienced in networking projects and familiar with IT/ELV systems. Knowledgeable in UAE EWR 2020 regulations and ready to contribute to electrical and ELV projects.
                        </p>
                        <div className="grid md:grid-cols-2 gap-6 mt-8 p-6 bg-white/5 rounded-2xl border border-white/5">
                            <div>
                                <span className="block text-sm text-gray-500 uppercase tracking-wider mb-2">Location</span>
                                <span className="text-lg text-white">Abu Dhabi</span>
                            </div>
                            <div>
                                <span className="block text-sm text-gray-500 uppercase tracking-wider mb-2">Availability</span>
                                <span className="text-lg text-white">Immediate Joining</span>
                            </div>
                        </div>
                    </div>

                    <div className="glass-panel p-8 md:p-12 rounded-3xl">
                        <h3 className="text-2xl font-bold mb-6 text-white">Education</h3>
                        <div>
                            <h4 className="text-xl font-bold text-white">Bachelor of Technology In Electrical and Electronics Engineering</h4>
                            <p className="text-gray-400 mt-2">Royal College of Engineering Technology, Thrissur</p>
                            <p className="text-sm text-gray-500 mt-1">2017 - 2021</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
