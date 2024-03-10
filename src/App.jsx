import "./App.css";
import { Nav } from "./Components/Nav.jsx";
import { Hero } from "./Components/Hero.jsx";
import { Counters } from "./Components/Counters.jsx";
import { Services } from "./Components/Services.jsx";
import { Gallery } from "./Components/Gallery.jsx";
import { DiggingStages } from "./Components/DiggingStages.jsx";
import { CallService } from "./Components/CallService.jsx";
import { OtherServices } from "./Components/OtherServices.jsx";
import { Footer } from "./Components/Footer.jsx";
import { WorkMap } from "./Components/WorkMap.jsx";
import { ComponentProvider } from "./Providers/ComponentContext.jsx";

function App() {
  return (
    <div>
      <ComponentProvider>
        <Nav />
        <Hero />
        <Services />
        <Counters />
        <DiggingStages />
        <CallService />
        <Gallery />
        <WorkMap />
        <OtherServices />
        <Footer />
      </ComponentProvider>
    </div>
  );
}

export default App;