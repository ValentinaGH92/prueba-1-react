import { useState } from "react";
import NavbarApi from "./components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import MiApi from "./components/MiApi/MiApi";
import currencyTypes from "./data/currencyTypes.json";

function App() {
  const [currencyData, setCurrencyData] = useState({});
  const [indicatorTypes, setIndicatorTypes] = useState(currencyTypes);

  return (
    <>
      <NavbarApi
        currencyData={currencyData}
        setCurrencyData={setCurrencyData}
        indicatorTypes={indicatorTypes}
        setIndicatorTypes={setIndicatorTypes}
      />
      <MiApi
        currencyData={currencyData}
        setCurrencyData={setCurrencyData}
        indicatorTypes={indicatorTypes}
      />
    </>
  );
}

export default App;
