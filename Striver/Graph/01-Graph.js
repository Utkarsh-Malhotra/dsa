// Store a Graph

// Option 1
function storeGraphUsingAdjacencyMatrix(n, edges) {
  // n = number of nodes
  // edges = array containing [u, v]

  let adj = [];

  // Create n x n matrix filled with 0
  for (let i = 0; i < n; i++) {
    adj[i] = new Array(n).fill(0);
  }

  // Store each edge
  for (let i = 0; i < edges.length; i++) {
    let [u, v] = edges[i];

    // Undirected graph
    adj[u][v] = 1;
    adj[v][u] = 1;
  }

  return adj;
}

function storeGraph() {
  let n = 5;

  // Edges:
  // 0 -- 1
  // 0 -- 2
  // 1 -- 3
  // 2 -- 4
  // 3 -- 4
  let edges = [
    [0, 1],
    [0, 2],
    [1, 3],
    [2, 4],
    [3, 4],
  ];

  let adj = storeGraphUsingAdjacencyMatrix(n, edges);

  console.log(adj);
}

// storeGraph();

// Option 2

function storeGraphAdjacencyList(n, edges) {
  let adj = Array.from({ length: n }, () => []); // Behaves like a vector

  for (let [u, v] of edges) {
    adj[u].push(v);
    adj[v].push(u); // undirected graph
  }

  return adj;
}

let graph = storeGraphAdjacencyList(5, [
  [0, 1],
  [0, 2],
  [1, 3],
  [2, 4],
]);

// console.log(graph);

// Traversal Techniques

// BFS

function bfsOfGraph(n, adj) {
  let vis = new Array(n).fill(false);
  let queue = [];
  let bfs = [];

  queue.push(0);
  vis[0] = true;

  while (queue.length > 0) {
    let node = queue.shift();

    bfs.push(node);

    for (let neighbour of adj[node]) {
      if (!vis[neighbour]) {
        vis[neighbour] = true;
        queue.push(neighbour);
      }
    }
  }

  return bfs;
}

function mainBfs() {
  let n = 5;

  let adj = Array.from({ length: n }, () => []);

  // Undirected graph
  adj[0].push(1);
  adj[1].push(0);

  adj[0].push(2);
  adj[2].push(0);

  adj[1].push(3);
  adj[3].push(1);

  adj[2].push(4);
  adj[4].push(2);

  adj[3].push(4);
  adj[4].push(3);

  console.log(bfsOfGraph(n, adj));
}

// mainBfs();

// DFS

function dfs(node, adj, vis, result) {
  vis[node] = true;
  result.push(node);

  for (let neighbour of adj[node]) {
    if (!vis[neighbour]) {
      dfs(neighbour, adj, vis, result);
    }
  }
}

function dfsOfGraph(n, adj) {
  let vis = new Array(n).fill(false);
  let result = [];

  dfs(0, adj, vis, result);

  return result;
}

function mainDfs() {
  let n = 5;

  let adj = Array.from({ length: n }, () => []);

  // 0 -- 1
  // |    |
  // 2    3
  //  \  /
  //    4

  adj[0].push(1);
  adj[1].push(0);

  adj[0].push(2);
  adj[2].push(0);

  adj[1].push(3);
  adj[3].push(1);

  adj[2].push(4);
  adj[4].push(2);

  adj[3].push(4);
  adj[4].push(3);

  console.log(dfsOfGraph(n, adj));
}

// mainDfs();

// Number of Provinces

function dfsProvince(node, adj, visited) {
  visited[node] = true;

  for (let neighbour of adj[node]) {
    if (!visited[neighbour]) {
      dfsProvince(neighbour, adj, visited);
    }
  }
}

function findCircleNum() {
  let isConnected = [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ];

  let n = isConnected.length;

  // Convert adjacency matrix → adjacency list
  let adj = Array.from({ length: n }, () => []);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (isConnected[i][j] === 1) {
        adj[i].push(j);
      }
    }
  }

  let visited = new Array(n).fill(false);
  let provinces = 0;

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      provinces++;
      dfsProvince(i, adj, visited);
    }
  }

  console.log(provinces);
}

// findCircleNum();

// Number of Islands

// BFS solution

function bfs(
  startingRow,
  startingColumn,
  grid,
  visited,
  numberOfRows,
  numberOfColumns,
) {
  const queue = [];
  let queueFront = 0;

  // Add the first land cell to the queue
  queue.push([startingRow, startingColumn]);
  visited[startingRow][startingColumn] = true;

  // Up, Right, Down, Left
  const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  while (queueFront < queue.length) {
    const [currentRow, currentColumn] = queue[queueFront++];

    // Check all 4 neighbouring cells
    for (const [rowChange, columnChange] of directions) {
      const neighbourRow = currentRow + rowChange;
      const neighbourColumn = currentColumn + columnChange;

      // Check whether neighbour is inside the grid
      if (
        neighbourRow >= 0 &&
        neighbourRow < numberOfRows &&
        neighbourColumn >= 0 &&
        neighbourColumn < numberOfColumns
      ) {
        // Check whether neighbour is land and unvisited
        if (
          grid[neighbourRow][neighbourColumn] === "1" &&
          !visited[neighbourRow][neighbourColumn]
        ) {
          visited[neighbourRow][neighbourColumn] = true;

          queue.push([neighbourRow, neighbourColumn]);
        }
      }
    }
  }
}

function countNumberOfIslands() {
  const grid = [
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"],
  ];
  const numberOfRows = grid.length;
  const numberOfColumns = grid[0].length;

  // Keep track of cells that have already been visited
  const visited = Array.from({ length: numberOfRows }, () =>
    new Array(numberOfColumns).fill(false),
  );

  let numberOfIslands = 0;

  // Visit every cell in the grid
  for (let row = 0; row < numberOfRows; row++) {
    for (let column = 0; column < numberOfColumns; column++) {
      // Found a new unvisited island
      if (grid[row][column] === "1" && !visited[row][column]) {
        numberOfIslands++;

        bfs(row, column, grid, visited, numberOfRows, numberOfColumns);
      }
    }
  }

  console.log(numberOfIslands);
}

// DFS Solution

// DFS function
function dfs(
  currentRow,
  currentColumn,
  baseRow,
  baseColumn,
  grid,
  visited,
  islandShape,
) {
  // Mark current cell as visited
  visited[currentRow][currentColumn] = true;

  // Store position relative to the starting cell
  islandShape.push([currentRow - baseRow, currentColumn - baseColumn]);

  // Up, Right, Down, Left
  const rowDirections = [-1, 0, 1, 0];
  const columnDirections = [0, 1, 0, -1];

  // Explore all 4 directions
  for (let direction = 0; direction < 4; direction++) {
    const neighbourRow = currentRow + rowDirections[direction];

    const neighbourColumn = currentColumn + columnDirections[direction];

    // Check whether neighbour is inside the grid
    const isInsideGrid =
      neighbourRow >= 0 &&
      neighbourRow < grid.length &&
      neighbourColumn >= 0 &&
      neighbourColumn < grid[0].length;

    // Check whether neighbour is land and unvisited
    if (
      isInsideGrid &&
      grid[neighbourRow][neighbourColumn] === 1 &&
      !visited[neighbourRow][neighbourColumn]
    ) {
      dfs(
        neighbourRow,
        neighbourColumn,
        baseRow,
        baseColumn,
        grid,
        visited,
        islandShape,
      );
    }
  }
}

// Main function to count distinct islands
function countDistinctIslands() {
  const grid = [
    [1, 1, 0, 0],
    [1, 0, 0, 0],
    [0, 0, 1, 1],
    [0, 0, 1, 1],
  ];
  const numberOfRows = grid.length;
  const numberOfColumns = grid[0].length;

  // Keep track of visited cells
  const visited = Array.from({ length: numberOfRows }, () =>
    new Array(numberOfColumns).fill(false),
  );

  // Store unique island shapes
  const distinctIslandShapes = new Set();

  // Traverse every cell
  for (let row = 0; row < numberOfRows; row++) {
    for (let column = 0; column < numberOfColumns; column++) {
      // Found an unvisited island
      if (grid[row][column] === 1 && !visited[row][column]) {
        const islandShape = [];

        // Start DFS for this island
        dfs(row, column, row, column, grid, visited, islandShape);

        // Convert shape to string and store it
        distinctIslandShapes.add(JSON.stringify(islandShape));
      }
    }
  }

  console.log(distinctIslandShapes.size);
}

// Flood Fill Algorithm - nrow: neighbourRow nCol: neighbourColumn
function dfsForFloodFill(
  row,
  col,
  ans,
  img,
  newColour,
  delRow,
  delCol,
  initColour,
) {
  ans[row][col] = newColour;
  let n = img.length;
  let m = img[0].length;
  for (let i = 0; i < 4; i++) {
    let nrow = row + delRow[i];
    let ncol = col + delCol[i];
    if (
      nrow >= 0 &&
      nrow < n &&
      ncol >= 0 &&
      ncol < m &&
      img[nrow][ncol] === initColour &&
      ans[nrow][ncol] !== newColour
    ) {
      dfsForFloodFill(
        nrow,
        ncol,
        ans,
        img,
        newColour,
        delRow,
        delCol,
        initColour,
      );
    }
  }
}
function floodFill(img, sr, sc, newColour) {
  let initColour = img[sr][sc];
  let ans = img.map((row) => [...row]);
  let delRow = [-1, 0, +1, 0];
  let delCol = [0, +1, 0, -1];
  dfsForFloodFill(sr, sc, ans, img, newColour, delRow, delCol, initColour);
  return ans;
}

function mainFloodFill() {
  let img = [
    [1, 1, 1],
    [1, 1, 0],
    [1, 0, 1],
  ];
  let sr = 1;
  let sc = 1;
  let newColour = 2;
  console.log(floodFill(img, sr, sc, newColour));
}

// mainFloodFill();

// Rotten Oranges

