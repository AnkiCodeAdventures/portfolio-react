import "./App.css";
import Hero from "./containers/Hero/Hero";
import Divider from "./components/Divider/Divider";
import ContactMe from "./containers/ContactMe/ContactMe";
import Footer from "./containers/Footer/Footer";

function App() {
  return (
    <>
      <div>
        <Hero />
        <Divider />
        <ContactMe />
        <Divider />
        <Footer />
      </div>
    </>
  );
}

export default App;
