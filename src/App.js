import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-blue/theme.css";  // theme
import "primereact/resources/primereact.min.css";               // core
import "primeicons/primeicons.css";                             // icons

//primereact
import "primereact/resources/themes/lara-dark-teal/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import React from "react";
import Home from "./views/Home";

const App = () => {
  return (
    <PrimeReactProvider>
      <Home/>
    </PrimeReactProvider>
  );
};

export default App;