// Function to calculate minimum time to rot all oranges
function orangesRotting(grid) {
  // If grid is empty, return 0
  if (grid.length === 0) return 0;

  // Get number of rows and columns
  const m = grid.length;
  const n = grid[0].length;

  // Queue to store rotten oranges
  let rotten = [];

  // Variables to track total oranges and rotted count
  let total = 0;
  let count = 0;

  // Traverse grid to initialize
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // Count all non-empty cells
      if (grid[i][j] !== 0) total++;

      // Add rotten oranges to queue
      if (grid[i][j] === 2) {
        rotten.push([i, j]);
      }
    }
  }

  // Direction vectors (up, down, left, right)
  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  // Variable to track minutes
  let days = 0;

  // BFS
  while (rotten.length > 0) {
    // Number of oranges to process this minute
    let k = rotten.length;
    count += k;

    // Process each rotten orange
    for (let i = 0; i < k; i++) {
      let [x, y] = rotten.shift();

      // Check all directions
      for (let [dx, dy] of directions) {
        let nx = x + dx;
        let ny = y + dy;

        // Skip if out of bounds or not fresh
        if (nx < 0 || ny < 0 || nx >= m || ny >= n || grid[nx][ny] !== 1)
          continue;

        // Mark fresh orange as rotten
        grid[nx][ny] = 2;

        // Add to queue
        rotten.push([nx, ny]);
      }
    }

    // If still oranges to rot, increment time
    if (rotten.length > 0) days++;
  }

  // Return result
  return total === count ? days : -1;
}
function mainOranges() {
  let grid = [
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1],
  ];

  // Call function and print result
  let result = orangesRotting(grid);
  console.log("Minimum Number of Minutes Required", result);
}

// Detect a cycle in an undirected graph

// BFS
function detectCycle(src, adj, visited) {
  visited[src] = 1;
  let queue = [];
  queue.push([src, -1]);

  while (queue.length > 0) {
    let [node, parent] = queue.shift();

    for (let neighbour of adj[node]) {
      if (!visited[neighbour]) {
        visited[neighbour] = 1;
        queue.push([neighbour, node]);
      } else if (parent !== neighbour) {
        return true;
      }
    }
  }
  return false;
}

function isCycle(numberOfNodes, adjList) {
  let visited = new Array(numberOfNodes).fill(0);

  for (let i = 0; i < numberOfNodes; i++) {
    if (!visited[i]) {
      if (detectCycle(i, adjList, visited)) return true;
    }
  }
  return false;
}

function mainDetectCycleUsingBFS() {
  const numberOfNodes = 5;

  const adjList = [[1, 2], [0, 2], [0, 1, 3], [2, 4], [3]];

  console.log(isCycle(numberOfNodes, adjList));
}

// mainDetectCycleUsingBFS();

// DFS

function detectCycleUsingDfs(node, parent, visited, adjacentList) {
  visited[node] = 1;

  for (let neighbour of adjacentList[node]) {
    if (!visited[neighbour]) {
      if (detectCycleUsingDfs(neighbour, node, visited, adjacentList) == true)
        return true;
    } else if (neighbour !== parent) return true;
  }
  return false;
}

function isCycleDetected(numberOfNodes, adjList) {
  let visited = new Array(numberOfNodes).fill(0);
  for (let i = 0; i < numberOfNodes; i++) {
    if (!visited[i]) {
      if (detectCycleUsingDfs(i, -1, visited, adjList)) return true;
    }
  }
  return false;
}

function mainDetectCycleUsingDFS() {
  const numberOfNodes = 5;

  const adjList = [[1, 2], [0, 2], [0, 1, 3], [2, 4], [3]];

  console.log(isCycleDetected(numberOfNodes, adjList));
}

// mainDetectCycleUsingDFS();

// Distance of Nearest Cell 0/1 Matrix

function nearestCell(grid) {
  let n = grid.length;
  let m = grid[0].length;

  let visited = Array.from({ length: n }, () => Array(m).fill(0));
  let distance = Array.from({ length: n }, () => Array(m).fill(0));

  let queue = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === 1) {
        queue.push([i, j, 0]);
        visited[i][j] = 1;
      }
    }
  }

  const delRow = [-1, 0, 1, 0];
  const delCol = [0, 1, 0, -1];

  while (queue.length > 0) {
    let [row, col, steps] = queue.shift();
    distance[row][col] = steps;

    for (let i = 0; i < 4; i++) {
      const nrow = row + delRow[i];
      const ncol = col + delCol[i];

      // Check if the next cell is valid and unvisited
      if (
        nrow >= 0 &&
        nrow < n &&
        ncol >= 0 &&
        ncol < m &&
        visited[nrow][ncol] === 0
      ) {
        visited[nrow][ncol] = 1; // Mark as visited
        queue.push([nrow, ncol, steps + 1]); // Enqueue with updated steps
      }
    }
  }

  return distance;
}

function mainNearestCell() {
  let grid = [
    [0, 0, 0],
    [0, 1, 0],
    [1, 0, 1],
  ];

  console.log(nearestCell(grid));
}

// mainNearestCell();

// Surrounded Region

function connectedToBoundryDfs(row, col, visited, matrix, n, m) {
  visited[row][col] = 1;

  const delRow = [-1, 0, 1, 0],
    delCol = [0, 1, 0, -1];

  for (let i = 0; i < 4; i++) {
    let newRow = row + delRow[i];
    let newCol = col + delCol[i];

    if (
      newRow >= 0 &&
      newRow < n &&
      newCol >= 0 &&
      newCol < m &&
      !visited[newRow][newCol] &&
      matrix[newRow][newCol] === "O"
    ) {
      connectedToBoundryDfs(newRow, newCol, visited, matrix, n, m);
    }
  }
}

function surroundedRegion(charMatrix) {
  let n = charMatrix.length;
  let m = charMatrix[0].length;

  let visited = Array.from({ length: n }, () => Array(m).fill(0));

  // traverse the first row, col and last row,col

  // Traverse first row and last row
  for (let j = 0; j < m; j++) {
    // first row
    if (!visited[0][j] && charMatrix[0][j] === "O") {
      connectedToBoundryDfs(0, j, visited, charMatrix, n, m);
    }

    // last row
    if (!visited[n - 1][j] && charMatrix[n - 1][j] === "O") {
      connectedToBoundryDfs(n - 1, j, visited, charMatrix, n, m);
    }
  }

  // Traverse for first col and last col
  for (let i = 0; i < n; i++) {
    // first col
    if (!visited[i][0] && charMatrix[i][0] === "O") {
      connectedToBoundryDfs(i, 0, visited, charMatrix, n, m);
    }

    //last col
    if (!visited[i][m - 1] && charMatrix[i][m - 1] === "O") {
      connectedToBoundryDfs(i, m - 1, visited, charMatrix, n, m);
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (!visited[i][j] && charMatrix[i][j] === "O") {
        charMatrix[i][j] = "X";
      }
    }
  }
  return charMatrix;
}

function mainSurroundedRegion() {
  let charMatrix = [
    ["X", "X", "X", "X"],
    ["X", "O", "X", "X"],
    ["X", "O", "X", "X"],
    ["X", "O", "O", "X"],
    ["X", "X", "X", "X"],
  ];

  let charMatrix2 = [
    ["X", "O", "X", "X"],
    ["X", "O", "X", "X"],
    ["X", "O", "O", "X"],
    ["X", "O", "X", "X"],
    ["X", "X", "O", "O"],
  ];
  console.log(surroundedRegion(charMatrix));
  console.log(surroundedRegion(charMatrix2));
}

// mainSurroundedRegion();

// Number Of Enclaves

function numberOfEnclaves(grid) {
  let queue = [];
  let n = grid.length;
  let m = grid[0].length;

  let visited = Array.from({ length: n }, () => Array(m).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      // first row, first col, last row, last col
      if (i == 0 || j == 0 || i == n - 1 || j == m - 1) {
        if (grid[i][j] === 1) {
          queue.push([i, j]);
          visited[i][j] = 1;
        }
      }
    }
  }

  const delRow = [-1, 0, 1, 0];
  const delCol = [0, 1, 0, -1];

  while (queue.length > 0) {
    let [row, col] = queue.shift();

    // traverse all 4 directions
    for (let i = 0; i < 4; i++) {
      let newRow = row + delRow[i];
      let newCol = col + delCol[i];

      if (
        newRow >= 0 &&
        newRow < n &&
        newCol >= 0 &&
        newCol < m &&
        visited[newRow][newCol] == 0 &&
        grid[newRow][newCol] === 1
      ) {
        queue.push([newRow, newCol]);
        visited[newRow][newCol] = 1;
      }
    }
  }

  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === 1 && visited[i][j] === 0) count++;
    }
  }
  return count;
}

function mainNoOfEnclaves() {
  let grid = [
    [0, 0, 0, 1, 1],
    [0, 0, 1, 1, 0],
    [0, 1, 0, 0, 0],
    [0, 1, 1, 0, 0],
    [0, 0, 0, 1, 1],
  ];
  console.log(numberOfEnclaves(grid));
}

// mainNoOfEnclaves();

// Count Distinct Islands

function distinctIslandDfs(
  row,
  col,
  visited,
  grid,
  result,
  baseCordinateRow,
  baseCordinateCol,
  n,
  m,
) {
  visited[row][col] = 1;
  result.push([row - baseCordinateRow, col - baseCordinateCol]);

  const delRow = [-1, 0, 1, 0];
  const delCol = [0, 1, 0, -1];

  for (let i = 0; i < 4; i++) {
    let newRow = row + delRow[i];
    let newCol = col + delCol[i];

    if (
      newRow >= 0 &&
      newRow < n &&
      newCol >= 0 &&
      newCol < m &&
      visited[newRow][newCol] == 0 &&
      grid[newRow][newCol] === 1
    ) {
      distinctIslandDfs(
        newRow,
        newCol,
        visited,
        grid,
        result,
        baseCordinateRow,
        baseCordinateCol,
        n,
        m,
      );
    }
  }
}
function countDistinctIslands(grid) {
  let n = grid.length;
  let m = grid[0].length;
  let queue = [];

  let visited = Array.from({ length: n }, () => Array(m).fill(0));
  let hSet = new Set();

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (visited[i][j] === 0 && grid[i][j] === 1) {
        let result = [];
        distinctIslandDfs(i, j, visited, grid, result, i, j, n, m);
        hSet.add(JSON.stringify(result));
      }
    }
  }

  return hSet.size;
}

