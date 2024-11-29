var debounce = function(fn, t) {
    let canceltimer;
    return function(...args) {
       clearTimeout(canceltimer)
       canceltimer =  setTimeout(() => {
            fn(...args)
        },t)
    }
};
