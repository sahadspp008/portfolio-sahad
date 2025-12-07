import { motion } from "framer-motion";
import Lottie from "lottie-react";
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
                    className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px]"
                />
                <motion.div
                    animate={{
                        x: [0, -100, 0],
                        y: [0, 100, 0],
                        scale: [1, 1.3, 1],
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px]"
                />
            </div>

            <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-indigo-400 font-medium mb-4 text-lg">Hello, I'm</h2>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        Sahad <span className="text-gradient">PP</span>
                    </h1>
                    <p className="text-xl text-gray-400 mb-8 max-w-lg">
                        Building digital experiences with modern technologies. Focusing on motion, aesthetics, and performance.
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
                    {/* Placeholder for Lottie - Using a glass card for now */}
                    <div className="glass-panel w-full h-full rounded-3xl flex items-center justify-center p-8 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <p className="text-gray-500 text-center">
                            [Lottie Animation Placeholder]<br />
                            <span className="text-sm opacity-60">Add animation.json here</span>
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
