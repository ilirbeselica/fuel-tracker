import React from "react";
import SingleItem from "./SingleItem";
import DerivateStats from "./DerivateStats";

const RaporteDerivate = (props) => {
  const sorted = props.items.sort((a, b) => {
    const data1 = new Date(a.data);
    const data2 = new Date(b.data);
    return data1 - data2;
  });
  return (
    <div className="container">
      <table className="table table-dark table-striped">
        <thead>
          <tr className="table table-primary">
            <th scope="col">#</th>
            <th scope="col">Data</th>
            <th scope="col">Tabela</th>
            <th scope="col">Pompa</th>
            <th scope="col">Personi</th>
            <th scope="col">Litra</th>
            <th scope="col">Kilometra</th>
            <th scope="col">Totali</th>
            <th scope="col">Check</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {sorted.map((item, index) => {
            return <SingleItem item={item} nr={index + 1} />;
          })}
        </tbody>
      </table>
      <DerivateStats items={sorted} />
    </div>
  );
};

export default RaporteDerivate;
