var reduce = function(nums, fn, init) {
    
    let result;
    if(nums.length===0) return init
    nums.forEach((curr, index) => {
            result = fn(init, curr, index)
            init = result
    })
    return result
};
