let compose = function(functions) {
    if(functions.length === 0) {
        return x=> x
    }
    
    return function(x) {
        let result = x
        functions.reverse().map( (fun) => {
             result = fun(result)
        })

        return result
    }
};
