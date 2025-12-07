import { motion } from "framer-motion";

const projects = [
    {
        title: "Villa Electrical Design",
        description: "Full electrical design implementation including load calculations using diversity factors, cable sizing, and MCB selection. Prepared comprehensive lighting & power layouts, single line diagrams, and panel schedules.",
        tags: ["AutoCAD", "Electrical Design", "Load Calculation", "SLD"],
        image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3"
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-20">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold mb-16 text-center"
                >
                    Selected <span className="text-gradient">Projects</span>
                </motion.h2>

                <div className="max-w-4xl mx-auto">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="glass-panel rounded-3xl overflow-hidden group hover:border-white/30 transition-colors"
                        >
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="h-64 md:h-auto overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                                <div className="p-8 flex flex-col justify-center">
                                    <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">{project.title}</h3>
                                    <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="text-xs px-3 py-1 rounded-full bg-white/5 text-gray-300 border border-white/5">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
