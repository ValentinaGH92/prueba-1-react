import Form from "react-bootstrap/Form";
import currencyTypes from "../../../data/currencyTypes.json";

function SelectCurrency({ setCurrentCurrency, setReverse }) {
  const handlerCurrencyChange = (event) => {
    const valueCurrency = event.target.value;

    setCurrentCurrency(valueCurrency);
  };

  return (
    <div style={{ padding: "20px", paddingLeft: "50px", paddingRight: "50px" }}>
      <Form.Select
        aria-label="Default select example"
        onChange={handlerCurrencyChange}
      >
        <option>Selecciona una divisa</option>
        {currencyTypes.map((currencyType) => (
          <option value={currencyType}>{currencyType}</option>
        ))}
      </Form.Select>
    </div>
  );
}

export default SelectCurrency;
