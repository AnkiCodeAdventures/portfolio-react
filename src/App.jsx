import "./App.css";
import ContactMe from "./containers/Hero/ContactMe/ContactMe";
import Hero from "./containers/Hero/Hero";
import Divider from "./components/Divider/Divider";

function App() {
  return (
    <>
      <div>
        <Hero />
        <Divider />
        <ContactMe />
        <Divider />
      </div>
    </>
  );
}

export default App;
