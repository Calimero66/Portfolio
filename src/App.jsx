import Navbar from "./components/Navbar/Navbar";
import Intro from './components/Intro/Intro';
import AboutMe from "./components/AboutMe/AboutMe";
import Projects from "./components/projects/projects";
import ContactMe from "./components/ContactMe/ContactMe";
import Footer from "./components/Footer/Footer";





function App() {
    return (
        <>
            <Navbar />
            <Intro />
            <AboutMe />
            <Projects />
            <ContactMe />
            <Footer />
        </>
    );
}

export default App;