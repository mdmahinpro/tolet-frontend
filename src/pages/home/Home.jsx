import Hero from "../../components/Hero";
import ToletList from "../../components/home/ToletList";
import AboutUs from "../about-us/AboutUs";
import Contact from "../contact/Contact";
import Features from "../features/Features";

function Home() {
  return (
    <div>
      <Hero />
      <ToletList />
      <Features />
      <AboutUs />
      <Contact />
    </div>
  );
}

export default Home;
