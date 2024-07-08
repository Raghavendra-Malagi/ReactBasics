import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement("h2", { id: "h2" }, "React Rendered h2");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
