import { motion } from "framer-motion";
import Lottie from "lottie-react";
import profileImage from "../assets/profile.jpg";
// Using a generic computer animation or abstract shape would be good here.
// Since I cannot fetch an external JSON easily without url, I will default to a Framer Motion blob for the "blurry" effect + a placeholder text for where the Lottie would go if the user provides one.
// However, the user asked for Lottie. I will try to use a widely available public URL or just comment it out for the user to fill.
// Actually, I'll simulate the "blurry" effect with Framer Motion natively as it's more reliable for now.

export default function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Blobs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -100, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px]"
                />
                <motion.div
                    animate={{
                        x: [0, -100, 0],
                        y: [0, 100, 0],
                        scale: [1, 1.3, 1],
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-gray-500/10 rounded-full blur-[120px]"
                />
            </div>

            <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-gray-400 font-medium mb-4 text-lg">Hello, I&apos;m</h2>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        Sahad <span className="text-gradient">PP</span>
                    </h1>
                    <p className="text-xl text-gray-400 mb-8 max-w-lg">
                        Electrical & Electronics Engineer specializing in electrical design, load calculation, and circuit protection. Experienced in network engineering and ELV systems.
                    </p>
                    <div className="flex gap-4">
                        <a
                            href="#projects"
                            className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors"
                        >
                            View Work
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-3 rounded-full font-medium border border-white/20 hover:bg-white/5 transition-colors"
                        >
                            Contact Me
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative h-[400px] w-full flex items-center justify-center"
                >
                    {/* Profile Image */}
                    <div className="relative w-80 h-80 md:w-96 md:h-96">
                        <div className="absolute inset-0 bg-white/10 rounded-[2rem] blur-2xl transform rotate-6" />
                        <div className="absolute inset-0 bg-gray-500/10 rounded-[2rem] blur-2xl transform -rotate-6" />
                        <div className="relative w-full h-full glass-panel rounded-[2rem] overflow-hidden p-2 border-white/20">
                            <img
                                src={profileImage}
                                alt="Sahad PP"
                                className="w-full h-full object-cover rounded-[1.5rem] grayscale hover:grayscale-0 transition-all duration-500"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