function mainCountDistinctIslands() {
  let grid = [
    [1, 1, 0, 1, 1],
    [1, 0, 0, 0, 0],
    [0, 0, 0, 1, 1],
    [1, 1, 0, 1, 0],
  ];
  console.log(countDistinctIslands(grid));
}

// mainCountDistinctIslands();

// Bipartite Graph

// colours a component
function isBirpartite(start, adjList, colourNodeList) {
  let queue = [];
  queue.push(start);
  colourNodeList[start] = 0;
  while (queue.length > 0) {
    const node = queue.pop();
    for (let neighbour of adjList[node]) {
      if (colourNodeList[neighbour] === -1) {
        colourNodeList[neighbour] = !colourNodeList[node];
        queue.push(neighbour);
      } else if (colourNodeList[neighbour] === colourNodeList[node]) {
        return false;
      }
    }
  }
  return true;
}

// Extra code for dicsconnected components
function checkForBipertite(numberOfNodes, adjList) {
  let colourNodeList = new Array(numberOfNodes).fill(-1);

  for (let i = 0; i < numberOfNodes; i++) {
    if (colourNodeList[i] === -1) {
      if (!isBirpartite(i, adjList, colourNodeList)) return false;
    }
  }

  return true;
}
function mainBipartiteBFS() {
  let numberOfNodes = 8;
  let adjList = [[2], [1, 3, 6], [2, 4], [3, 5, 7], [4, 6], [2, 5], [4, 8]];
  console.log(checkForBipertite(numberOfNodes, adjList));
}

// mainBipartiteBFS();

// DFS - Birpertite

function isBirpartiteDFS(start, colour, adjList, colourNodeList) {
  colourNodeList[start] = colour;
  for (let neighbour of adjList[start]) {
    if (colourNodeList[neighbour] === -1) {
      if (!isBirpartiteDFS(neighbour, !colour, adjList, colourNodeList))
        return false;
    } else if (colourNodeList[neighbour] === colour) {
      return false;
    }
  }
  return true;
}

function checkForBipertiteDFS(numberOfNodes, adjacentList) {
  let colourNodeList = new Array(numberOfNodes).fill(-1);

  for (let i = 0; i < numberOfNodes; i++) {
    if (colourNodeList[i] === -1) {
      if (!isBirpartiteDFS(i, 0, adjacentList, colourNodeList)) return false;
    }
  }

  return true;
}

function mainBipartiteDFS() {
  let numberOfNodes = 8;
  let adjList = [[2], [1, 3, 6], [2, 4], [3, 5, 7], [4, 6], [2, 5], [4, 8]];
  console.log(checkForBipertiteDFS(numberOfNodes, adjList));
}

// mainBipartiteDFS();

// Detect a cycle of Directed Graph

function isCycle(start, visited, pathVisited, adjList) {
  visited[start] = 1;
  pathVisited[start] = 1;

  for (let neighbour of adjList[start]) {
    if (!visited[neighbour]) {
      if (isCycle(neighbour, visited, pathVisited, adjList)) {
        return true;
      }
    }

    // Neighbour is already visited AND
    // is still in the current DFS path
    else if (pathVisited[neighbour]) {
      return true;
    }
  }

  pathVisited[start] = 0;
  return false;
}

function detectCycleInDirectedGraphDFS(numberOfNodes, adjList) {
  let visited = new Array(numberOfNodes).fill(0);
  let pathVisited = new Array(numberOfNodes).fill(0);

  for (let i = 0; i < numberOfNodes; i++) {
    if (!visited[i]) {
      if (isCycle(i, visited, pathVisited, adjList)) return true;
    }
  }
  return false;
}

function mainDetectCycleDirectedGraphDFS() {
  let adjList = [[], [2], [3], [4, 7], [5], [6], [], [5], [9], [10], [8]];

  console.log(detectCycleInDirectedGraphDFS(adjList.length, adjList));
}

// mainDetectCycleDirectedGraphDFS();

// Safe Nodes

function isCycleSafeNodes(start, visited, pathVisited, adjList, check) {
  visited[start] = 1;
  pathVisited[start] = 1;
  check[start] = 0;
  for (let neighbour of adjList[start]) {
    if (!visited[neighbour]) {
      if (isCycle(neighbour, visited, pathVisited, adjList, check)) {
        check[start] = 0; // Not required as initialised before but for explanation
        return true;
      }
    }

    // Neighbour is already visited AND
    // is still in the current DFS path
    else if (pathVisited[neighbour]) {
      check[start] = 0;
      return true;
    }
  }

  check[start] = 1;
  pathVisited[start] = 0;
  return false;
}

function getSafeNodes(numberOfNodes, adjList) {
  let visited = new Array(numberOfNodes).fill(0);
  let pathVisited = new Array(numberOfNodes).fill(0);
  let check = new Array(numberOfNodes).fill(0);
  let safeNodes = [];
  for (let i = 0; i < numberOfNodes; i++) {
    if (!visited[i]) {
      isCycleSafeNodes(i, visited, pathVisited, adjList, check);
    }
  }
  for (let i = 0; i < numberOfNodes; i++) {
    if (check[i] === 1) safeNodes.push(i);
  }
  return safeNodes;
}

function mainDetectCycleDirectedGraphDFS() {
  let adjList = [[], [2], [3], [4, 7], [5], [6], [], [5], [9], [10], [8]];

  console.log(getSafeNodes(adjList.length, adjList));
}

// Topological Sort

// DFS
function dfsTopoSort(node, visited, adjList, stack) {
  visited[node] = 1;
  for (let neighbour of adjList[node]) {
    if (!visited[neighbour]) dfsTopoSort(neighbour, visited, adjList, stack);
  }

  stack.push(node);
}
function topoSort(numberOfNodes, adjList) {
  let visited = new Array(numberOfNodes).fill(0);
  let stack = [];
  for (let i = 0; i < numberOfNodes; i++) {
    if (!visited[i]) {
      dfsTopoSort(i, visited, adjList, stack);
    }
  }

  let ans = [];
  while (stack.length > 0) {
    ans.push(stack.pop());
  }

  return ans;
}
function mainTopoSortDfs() {
  let numberOfNodes = 6;
  let adjList = [[], [], [3], [1], [0, 1], [0, 2]];

  console.log(topoSort(numberOfNodes, adjList));
}

// mainTopoSortDfs();

// BFS (Kahn's Algorithum)

function topoSortBfs(numberOfNodes, adjList) {
  let indegree = new Array(numberOfNodes).fill(0);
  for (let i = 0; i < numberOfNodes; i++) {
    for (let neighbour of adjList[i]) {
      indegree[neighbour] += 1;
    }
  }

  let queue = [];
  for (let i = 0; i < numberOfNodes; i++) {
    if (indegree[i] === 0) {
      queue.push(i);
    }
  }

  let topo = [];
  while (queue.length > 0) {
    let node = queue.shift();
    topo.push(node);

    for (let neighbour of adjList[node]) {
      indegree[neighbour]--;
      if (indegree[neighbour] === 0) queue.push(neighbour);
    }
  }

  return topo;
}
function mainTopoSortBfs() {
  let numberOfNodes = 6;
  let adjList = [[], [], [3], [1], [0, 1], [0, 2]];

  console.log(topoSortBfs(numberOfNodes, adjList));
}

// mainTopoSortBfs();

// Detect a cycle using toposort

function topoSortDetectCycleBfs(numberOfNodes, adjList) {
  let indegree = new Array(numberOfNodes).fill(0);
  for (let i = 0; i < numberOfNodes; i++) {
    for (let neighbour of adjList[i]) {
      indegree[neighbour] += 1;
    }
  }

  let queue = [];
  for (let i = 0; i < numberOfNodes; i++) {
    if (indegree[i] === 0) {
      queue.push(i);
    }
  }

  let count = 0;

  while (queue.length > 0) {
    let node = queue.shift();
    count++;

    for (let neighbour of adjList[node]) {
      indegree[neighbour]--;
      if (indegree[neighbour] === 0) queue.push(neighbour);
    }
  }

  if (count === numberOfNodes) return false;
  return true;
}
function mainTopoSortDetectCycleBfs() {
  let numberOfNodes = 5;
  let adjList = [[1], [2], [3, 4], [2], []];

  console.log(topoSortDetectCycleBfs(numberOfNodes, adjList));
}

// mainTopoSortDetectCycleBfs();

// Course Schedule 1 and 2

// course schedule 1 function
function topoSortCourseSchedule(numberOfNodes, adjList) {
  let indegree = new Array(numberOfNodes).fill(0);
  for (let i = 0; i < numberOfNodes; i++) {
    for (let neighbour of adjList[i]) {
      indegree[neighbour] += 1;
    }
  }

  console.log("indigree--->", indegree);
  let queue = [];
  for (let i = 0; i < numberOfNodes; i++) {
    if (indegree[i] === 0) {
      queue.push(i);
    }
  }

  let topo = [];
  while (queue.length > 0) {
    let node = queue.shift();
    topo.push(node);

    for (let neighbour of adjList[node]) {
      indegree[neighbour]--;
      if (indegree[neighbour] === 0) queue.push(neighbour);
    }
  }

  return topo.length === numberOfNodes ? true : false;
}

// Course Schedule 2 function
function topoSortCourseScheduleOrder(numberOfNodes, adjList) {
  let indegree = new Array(numberOfNodes).fill(0);
  for (let i = 0; i < numberOfNodes; i++) {
    for (let neighbour of adjList[i]) {
      indegree[neighbour] += 1;
    }
  }

  console.log("indigree--->", indegree);

  let queue = [];
  for (let i = 0; i < numberOfNodes; i++) {
    if (indegree[i] === 0) {
      queue.push(i);
    }
  }

  let topo = [];
  while (queue.length > 0) {
    let node = queue.shift();
    topo.push(node);

    for (let neighbour of adjList[node]) {
      indegree[neighbour]--;
      if (indegree[neighbour] === 0) queue.push(neighbour);
    }
  }

  return topo.length === numberOfNodes ? topo : [];
}
function isPossible(numberOfCourses, prerequisites) {
  let adjList = Array.from({ length: numberOfCourses }, () => []);
  for (let [first, second] of prerequisites) {
    adjList[first].push(second);
  }
  console.log("adjList--->", adjList);
  return topoSortCourseSchedule(numberOfCourses, adjList);
}

