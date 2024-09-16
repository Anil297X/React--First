// import React from "react";
// import ReactDOM from "react-dom";

const parent = React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child"},[
        React.createElement("h1",{},"I am an H1 Tag"),
        React.createElement("h2",{},"I am an H2 Tag"),
    ]),
    React.createElement("div",{id:"child2"},[
        React.createElement("h1",{},"I am an H1 Tag"),
        React.createElement("h2",{},"I am an H2 Tag"),
    ]),
]);

//JSX

console.log(parent); //object

const root = ReactDOM.createRoot(document.getElementById("header"));

root.render(parent);