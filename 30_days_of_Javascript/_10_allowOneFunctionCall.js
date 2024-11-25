let once = function(fn) {
    let called = true
    let res;
    return function(...args){
      return called ? ( called = false, res = fn(...args), res ) : undefined;
    }
};
