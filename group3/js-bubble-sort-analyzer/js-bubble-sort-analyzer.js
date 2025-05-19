export function bubbleSortAnalyzer(arr, comparator) {
    let sorted = arr.slice();
    let iterations = 0;
    let swaps = 0;
    for (let i= 0; i<sorted.length-1; i++) {
        let swapped = false;
        for (let j =0; j<sorted.length-1-i; j++){
            iterations ++;
            if (comparator(sorted[j], sorted[j+1]) > 0) {
                [sorted[j], sorted[j+1]] = [sorted[j+1], sorted[j]];
                swapped = true;
                swaps++;
            }
        }
        if (!swapped) break;
    }
    return {
        sortedArray: sorted,
        iterations,
        swaps
    }
}