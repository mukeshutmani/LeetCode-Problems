let cancellable = function (fn, args, t) {
    fn(...args);  
    const intervalId = setInterval(() => {
        fn(...args);
    }, t);

    const cancelFn = () => {
        clearInterval(intervalId);    
    };
    return cancelFn;
};
