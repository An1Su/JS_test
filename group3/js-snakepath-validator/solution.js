export function isSnakePath(grid) {
    if (grid.length === 0) return false;
  
    const onlyOnes = grid.flatMap((r) => r).filter((x) => x === 1).length;
  
    if (onlyOnes === 0) return false;
  
    const visited = grid.map((r) => r.map((_) => false));
  
    const value = grid.flatMap((r, x) => r.map((n, y) => ({ n, x, y })));
  
    const first1 = value.find((cell) => cell.n === 1);
  
    if (!first1) return false;
  
    const rows = grid.length;
    const cols = grid[0].length;
    let seen = 0;
    function DFS(x, y) {
      if (
        x < 0 ||
        x >= rows ||
        y < 0 ||
        y >= cols ||
        visited[x][y] ||
        grid[x][y] !== 1
      )
        return;
      visited[x][y] = true;
      seen++;
  
      DFS(x - 1, y);
      DFS(x + 1, y);
      DFS(x, y - 1);
      DFS(x, y + 1);
    }
  
    DFS(first1.x, first1.y);
  
    return seen === onlyOnes;
  }