function* fibonacciCount(count) {
  let current = 0;
  let next = 1;
  let counter = 0;
  while (counter < count) {
    yield current;
    [current, next] = [next, next + current];
    counter++;
  }
}

function* fibonacciMax(maxNum) {
  let current = 0;
  let next = 1;
  while (current <= maxNum) {
    yield current;
    [current, next] = [next, next + current];
  }
}

// Test cases
const sequence = fibonacciCount(6); // Get the generator
for (const num of sequence) {
  console.log(num); // Display first 6 elements of Fibonacci series
}

const sequence2 = fibonacciMax(13); // Get the generator
for (const num of sequence2) {
  console.log(num); // Display Fibonacci series up to 13
}
