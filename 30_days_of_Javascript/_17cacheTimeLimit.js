function TimeLimitedCache() {
     this.store = new Map()
}


TimeLimitedCache.prototype.set = function(key, value, duration) {
     const now = Date.now()
    
     console.log("setNow", now);
     
     const expirationTime = now+duration;
     console.log("key expirationTime", expirationTime);
     
    
     const exists = this.store.has(key) && this.store.get(key).expireAt > now;
     console.log("exists", exists);
     
    const here = this.store.set(key, {value, expireAt: expirationTime})
    console.log(here);
    
   
     setTimeout(() => {
        const current = this.store.get(key);
        if(current && current.expireAt === expirationTime) {
          const value = this.store.delete(key)
          //  console.log("setTimeout", expirationTime , " ", current.expireAt);
          
        }

     }, duration)

     return exists;
}


TimeLimitedCache.prototype.get = function(key) {

  const now = Date.now()
  console.log("Now", now);
  
  const entry = this.store.get(key)

  console.log(entry);
  
  if(entry && entry.expireAt > now) {
        return entry.value
  } else {
    this.store.delete(key)
    return -1
  }
}


TimeLimitedCache.prototype.count = function() {
  const now = Date.now()
  console.log("count Now", now);
  
  let count = 0;

  for (const [key, entry] of this.store) {
    if (entry.expireAt > now) {
        count++;
    } else {
       this.store.delete(key); // Clean up expired entries
    }
  }
  
  return count;
}
