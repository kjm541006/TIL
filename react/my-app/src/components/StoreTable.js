import React from "react";
import ProductsTable from "./ProductsTable";

export default function ProductTable(props) {
  const { products } = props;

  const result = products.reduce((acc, cur) => {
    if (acc.hasOwnProperty(cur.category)) {
      return {
        ...acc,
        [cur.category]: [...acc[cur.category], cur],
      };
    } else {
      return {
        ...acc,
        [cur.category]: [cur],
      };
    }
  }, {});

  const keys = Object.keys(result);

  return (
    <table>
      <thead>
        <tr>
          <td>Name</td>
          <td>Price</td>
        </tr>
      </thead>
      <tbody>
        {keys.map((key, idx) => (
          <ProductsTable category={key} items={result[key]} key={idx} />
        ))}
      </tbody>
    </table>
  );
}
