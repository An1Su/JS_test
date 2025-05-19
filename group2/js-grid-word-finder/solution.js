export function gridWordsFinder(grid, words) {
    if (!words.length || !grid.length) return [];
    
    let foundWords = new Set;

    grid.forEach(row =>{
        foundWords.add(row.join(''));
    })

    let verticalWord;
    for (let i = 0; i<grid[0].length; i ++) {
        verticalWord = grid.map(row => row[i]).join('')
        foundWords.add(verticalWord);
    }
    return words.filter(word => foundWords.has(word));
}