
// creating nested element.
/**
 * <div id="parent">
 *  <div id="child1">
 *      <h1>This is h1 tag inside child div</h1>
 *      <h2>This is h2 tag inside child div and syblling of h1 of child 1</h2>
 *  </div>
 * <div id="child2">
 *      <h1>This is h1 tag inside child2 div</h1>
 *      <h2>This is h2 tag inside child2 div and syblling of h1 of child 2</h2>
 *  </div>
 * </div>
 * 
 * 
 * 
 * 
 * 
 */

const parent = React.createElement("div",{id:"parent"},[React.createElement("div",{id:"child1"},
[React.createElement("h1",{},"This is h1 tag inside child1 div"),React.createElement("h2",{},"This is h2 tag inside child div and syblling of h1 of child 1")]),React.createElement("div",{id:"child2"},
[React.createElement("h1",{},"This is h1 tag inside child2 div"),React.createElement("h2",{},"This is h2 tag inside child div and syblling of h1 of child 2")])]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
// {} this object is to define attributes of that tag.

console.log(parent); // this is the React object, the render method is responsible to 
// convert the React object into the h1 tag.