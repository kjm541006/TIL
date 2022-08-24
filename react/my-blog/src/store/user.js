import React, { createContext, useReducer } from "react";

export const UserContext = createContext();

const initialUser = {
  name: "jumin",
  job: "FE-developer",
};

const UserReducer = (state, action) => {
  switch (action.type) {
    case "changeJob":
      return { ...state, job: action.text };

    default:
      break;
  }
};

export default function UserStore(props) {
  const [user, dispatch] = useReducer(UserReducer, initialUser);
  console.log(user);

  return <UserContext.Provider value={{ user, dispatch }}>{props.children}</UserContext.Provider>;
}
