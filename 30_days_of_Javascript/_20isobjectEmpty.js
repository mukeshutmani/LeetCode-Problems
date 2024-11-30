let isEmpty = function(obj) {
    if(Array.isArray(obj)) {
       console.log("Array");
       return obj.length === 0 ? true : false
    }
   return Object.keys(obj).length === 0 ? true : false ;
};
