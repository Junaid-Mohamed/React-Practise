
import React from "react";
import ReactDOM from "react-dom"

const Title = () =>(
<h1 className="head" >React using JSX</h1>
);


// ?React Element


// React Functional Component

const HeadingComponent = () => <h1 className="heading" >React Functional Component</h1>

const root = ReactDOM.createRoot(document.getElementById("root"));

// this only react elements can be rendered.
// root.render(heading);

// for functional component you render like thhis
root.render(<HeadingComponent/>)