import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../lib/utils";
import { Menu, X } from "lucide-react";

const navItems = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={cn(
                    "fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-4xl rounded-2xl transition-all duration-300",
                    isScrolled || isOpen
                        ? "glass-panel bg-black/40"
                        : "bg-transparent border-transparent"
                )}
            >
                <div className="flex items-center justify-between px-6 py-4">
                    <a href="#" className="text-xl font-bold tracking-tighter text-white">
                        SPP<span className="text-gray-400">.</span>
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-sm font-medium text-gray-300 hover:text-white transition-colors hover:glow"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setIsOpen(!isOpen)}
                        title={isOpen ? "Close menu" : "Open menu"}
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Nav */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden md:hidden border-t border-white/10"
                        >
                            <div className="flex flex-col p-6 gap-4">
                                {navItems.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-lg font-medium text-gray-300 hover:text-white"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
        </>
    );
}
