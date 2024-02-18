/**
 * <div id = "parent">
 * <div id = "child">
 * <h1> I am h1 tag </h1>
 * <h2> I am h2 tag </h2>
 * </div>
 * </div>
 * 
 */

const parentDiv = React.createElement("div",{id : "parent"},
                        React.createElement("div",{id : "child"},
                        [React.createElement("h1",{},"I am h1 tag"),React.createElement("h2",{},"I am h2 tag")]));


const heading = React.createElement("h1",{id : "heading"},"Hello World from React");//{} is the attributes that we want to give to the html tag
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parentDiv);

console.log(parentDiv); // heading is a javascript object which is also called as react element
// any attributes we add or any content we add in between tags i.e the third parameter in createElement method is added as a
//props property inside javascript object




