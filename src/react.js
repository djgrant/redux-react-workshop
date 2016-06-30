/*
 * This one's a little tricky so make sure you go through the readme first
 * If you've already done that, welcome to the challenge...
 *
 * We'll be writing some functions that
 * - generate a virtual DOM tree
 * - convert the virtual DOM tree into a real DOM tree
 * - render the virtual DOM into the browser document
 */

var React = {};

/*
 * React.createElement()
 * Creates a virtual DOM element
 * This is the building block for forming a virtual tree
 *
 * @param {string} text element
 * OR
 * @param {string} type of node e.g. div
 * @param {object} props of the node e.g. { className: '' }
 * @param {array}  children of the node (result of calling createElement on each item)
 *
 * @return {object} virtual dom element
 */

React.createElement = function (type, props, children) {
  children = _.flatten(children); // edge case
  return {};
};


/*
 * React.convertToDOMTree()
 * Converts the virutal DOM tree into a real DOM tree
 *
 * @param {string} text element
 * OR
 * @param {object} virtual DOM element/tree
 *
 * @return {node}  DOM element/tree
 */

// Helpers
var createNode = type => document.createElement(type);
var createTextNode = text => document.createTextNode(text);
var insertInNode = (node, child) => node.appendChild(child);

React.convertToDOMTree = function (tree) {
  if (typeof tree === 'string') {
    return createTextNode(tree);
  }
};


/*
 * React.render()
 * Render the a virtual tree into a DOM element
 *
 * @param {node} the DOM node to render the tree into
 * @param {object} the virtual DOM tree
 */

React.render = function (node, tree) {
};
