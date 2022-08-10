import React from "react";

export default function ProductsTable(props) {
  // console.log(props.category);
  // console.log(props.items);
  console.log(props.filter);
  const filteredItems = props.filter.inStockOnly === true ? props.items.filter((item) => item.stocked) : props.items;

  return (
    <>
      <tr>
        <td>{props.category}</td>
      </tr>
      {filteredItems.map((item) => (
        <tr key={item.name}>
          <td style={{ color: item.stocked === true ? "black" : "red" }}>{item.name}</td>
          <td>{item.price}</td>
        </tr>
      ))}
    </>
  );
}
