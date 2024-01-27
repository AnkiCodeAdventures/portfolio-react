import "../App.css";
import Hero from "../containers/Hero/Hero";
import Divider from "../components/Divider/Divider";
import ContactMe from "../containers/ContactMe/ContactMe";
import Footer from "../containers/Footer/Footer";
import Projects from "../containers/Projects/Projects";
import Nav from "../components/Nav/Nav";

function Root() {
  return (
    <>
      <div>
        <Nav />
        <Hero />
        <Divider />
        <Projects />
        <Divider />
        <ContactMe />
        <Divider />
        <Footer />
      </div>
    </>
  );
}

export default Root;
