import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-[url('/src/assets/herobg.png')] bg-cover bg-center h-full w-full">
         <div className='relative z-0 '>
        <div className=" bg-[url('/src/assets/herobg.png')] bg-cover bg-center h-full w-full">
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

