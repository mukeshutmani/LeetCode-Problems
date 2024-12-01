let sortBy = function (arr, fn) {
    const pairs = arr.map((element) => [element, fn(element)]);
    pairs.sort((a, b) => a[1] - b[1]);
    return pairs.map((pair) => pair[0]);
};
