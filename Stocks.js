import React from "react";
//import "./App1.css";
import { stockData } from "./data";

export const Stocks = () => {
  return (
    <>
      <HomePageHeader />
      <div className="stock-container">
        {stockData.map((data, key) => {
          return (
            <div key={key}>
              <Stock
                key={key}
                type={data.type}
                name={data.name}
                area={data.area}
                phone={data.phone}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

const HomePageHeader = () => {
  return (
    <header className="header">
      <h2>Machine Tracker</h2>
    </header>
  );
};


const Stock = ({ type, name, area, phone }) => {
  if (!type) return <div />;
  return (
    <table>
      <tbody>
        <tr>
          <td>
            <h5>{type}</h5>
          </td>
          <td>
            <h5>{name}</h5>
          </td>
          <td>
            <h4>{area}</h4>
          </td>
          <td>
            <p>{phone}</p>
          </td>
        </tr>
      </tbody>
    </table>
  );
};