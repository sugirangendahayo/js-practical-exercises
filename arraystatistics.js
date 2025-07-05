const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// This function calculates the sum, average, min, and max of an array of numbers
// It returns an object containing these statistics

function calculateStatistics(array) {
    const sum = array.reduce((acc, val) => acc + val, 0);
    const average = sum / array.length;
    const min = Math.min(...array);
    const max = Math.max(...array);

    return {
        sum: sum,
        average: average,
        min: min,
        max: max
    };
}

const statistics = calculateStatistics(myArray);
console.log(statistics);