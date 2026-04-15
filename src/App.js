import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/bootstrap4-dark-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import React from "react";
import Home from "./views/Home/Home";
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Schedule from "./views/Schedule/Schedule";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <PrimeReactProvider>
      <BrowserRouter>
        <Header />
        <div style={{ paddingTop: "10vh" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/programacao" element={<Schedule />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </PrimeReactProvider>
  );
};

export default App;
