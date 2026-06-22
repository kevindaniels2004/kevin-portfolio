import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Background3D from "./components/Background3D";
import Projects from "./components/Project";
function App() {
  return (
    <>
      <Background3D />

      <div className="relative z-10 text-white bg-black min-h-screen overflow-x-hidden">
        <Navbar />
        <Hero />
        <Services />
        <Projects/>
        <Skills />
        <Education />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
export default App;