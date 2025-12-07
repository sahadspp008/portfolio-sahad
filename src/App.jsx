import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <main className="antialiased text-white selection:bg-white/30">
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
      <About />
      <Skills />
      <Contact />
    </main>
  );
}

export default App;
