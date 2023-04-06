import React from "react";
import CoinRows from "./coinrows";

const titles = ["#", "Coin", "Price", "Price Change", "Price Volume"];

const TableCoins = ({ coins, search }) => {
  const filteredcoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase()) |
      coin.symbol.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <table className="table table-dark mt-4 table-hover">
        <thead>
          <tr>
            {titles.map((title, index) => (
              <td key={index}>{title}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredcoins.map((coin, index) => (
            <CoinRows coin={coin} key={index} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableCoins;