function isPossibleThanReturnOrder(numberOfCourses, prerequisites) {
  let adjList = Array.from({ length: numberOfCourses }, () => []);
  for (let [first, second] of prerequisites) {
    adjList[second].push(first);
  }

  return topoSortCourseScheduleOrder(numberOfCourses, adjList);
}
function mainCourseSchedule() {
  let numberOfNodes = 4;
  let prerequisites = [
    [1, 0],
    [2, 0],
    [3, 1],
    [3, 2],
  ];

  console.log(isPossible(numberOfNodes, prerequisites));
  // console.log(isPossibleThanReturnOrder(numberOfNodes,prerequisites))
}

// mainCourseSchedule();

// Find safe States

function safeStatesBFS(numberOfNodes, adjList) {
  let adjReverse = Array.from({ length: numberOfNodes }, () => []);
  let indegree = new Array(numberOfNodes).fill(0);

  for (let i = 0; i < numberOfNodes; i++) {
    for (let neighbour of adjList[i]) {
      adjReverse[neighbour].push(i);
      indegree[i]++;
    }
  }
  let safeNodes = [];
  let queue = [];
  for (let i = 0; i < numberOfNodes; i++) {
    if (indegree[i] === 0) {
      queue.push(i);
    }
  }

  while (queue.length > 0) {
    let node = queue.shift();
    safeNodes.push(node);
    for (let neighbour of adjReverse[node]) {
      indegree[neighbour]--;
      if (indegree[neighbour] === 0) {
        queue.push(neighbour);
      }
    }
  }

  return safeNodes.sort();
}

function mainEventualSafeNodes() {
  let adj = [
    [1],
    [2],
    [3, 4],
    [4, 5],
    [6],
    [6],
    [7],
    [],
    [1, 9],
    [10],
    [8],
    [9],
  ];
  let V = 12;
  console.log(safeStatesBFS(V, adj));
}

// mainEventualSafeNodes();

// Find Order Alien Dictionary

function topoSortAlienDict(numberOfNodes, adjList) {
  let indegree = new Array(numberOfNodes).fill(0);
  for (let i = 0; i < numberOfNodes; i++) {
    for (let neighbour of adjList[i]) {
      indegree[neighbour] += 1;
    }
  }

  let queue = [];
  for (let i = 0; i < numberOfNodes; i++) {
    if (indegree[i] === 0) {
      queue.push(i);
    }
  }

  let topo = [];
  while (queue.length > 0) {
    let node = queue.shift();
    topo.push(node);

    for (let neighbour of adjList[node]) {
      indegree[neighbour]--;
      if (indegree[neighbour] === 0) queue.push(neighbour);
    }
  }

  return topo;
}

function findOrder(dict, numberOfStrings, K) {
  let adjList = Array.from({ length: K }, () => []);

  for (let i = 0; i < numberOfStrings - 1; i++) {
    // Need to go till second last to compare it with the last, at last there will be no one to compare to
    let s1 = dict[i];
    let s2 = dict[i + 1];
    let len = Math.min(s1.length, s2.length);
    for (let j = 0; j < len; j++) {
      if (s1[j] !== s2[j]) {
        adjList[s1.charCodeAt(j) - 97].push(s2.charCodeAt(j) - 97);  // automatically converts into 0,1,2...
        break; 
      }
    }
  }
  let topo = topoSortAlienDict(K, adjList);

  let ans = "";
  for (let node of topo) {
    ans += String.fromCharCode(node + 97);
  }

  return ans;
}

function mainAlienDict() {
  let N = 5, K = 4;
  let dict = ["baa", "abcd", "abca", "cab", "cad"];
  console.log(findOrder(dict,N,K));
}

// mainAlienDict();


// Shortest Path in an acyclic graph

function topoDfsShortestPath(node, adjList, visited, stack) {
  visited[node] = 1;

  for(let adjNode of adjList[node]) {
    let [v,wt] = adjNode;
    if(!visited[v]) {
      topoDfsShortestPath(v, adjList,visited,stack);
    }
  }
  stack.push(node);
}

function shortestPath(numberOfNodes, numberOfEdges, edges) {
  let adjList = Array.from({ length: numberOfNodes }, () => []);

  for(let i = 0; i < numberOfNodes; i++) {
    let u = edges[i][0];
    let v = edges[i][1];
    let weight = edges[i][2];

    adjList[u].push([v,weight]);
  }

  // Step 1 find the topo sort
  let visited = new Array(numberOfNodes).fill(0);
  let stack = [];

  for(let i = 0; i < numberOfNodes; i++) {
    if (!visited[i]) {
      topoDfsShortestPath(i, adjList, visited, stack)
    }
  }

  // Step 2 Find the distances
  let distance = new Array(numberOfNodes).fill(Infinity);
  distance[0] = 0; // if the interviewer dont mention the source , by default mark 0th node to be source
  while(stack.length > 0) {
    let node = stack.pop();
    for(let adjNode of adjList[node]) {
      let [v,wt] = adjNode;

      // Relax the edge
      if(distance[node] + wt < distance[v]) {
        distance[v] = distance[node] + wt;
      }
    }
  }
  return distance;
}

function mainShortestPathTopo() {
  const N = 6;
  const M = 7;
  const edges = [
      [0,1,2],[0,4,1],[4,5,4],
      [4,2,2],[1,2,3],[2,3,6],[5,3,1]
  ];
  console.log(shortestPath(N,M,edges));
}
// mainShortestPathTopo();


 // Shortest Path in an undirected graph with unit weights

 function shortestPathUndirectedGraphBfs(edges, numberOfNodes, numberOfEdges, src) {
  let adjList = Array.from( { length: numberOfNodes }, () => []);
  for(let edge of edges) {
    let [u,v] = edge;
    adjList[u].push(v);
    adjList[v].push(u);
  }

  let distanceN = new Array(numberOfNodes).fill(Infinity);
  distanceN[src] = 0;
  let queue = [];
  queue.push(src);

  while (queue.length > 0) {
    let node = queue.shift();
    for(let adjNode of adjList[node]) {
      if(distanceN[node] + 1 < distanceN[adjNode]) {  // Every edge has unit distance therefore +1
        distanceN[adjNode] = distanceN[node] + 1;
        queue.push(adjNode);
      } 
    }
  }
  let ans = new Array(numberOfNodes).fill(-1);
  for (let i = 0 ; i < numberOfNodes; i++) {
    if(distanceN[i] != Infinity) {
      ans[i] = distanceN[i];
    }
  }
  return ans;
 }

 function mainshortestPathUndirectedGraphBfs() {
    const N = 9, M = 10;
    const edges = [
        [0, 1], [0, 3], [3, 4], [4, 5], [5, 6],
        [1, 2], [2, 6], [6, 7], [7, 8], [6, 8]
    ];
    console.log(shortestPathUndirectedGraphBfs(edges,N,M,0));
 }

 // mainshortestPathUndirectedGraphBfs();


// Word Ladder - 1

function wordLadderLength(startWord, targetWord, wordList) {
  let queue = [];
  queue.push([startWord, 1]);
  let wordSet = new Set(wordList);
  wordSet.delete(startWord);

  while(queue.length > 0) {
    let [word,steps] = queue.shift();
      if (word === targetWord) return steps;
      for (let i = 0; i < word.length; i++) {
                  for (let ch = 97; ch <= 122; ch++) {
                      let newWord = word.substring(0, i) + String.fromCharCode(ch) + word.substring(i + 1);
                      if (wordSet.has(newWord)) {
                          wordSet.delete(newWord);
                          queue.push([newWord, steps + 1]);
                      }
                  }
      }
  }
  return 0;

}

function mainLadderOne() {
  const wordList = ["des", "der", "dfr", "dgt", "dfs"];
  const startWord = "der", targetWord = "dfs";

console.log(wordLadderLength(startWord,targetWord, wordList));
}

// mainLadderOne();

function wordLadderTwo(startWord, targetWord, wordList) {
  let wordSet = new Set(wordList);
  let queue = [];
  queue.push(startWord);
  let usedOnLevel = [startWord];
  let level = 0;
  const ans = [];

  while(queue.length > 0) {
    let path = queue.shift();

    if(path.length > level) {
      level++;
      for (let word of usedOnLevel) {
          wordSet.delete(word);
      }
    }

    let word = path[path.length - 1];

    if (word === endWord) {
                if (ans.length === 0) {
                    ans.push([...path]);
                } else if (ans[0].length === path.length) {
                    ans.push([...path]);
                }
            }
    for (let i = 0; i < word.length; i++) {
                for (let c = 97; c <= 122; c++) { // 'a' to 'z'
                    const newWord = word.slice(0, i) + String.fromCharCode(c) + word.slice(i + 1);

                    if (wordSet.has(newWord)) {
                        path.push(newWord);
                        queue.push([...path]);
                        usedOnLevel.push(newWord);
                        path.pop();
                    }
                }
    }
  }

  return ans;

}

// Dijkstras Algorithm - Check chatgpt for min- heap solution, instead of queue we need to implement minheap in javascript and then use it 

// Using Priority Queue
function dijkstrasUsingPQ(numberOfNodes, adjList, sourceNode) {

  // Priority Queue
  let pq = [];

  let distance = new Array(numberOfNodes).fill(Infinity);
  distance[sourceNode] = 0;
  pq.push([0,sourceNode]);

  while (pq.length > 0) {
    const [dist, node] = pq.shift();

    for(let [adjNode, weight] of adjList[node]) {
      if (dist + weight < distance[adjNode]) {
        distance[adjNode] = dist + weight;
        pq.push([distance[adjNode], adjNode]);
      }
    }
  }
  return distance;
}

