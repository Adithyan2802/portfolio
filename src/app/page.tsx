import Hero from "./sections/Hero"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"
import About from "./sections/About";
import Projects from "./sections/Projects";
import Partition from "./sections/Partition";

export default function Home() {
    return (
        <main className=" mx-auto relative">
            {/*<Navbar/>*/}
            <Hero/>
            <Partition/>
            <About/>
            <Partition/>
            <Projects/>
            <Partition/>
            <Contact/>
            <Partition/>
            <Footer/>
        </main>
    );
}
