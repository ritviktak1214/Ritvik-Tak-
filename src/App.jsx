import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Education,
  Resume,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

import heroBg from "./assets/herobg.png";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary min-h-screen text-white overflow-hidden">
        <div
          style={{ backgroundImage: `url(${heroBg})` }}
          className="bg-cover bg-no-repeat bg-center"
        >
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Education />
        <Resume />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
