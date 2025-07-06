// Function to return the squares of odd numbers from the input array
function oddSquares(arr) {
  return arr
    .filter((num) => num % 2 !== 0) // Step 1: keep only odd numbers
    .map((num) => num * num); // Step 2: square each odd number
}

// Test cases
console.log(oddSquares([1, 2, 3, 4, 5, 6])); // ➜ [1, 9, 25]
console.log(oddSquares([10, 15, 20, 25, 30])); // ➜ [225, 625]
console.log(oddSquares([2, 4, 6, 8])); // ➜ []
console.log(oddSquares([1, 3, 5])); // ➜ [1, 9, 25]
