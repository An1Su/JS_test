export function palindromicChain(numbers) {
    let result = [];


    for (let i = 0; i < numbers.length; i++) {
        let attempts = 0;
        let number = numbers[i]
        while (number !== reversed(number) && attempts<100){
            attempts++
            number += reversed(number);
        }
        if (number === reversed(number) && attempts<100){
            result.push(number);
        }
    }
    return result;
}

function reversed(number){
    return Number(String(number).split('').reverse().join(''));
} 