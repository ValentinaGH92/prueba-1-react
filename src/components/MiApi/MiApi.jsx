import { useState } from "react";
import currencyTypes from "../../data/currencyTypes.json";
import SelectCurrency from "./Select/Select";
import TableAllCurrencies from "./TableAllCurrencies/TableAllCurrencies";
import TableCurrencyForIndicator from "./TableCurrency/TableCurrency";

function TableCurrency({
  currencyData,
  setCurrencyData,
  indicatorTypes,
  setIndicatorTypes,
}) {
  const [currentCurrency, setCurrentCurrency] = useState("");
  // const [currencyData, setCurrencyData] = useState({});
  const existCurrencySelected = currencyTypes.includes(currentCurrency);

  return (
    <>
      <SelectCurrency setCurrentCurrency={setCurrentCurrency} />

      {existCurrencySelected ? (
        <TableCurrencyForIndicator
          currentCurrency={currentCurrency}
          currencyData={currencyData}
          setCurrencyData={setCurrencyData}
        />
      ) : (
        <TableAllCurrencies
          currencyData={currencyData}
          setCurrencyData={setCurrencyData}
          indicatorTypes={indicatorTypes}
        />
      )}
    </>
  );
}

export default TableCurrency;
