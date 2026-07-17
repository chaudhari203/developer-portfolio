import {Hero} from "./Hero";
import {About} from "./About"
import {Skills} from "./Skills";
import {Experience} from "./Experience";
import {Projects} from "./Projects";
import {Contact} from "./Contact";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}

export default Home;