function mainDijkstrasUsingPQ() {
  const V = 3, E = 3, S = 2;
  const adj = [[], [], []];

    // Add edges to the graph
    adj[0].push([1, 1]);
    adj[0].push([2, 6]);
    adj[1].push([2, 3]);
    adj[1].push([0, 1]);
    adj[2].push([1, 3]);
    adj[2].push([0, 6]);

    console.log(dijkstrasUsingPQ(V, adj, S));
}

mainDijkstrasUsingPQ();


// Using Set - There are limitations with javascript for the set , learn it for the knowledge purpose


// Print Shortest Path Dijkstars

function printShortestPath(numberOfNodes, numberOfEdges, edges) {

  // Since this is 1 based we use n + 1
  let adj = Array.from({ length: n + 1 } , () => []);

  for(let [u,v,wt] of edges) {
    adj[u].push([v,wt]);
    adj[v].push([u,wt]);
  }

  let queue = [];
  const distance = new Array(n + 1).fill(Infinity);
  const parent = new Array(n + 1);

  for (let i = 1; i <= n; i++) {
        parent[i] = i;
  }

  distance[1] = 0;

  queue.push([0,1]);

  while(queue.length > 0) {
    let [currentDistance, node] = queue.shift();

    if (currentDistance > distance[node]) {
            continue;
    }

    for (const [neighbour, weight] of adj[node]) {

            const newDistance =
                currentDistance + weight;

            if (newDistance < distance[neighbour]) {

                distance[neighbour] = newDistance;

                // Store parent
                parent[neighbour] = node;

                queue.push([
                    newDistance,
                    neighbour
                ]);
            }
    }
  }
  if (distance[n] === Infinity) {
        return [-1];
  }

  const path = [];

    let node = n;

    while (parent[node] !== node) {
        path.push(node);
        node = parent[node];
    }

    path.push(1);

    path.reverse();

    return path;
}

// Shortest Distance in Binary Maze

function shortestPathInBinaryMaze(grid, source, destination) {
  let queue = [];
  const n = grid.length;
  const m = grid[0].length;

  if (source[0] === destination[0] && source[1] === destination[1])
        return 0;
  let distance = Array.from({ length: n }, () => Array(m).fill(Infinity));

  distance[source[0]][source[1]] = 0;

  let q = [[0, source[0], source[1]]]; 

  const dr = [-1, 0, 1, 0];
  const dc = [0, 1, 0, -1];

  while(queue.length > 0) {
    const [dis, r, c] = q.shift();
    for (let i = 0; i < 4; i++) {
            const newr = r + dr[i];
            const newc = c + dc[i];

            // Check if the new cell is within bounds and is a valid cell (i.e., 1)
            if (newr >= 0 && newr < n && newc >= 0 && newc < m && grid[newr][newc] === 1 && dis + 1 < dist[newr][newc]) {
                dist[newr][newc] = dis + 1;  // Update the distance

                // If destination is reached, return the distance
                if (newr === destination[0] && newc === destination[1])
                    return dis + 1;

                // Add the new cell to the queue for further processing
                q.push([dis + 1, newr, newc]);
            }
        }
  }
  return -1;
}

// Main function
function mainBinaryMaze() {
    // Input data
    const source = [0, 1];
    const destination = [2, 2];
    const grid = [
        [1, 1, 1, 1],
        [1, 1, 0, 1],
        [1, 1, 1, 1],
        [1, 1, 0, 0],
        [1, 0, 0, 1]
    ];

    // Call the method to find the shortest path
    const res = shortestPathInBinaryMaze(grid, source, destination);

    // Output the result
    console.log(res);
}

// Call the main function
mainBinaryMaze();

// Minimum Path Effort

// Method to calculate the minimum effort path using Dijkstra's algorithm
function MinimumEffort(heights) {

    // Get the grid size
    const n = heights.length;
    const m = heights[0].length;

    // Create a distance matrix, initialized with a large value (unvisited)
    let dist = Array.from({ length: n }, () => Array(m).fill(Infinity));
    dist[0][0] = 0;  // Distance for the source cell (0, 0) is 0

    // Create a priority queue for Dijkstra's algorithm
    let pq = [[0, 0, 0]];  // Push source cell with distance 0

    // Define the possible directions (up, right, down, left)
    const dr = [-1, 0, 1, 0];
    const dc = [0, 1, 0, -1];

    // Start the Dijkstra algorithm
    while (pq.length > 0) {
        pq.sort((a, b) => a[0] - b[0]);  // Sort to get the cell with the minimum distance
        const [diff, r, c] = pq.shift();

        // If we reach the destination cell, return the current effort
        if (r === n - 1 && c === m - 1) {
            return diff;
        }

        // Check all 4 possible adjacent cells
        for (let i = 0; i < 4; i++) {
            const newr = r + dr[i];
            const newc = c + dc[i];

            // Check if the new cell is within bounds
            if (newr >= 0 && newr < n && newc >= 0 && newc < m) {
                // Calculate the effort required to move to the new cell
                const newEffort = Math.max(Math.abs(heights[r][c] - heights[newr][newc]), diff);

                // If the calculated effort is less, update and push to the queue
                if (newEffort < dist[newr][newc]) {
                    dist[newr][newc] = newEffort;
                    pq.push([newEffort, newr, newc]);
                }
            }
        }
    }

    return 0;  // If unreachable (although it should not reach here)
}

// Main function
function mainMinimumPathEffort() {
    // Input data
    const heights = [
        [1, 2, 2], 
        [3, 8, 2], 
        [5, 3, 5]
    ];

    // Find the minimum effort path
    const res = MinimumEffort(heights);

    // Output the result
    console.log(res);
}

// Call the main function
mainMinimumPathEffort();


// Cheapest Flight

// Method to find the cheapest flight within K stops using BFS
function CheapestFLight(n, flights, src, dst, K) {

    // Create an adjacency list to represent airports and flights as a graph
    let adj = Array.from({ length: n }, () => []);
    for (let flight of flights) {
        adj[flight[0]].push([flight[1], flight[2]]);
    }

    // Create a queue to store the node, its distance from the source, and the number of stops
    let q = [[0, src, 0]];  // Push the source node with 0 stops and 0 cost

    // Create a distance array to store the minimum cost to reach each node
    let dist = Array(n).fill(Infinity);
    dist[src] = 0;

    // BFS traversal with a queue to process the nodes
    while (q.length > 0) {
        let [stops, node, cost] = q.shift();

        // If the number of stops exceeds K, continue to the next iteration
        if (stops > K) continue;

        // Iterate over all the adjacent nodes (next destinations)
        for (let [adjNode, edW] of adj[node]) {
            // If a shorter path to the adjacent node is found, update the distance
            if (cost + edW < dist[adjNode] && stops <= K) {
                dist[adjNode] = cost + edW;  // Update the distance
                q.push([stops + 1, adjNode, cost + edW]);  // Push the new node with updated stops and cost
            }
        }
    }

    // If destination node is unreachable, return -1
    if (dist[dst] === Infinity) return -1;

    return dist[dst];  // Return the minimum cost to reach the destination
}

// Main function
function mainCheapestFlight() {
    // Input data
    let n = 4;
    let src = 0;
    let dst = 3;
    let K = 1;
    let flights = [
        [0, 1, 100], [1, 2, 100], [2, 0, 100], [1, 3, 600],
        [2, 3, 200]
    ];

    // Call the method to find the cheapest flight
    let ans = CheapestFLight(n, flights, src, dst, K);

    // Output the result
    console.log(ans);
}

// Call the main function
mainCheapestFlight();

// Minimum Multiplications

class Solution {
    minimumMultiplications(arr, start, end) {
        /**
         * Finds the minimum number of multiplications to transform start into end
         * using elements from arr under modulo 100000.
         */
        const mod = 100000;

        // Distance array to track minimum steps for each number
        const dist = new Array(mod).fill(1e9);
        dist[start] = 0;

        // Queue for BFS: each element is [number, steps]
        const queue = [[start, 0]];

        while (queue.length > 0) {
            const [node, steps] = queue.shift();

            // Multiply node with each element in arr
            for (let factor of arr) {
                const num = (factor * node) % mod;

                // If this path is better (fewer steps), update and enqueue
                if (steps + 1 < dist[num]) {
                    dist[num] = steps + 1;

                    // If we reached the target, return steps
                    if (num === end) return steps + 1;

                    queue.push([num, steps + 1]);
                }
            }
        }
        // If unreachable, return -1
        return -1;
    }
}

// Driver code
const start = 3, end = 30;
const arr = [2, 5, 7];
const obj = new Solution();
const ans = obj.minimumMultiplications(arr, start, end);
console.log(ans);


// Number if ways to reach end

// Method to calculate the number of shortest paths from node 0 to node n-1
function countPaths(n, roads) {

    // Create an adjacency list to represent airports and flights as a graph
    let adj = Array.from({ length: n }, () => []);
    for (let road of roads) {
        adj[road[0]].push([road[1], road[2]]);
        adj[road[1]].push([road[0], road[2]]);
    }

    // Create a priority queue (min heap) for Dijkstra's algorithm
    let pq = [[0, 0]];  

    // Initialize the distance array and ways array
    let dist = Array(n).fill(Infinity);
    dist[0] = 0;
    let ways = Array(n).fill(0);
    ways[0] = 1;

    // Define the modulo value for large numbers
    let mod = 1e9 + 7;

    // Perform Dijkstra's algorithm
    while (pq.length > 0) {
        // Sort to get the node with the minimum distance
        pq.sort((a, b) => a[0] - b[0]);  
        let [dis, node] = pq.shift();

        // Iterate through adjacent nodes
        for (let [adjNode, edW] of adj[node]) {
            // If a shorter path is found, update the distance and number of ways
            if (dis + edW < dist[adjNode]) {
                dist[adjNode] = dis + edW;
                // Push the new node with updated distance
                pq.push([dis + edW, adjNode]);  
                // Copy the number of ways to the new node
                ways[adjNode] = ways[node];  
            }
            // If the same shortest path is found, update the number of ways
            else if (dis + edW === dist[adjNode]) {
                // Increment the number of ways
                ways[adjNode] = (ways[adjNode] + ways[node]) % mod;  
            }
        }
    }

    // Return the number of ways to reach the last node modulo 10^9 + 7
    return ways[n - 1] % mod;
}

