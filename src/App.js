import Header from "./components/Header";
import NavBar from "./components/NavBar";
import "./input.css";
import { motion as m } from "framer-motion";
import Home from "./pages/Home";
import About from "./pages/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Footer from "./components/Footer";
import Transport from "./pages/Transport";
import Contact from "./pages/Contact";
import ManyTrucks from "./pages/ManyTrucks";

function App() {
  let Links = [
    { name: "Pocetna", link: "/" },
    { name: "O nama", link: "/About" },
    { name: "Transport", link: "/Transport" },
    { name: "Vozni park", link: "/ManyTrucks" },
    { name: "Kontakt", link: "/Contact" },
  ];
  const [linksNavBar, setLinksNavar] = useState(Links);
  return (
    <m.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <BrowserRouter>
        <Header />
        <NavBar props={linksNavBar} />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route exact path="/About" element={<About />} />
        </Routes>
        <Routes>
          <Route exact path="/Transport" element={<Transport />} />
        </Routes>
        <Routes>
          <Route exact path="/ManyTrucks" element={<ManyTrucks />} />
        </Routes>
        <Routes>
          <Route exact path="/Contact" element={<Contact />} />
        </Routes>
        <Footer props={linksNavBar} />
      </BrowserRouter>
    </m.div>
  );
}

export default App;
