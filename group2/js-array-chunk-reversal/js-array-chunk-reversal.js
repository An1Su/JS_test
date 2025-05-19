export function reverseChunks(arr, chunkSize) {
    let result = [];

    for (let i=0; i< arr.length; i += chunkSize){
        let chunk = arr.slice(i, chunkSize + i);
        result.push(chunk.reverse());
    }
    return result.flat()
}