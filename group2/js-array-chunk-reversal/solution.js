export function reverseChunks(arr, chunkSize) {
    if (chunkSize === 0) {
        return []
    }
    if (arr.length=== 0) {
        return []
    }
    let result = []

    for (let i = 0; i<arr.length; i+=chunkSize) {
        let chunk = []
        chunk = arr.slice(i, i+chunkSize).reverse()
        result.push(chunk)
    }
    return result.flat()



}