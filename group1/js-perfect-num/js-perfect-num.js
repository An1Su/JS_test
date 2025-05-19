export function isPerfectNum(n) {
    if (n < 1) return false
    let sum = 0
    for (let i = 1; i<n; i++) {
        if (n%i === 0) {
            sum+=i
        }
    }
    if (n === sum) return true
    return false

}