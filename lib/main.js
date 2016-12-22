const DOMNodeCollection = require("./dom_node_collection.js");

window.$l = arg => {
  if (typeof(arg) === "string") {
    let node = document.querySelectorAll(arg);
    let nodeArray = Array.from(node);
    return new DOMNodeCollection (nodeArray);
  }
  else if (arg instanceof HTMLElement) {
    return DOMNodeCollection.new([arg]);
  }
};
