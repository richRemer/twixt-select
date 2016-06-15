twixt-select Function
=====================

```js
var select = require("twixt-select");

select(".hidden", function(elem) {
    select(".collapsed", elem, function(child) {
        child.classList.remove("collapsed");
    });
    
    elem.classList.remove("hidden");
});
```