// Main function
function mainCountPaths() {
    // Input data
    let n = 7;  // Number of nodes
    let roads = [
        [0, 6, 7], [0, 1, 2], [1, 2, 3], [1, 3, 3], [6, 3, 3], 
        [3, 5, 1], [6, 5, 1], [2, 5, 1], [0, 4, 5], [4, 6, 2]
    ];

    // Call the method to count the number of shortest paths
    let ans = countPaths(n, roads);

    // Output the result
    console.log(ans);
}

// Call the main function
// mainCountPaths();

// Bellman Ford Algorithm

function bellManFordAlgo(numberOfNodes, edges, source) {
  
  let distance = new Array(numberOfNodes).fill(Infinity);
  distance[source] = 0;
  for(let i = 0 ; i < numberOfNodes - 1; i++) {
    for(let [u,v,wt] of edges) {
        if (distance[u] !== Infinity && distance[u] + wt < distance[v]) {
          distance[v] = distance[u] + wt;
        }
    }
  }

  // Nth relaxation to check for -ve cycle
  for(let [u,v,wt] of edges) {
        if (distance[u] !== Infinity && distance[u] + wt < distance[v]) {
         return [-1];
        }
  }
  return distance;
}

function mainBellmanFord() {
  const V = 6;
const S = 0;
const edges = [
    [3, 2, 6],
    [5, 3, 1],
    [0, 1, 5],
    [1, 5, -3],
    [1, 2, -2],
    [3, 4, -2],
    [2, 4, 3]
];

const dist = bellManFordAlgo(V, edges, S);
console.log(dist.join(" "));
}

// mainBellmanFord();

// Floyd Marshal Algorithm

function flloydMarshalShortestDistance(matrix) {
  let n = matrix.length;
  for(let i = 0; i < n ; i++) {
    for(let j = 0; j < n; j++) {
      if(matrix[i][j] === -1) {
        matrix[i][j] = Infinity;
      }
      if( i === j) matrix[i][j] = 0;
    }
  }

  for(let via= 0 ; via < n; via++) {
    for(let i = 0; i < n ; i++) {
      for(let j = 0; j < n; j++) {
        matrix[i][j] = Math.min(matrix[i][j], matrix[i][via] + matrix[via][j]);
      }
    }
  }

  // Detect -ve cycle
  for(let i = 0 ; i < n; i++) {
    if(matrix[i][i] < 0) {
      console.log("-ve cycle detected");
      return;
    }
  }

  // Before returning just changing Infinity to -1
  for(let i = 0; i < n ; i++) {
    for(let j = 0; j < n; j++) {
      if(matrix[i][j] === -1) {
        matrix[i][j] = Infinity;
      }
      if( i === j) matrix[i][j] = 0;
      
    }
  }

  return matrix;
}

function mainFlloydMarshal() {
  let matrix = [
    [0, 2, -1, -1],
    [1, 0, 3, -1],
    [-1, -1, 0, -1],
    [3, 5, 4, 0]
];

console.log(flloydMarshalShortestDistance(matrix));
}

// mainFlloydMarshal();


// Find the city with the smallest number of neighbours at a threshold distance

function findCity(n, m, edges, distanceThreshold) {
  let distance = Array.from( { length: n }, () => Array(m).fill(Infinity));
  for(let [u,v,wt] of edges) {
    distance[u][v] = wt;
    distance[v][u] = wt; 
  }
  
  // itself to itself
  for(let i = 0 ; i < n; i++) {
    distance[i][i] = 0;
  }

  // Floyd Warshal
  for(let via = 0; via < n; via++) {
    for(let i = 0; i < n; i++) {
      for(let j = 0; j < n; j++) {
        if(distance[i][k] === Infinity || distance[k][j] === Infinity) continue;
        distance[i][j] = Math.min(distance[i][j], distance[i][k] + distance[k][j]);
      }
    }
  }
  let countCity = n;
  let cityNo = -1;
  
  for(let city = 0 ; city < n; city++) {
    let count = 0;
    for (let adjCity = 0; adjCity < n; adjCity++) {
      if (distance[city][adjCity] <= distanceThreshold) 
        count++;
    }
    if (count <= countCity) {
      countCity = count;
      cityNo = city;
    }
  }
  return cityNo;
}

// MST (Minimum Spanning Tree)
class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(element) {
        this.heap.push(element);

        let index = this.heap.length - 1;

        while (index > 0) {
            const parent = Math.floor((index - 1) / 2);

            if (this.heap[parent][0] <= this.heap[index][0]) {
                break;
            }

            [this.heap[parent], this.heap[index]] =
                [this.heap[index], this.heap[parent]];

            index = parent;
        }
    }

    pop() {
        if (this.heap.length === 0) {
            return null;
        }

        if (this.heap.length === 1) {
            return this.heap.pop();
        }

        const min = this.heap[0];

        this.heap[0] = this.heap.pop();

        let index = 0;

        while (true) {
            let smallest = index;

            const left = 2 * index + 1;
            const right = 2 * index + 2;

            if (
                left < this.heap.length &&
                this.heap[left][0] < this.heap[smallest][0]
            ) {
                smallest = left;
            }

            if (
                right < this.heap.length &&
                this.heap[right][0] < this.heap[smallest][0]
            ) {
                smallest = right;
            }

            if (smallest === index) {
                break;
            }

            [this.heap[index], this.heap[smallest]] =
                [this.heap[smallest], this.heap[index]];

            index = smallest;
        }

        return min;
    }

    isEmpty() {
        return this.heap.length === 0;
    }
}


function primsAlgorithm(n, edges) {

    // Create adjacency list
    const adjList = Array.from(
        { length: n },
        () => []
    );

    for (const [u, v, weight] of edges) {
        adjList[u].push([v, weight]);
        adjList[v].push([u, weight]);
    }

    const visited = new Array(n).fill(false);

    const minHeap = new MinHeap();

    // [weight, node, parent]
    minHeap.push([0, 0, -1]);

    let mstWeight = 0;
    const mstEdges = [];

    while (!minHeap.isEmpty()) {

        const [weight, node, parent] = minHeap.pop();

        // Already part of MST
        if (visited[node]) {
            continue;
        }

        // Mark node as part of MST
        visited[node] = true;

        // Add edge to MST
        if (parent !== -1) {
            mstWeight += weight;

            mstEdges.push([
                parent,
                node,
                weight
            ]);
        }

        // Explore neighbours
        for (const [neighbour, edgeWeight] of adjList[node]) {

            if (!visited[neighbour]) {

                minHeap.push([
                    edgeWeight,
                    neighbour,
                    node
                ]);
            }
        }
    }

    return {
        mstWeight,
        mstEdges
    };
}


// Disjoint Set - Union By Rank

class DisjointSet {
    constructor(n) {
        this.rank = new Array(n + 1).fill(0); // 1 based index(Can work for both 0 and 1 based indexing)
        this.parent = new Array(n + 1);

        for (let i = 0; i <= n; i++) {
            this.parent[i] = i;
        }
    }

    findUPar(node) {
        if (node === this.parent[node]) {
            return node;
        }

        // Path compression
        const ulp = this.findUPar(this.parent[node]); 

        this.parent[node] = ulp;

        return this.parent[node];
    }

    unionByRank(u, v) {
        const ulp_u = this.findUPar(u);
        const ulp_v = this.findUPar(v);

        if (ulp_u === ulp_v) {
            return;
        }

        if (this.rank[ulp_u] < this.rank[ulp_v]) {

            this.parent[ulp_u] = ulp_v;

        } else if (this.rank[ulp_v] < this.rank[ulp_u]) {

            this.parent[ulp_v] = ulp_u;

        } else {

            this.parent[ulp_v] = ulp_u;

            this.rank[ulp_u]++;
        }
    }
}


const ds = new DisjointSet(7);

ds.unionByRank(1, 2);
ds.unionByRank(2, 3);

ds.unionByRank(4, 5);
ds.unionByRank(6, 7);
ds.unionByRank(5, 6);


// if 3 and 7 same or not
if (ds.findUPar(3) === ds.findUPar(7)) {
    console.log("Same");
} else {
    console.log("Not Same");
}


ds.unionByRank(3, 7);


if (ds.findUPar(3) === ds.findUPar(7)) {
    console.log("Same");
} else {
    console.log("Not Same");
}

// Union By Size
class DisjointSetSize {
    constructor(n) {
        this.size = new Array(n + 1).fill(1); // 1 based index(Can work for both 0 and 1 based indexing)
        this.parent = new Array(n + 1);

        for (let i = 0; i <= n; i++) {
            this.parent[i] = i;
        }
    }

    findUPar(node) {
        if (node === this.parent[node]) {
            return node;
        }

        // Path compression
        const ulp = this.findUPar(this.parent[node]); 

        this.parent[node] = ulp;

        return this.parent[node];
    }

    unionBySize(u, v) {
        const ulp_u = this.findUPar(u);
        const ulp_v = this.findUPar(v);

        if (ulp_u === ulp_v) {
            return;
        }

        if (this.size[ulp_u] < this.size[ulp_v]) {

            this.parent[ulp_u] = ulp_v;
            this.size[ulp_v] += this.size[ulp_u]

        } else {

            this.parent[ulp_v] = ulp_u;

            this.size[ulp_u] += this.size[ulp_v];
        }
    }
}

const ds = new DisjointSetSize(7);

ds.unionByRank(1, 2);
ds.unionByRank(2, 3);

ds.unionByRank(4, 5);
ds.unionByRank(6, 7);
ds.unionByRank(5, 6);


// if 3 and 7 same or not
if (ds.findUPar(3) === ds.findUPar(7)) {
    console.log("Same");
} else {
    console.log("Not Same");
}


ds.unionByRank(3, 7);


if (ds.findUPar(3) === ds.findUPar(7)) {
    console.log("Same");
} else {
    console.log("Not Same");
}

