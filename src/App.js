import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Landing from "./components/landing-page/landing";
import Card from "./components/our-strength/card";
import Vigor from "./components/vigor/vigor";
import Backgrdcard from "./components/backgrd-card/backgrdcard";
import Vivid from "./components/vivid/vivid";
import Backgrdcard1 from "./sub components/BACKGRD CARD1/backgrdcard1";
import Contact from "./components/contact-us/contact";
import Aboutus from "./components/about-us/about";
import Cap from "./components/capabilities/cap";
import Product from "./components/product-page/product";
import Market from "./components/market-page/market";

function App() {
  return (
    <>
      <Navbar />

      <Router>
        <Routes>
          <Route
            path="/"
            element={
          <>
                <Landing />
                <Card />
                <Vigor />
                <Backgrdcard />
                <Vivid />
                <Backgrdcard1 />
                <Contact />
              </>
            }
          />

          <Route path="/about" element={<Aboutus />} />
          <Route path="/cap" element={<Cap/>} />
          <Route path="/product" element={<Product/>} />
          <Route path="/market" element={<Market/>} />



        </Routes>
      </Router>
    </>
  );
}

export default App;
