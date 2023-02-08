// import "./index.css"
import react from "react";
import reactDOM from "react-dom";

const el = react.createElement(
    "h1",
    {className:"Blue"},
    "Hello Pooja"
)

reactDOM.render(
    el,
    document.getElementById("root")
)

