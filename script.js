   // Check if array is empty or has only one element
    if (arr.length <= 1) {
        return -Infinity;
    }
    
    // Sort the array in descending order
    arr.sort((a, b) => b - a);
    
    // If all elements are the same, return -Infinity
    if (arr[0] === arr[arr.length - 1]) {
        return -Infinity;
    }
    
    // Find the second highest element
    let secondHighest = arr[1];
    
    return secondHighest;