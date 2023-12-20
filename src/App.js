import Navbar from "./components/Navbar/Navbar";
import Intro from './components/Intro/Intro';
import Skills from "./components/Skills/skills";
import AboutMe from "./components/AboutMe/AboutMe";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Intro/>
            <Skills/>
            <AboutMe />

        </div>
    );
}

export default App;