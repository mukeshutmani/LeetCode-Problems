let chunk = function(arr, size) {
     let chunked = []
     let chunk = []
     

     for(let i = 0; i<arr.length; i++) {
         chunk.push(arr[i])
        
        if(chunk.length === size || i === arr.length-1) {
            chunked.push(chunk)
            chunk = []
        }   
       
     }
     return chunked
}
