export function divisors(n) {
    if (n < 0) {
        n = -n
    }
    let arr = []
    for (let i = 1; i<n; i++) {
        if (n%i === 0) {
            arr.push(i)
        }
    }
    return arr
}