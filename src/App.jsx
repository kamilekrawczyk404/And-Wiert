import "./App.css";
import { Nav } from "./Components/Nav.jsx";
import { Hero } from "./Components/Hero.jsx";
import { Counters } from "./Components/Counters.jsx";
import { Services } from "./Components/Services.jsx";
import { useEffect, useRef, useState } from "react";
import { SlideUpIndicator } from "./Components/Partials/SlideUpIndicator.jsx";
import { Gallery } from "./Components/Gallery.jsx";
import { DiggingStages } from "./Components/DiggingStages.jsx";
import { CallService } from "./Components/CallService.jsx";
import { OtherServices } from "./Components/OtherServices.jsx";
import { Footer } from "./Components/Footer.jsx";
import {WorkMap} from "./Components/WorkMap.jsx";

function App() {
  const [userScrolled, setUserScrolled] = useState(false);
  const pageRefs = useRef([]);

  
  // index.html -> site address and check logo
  
  const contact = {
    telephone: "500327556",
    email: "andrzejw520@interia.eu",
     facebook: "https://www.facebook.com/andrzej.wolski.37201"
  };
  
  const altAttributeText = {
     text: "przykładowa realizacja studni głębinowej u klienta, studnia głębinowa, małopolska, podkarpacie, Ciężkowicie, Bobowa, Gromnik, Gorlice, Stróże, Nowy Sącz, Grybów, Korzenna, czysta woda, ujęcie wody, studnie głębinowe firma, autolaweta, przewóz rzeczy, samochodów"
  }

  const links = [
    { anchor: 0, title: "O nas" },
    { anchor: 1, title: "Etapy wykonywania studni" },
    { anchor: 2, title: "Galeria" },
    { anchor: 3, title: "Usługi auto lawetą" },
  ];

  const checkOffset = () => {
    if (window.scrollY >= 10) {
      setUserScrolled(true);
    } else {
      setUserScrolled(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToTheElement = (id) => {
    window.scrollTo({
      top: pageRefs.current[id].offsetTop - (!userScrolled ? 108 : 56),
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkOffset);

    return () => {
      window.removeEventListener("scroll", checkOffset);
    };
  }, []);

  return (
    <div>
      <Nav
        contact={contact}
        userScrolled={userScrolled}
        handleScrollToTop={scrollToTop}
        handleScroll={scrollToTheElement}
        links={links}
      />
      <Hero
        contact={contact}
        userScrolled={userScrolled}
        handleScroll={scrollToTheElement}
        altAttributeText={altAttributeText}
      />
      <Services ref={(element) => (pageRefs.current[0] = element)} altAttributeText={altAttributeText}/>
      <Counters />
      <DiggingStages ref={(element) => (pageRefs.current[1] = element)} altAttributeText={altAttributeText} />
      <CallService contact={contact} />
      <Gallery ref={(element) => (pageRefs.current[2] = element)} altAttributeText={altAttributeText}/>
       {/*<WorkMap />*/}
      <OtherServices ref={(element) => (pageRefs.current[3] = element)} altAttributeText={altAttributeText} />
      <Footer
        contact={contact}
        links={links}
        handleScroll={scrollToTheElement}
      />
      {userScrolled && <SlideUpIndicator handleScrollToTop={scrollToTop} />}
    </div>
  );
}

export default App;