// Add your functions here
function map(array, callback) {
    const r = [];
  
    for (let i = 0; i < array.length; i++) {
      const theElement = array[i];
      r.push(callback(theElement));
    }
  
    return r;
  }

  function reduce(array, callback, start){
    let value = 0;
    if (start){
        value = start
        for (let i = 0; i < array.length; i++) {
            value = callback(array[i], value)
        }
        return value
    } else {
        value = array[0]
        for (let i = 1; i < array.length; i++) {
            value = callback(array[i], value);
    }
    return value
  }
}