import React, { useContext } from "react";
import { UserContext } from "../store/user";
import Navigator from "./Navigator";

export default function BlogPage() {
  const { dispatch } = useContext(UserContext);
  console.log(user);
  console.log(dispatch);
  return (
    <div>
      <h1>BlogPage</h1>
      <Navigator />
      <button onClick={() => dispatch({ type: "changeJob", text: "BE-developer" })}>
        Change Job
      </button>
    </div>
  );
}
