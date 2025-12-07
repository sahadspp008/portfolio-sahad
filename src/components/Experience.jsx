import { motion } from "framer-motion";

const experiences = [
    {
        role: "Network Engineer L1",
        company: "Future Connect Broadband Pvt Ltd",
        period: "Oct 2022 - Feb 2024",
        location: "Calicut, Kerala",
        description: [
            "Configured network devices including routers, switches, and customer CPE units to ensure stable connectivity.",
            "Monitored bandwidth usage and network performance to detect and resolve service issues quickly.",
            "Provided technical support to end-users through phone and remote applications.",
            "Performed new user creation, service provisioning, and plan activation in ISP management systems.",
            "Managed customer complaints professionally and ensured timely issue resolution.",
            "Responded to network trouble tickets and escalated complex cases to backend/L2 teams."
        ]
    }
];

export default function Experience() {
    return (
        <section id="experience" className="py-20 relative">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold mb-16 text-center"
                >
                    Work <span className="text-gradient">Experience</span>
                </motion.h2>

                <div className="max-w-4xl mx-auto space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="glass-panel p-8 rounded-3xl relative border-l-4 border-indigo-500"
                        >
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                                    <h4 className="text-indigo-300 text-lg mb-1">{exp.company}</h4>
                                    <p className="text-sm text-gray-500 flex items-center gap-2">
                                        {exp.location}
                                    </p>
                                </div>
                                <div className="mt-2 md:mt-0 px-4 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-mono text-gray-300 whitespace-nowrap">
                                    {exp.period}
                                </div>
                            </div>

                            <ul className="space-y-3">
                                {exp.description.map((item, i) => (
                                    <li key={i} className="flex items-start text-gray-300">
                                        <span className="mr-3 text-indigo-400 mt-1.5">•</span>
                                        <span className="leading-relaxed">{item}</span>
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
