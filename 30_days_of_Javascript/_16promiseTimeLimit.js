function timeLimit(fn, t) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      
      const timer = setTimeout(() => {
        reject("Time Limit Exceeded");
      }, t);

      
      Promise.resolve(fn(...args))
        .then(result => {
          clearTimeout(timer); 
          resolve(result);
        })
        .catch(error => {
          clearTimeout(timer); 
          reject(error);
        });
    });
  };
}