// Kruskal Algorithm
function kruskal(n, edges) {

    // 1. Kruskal: sort edges
    edges.sort((a, b) => a[2] - b[2]);

    // 2. Create DSU
    const ds = new DisjointSetSize(n);

    let mstWeight = 0;

    // 3. Kruskal: process edges from smallest to largest
    for (const [u, v, weight] of edges) {

        // 4. DSU: check if u and v are already connected
        if (ds.findUPar(u) !== ds.findUPar(v)) {

            // 5. Kruskal: choose this edge
            mstWeight += weight;

            // 6. DSU: merge the components
            ds.unionBySize(u, v);
        }
    }

    return mstWeight;
}

// Number of operations required to connect components

class DSU {
    constructor(n) {
        this.parent = Array(n).fill(0).map((_, i) => i);
        this.rank = Array(n).fill(0);
    }

    // Find with path compression
    find(x) {
        if (this.parent[x] !== x)
            this.parent[x] = this.find(this.parent[x]);
        return this.parent[x];
    }

    // Union by rank
    union(x, y) {
        let px = this.find(x);
        let py = this.find(y);
        if (px === py) return;

        if (this.rank[px] < this.rank[py]) this.parent[px] = py;
        else if (this.rank[px] > this.rank[py]) this.parent[py] = px;
        else {
            this.parent[py] = px;
            this.rank[px]++;
        }
    }
}

class Solution {
    // Function to find minimum operations to make the graph connected
    makeConnected(n, connections) {
        // If not enough edges
        if (connections.length < n - 1) return -1;

        const dsu = new DSU(n);

        // Union all edges
        for (let [u, v] of connections) {
            dsu.union(u, v);
        }

        // Count unique components
        const components = new Set();
        for (let i = 0; i < n; i++) {
            components.add(dsu.find(i));
        }

        return components.size - 1;
    }
}

// Driver code
const n = 6;
const connections = [[0,1],[0,2],[0,3],[1,4]];
const sol = new Solution();
console.log(sol.makeConnected(n, connections));


// Accounts Merge

// Disjoint Set (Union-Find) implementation
class DisjointSet {
    // Constructor to initialize DSU
    constructor(n) {
        this.rank = new Array(n + 1).fill(0);
        this.parent = new Array(n + 1);
        this.size = new Array(n + 1);

        // Initialize every node
        for (let i = 0; i <= n; i++) {
            this.parent[i] = i;
            this.size[i] = 1;
        }
    }

    // Function to find ultimate parent with path compression
    findUPar(node) {
        if (node === this.parent[node]) 
            return node;
        this.parent[node] = this.findUPar(this.parent[node]);
        return this.parent[node];
    }

    // Function to perform union by rank
    unionByRank(u, v) {
        let ulp_u = this.findUPar(u);
        let ulp_v = this.findUPar(v);

        if (ulp_u === ulp_v) return;

        if (this.rank[ulp_u] < this.rank[ulp_v]) {
            this.parent[ulp_u] = ulp_v;
        } 
        else if (this.rank[ulp_v] < this.rank[ulp_u]) {
            this.parent[ulp_v] = ulp_u;
        } 
        else {
            this.parent[ulp_v] = ulp_u;
            this.rank[ulp_u]++;
        }
    }

    // Function to perform union by size
    unionBySize(u, v) {
        let ulp_u = this.findUPar(u);
        let ulp_v = this.findUPar(v);

        if (ulp_u === ulp_v) return;

        if (this.size[ulp_u] < this.size[ulp_v]) {
            this.parent[ulp_u] = ulp_v;
            this.size[ulp_v] += this.size[ulp_u];
        } 
        else {
            this.parent[ulp_v] = ulp_u;
            this.size[ulp_u] += this.size[ulp_v];
        }
    }
}

// Solution class to merge accounts
class Solution {
    // Function to merge accounts with common emails
    accountsMerge(details) {
        // Number of accounts
        let n = details.length;

        // Create Disjoint Set
        let ds = new DisjointSet(n);

        // Map to store email -> account index
        let mapMailNode = new Map();

        // Step 1: Union accounts having common emails
        for (let i = 0; i < n; i++) {
            for (let j = 1; j < details[i].length; j++) {
                let mail = details[i][j];

                if (!mapMailNode.has(mail)) {
                    mapMailNode.set(mail, i);
                } 
                else {
                    ds.unionBySize(i, mapMailNode.get(mail));
                }
            }
        }

        // Step 2: Group emails under ultimate parent
        let mergedMail = Array.from({ length: n }, () => []);
        for (let [mail, idx] of mapMailNode.entries()) {
            let node = ds.findUPar(idx);
            mergedMail[node].push(mail);
        }

        // Step 3: Prepare final merged result
        let ans = [];
        for (let i = 0; i < n; i++) {
            if (mergedMail[i].length === 0) continue;

            mergedMail[i].sort();
            let temp = [details[i][0]];

            for (let mail of mergedMail[i]) {
                temp.push(mail);
            }
            ans.push(temp);
        }

        // Sort final answer
        ans.sort((a, b) => a[0].localeCompare(b[0]));
        return ans;
    }
}

// Driver function
function mainaccountsMerge() {
    // Input accounts
    let accounts = [
        ["John", "j1@com", "j2@com", "j3@com"],
        ["John", "j4@com"],
        ["Raj", "r1@com", "r2@com"],
        ["John", "j1@com", "j5@com"],
        ["Raj", "r2@com", "r3@com"],
        ["Mary", "m1@com"]
    ];

    // Create Solution object
    let obj = new Solution();

    // Call function
    let ans = obj.accountsMerge(accounts);

    // Print output
    for (let acc of ans) {
        process.stdout.write(acc[0] + ":");
        for (let i = 1; i < acc.length; i++) {
            process.stdout.write(acc[i] + " ");
        }
        console.log();
    }
}

mainaccountsMerge();


// Number of Islands 2

class DisjointSet {
    constructor(n) {
        this.rank = Array(n + 1).fill(0);
        this.parent = Array.from({ length: n + 1 }, (_, i) => i);
        this.size = Array(n + 1).fill(1);
    }

    findUPar(node) {
        if (node === this.parent[node]) return node;
        this.parent[node] = this.findUPar(this.parent[node]); // Path compression
        return this.parent[node];
    }

    unionByRank(u, v) {
        const ulp_u = this.findUPar(u);
        const ulp_v = this.findUPar(v);
        if (ulp_u === ulp_v) return;
        if (this.rank[ulp_u] < this.rank[ulp_v]) {
            this.parent[ulp_u] = ulp_v;
        } else if (this.rank[ulp_v] < this.rank[ulp_u]) {
            this.parent[ulp_v] = ulp_u;
        } else {
            this.parent[ulp_v] = ulp_u;
            this.rank[ulp_u]++;
        }
    }

    unionBySize(u, v) {
        const ulp_u = this.findUPar(u);
        const ulp_v = this.findUPar(v);
        if (ulp_u === ulp_v) return;
        if (this.size[ulp_u] < this.size[ulp_v]) {
            this.parent[ulp_u] = ulp_v;
            this.size[ulp_v] += this.size[ulp_u];
        } else {
            this.parent[ulp_v] = ulp_u;
            this.size[ulp_u] += this.size[ulp_v];
        }
    }
}

class Solution {
    isValid(adjr, adjc, n, m) {
        return adjr >= 0 && adjr < n && adjc >= 0 && adjc < m;
    }

    numOfIslands(n, m, operators) {
        const ds = new DisjointSet(n * m);
        const vis = Array.from({ length: n }, () => Array(m).fill(0));
        let cnt = 0;
        const ans = [];

        for (const [row, col] of operators) {
            if (vis[row][col] === 1) {
                ans.push(cnt);
                continue;
            }

            vis[row][col] = 1;
            cnt++;

            const dr = [-1, 0, 1, 0];
            const dc = [0, 1, 0, -1];
            for (let i = 0; i < 4; i++) {
                const adjr = row + dr[i];
                const adjc = col + dc[i];
                if (this.isValid(adjr, adjc, n, m) && vis[adjr][adjc] === 1) {
                    const nodeNo = row * m + col;
                    const adjNodeNo = adjr * m + adjc;
                    if (ds.findUPar(nodeNo) !== ds.findUPar(adjNodeNo)) {
                        cnt--;
                        ds.unionBySize(nodeNo, adjNodeNo);
                    }
                }
            }
            ans.push(cnt);
        }
        return ans;
    }
}

// Driver code
(function mainNumberOfIsland() {
    const n = 4, m = 5;
    const operators = [
        [0, 0], [0, 0], [1, 1], [1, 0], [0, 1],
        [0, 3], [1, 3], [0, 4], [3, 2], [2, 2], [1, 2], [0, 2]
    ];

    const sol = new Solution();
    const ans = sol.numOfIslands(n, m, operators);
    console.log(ans.join(" "));
})();


// Making a large Island

class DisjointSet {
    // Constructor
    constructor(n) {
        /* To store the ranks, parents and 
        sizes of different set of vertices */
        this.rank = new Array(n + 1).fill(0);
        this.parent = new Array(n + 1).fill(0).map((_, i) => i);
        this.size = new Array(n + 1).fill(1);
    }

    // Function to find ultimate parent
    findUPar(node) {
        if (node === this.parent[node])
            return node;
        this.parent[node] = this.findUPar(this.parent[node]);
        return this.parent[node];
    }

    // Function to implement union by rank
    unionByRank(u, v) {
        const ulp_u = this.findUPar(u);
        const ulp_v = this.findUPar(v);
        if (ulp_u === ulp_v) return;
        if (this.rank[ulp_u] < this.rank[ulp_v]) {
            this.parent[ulp_u] = ulp_v;
        } else if (this.rank[ulp_v] < this.rank[ulp_u]) {
            this.parent[ulp_v] = ulp_u;
        } else {
            this.parent[ulp_v] = ulp_u;
            this.rank[ulp_u]++;
        }
    }

    // Function to implement union by size
    unionBySize(u, v) {
        const ulp_u = this.findUPar(u);
        const ulp_v = this.findUPar(v);
        if (ulp_u === ulp_v) return;
        if (this.size[ulp_u] < this.size[ulp_v]) {
            this.parent[ulp_u] = ulp_v;
            this.size[ulp_v] += this.size[ulp_u];
        } else {
            this.parent[ulp_v] = ulp_u;
            this.size[ulp_u] += this.size[ulp_v];
        }
    }

