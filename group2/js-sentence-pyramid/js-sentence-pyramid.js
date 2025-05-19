export function sentencePyramid(sentence) {
    let words = sentence.split(' ').filter(word => word !='');
    for (let i = 0; i<= words.length; i++) {
        console.log(words.slice(0,i).join(' '))
    }
}