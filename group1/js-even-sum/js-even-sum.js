export function evenSum(nums) {
    if (nums < 2 ) return 0;
    let sum = 0;
    for (let i = 2; i<= nums; i +=2){
         sum += i;
    }
    return sum;
 }