    getSize(node) {
        return this.size[this.findUPar(node)];
    }
}

// Solution class
class Solution {
    // DelRow and delCol for neighbors
    constructor() {
        this.delRow = [-1, 0, 1, 0];
        this.delCol = [0, 1, 0, -1];
    }

    // Helper function to check if a pixel is within boundaries
    isValid(i, j, n) {
        // Return false if pixel is invalid
        if (i < 0 || i >= n) return false;
        if (j < 0 || j >= n) return false;
        // Return true if pixel is valid
        return true;
    }

    /* Function to add initial islands to 
    the disjoint set data structure */
    addInitialIslands(grid, ds, n) {
        // Traverse all the cells in the grid
        for (let row = 0; row < n; row++) {
            for (let col = 0; col < n; col++) {
                // If the cell is not land, skip
                if (grid[row][col] === 0) continue;

                // Traverse on all the neighbors
                for (let ind = 0; ind < 4; ind++) {
                    // Get the coordinates of neighbor
                    const newRow = row + this.delRow[ind];
                    const newCol = col + this.delCol[ind];

                    // If the cell is valid and a land cell
                    if (this.isValid(newRow, newCol, n) && grid[newRow][newCol] === 1) {
                        // Get the number for node
                        const nodeNo = row * n + col;
                        // Get the number for neighbor
                        const adjNodeNo = newRow * n + newCol;

                        /* Take union of both nodes as 
                        they are part of the same island */
                        ds.unionBySize(nodeNo, adjNodeNo);
                    }
                }
            }
        }
    }

    // Function to get the size of the largest island
    largestIsland(grid) {
        // Dimensions of grid
        const n = grid.length;

        // Disjoint set data structure
        const ds = new DisjointSet(n * n);

        // Function call to add initial islands in the disjoint set
        this.addInitialIslands(grid, ds, n);

        // To store the answer
        let ans = 0;

        // Traverse on the grid
        for (let row = 0; row < n; row++) {
            for (let col = 0; col < n; col++) {
                // If the cell is a land cell, skip
                if (grid[row][col] === 1) continue;

                /* Set to store the ultimate parents 
                of neighboring islands */
                const components = new Set();

                // Traverse on all its neighbors
                for (let ind = 0; ind < 4; ind++) {
                    // Coordinates of neighboring cell
                    const newRow = row + this.delRow[ind];
                    const newCol = col + this.delCol[ind];

                    if (this.isValid(newRow, newCol, n) && grid[newRow][newCol] === 1) {
                        
                        /* Perform union and store 
                        ultimate parent in the set */
                        const nodeNumber = newRow * n + newCol;
                        components.add(ds.findUPar(nodeNumber));
                    }
                }

                // To store the size of current largest island
                let sizeTotal = 0;

                // Iterate on all the neighboring ultimate parents
                for (const parent of components) {
                    // Update the size
                    sizeTotal += ds.getSize(parent);
                }

                // Store the maximum size of island
                ans = Math.max(ans, sizeTotal + 1);
            }
        }

        // Edge case
        for (let cellNo = 0; cellNo < n * n; cellNo++) {
            // Keep the answer updated
            ans = Math.max(ans, ds.getSize(cellNo));
        }

        // Return the answer
        return ans;
    }
}

// Main function to test the Solution class
(function mainLargeIsland() {
    const grid = [
        [1, 0],
        [0, 1]
    ];

    // Creating instance of Solution class
    const sol = new Solution();

    // Function call to get the size of the largest island
    const ans = sol.largestIsland(grid);

    // Output
    console.log("The size of the largest island is: " + ans);
})();



// Remove Stones

class DSU {
    constructor() {
        this.parent = {};
    }

    // Function to find the ultimate parent of x
    find(x) {
        // If x is not present, make it its own parent
        if (!(x in this.parent)) {
            this.parent[x] = x;
        }

        // Path compression
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]);
        }

        return this.parent[x];
    }

    // Function to connect two nodes
    union(x, y) {
        this.parent[this.find(x)] = this.find(y);
    }
}

class Solution {
    removeStones(stones) {
        let dsu = new DSU();

        // Connect row and column for each stone
        for (let [x, y] of stones) {
            dsu.union(x, y + 10001);
        }

        let components = new Set();

        // Count number of connected components
        for (let [x, y] of stones) {
            components.add(dsu.find(x));
        }

        // Max stones removed = total stones - number of components
        return stones.length - components.size;
    }
}

// Driver code
let stones = [
    [0, 0], [0, 1], [1, 0], [1, 2], [2, 1], [2, 2]
];
let obj = new Solution();
console.log(obj.removeStones(stones));




// Kosaraju's Algo

class Solution {
    // Step 1: Perform DFS and store nodes in stack by finishing time
    dfs(node, vis, adj, st) {
        vis[node] = 1;
        for (let it of adj[node]) {
            if (!vis[it]) {
                this.dfs(it, vis, adj, st);
            }
        }
        st.push(node);
    }

    // Step 2: Perform DFS on transposed graph
    dfs3(node, vis, adjT) {
        vis[node] = 1;
        for (let it of adjT[node]) {
            if (!vis[it]) {
                this.dfs3(it, vis, adjT);
            }
        }
    }

    // Function to find number of strongly connected components
    kosaraju(V, adj) {
        let vis = new Array(V).fill(0);
        let st = [];

        // Step 1: Do DFS to fill stack
        for (let i = 0; i < V; i++) {
            if (!vis[i]) {
                this.dfs(i, vis, adj, st);
            }
        }

        // Step 2: Build transpose graph
        let adjT = Array.from({ length: V }, () => []);
        vis.fill(0);
        for (let i = 0; i < V; i++) {
            for (let it of adj[i]) {
                adjT[it].push(i);
            }
        }

        // Step 3: Process stack to count SCCs
        let scc = 0;
        while (st.length > 0) {
            let node = st.pop();
            if (!vis[node]) {
                scc++;
                this.dfs3(node, vis, adjT);
            }
        }
        return scc;
    }
}

// Driver code
(function main() {
    let n = 5;
    let edges = [
        [1, 0], [0, 2],
        [2, 1], [0, 3],
        [3, 4]
    ];

    let adj = Array.from({ length: n }, () => []);
    for (let [u, v] of edges) {
        adj[u].push(v);
    }

    let obj = new Solution();
    let ans = obj.kosaraju(n, adj);
    console.log("The number of strongly connected components is:", ans);
})();


// Bridges in a graph

class Solution {
    constructor() {
        this.timer = 1; // Global timer for discovery times
    }

    // DFS to find bridges
    dfs(node, parent, vis, adj, tin, low, bridges) {
        vis[node] = 1;                  // Mark visited
        tin[node] = low[node] = this.timer++; // Set discovery & low-link

        for (let neighbor of adj[node]) {
            if (neighbor === parent) continue; // Skip parent edge

            if (vis[neighbor] === 0) {
                // Recursive DFS call
                this.dfs(neighbor, node, vis, adj, tin, low, bridges);

                // Update low-link value
                low[node] = Math.min(low[node], low[neighbor]);

                // Check if it's a bridge
                if (low[neighbor] > tin[node]) {
                    bridges.push([neighbor, node]);
                }
            } else {
                // Back edge
                low[node] = Math.min(low[node], low[neighbor]);
            }
        }
    }

    criticalConnections(n, connections) {
        // Step 1: Build adjacency list
        const adj = Array.from({ length: n }, () => []);
        for (let [u, v] of connections) {
            adj[u].push(v);
            adj[v].push(u);
        }

        // Step 2: Initialize helper arrays
        const vis = new Array(n).fill(0);
        const tin = new Array(n).fill(0);
        const low = new Array(n).fill(0);
        const bridges = [];

        // Step 3: Run DFS
        this.dfs(0, -1, vis, adj, tin, low, bridges);
        return bridges;
    }
}

// Driver Code
const n = 4;
const connections = [[0,1],[1,2],[2,0],[1,3]];
const obj = new Solution();
console.log("Critical Connections (Bridges):", obj.criticalConnections(n, connections));



// Articulation Point
class Solution {
    constructor() {
        this.timer = 1;
    }

    // DFS to find articulation points
    dfs(node, parent, vis, tin, low, mark, adj) {
        vis[node] = true;  //make vis[node]=true;
        tin[node] = low[node] = this.timer++;
        let child = 0;  //make child equal to 0

        for (let neighbor of adj[node]) {
            if (neighbor === parent) continue;  //if neighbour==parent then continue

            if (!vis[neighbor]) {
                this.dfs(neighbor, node, vis, tin, low, mark, adj);  //if not visited then call the dfs fucntion
                low[node] = Math.min(low[node], low[neighbor]);

                // Articulation condition (non-root)
                if (low[neighbor] >= tin[node] && parent !== -1) {
                    mark[node] = 1; //mark the node as 1
                }

                child++;
            } else {
                // back edge
                low[node] = Math.min(low[node], tin[neighbor]);
            }
        }

        if (parent === -1 && child > 1) {
            mark[node] = 1;
        }
    }

    articulationPoints(n, adj) {
        const vis = new Array(n).fill(false);
        const tin = new Array(n).fill(0);
        const low = new Array(n).fill(0);
        const mark = new Array(n).fill(0);

        for (let i = 0; i < n; i++) {
            if (!vis[i]) {
                this.dfs(i, -1, vis, tin, low, mark, adj);
            }
        }

        const res = [];
        for (let i = 0; i < n; i++) {
            if (mark[i] === 1) res.push(i);
        }

        return res.length ? res : [-1];
    }
}

// Example usage
const n = 5;
const edges = [
    [0, 1], [1, 4], [2, 4], [2, 3], [3, 4]
];

const adj = Array.from({ length: n }, () => []);
for (const [u, v] of edges) {
    adj[u].push(v);
    adj[v].push(u);
}

const sol = new Solution();
const res = sol.articulationPoints(n, adj);
console.log(res.join(" "));
