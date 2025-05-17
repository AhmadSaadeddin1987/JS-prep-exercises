"use strict";

function runExperiment(sampleSize) {
  const valueCounts = [0, 0, 0, 0, 0, 0]; // index 0 → value 1, index 1 → value 2, ...

  // Roll the die sampleSize times
  for (let i = 0; i < sampleSize; i++) {
    const roll = Math.floor(Math.random() * 6) + 1; // Random integer from 1 to 6
    valueCounts[roll - 1] += 1; // Increment the corresponding index
  }

  const results = [];

  // Calculate percentages
  for (const count of valueCounts) {
    const percentage = (count / sampleSize) * 100;
    results.push(percentage.toFixed(2)); // Convert to string with 2 decimals
  }

  return results;
}

function main() {
  const sampleSizes = [100, 1000, 1000000];

  for (const size of sampleSizes) {
    const result = runExperiment(size);
    console.log(result, size);
  }
}

main();
/*
the output of the program is:
[ '14.00', '17.00', '15.00', '18.00', '16.00', '20.00' ] 100
[ '16.40', '17.00', '16.70', '16.00', '17.10', '16.80' ] 1000
[ '16.65', '16.67', '16.68', '16.66', '16.69', '16.65' ] 1000000
*/