import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

// 🖼️ Import image directly
import heroBg from "./assets/herobg.png";

const App = () => {
  return (
    <BrowserRouter>
      <div style={{ backgroundImage: `url(${heroBg})` }} className="bg-cover bg-center h-full w-full">
        <div className="relative z-0">
          <div style={{ backgroundImage: `url(${heroBg})` }} className="bg-cover bg-center h-full w-full">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
