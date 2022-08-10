import React from "react";

export default function ProductsTable(props) {
  // console.log(props.category);
  // console.log(props.items);

  return (
    <>
      <tr>
        <td>{props.category}</td>
      </tr>
      {props.items.map((item) => (
        <tr key={item.name}>
          <td>{item.name}</td>
          <td>{item.price}</td>
        </tr>
      ))}
    </>
  );
}
