import React from "react";

const DerivateStats = (props) => {
  const totalLitra = props.items.reduce((a, b) => {
    return a + b.litra;
  }, 0);

  const totalEuro = props.items.reduce((a, b) => {
    return a + b.totali;
  }, 0);
  const mesatarja = () => {
    const litra = totalLitra - props.items[0].litra;
    const kilometrat =
      props.items[props.items.length - 1].kilometra - props.items[0].kilometra;
    return (litra / kilometrat) * 100;
  };
  mesatarja();

  return (
    <div className="container" style={{ width: "400px" }}>
      <ul className="list-group">
        <li className="list-group-item">
          Total Shpenzime: <strong>{totalEuro.toFixed(2)} €</strong>
        </li>
        <li class="list-group-item">
          Total Litra: <strong>{totalLitra.toFixed(2)} Litra</strong>
        </li>
        <li class="list-group-item">
          Shpenzimet Mesatare per 100km:{" "}
          <strong>{mesatarja().toFixed(2)} Litra</strong>
        </li>
      </ul>
    </div>
  );
};

export default DerivateStats;
