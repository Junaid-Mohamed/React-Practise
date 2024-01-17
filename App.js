const heading = React.createElement("h1",{id:"heading"},`Hi World from React App`);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
// {} this object is to define attributes of that tag.

console.log(heading); // this is the React object, the render method is responsible to 
// convert the React object into the h1 tag.