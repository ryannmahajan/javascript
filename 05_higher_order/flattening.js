let arrays = [[1, 2, 3], [4, 5], [6]];
let a =(arrays.reduce((a,b)=>a.concat(b)))
console.log(a)
// Your code here.
// → [1, 2, 3, 4, 5, 6]

/*Use the reduce method in combination with the concat method to “flatten” an array of arrays into a single array that has all the elements of the original arrays. */