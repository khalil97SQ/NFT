import "./App.css";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import Partner from "./Components/Partners/Partner";
import Products from "./Components/Products/Products";
import Slider from "./Components/Slider/Slider";
import Team from "./Components/Team/Team";
import Work from "./Components/Work/Work";

function App() {
  return (
    <>
      <Nav />
      <Header />
      <Slider />
      <About />
      <Products />
      <Work />
      <Team />
      <Partner />
      <Slider />
      <Footer />
    </>
  );
}

export default App;
