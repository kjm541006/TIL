import React from "react";
import ReactDOM from "react-dom";
import FollowButton from "./components/FollowButton";

const domContainer = document.querySelector("#root");
ReactDOM.render(<FollowButton />, domContainer);

// // import React from "react";
// import { createRoot } from "react-dom/client";
// import FollowButton from "./components/FollowButton";

// const container = document.querySelector("#root");
// const root = createRoot(container);
// root.render(FollowButton());
