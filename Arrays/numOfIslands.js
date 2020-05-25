/**
 * Given a 2d grid map of '1's (land) and '0's (water), count the number of islands.
 * An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.
 */


/**
 *
 * @param {string[][]} grid
 * @param {number} i
 * @param {number} j
 */
const fillIsland = (grid, i, j) => {
    // Make sure the indices don't exceed the limits of the arrays and
    // that we are doing the operations only on '1's (land)
    if (i < 0 || j < 0 || i >= grid.length || j >= grid[i].length || grid[i][j] === '0') {
        return;
    }

    grid[i][j] = '0';

    fillIsland(grid, i+1, j);
    fillIsland(grid, i-1, j);
    fillIsland(grid, i, j+1);
    fillIsland(grid, i, j-1);
};


/**
 * @param {string[][]} grid
 * @return {number}
 */
const numIslands = function(grid) {
    let count = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === '1') {
                fillIsland(grid, i, j);
                count++;
            }
        }
    }

    return count;
};

const test = () => {
    const input = [
        ["1","1","0","0","0"],
        ["1","1","0","0","1"],
        ["0","0","1","0","1"],
        ["0","0","0","1","1"]
    ];
    const result = numIslands(input);
    console.log(result); // 3
};