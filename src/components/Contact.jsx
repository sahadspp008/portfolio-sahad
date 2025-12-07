import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, MapPin } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-20 relative overflow-hidden">
            {/* Decorative gradient */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-600/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-8">
                        Get in <span className="text-gradient">Touch</span>
                    </h2>
                    <p className="text-gray-400 mb-12 text-lg">
                        I&apos;m currently available for immediate joining. Feel free to contact me for opportunities in Electrical Engineering, Design, or ELV systems.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-12">
                        <a
                            href="mailto:sahadspp@outlook.com"
                            className="glass-panel p-6 rounded-2xl flex items-center gap-4 hover:bg-white/5 transition-colors group"
                        >
                            <div className="p-3 rounded-full bg-indigo-500/20 text-indigo-400 group-hover:bg-indigo-500/30 group-hover:scale-110 transition-all">
                                <Mail size={24} />
                            </div>
                            <div className="text-left">
                                <span className="block text-sm text-gray-500">Email</span>
                                <span className="text-white font-medium">sahadspp@outlook.com</span>
                            </div>
                        </a>

                        <a
                            href="tel:+971567931588"
                            className="glass-panel p-6 rounded-2xl flex items-center gap-4 hover:bg-white/5 transition-colors group"
                        >
                            <div className="p-3 rounded-full bg-emerald-500/20 text-emerald-400 group-hover:bg-emerald-500/30 group-hover:scale-110 transition-all">
                                <Phone size={24} />
                            </div>
                            <div className="text-left">
                                <span className="block text-sm text-gray-500">Phone</span>
                                <span className="text-white font-medium">+971 567 931 588</span>
                            </div>
                        </a>
                    </div>

                    <div className="flex justify-center gap-6">
                        <a
                            href="https://linkedin.com/in/sahadspp"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-3 glass-panel rounded-full hover:bg-white/10 transition-colors text-white"
                        >
                            <Linkedin size={20} />
                            <span>LinkedIn Profile</span>
                        </a>

                        <div className="flex items-center gap-2 px-6 py-3 glass-panel rounded-full text-gray-400">
                            <MapPin size={20} />
                            <span>Abu Dhabi, UAE</span>
                        </div>
                    </div>
                </motion.div>

                <footer className="mt-20 text-sm text-gray-500">
                    © {new Date().getFullYear()} Sahad PP. All rights reserved.
                </footer>
            </div>
        </section>
    );
}
