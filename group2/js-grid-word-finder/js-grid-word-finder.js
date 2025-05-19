export function gridWordsFinder(grid, words) {
    if (!words.length || !grid.length) return [];
    let wordFound = new Set();

    let horWords = grid.map(row => row.join(''));
    for (let i=0; i<horWords.length; i++) {
        wordFound.add(horWords[i]);
    }
    for (let j=0; j<grid[0].length; j++) {
        let vertWord = grid.map(row => row[j]).join('');
        wordFound.add(vertWord);
    }
    return words.filter(word => wordFound.has(word))
}