Array.prototype.groupBy = function(fn) {
      let grouped = { }
      
      this.forEach((element) => {
        
          let key = fn(element)
          
          if(!grouped[key]){
             grouped[key] = []
          }
          grouped[key].push(element)

      })
      return grouped

}
