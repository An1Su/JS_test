export function gridWordsFinder(grid, words) {
    if (!grid.length || !words.length) return [];
    let foundWords = new Set();

    let horWords = grid.map(row => row.join(''));
    horWords.forEach( word=> foundWords.add(word));

    let vertWord
    for (let i = 0; i <= grid[0].length; i++) {

        vertWord = grid.map(row => row[i]).join('');
        foundWords.add(vertWord);
 
    }
    return  words.filter( word => foundWords.has(word))
}