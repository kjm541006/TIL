import React from "react";

export default function SearchBar(props) {
  let { text, inStockOnly } = props.filter;

  function handleText(e) {
    props.updateFilter(e.target.name, e.target.value);
  }

  function handleInStockOnly(e) {
    props.updateFilter(e.target.name, e.target.checked);
  }

  return (
    <div>
      <input type="text" placeholder="Search..." name={"text"} value={text} onChange={handleText} />
      <div>
        <input type="checkbox" name="inStockOnly" id="stockCheck" checked={inStockOnly} onChange={handleInStockOnly} />
        <label htmlFor="stockCheck">Only show products in stock</label>
      </div>
    </div>
  );
}
