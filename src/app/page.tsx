import Navbar from "./sections/Navbar"
import Hero from "./sections/Hero"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"
import About from "./sections/About";
import Projects from "./sections/Projects";

export default function Home() {
    return (
        <main className="mx-auto relative">
            <Navbar/>
            <Hero/>
            <About/>
            <Projects/>
            <Contact/>
            <Footer/>
        </main>
    );
}
