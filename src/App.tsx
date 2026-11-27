import { useEffect } from "react";
import Contact from "./components/Contact";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Process from "./components/Process";
import Projects from "./components/Projects";
import Showcase from "./components/Showcase";
import Stack from "./components/Stack";
import stagger from "./util";
import { SERVICES } from "./content";
import { initReveals } from "./motion/reveal";

function Services() {
  return (
    <section className="sec sec--field" id="services">
      <div className="wrap">
        <div className="head">
          <h2 className="h2" data-in="">
            Creative services
          </h2>
          <p className="lead head-lead" data-in="" style={stagger(1)}>
            Design, edit, and build work for digital platforms.
          </p>
        </div>
        <div className="cards cards--3">
          {SERVICES.map((service, index) => (
            <article className="card" data-in="" style={stagger(index)} key={service.title}>
              <p className="mono card-tag">{service.tag}</p>
              <h3>{service.title}</h3>
              <p>{service.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function App() {
  useEffect(() => initReveals(), []);

  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Process />
        <Showcase />
        <Services />
        <Stack />
        <Projects />
        <Contact />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
