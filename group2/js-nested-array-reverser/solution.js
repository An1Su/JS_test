export function nestedArrayReverser(words) {
    if (!words.length) return '';
    return words.flat().reverse().join(' ')
}