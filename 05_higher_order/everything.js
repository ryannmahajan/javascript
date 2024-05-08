/* Arrays also have an every method analogous to the some method. This method returns true when the given function returns true for every element in the array. In a way, some is a version of the || operator that acts on arrays, and every is like the && operator.

Implement every as a function that takes an array and a predicate function as parameters. Write two versions, one using a loop and one using the some method. */

// function every(array, test) {
//   for (a of array) {
//     if (!test(a)) return false
//   }
//   return true
// }

function every(array, test) {
    let test_inv = function(a) {
        return !test(a)
    }
    return !array.some(test_inv)
    // a && b equals !(!a || !b)
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true