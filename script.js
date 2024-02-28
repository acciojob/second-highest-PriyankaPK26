const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
    const result = [];
    let chunk = [];
    let currentSum = 0;

    for (const num of arr) {
        if (currentSum + num <= n) {
            // Add the number to the current chunk
            chunk.push(num);
            currentSum += num;
        } else {
            // Start a new chunk
            result.push(chunk);
            chunk = [num];
            currentSum = num;
        }
    }

    // Push the last chunk
    if (chunk.length > 0) {
        result.push(chunk);
    }

    return result;
};

const n = parseInt(prompt("Enter n: "));
alert(JSON.stringify(divide(arr, n)));