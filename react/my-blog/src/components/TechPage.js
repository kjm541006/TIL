import React from "react";
import { Outlet, Link } from "react-router-dom";
import Navigator from "./Navigator";

export default function TechPage() {
  return (
    <div>
      <h1>TechPage</h1>
      <Navigator />
      <Link to="/tech/react">React</Link> | <Link to="/tech/javascript">Javascript</Link>
      <Outlet />
    </div>
  );
}
