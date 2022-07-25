import React from "react";
import logo from "../logo.svg";

const Header = (props) => {
  // props: object

  const name = "jumin";

  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload. HOHO!
      </p>
      {props.title}
      <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        {name === "jumin" ? `Hello jumin Welcome Back!!` : `Hello ${name}! Learn React!`}
      </a>
      <input type="checkbox" name="agreement" id="chkbox"></input>
      <label htmlFor="chkbox">동의</label>
    </header>
  );
};

export default Header;
