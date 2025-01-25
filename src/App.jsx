import React, { useRef } from "react";
import "./App.css";
import Header from "./components/Header";
import ProblemHighlight from "./components/ProblemHighlight";
import Solution from "./components/Solution";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

const App = () => {
  const contactRef = useRef(null);
  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <Navbar />
      <Header onDiscoverMore={scrollToContact} />
      <ProblemHighlight />
      <Solution />
      <AboutUs />
      <div ref={contactRef}>
        <Contact />
      </div>
      <FAQ />
      <Footer />
    </>
  );
};

export default App;
