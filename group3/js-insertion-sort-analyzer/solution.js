export function insertionSortAnalyzer(arr, comparator) {
    let iterations = 0;
    let swaps = 0;
    let sortedArray = arr.slice();

    
    for (let i = 1; i < arr.length; i++) {
        let current = sortedArray[i];
        let j = i - 1;
        
        iterations++;
        while (j >= 0 && comparator(sortedArray[j], current) > 0) {
            sortedArray[j + 1] = sortedArray[j];
            j--;
            swaps++;
            iterations++;
        }
        
        if (j + 1 !== i) {
            sortedArray[j + 1] = current;
        }
    }
    
    return {
        sortedArray,
        iterations,
        swaps
    };
}