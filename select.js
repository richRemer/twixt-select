/**
 * Create function composition which passes each selected element to a base
 * function.
 * @param {function} impl
 * @returns {function}
 */
function into(impl) {
    /**
     * @param {string} selector
     * @param {Docunent|Element} [context]
     */
    return function(selector, context) {
        var callContext = this,
            extra;

        if (typeof selector === "string" && context && context.querySelector) {
            extra = Array.prototype.slice(arguments, 2);

            select(selector, context, function(elem) {
                impl.apply(callContext, [elem].concat(extra));
            });
        }
    };
}

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
module.exports.into = into;
