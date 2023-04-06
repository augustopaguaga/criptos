import React from "react";

function CoinRows({ coin, index }) {
  return (
    <tr key={coin.name}>
      <td>{index}</td>
      <td>
        <img
          src={coin.image}
          alt="imagen de coin"
          style={{ width: "3%" }}
          className="img-fluid me-4"
        />
        <span>{coin.name} </span>
        <span className="ms-3 text-muted text-uppercase">{coin.symbol} </span>
      </td>

      <td>{coin.total_volume}</td>
      <td>{coin.total_volume}</td>
      <td>{coin.total_volume}</td>
    </tr>
  );
}

export default CoinRows;
