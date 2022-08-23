import React, { createContext } from "react";

export const UserContext = createContext();

export default function UserStore(props) {
  const user = {
    name: "jumin",
    job: "FE-developer",
  };
  return <UserContext.Provider value={user}>{props.children}</UserContext.Provider>;
}
