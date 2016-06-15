/**
 * Return selected elements or iterate and apply a function.
 * @param {string} selector
 * @param {Document|Element} [context]
 * @param {function} [fn]
 * @returns {Node[]}
 */
function select(selector, context, fn) {
    var nodes;
    
    if (arguments.length === 2 && typeof context === "function") {
        fn = context;
        context = undefined;
    }
    
    nodes = (context || document).querySelector(selector);
    nodes = Array.prototype.slice.call(nodes);
    
    if (fn) nodes.forEach(fn);
    else return nodes;
}

module.exports = select;

