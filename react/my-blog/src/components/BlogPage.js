import React, { useContext } from "react";
import { UserContext } from "../store/user";
import Navigator from "./Navigator";

export default function BlogPage() {
  const value = useContext(UserContext);
  console.log(value);
  return (
    <div>
      <h1>BlogPage</h1>
      <Navigator />
    </div>
  );
}
