export function sentencePyramid(sentence) {
    if (!sentence.trim().length) return;
    let words = sentence.split(' ').filter(word => word.length >0);
    for (let i = 1; i<=words.length; i++){
        console.log(words.slice(0, i).join(' '))
    }
}