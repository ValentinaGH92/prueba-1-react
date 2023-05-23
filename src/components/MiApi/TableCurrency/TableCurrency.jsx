import { Table } from "react-bootstrap";
import { useEffect } from "react";
import { getCurrencyForIndicator } from "../../../services/currencyService";

const TableCurrencyForIndicator = (props) => {
  const { currentCurrency, currencyData, setCurrencyData } = props;

  useEffect(() => {
    const getCurrencyData = async () => {
      const response = await getCurrencyForIndicator(currentCurrency);

      setCurrencyData(response);
    };

    getCurrencyData();
  }, [currentCurrency]);

  return (
    <>
      <h1>{currentCurrency}</h1>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {currencyData?.serie?.map((serie) => {
            return (
              <tr>
                <td>{serie.fecha}</td>
                <td>{serie.valor}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default TableCurrencyForIndicator;
