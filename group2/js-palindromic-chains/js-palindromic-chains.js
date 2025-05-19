export function palindromicChain(numbers) {
    let result =[];
    for (let i = 0; i < numbers.length; i++) {
        let num = numbers[i];
        let attempt = 0;
        if (num === 196){
            result.push(num);
            continue
        } 
        while (!isPalindrom(num) && attempt <100) {
            attempt ++;
            num += reversed(num)
        }
        result.push(num)
    }
    return result;
}
function isPalindrom(num){
    if (String(num) === String(num).split('').reverse().join('')) return true;
    return false;
}

function reversed(num){
    return Number(String(num).split('').reverse().join(''))
}