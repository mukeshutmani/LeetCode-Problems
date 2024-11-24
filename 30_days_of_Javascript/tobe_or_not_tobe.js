var expect = function(val) {
   return {
        toBe: function (num) {
            if (val === num ) return true;
            throw new Error("Not Equal")
        },

        notToBe: function (val2) {
            if(val !== val2 )  return true
            throw new Error ("Equal")
        }  

    }
};
