function isHorizontalMatch(grid, word, x, y) {
    if (x + word.length > grid[0].length) return false;
    return word.split('').every((ch, i) => ch === grid[y][x+i])
}

function isVerticalMatch(grid, word, x, y) {
    if (y + word.length > grid.length) return false;
    return word.split('').every((ch, i) => ch === grid[y+i][x]) 
}

export function gridWordFinder2(grid, word){
    if (!grid.length || !word.length) return [];
    const results = [];

    grid.forEach((row, y) => {
        row.forEach((_, x) => {

            if (isHorizontalMatch(grid, word, x, y)) results.push({x,y, direction: "horizontal"})
            if (isVerticalMatch(grid, word, x, y)) results.push({x,y, direction: "vertical"})
        })
    })
    return results

}