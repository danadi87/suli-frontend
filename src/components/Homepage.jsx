import "../styles/Homepage.css";
import CustomCursor from "./CustomCursor";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Membership from "./Membership";
import Consultation from "./Consultation";
import Contact from "./Contact";

export default function Homepage() {
  return (
    <div className="homepage">
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Membership />
      <Consultation />
      <Contact />
    </div>
  );
}
