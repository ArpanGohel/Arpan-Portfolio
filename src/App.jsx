
import styles from "./App.module.css";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { About } from "./components/About/About";
import {Skillset} from "./components/Skillset/Skillset";
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";
import { Certifications } from "./components/Certifications/Certifications";

function App() {

  return( 
    <div className={styles.App}>
      <Navbar/>
      <Hero/>
      <About/>
      <Skillset/>
      <Certifications/>
      <Projects />
      <Contact/>
    </div>  
  );
};

export default App
