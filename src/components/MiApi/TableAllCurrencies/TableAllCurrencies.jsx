import { Table } from "react-bootstrap";
import currencyTypes from "../../../data/currencyTypes.json";
import { getCurrencies } from "../../../services/currencyService";
import { useEffect, useState } from "react";

const TableAllCurrencies = (props) => {
  const { currencyData, setCurrencyData, indicatorTypes } = props;

  useEffect(() => {
    const getAllCurrencies = async () => {
      const response = await getCurrencies();

      setCurrencyData(response);
    };

    getAllCurrencies();
  }, []);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Divisa</th>
          <th>Unida de medida</th>
          <th>Fecha</th>
          <th>Valor</th>
        </tr>
      </thead>
      <tbody>
        {indicatorTypes.sort().map((currencyType) => {
          const currencyDataForIndicatior = currencyData[currencyType];

          return (
            <tr>
              <td>{currencyDataForIndicatior?.codigo}</td>
              <td>{currencyDataForIndicatior?.unidad_medida}</td>
              <td>{currencyDataForIndicatior?.fecha}</td>
              <td>{currencyDataForIndicatior?.valor}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default TableAllCurrencies;
