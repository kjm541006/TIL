import React from "react";
import styled from "styled-components";
import * as S from "./ProductsTable.style";

export default function ProductsTable(props) {
  // console.log(props.category);
  // console.log(props.items);
  console.log(props.filter);
  const filteredItems = props.filter.inStockOnly === true ? props.items.filter((item) => item.stocked) : props.items;

  return (
    <>
      <tr>
        <S.Category>{props.category}</S.Category>
      </tr>
      {filteredItems.map((item) => (
        <tr key={item.name}>
          <ProductName stocked={item.stocked}>{item.name}</ProductName>
          <td>{item.price}</td>
        </tr>
      ))}
    </>
  );
}

const ProductName = styled.td`
  color: ${(props) => (props.stocked === true ? "black" : "red")};
`;
