import React from "react";
import ProductsTable from "./ProductsTable";

export default function ProductTable(props) {
  let { products, filter } = props;
  console.log(filter);

  // const inStockProducts = products.filter((p) => p.stocked === true);
  // console.log(inStockProducts);
  // products = filter.inStockOnly === true ? inStockProducts : products;

  const targetProducts = products.filter((p) => p.name.toLowerCase().includes(filter.text.toLowerCase()));
  const filteredProducts = targetProducts.length > 0 ? targetProducts : products;
  console.log(filteredProducts);

  const result = filteredProducts.reduce((acc, cur) => {
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
        <tr style={{ fontWeight: "bold" }}>
          <td>Name</td>
          <td>Price</td>
        </tr>
      </thead>
      <tbody>
        {keys.map((key, idx) => (
          <ProductsTable category={key} items={result[key]} key={idx} filter={filter} />
        ))}
      </tbody>
    </table>
  );
}
