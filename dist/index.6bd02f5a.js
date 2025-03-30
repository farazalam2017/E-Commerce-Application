/*   const heading = document.createElement("h3");
      heading.innerHTML = "Hello World";
      const divElement = document.getElementById("root");
      divElement.appendChild(heading); */ const heading1 = React.createElement("h2", {
    id: "title1"
}, "Hello 1");
const heading2 = React.createElement("h2", {
    id: "title2"
}, "Hello 2");
const parent = React.createElement("div", {
    id: "container"
}, [
    heading1,
    heading2
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//# sourceMappingURL=index.6bd02f5a.js.map
