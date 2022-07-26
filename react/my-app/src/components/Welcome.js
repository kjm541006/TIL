import React from "react";
import sky from "../images/sky.jpeg";

export default function Welcome(props) {
  // image + Hello, firstName, lastName
  return (
    <>
      {props.withImg && <img src={sky} alt="sky" height="200" />}
      <div>
        <p>Hello {props.name}!!</p>
      </div>
      <div>
        <span>{props.firstName} </span>
        {props.lastName}
      </div>
    </>
  );
}
