import Header from "./components/header";
import About from "./components/aboutus";
import Experience from "./components/Experience";
import Footer from "./components/footes";
import Services from "./components/serices";
import "./index.css";
import ContactInfo from "./components/contact";
import { useRef, useState } from "react";

function App() {
  const contactRef = useRef(null); // Create a ref for ContactInfo
  const [isAnimated, setIsAnimated] = useState(false); // State to control animation

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({
        behavior: "smooth", // Smooth scroll animation
        block: "start", // Align to the top of the viewport
      });
      setTimeout(() => {
        setIsAnimated(true); // Trigger animation
      }, 500); // Delay of 0.5 seconds

      // Remove the animation after a brief period
      setTimeout(() => {
        setIsAnimated(false); // Remove animation
      }, 1500); // Adjust this duration as needed (1 second after the animation starts)
    }
  };

  return (
    <div className="App">
      <Header scrollToContact={scrollToContact} />
      <div className="container">
        <About />
        <Services></Services>
        <Experience />
      </div>
      <ContactInfo ref={contactRef} isAnimated={isAnimated} />
      <Footer />
    </div>
  );
}

export default App;
