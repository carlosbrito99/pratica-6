let array1 = [ 2,4,24,36,50,12];
let total = array1.reduce((total,  currentElement) => total + currentElement/6);
console.log (total);