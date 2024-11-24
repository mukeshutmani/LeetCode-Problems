var createCounter = function(init) {
   let original = init
    return {
        increment: function () {
              return  ++init;
        },
        reset: function () {
          init = original
           return init
        },
        decrement: function () {
             return --init;
        },
    }

};
