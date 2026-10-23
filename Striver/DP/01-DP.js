// *********************************************** FIBONACCIII START *****************************************
// TC : O(n) SC : O(n) + O(n)
function fibonacciUsingMemoization(n, dp) {
  if (n <= 1) return n;
  if (dp[n] !== -1) return dp[n];
  dp[n] =
    fibonacciUsingMemoization(n - 1, dp) + fibonacciUsingMemoization(n - 2, dp);
  return dp[n];
}

// TC : O(n) SC : O(n)
function fibonacciUsingTabulation(n) {
  if (n <= 1) return n;

  let dp = new Array(n + 1).fill(0);

  dp[0] = 0;
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}

// TC: O(n) SC: O(1)
function fibonacciUsingTabulationWithMinimumSpaceComplexity(n) {
  if (n <= 1) return n;

  let prev = 1;
  let prev2 = 0;
  let cur;
  for (let i = 2; i <= n; i++) {
    cur = prev + prev2;
    prev2 = prev;
    prev = cur;
  }

  return prev;
}

function callFibonacci() {
  let n = 10;
  let dp = new Array(n + 1).fill(-1);
  console.log(fibonacciUsingMemoization(n, dp));
  console.log(fibonacciUsingTabulation(n));
  console.log(fibonacciUsingTabulationWithMinimumSpaceComplexity(n));
}

// *********************************************** FIBONACCIII END *********************************************

// *********************************************** CLIMBIN STAIRS **********************************************

// Recursion TC: O(n2) SC: O(n)
function climbingStairs(n) {
  if (n === 0 || n === 1) return 1;

  let l = climbingStairs(n - 1);
  let r = climbingStairs(n - 2);

  return l + r;
}

// Memoization TC: O(n) SC: O(n) + O(n)
function climbinStairsUsingMemoization(n, dp) {
  if (n === 0 || n === 1) return 1;

  if (dp[n] !== -1) return dp[n];

  dp[n] =
    climbinStairsUsingMemoization(n - 1, dp) +
    climbinStairsUsingMemoization(n - 2, dp);

  return dp[n];
}
// Tabulation TC: O(n) SC: O(n)

function climbinStairsUsingTabulation(n) {
  if (n === 0 || n === 1) return n;
  let dp = new Array(n + 1).fill(1);

  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}
// Tabulation TC: O(n) SC: O(1)
function climbinStairsUsingTabulationMinimumSpaceComplexity(n) {
  if (n === 0 || n === 1) return 1;
  let prev = 1;
  let prev2 = 1;
  let cur;
  for (let i = 2; i <= n; i++) {
    cur = prev + prev2;
    prev2 = prev;
    prev = cur;
  }
  return prev;
}

function callClimbingStairs() {
  let n = 10;
  let dp = new Array(n + 1).fill(-1);
  console.log(climbingStairs(n));
  console.log(climbinStairsUsingMemoization(n, dp));
  console.log(climbinStairsUsingTabulation(n));
  console.log(climbinStairsUsingTabulationMinimumSpaceComplexity(n));
}

// **************************************** Climbing Stairs End ***************************************************

// ***************************************** Frog Jump ************************************************************

// Recursion TC: O(n2) SC: O(n)
function frogJump(n, effortArr) {
  if (n === 0) return 0;
  let left =
    frogJump(n - 1, effortArr) + Math.abs(effortArr[n] - effortArr[n - 1]);
  let right = 0;
  if (n > 1) {
    right =
      frogJump(n - 2, effortArr) + Math.abs(effortArr[n] - effortArr[n - 2]);
  }
  return Math.min(left, right);
}

function frogJumpUsingMemoization(n, effortArr, dp) {
  if (n === 0) return 0;
  if (dp[n] !== -1) return dp[n];

  const jumpOne =
    frogJumpUsingMemoization(n - 1, effortArr, dp) +
    Math.abs(effortArr[n] - effortArr[n - 1]);

  let jumpTwo = Infinity;

  if (n > 1) {
    jumpTwo =
      frogJumpUsingMemoization(n - 2, effortArr, dp) +
      Math.abs(effortArr[n] - effortArr[n - 2]);
  }

  dp[n] = Math.min(jumpOne, jumpTwo);

  return dp[n];
}

function frogJumpUsingTabulation(effort) {
  if (!effort || effort.length === 0) return 0;
  const n = effort.length;

  const dp = new Array(n).fill(Infinity);

  dp[0] = 0;

  for (let i = 1; i < n; i++) {
    let jumpOne = dp[i - 1] + Math.abs(effort[i] - effort[i - 1]);

    let jumpTwo = Infinity;

    if (i > 1) {
      jumpTwo = dp[i - 2] + Math.abs(effort[i] - effort[i - 2]);
    }

    dp[i] = Math.min(jumpOne, jumpTwo);
  }
  return dp[n - 1];
}

function frogJumpUsingTabulationWithMinimumSpaceComplexity(effort) {
  if (!effort || effort.length === 0) return 0;
  const n = effort.length;

  if (n === 1) return 0;

  let prev = 0;
  let prev2 = 0;

  for (let i = 1; i < n; i++) {
    let jumpTwo = Infinity;

    const jumpOne = prev + Math.abs(effort[i] - effort[i - 1]);
    if (i > 1) {
      jumpTwo = prev2 + Math.abs(effort[i] - effort[i - 2]);
    }

    const cur_i = Math.min(jumpOne, jumpTwo);
    prev2 = prev;
    prev = cur_i;
  }

  return prev;
}

function callFrogJump() {
  const effort = [30, 10, 60, 10, 60, 50];
  const n = effort.length - 1;
  let dp = new Array(effort.length).fill(-1);
  console.log(frogJump(n, effort));
  console.log(frogJumpUsingMemoization(n, effort, dp));
  console.log(frogJumpUsingTabulation(effort));
  console.log(frogJumpUsingTabulationWithMinimumSpaceComplexity(effort));
}

// *********************************************** Frog Jump *******************************************************

// ************************************************ Frog Jump with K distance **************************************

// Memoization TC : O (n * k) SC: O(n)
function frogJumpWithKSteps(n, effort, dp, k) {
  if (n === 0) return 0;

  let minimumSteps = Infinity;

  if (dp[n] !== -1) return dp[n];

  for (let j = 1; j <= k; j++) {
    let jump;
    if (n - j >= 0) {
      jump =
        frogJumpWithKSteps(n - j, effort, dp, k) +
        Math.abs(effort[n] - effort[n - j]);
      minimumSteps = Math.min(minimumSteps, jump);
    }
  }
  dp[n] = minimumSteps;
  return dp[n];
}

// Tabulation TC: O(n * k) SC: O(n)
function frogJumpWithKStepsTabulation(effort, dp, k, n) {
  if (!effort || effort.length === 0) return 0;

  dp[0] = 0;

  for (let i = 1; i < n; i++) {
    let minimumSteps = Infinity;

    for (j = 1; j <= k; j++) {
      if (i - j >= 0) {
        let jump = dp[i - j] + Math.abs(effort[i] - effort[i - j]);
        minimumSteps = Math.min(minimumSteps, jump);
      }
    }
    dp[i] = minimumSteps;
  }
  return dp[n];
}

function callFrogWithKSteps() {
  const effort = [30, 10, 60, 10, 60, 50];
  const n = effort.length - 1;
  let dp = new Array(effort.length).fill(-1);
  const k = 2;
  console.log(frogJumpWithKSteps(n, effort, dp, k));
  console.log(frogJumpWithKStepsTabulation(effort, dp, k, n));
}

// *****************************************************************************************************************

// *************************************************** Maximum Sum of Non Adjacent Elements ************************

function sumOfNonAdjacentElement(index, arr) {
  if (index === 0) return arr[index];
  if (index < 0) return 0;

  let pick = arr[index] + sumOfNonAdjacentElement(index - 2, arr);
  let notPick = sumOfNonAdjacentElement(index - 1, arr);

  return Math.max(pick, notPick);
}

function sumOfNonAdjacentElementUsingMemoization(index, arr, dp) {
  if (index < 0) return 0;
  if (index === 0) return arr[index];

  if (dp[index] !== -1) return dp[index];

  dp[index] = Math.max(
    arr[index] + sumOfNonAdjacentElementUsingMemoization(index - 2, arr, dp), // Pick
    sumOfNonAdjacentElementUsingMemoization(index - 1, arr, dp), // Not Pick
  );
  return dp[index];
}

function sumOfNonAdjacentElementUsingTabulation(arr) {
  let n = arr.length;
  let dp = new Array(n).fill(0);

  if (n === 1) return arr[0];
  dp[0] = arr[0];

  for (let i = 1; i < n; i++) {
    let take = i > 1 ? arr[i] + dp[i - 2] : arr[i];
    let notTake = dp[i - 1];
    dp[i] = Math.max(take, notTake);
  }
  return dp[n - 1];
}

function sumOfNonAdjacentElementUsingTabulationMinimumSpaceComplexity(arr) {
  let n = arr.length;

  let prev2 = 0;
  let prev = arr[0];
  let cur_i;
  for (let i = 1; i < n; i++) {
    let take = i > 1 ? arr[i] + prev2 : arr[i];
    let notTake = prev;
    cur_i = Math.max(take, notTake);
    prev2 = prev;
    prev = cur_i;
  }
  return prev;
}

function callSumOfNonAdjacentElement() {
  let arr = [2, 1, 4, 9];
  let n = arr.length;
  let dp = new Array(n).fill(-1);
  console.log(sumOfNonAdjacentElement(n - 1, arr));
  console.log(sumOfNonAdjacentElementUsingMemoization(n - 1, arr, dp));
  console.log(sumOfNonAdjacentElementUsingTabulation(arr));
  console.log(
    sumOfNonAdjacentElementUsingTabulationMinimumSpaceComplexity(arr),
  );
}

// ***********************************************************************************************************

// **************************************** House Robber 2 ***************************************************

function houseRobber(houseOfValues) {
  let temp1 = [],
    temp2 = [];
  let n = houseOfValues.length;
  if (n === 0) return 0;
  if (n === 1) return houseOfValues[i];
  for (let i = 0; i < n; i++) {
    if (i !== 0) temp1.push(houseOfValues[i]);
    if (i !== n - 1) temp2.push(houseOfValues[i]);
  }

  return Math.max(
    sumOfNonAdjacentElementUsingTabulationMinimumSpaceComplexity(temp1),
    sumOfNonAdjacentElementUsingTabulationMinimumSpaceComplexity(temp2),
  );
}

function callHouseRobber() {
  const arr = [1, 5, 1, 2, 6];
  console.log(houseRobber(arr));
}
// *************************************************************************************************************

function ninjaTrainingUsingRecursion(day, lastPerformedTask, arr, noOfTasks) {
  let max = 0;

  if (day === 0) {
    for (let i = 0; i < noOfTasks; i++) {
      max = Math.max(max, arr[day][i]);
    }
    return max;
  }
  for (let i = 0; i < noOfTasks; i++) {
    if (i !== lastPerformedTask) {
      let points =
        arr[day][i] + ninjaTrainingUsingRecursion(day - 1, i, arr, noOfTasks);
      max = Math.max(max, points);
    }
  }
  return max;
}

function ninjaTrainingUsingMemoization(
  day,
  lastPerformedTask,
  arr,
  noOfTasks,
  dp,
) {
  let max = 0;
  if (day === 0) {
    for (let i = 0; i < noOfTasks; i++) {
      max = Math.max(max, arr[day][i]);
    }
    return max;
  }

  if (dp[day][lastPerformedTask] !== -1) return dp[day][lastPerformedTask];
  for (let i = 0; i < noOfTasks; i++) {
    if (i !== lastPerformedTask) {
      let points =
        arr[day][i] +
        ninjaTrainingUsingMemoization(day - 1, i, arr, noOfTasks, dp);
      max = Math.max(max, points);
    }
  }
  dp[day][lastPerformedTask] = max;
  return dp[day][lastPerformedTask];
}

function ninjaTrainingUsingTabulation(arr) {
  let n = arr.length;
  let noOfTasks = arr[0].length + 1;
  let dp = Array.from({ length: n }, () => Array.from(noOfTasks).fill(0));
  dp[0][0] = Math.max(arr[0][1], arr[0][2]);
  dp[0][1] = Math.max(arr[0][0], arr[0][2]);
  dp[0][2] = Math.max(arr[0][0], arr[0][1]);
  dp[0][3] = Math.max(arr[0][0], Math.max(arr[0][1], arr[0][2]));

  for (let day = 1; day < n; day++) {
    for (let last = 0; last < noOfTasks; last++) {
      dp[day][last] = 0;
      for (let task = 0; task < noOfTasks - 1; task++) {
        if (task != last) {
          let points = arr[day][task] + dp[day - 1][task];
          dp[day][last] = Math.max(dp[day][last], points);
        }
      }
    }
  }
  return dp[n - 1][3];
}

function ninjaTrainingUsingTabulationMinimumSpaceComplexity(arr) {
  let n = arr.length;
  let noOfTasks = arr[0].length + 1;
  let prev = Array.from({ length: n }, () => Array.from(noOfTasks).fill(0));
  prev[0] = Math.max(arr[0][1], arr[0][2]);
  prev[1] = Math.max(arr[0][0], arr[0][2]);
  prev[2] = Math.max(arr[0][0], arr[0][1]);
  prev[3] = Math.max(arr[0][0], Math.max(arr[0][1], arr[0][2]));

  for (let day = 1; day < n; day++) {
    let temp = Array.from({ length: n }, () => Array.from(noOfTasks).fill(0));
    for (let last = 0; last < noOfTasks; last++) {
      temp[last] = 0;
      for (let task = 0; task < noOfTasks - 1; task++) {
        if (task != last) {
          let points = arr[day][task] + prev[task];
          temp[last] = Math.max(temp[last], points);
        }
      }
    }
    prev = temp;
  }

  return prev[3];
}
function callNinjaTraining() {
  let arr = [
    [10, 40, 70],
    [20, 50, 80],
    [30, 60, 90],
  ];

  let n = arr.length;
  let noOfTasks = arr[0].length;
  let dp = Array.from({ length: n }, () => Array(noOfTasks + 1).fill(-1));
  console.log(ninjaTrainingUsingRecursion(n - 1, n, arr, noOfTasks));
  console.log(ninjaTrainingUsingMemoization(n - 1, n, arr, noOfTasks, dp));
  console.log(ninjaTrainingUsingTabulation(arr));
  console.log(ninjaTrainingUsingTabulationMinimumSpaceComplexity(arr));
}
// *************************************************************************************************************

// ************************************** Count Unique Paths *********************************************************

function gridUniquePathRecursion(i, j) {
  if (i === 0 && j === 0) return 1;
  if (i < 0 || j < 0) return 0;
  let up = gridUniquePathRecursion(i - 1, j);
  let left = gridUniquePathRecursion(i, j - 1);

  return left + up;
}

function gridUniquePathMemoization(i, j, dp) {
  if (i === 0 && j === 0) return 1;
  if (i < 0 || j < 0) return 0;
  if (dp[i][j] !== -1) return dp[i][j];
  let up = gridUniquePathMemoization(i - 1, j, dp);
  let left = gridUniquePathMemoization(i, j - 1, dp);

  return (dp[i][j] = left + up);
}

function gridUniquePathTabulation(m, n) {
  let dp = new Array(m).fill().map(() => new Array(n).fill(0));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) {
        dp[0][0] = 1;
        continue;
      }
      let up = 0;
      let left = 0;

      if (i > 0) up = dp[i - 1][j];
      if (j > 0) left = dp[i][j - 1];

      dp[i][j] = up + left;
    }
  }
  return dp[m - 1][n - 1];
}

function gridUniquePathTabulationWithSpaceOptimisation(m, n) {
  let prev = new Array(m).fill().map(() => new Array(n).fill(0));

  for (let i = 0; i < m; i++) {
    let temp = new Array(n).fill(0);
    for (let j = 0; j < m; j++) {
      if (i === 0 && j === 0) {
        temp[j] = 1;
        continue;
      }

      let up = i > 0 ? prev[j] : 0;
      let left = j > 0 ? temp[j - 1] : 0;

      temp[j] = up + left;
    }
    prev = temp;
  }
  return prev[n - 1];
}

// **************************************************************************************************************
function callGridUniquePath() {
  let m = 3,
    n = 2;
  let dp = Array.from({ length: m }, () => Array(n).fill(-1));
  console.log(gridUniquePathRecursion(m - 1, n - 1));
  console.log(gridUniquePathMemoization(m - 1, n - 1, dp));
  console.log(gridUniquePathTabulation(m, n));
  console.log(gridUniquePathTabulationWithSpaceOptimisation(m, n));
}

// *************************************************************************************************************

// ********************************************* Unique Path 2 **************************************************

function gridUniquePathWithDeadCellRecursion(grid, i, j) {
  if (i >= 0 && j >= 0 && grid[i][j] === -1) return 0;
  if (i === 0 && j === 0) return 1;
  if (i < 0 || j < 0) return 0;

  let up = gridUniquePathWithDeadCellRecursion(grid, i - 1, j);
  let left = gridUniquePathWithDeadCellRecursion(grid, i, j - 1);

  return up + left;
}

function gridUniquePathWithDeadCellMemoization(grid, i, j, dp) {
  if (i >= 0 && j >= 0 && grid[i][j] === -1) return 0;
  if (i < 0 || j < 0) return 0;
  if (i === 0 && j === 0) return 1;
  if (dp[i][j] !== -1) return dp[i][j];

  let up = gridUniquePathWithDeadCellMemoization(grid, i - 1, j, dp);
  let left = gridUniquePathWithDeadCellMemoization(grid, i, j - 1, dp);

  return (dp[i][j] = up + left);
}

function gridUniquePathWithDeadCellTabulation(grid, m, n) {
  let dp = Array.from({ length: grid.length }, () =>
    Array(grid[0].length).fill(0),
  );

  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      if (grid[i][j] === -1) {
        dp[i][j] = 0;
        continue;
      }
      if (i === 0 && j === 0) {
        dp[i][j] = 1;
        continue;
      }
      let up = 0;
      let left = 0;
      if (i > 0) up = dp[i - 1][j];
      if (j > 0) left = dp[i][j - 1];
      dp[i][j] = up + left;
    }
  }
  return dp[m][n];
}

function gridUniquePathWithDeadCellTabulationSpaceOptimisation(grid, m, n) {
  let prev = new Array(grid.length).fill(0);

  for (let i = 0; i < grid[0].length; i++) {
    let temp = new Array(grid[0].length).fill(0);
    for (let j = 0; j < grid[0].length; j++) {
      if (i === 0 && j === 0) {
        temp[j] = 1;
        continue;
      }
      if (grid[i][j] === -1) {
        temp[j] = 0;
        continue;
      }

      let up = 0;
      let left = 0;

      if (i > 0) up = prev[j];
      if (j > 0) left = temp[j - 1];
      temp[j] = up + left;
    }
    prev = temp;
  }
  return prev[grid[0].length - 1];
}

function callGridUniquePathWithDeadCell() {
  let grid = [
    [0, 0, 0],
    [0, -1, 0],
    [0, 0, 0],
  ];
  let dp = Array.from({ length: grid.length }, () =>
    Array(grid[0].length).fill(-1),
  );
  console.log(gridUniquePathWithDeadCellRecursion(grid, 2, 2));
  console.log(gridUniquePathWithDeadCellMemoization(grid, 2, 2, dp));
  console.log(gridUniquePathWithDeadCellTabulation(grid, 2, 2));
  console.log(
    gridUniquePathWithDeadCellTabulationSpaceOptimisation(grid, 2, 2),
  );
}

// **************************************************************************************************************

function minimumPathGridRecursion(i, j, grid) {
  if (i === 0 && j === 0) return grid[0][0];
  if (i < 0 || j < 0) return Infinity;

  let up = grid[i][j] + minimumPathGridRecursion(i - 1, j, grid);
  let down = grid[i][j] + minimumPathGridRecursion(i, j - 1, grid);

  return Math.min(up, down);
}

function minimumPathGridMemoisation(i, j, grid, dp) {
  if (i === 0 && j === 0) return grid[0][0];
  if (i < 0 || j < 0) return Infinity;

  if (dp[i][j] !== -1) return dp[i][j];

  let up = grid[i][j] + minimumPathGridMemoisation(i - 1, j, grid, dp);
  let left = grid[i][j] + minimumPathGridMemoisation(i, j - 1, grid, dp);

  return (dp[i][j] = Math.min(up, left));
}

function minimumPathGridTabulation(grid) {
  let dp = Array.from({ length: grid.length }, () =>
    Array(grid[0].length).fill(0),
  );
  const m = grid.length;
  const n = grid[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) {
        dp[i][j] = grid[i][j];
        continue;
      }
      let up = Infinity;
      let left = Infinity;

      if (i > 0) up = dp[i - 1][j] + grid[i][j];
      if (j > 0) left = dp[i][j - 1] + grid[i][j];

      dp[i][j] = Math.min(up, left);
    }
  }
  return dp[m - 1][n - 1];
}

function minimumPathGridUsingTabulationWithMinimumSpaceComplexity(grid) {
  const m = grid.length;
  const n = grid[0].length;

  let prev = new Array(n).fill(0);

  for (let i = 0; i < m; i++) {
    let temp = new Array(n).fill(0);
    for (let j = 0; j < n; j++) {
      let up = Infinity;
      let down = Infinity;
      if (i === 0 && j === 0) {
        temp[j] = grid[i][j];
        continue;
      }
      if (i > 0) up = prev[j] + grid[i][j];
      if (j > 0) left = temp[j - 1] + grid[i][j];
      temp[j] = Math.min(up, left);
    }
    prev = temp;
  }
  return prev[n - 1];
}

function callMinimumUniquePath() {
  const grid = [
    [10, 8, 2],
    [10, 5, 100],
    [1, 1, 2],
  ];
  const m = 3;
  const n = 3;
  let dp = Array.from({ length: m }, () => Array(n).fill(-1));
  console.log(minimumPathGridRecursion(m - 1, n - 1, grid));
  console.log(minimumPathGridMemoisation(m - 1, n - 1, grid, dp));
  console.log(minimumPathGridTabulation(grid));
  console.log(minimumPathGridUsingTabulationWithMinimumSpaceComplexity(grid));
}
// **************************************  Fixed Starting Point and Variable Ending Point - Traingle *********************

function findMinimumPathInTriangle(i, j, n, triagGrid) {
  if (i === n - 1) return triagGrid[i][j];

  const down =
    triagGrid[i][j] + findMinimumPathInTriangle(i + 1, j, n, triagGrid);
  const diag =
    triagGrid[i][j] + findMinimumPathInTriangle(i + 1, j + 1, n, triagGrid);

  return Math.min(down, diag);
}

function findMinimumPathInTriangleMemoisation(i, j, n, triagGrid, dp) {
  if (i === n - 1) return triagGrid[i][j];
  if (dp[i][j] !== -1) return dp[i][j];

  const down =
    triagGrid[i][j] + findMinimumPathInTriangle(i + 1, j, n, triagGrid, dp);
  const diag =
    triagGrid[i][j] + findMinimumPathInTriangle(i + 1, j + 1, n, triagGrid, dp);

  return (dp[i][j] = Math.min(down, diag));
}

function findMinimumPathInTriangleTabulation(triagGrid) {
  const n = triagGrid.length;
  const dp = triagGrid.map((row) => row.map(() => 0));

  for (let i = 0; i < n; i++) {
    dp[n - 1][i] = triagGrid[n - 1][i];
  }
  for (let i = n - 2; i >= 0; i--) {
    for (let j = i; j >= 0; j--) {
      const down = dp[i + 1][j] + triagGrid[i][j];
      const diag = dp[i + 1][j + 1] + triagGrid[i][j];
      dp[i][j] = Math.min(down, diag);
    }
  }
  return dp[0][0];
}

function findMinimumPathInTriangleTabulationMinimumSpaceComplexity(triagGrid) {
  const n = triagGrid.length;

  let prev = triagGrid[n - 1].slice();
  for (let i = n - 2; i >= 0; i--) {
    let temp = new Array(triagGrid[i].length);
    for (let j = 0; j <= i; j++) {
      const down = prev[j];
      const diag = prev[j + 1];

      temp[j] = triagGrid[i][j] + Math.min(down, diag);
    }

    prev = temp;
  }
  return prev[0];
}

function callMinimumPathInTriangle() {
  const triangle = [[1], [2, 3], [3, 6, 7], [8, 9, 6, 10]];
  const n = triangle.length;
  let dp = triangle.map((row) => row.map(() => -1));
  console.log(findMinimumPathInTriangle(0, 0, n, triangle));
  console.log(findMinimumPathInTriangleMemoisation(0, 0, n, triangle, dp));
  console.log(findMinimumPathInTriangleTabulation(triangle));
  console.log(
    findMinimumPathInTriangleTabulationMinimumSpaceComplexity(triangle),
  );
}

// ***********************************************************************************************************************

// ******************************************* Variable Starting and Ending Point - Maximum/Minimum Path Sum in a matrix ****************************************

function maximumPathInMatrixRecursion(i, j, grid, m) {
  // Base case
  if (j < 0 || j > m - 1) return -Infinity;
  if (i === 0) return grid[i][j];

  const up = grid[i][j] + maximumPathInMatrixRecursion(i - 1, j, grid, m);
  const leftUpwardDiag =
    grid[i][j] + maximumPathInMatrixRecursion(i - 1, j - 1, grid, m);
  const rightUpwardDiag =
    grid[i][j] + maximumPathInMatrixRecursion(i - 1, j + 1, grid, m);

  return Math.max(up, leftUpwardDiag, rightUpwardDiag);
}

function maximumPathInMatrixMemoisation(i, j, grid, m, dp) {
  // Base case
  if (j < 0 || j > m - 1) return -Infinity;
  if (i === 0) return grid[i][j];
  if (dp[i][j] !== -1) return dp[i][j];

  const up = grid[i][j] + maximumPathInMatrixMemoisation(i - 1, j, grid, m, dp);
  const leftUpwardDiag =
    grid[i][j] + maximumPathInMatrixMemoisation(i - 1, j - 1, grid, m, dp);
  const rightUpwardDiag =
    grid[i][j] + maximumPathInMatrixMemoisation(i - 1, j + 1, grid, m, dp);

  return (dp[i][j] = Math.max(up, leftUpwardDiag, rightUpwardDiag));
}

function maximumPathInMatrixTabulation(grid) {
  let m = grid[0].length;
  let n = grid.length;

  let dp = Array.from({ length: n }, () => Array(m).fill(0));
  for (let j = 0; j < m; j++) {
    dp[0][j] = grid[0][j];
  }

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < m; j++) {
      const up = grid[i][j] + dp[i - 1][j];
      const leftUpwardDiag = j > 0 ? grid[i][j] + dp[i - 1][j - 1] : -Infinity;
      const rightUpwardDiag =
        j < m - 1 ? grid[i][j] + dp[i - 1][j + 1] : -Infinity;

      dp[i][j] = Math.max(up, leftUpwardDiag, rightUpwardDiag);
    }
  }

  let max = dp[n - 1][0];
  for (let j = 1; j < m; j++) {
    max = Math.max(max, dp[n - 1][j]);
  }
  return max;
}

function maximumPathInMatrixTabulationSpaceOptimisation(grid) {
  let m = grid[0].length;
  let n = grid.length;

  let prev = [...grid[0]];

  for (let i = 1; i < n; i++) {
    let temp = [...grid[i]];
    for (let j = 0; j < m; j++) {
      const up = temp[j] + prev[j];
      const leftUpwardDiag = j > 0 ? temp[j] + prev[j - 1] : -Infinity;
      const rightUpwardDiag = j < m - 1 ? temp[j] + prev[j + 1] : -Infinity;
      temp[j] = Math.max(up, leftUpwardDiag, rightUpwardDiag);
    }

    prev = temp;
  }
  let max = prev[0];
  for (let j = 1; j < m; j++) {
    max = Math.max(max, prev[j]);
  }
  return max;
}

function callMaximumPathInMatrix() {
  const grid = [
    [1, 2, 10, 4],
    [100, 3, 2, 1],
    [1, 1, 2, 2],
    [1, 2, 2, 1],
  ];
  let n = grid.length;
  let m = grid[0].length;
  let max = -Infinity;
  let maxFromMemo = -Infinity;
  let dp = Array.from({ length: n }, () => Array(m).fill(-1));
  for (let j = 0; j < m; j++) {
    max = Math.max(max, maximumPathInMatrixRecursion(n - 1, j, grid, m));
    maxFromMemo = Math.max(
      max,
      maximumPathInMatrixMemoisation(n - 1, j, grid, m, dp),
    );
  }
  console.log(max);
  console.log(maxFromMemo);

  console.log(maximumPathInMatrixTabulation(grid));
  console.log(maximumPathInMatrixTabulationSpaceOptimisation(grid));
}
// **************************************************************************************************************************************************************

// ***************************************** Cherry Pickup - 3D DP **********************************************************************************************

function maximumChocolates(i, j1, j2, m, n, grid) {
  if (j1 < 0 || j2 < 0 || j1 >= m || j2 >= m) return -Infinity;
  if (i === n - 1) {
    if (j1 === j2) {
      return grid[i][j2];
    } else {
      return grid[i][j1] + grid[i][j2];
    }
  }

  // explore all paths of Alice and Bob simultaneously(leftdiag,down,rightdiag)
  let max = -Infinity;
  for (let dj1 = -1; dj1 <= 1; dj1++) {
    for (let dj2 = -1; dj2 <= 1; dj2++) {
      let value = 0;
      if (j1 === j2) {
        // If bob and alice are at same postion
        value = grid[i][j1];
      } else {
        value = grid[i][j1] + grid[i][j2];
      }
      value += maximumChocolates(i + 1, j1 + dj1, j2 + dj2, m, n, grid);
      max = Math.max(max, value);
    }
  }
  return max;
}

function maximumChocolatesMemoization(i, j1, j2, m, n, grid, dp) {
  if (j1 < 0 || j2 < 0 || j1 >= m || j2 >= m) return -Infinity;
  if (i === n - 1) {
    if (j1 === j2) {
      return grid[i][j2];
    } else {
      return grid[i][j1] + grid[i][j2];
    }
  }

  if (dp[i][j1][j2] !== -1) return dp[i][j1][j2];

  // explore all paths of Alice and Bob simultaneously(leftdiag,down,rightdiag)
  let max = -Infinity;
  for (let dj1 = -1; dj1 <= 1; dj1++) {
    for (let dj2 = -1; dj2 <= 1; dj2++) {
      let value = 0;
      if (j1 === j2) {
        // If bob and alice are at same postion
        value = grid[i][j1];
      } else {
        value = grid[i][j1] + grid[i][j2];
      }
      value += maximumChocolates(i + 1, j1 + dj1, j2 + dj2, m, n, grid);
      max = Math.max(max, value);
    }
  }
  return (dp[i][j1][j2] = max);
}

function maximumChocolatesTabulation(m, n, grid) {
  // Tabulation
  let dp = Array.from({ length: n }, () =>
    Array.from({ length: m }, () => Array(m).fill(0)),
  );

  for (let j1 = 0; j1 < m; j1++) {
    for (let j2 = 0; j2 < m; j2++) {
      if (j1 === j2) {
        dp[n - 1][j1][j2] = grid[n - 1][j1];
      } else {
        dp[n - 1][j1][j2] = grid[n - 1][j1] + grid[n - 1][j2];
      }
    }
  }

  for (let i = n - 2; i >= 0; i--) {
    for (let j1 = 0; j1 < m; j1++) {
      for (let j2 = 0; j2 < m; j2++) {
        let max = -Infinity;
        for (let dj1 = -1; dj1 <= 1; dj1++) {
          for (let dj2 = -1; dj2 <= 1; dj2++) {
            let value = 0;
            if (j1 === j2) {
              // If bob and alice are at same postion
              value = grid[i][j1];
            } else {
              value = grid[i][j1] + grid[i][j2];
            }
            if (
              j1 + dj1 >= 0 &&
              j1 + dj1 < m &&
              j2 + dj2 >= 0 &&
              j2 + dj2 < m
            ) {
              value += dp[i + 1][j1 + dj1][j2 + dj2];
            } else {
              value += -Infinity;
            }
            max = Math.max(max, value);
          }
        }
        dp[i][j1][j2] = max;
      }
    }
  }
  return dp[0][0][m - 1];
}

function maximumChocolatesTabulationSpaceOptimisation(m, n, grid) {
  let next = Array.from({ length: m }, () => Array(m).fill(0));
  // Current row dp array
  let curr = Array.from({ length: m }, () => Array(m).fill(0));

  // Base case: last row
  for (let j1 = 0; j1 < m; j1++) {
    for (let j2 = 0; j2 < m; j2++) {
      if (j1 === j2) next[j1][j2] = grid[n - 1][j1];
      else next[j1][j2] = grid[n - 1][j1] + grid[n - 1][j2];
    }
  }

  // Fill DP table bottom-up
  for (let i = n - 2; i >= 0; i--) {
    for (let j1 = 0; j1 < m; j1++) {
      for (let j2 = 0; j2 < m; j2++) {
        let maxi = -1e9;
        let currChoco = j1 === j2 ? grid[i][j1] : grid[i][j1] + grid[i][j2];
        for (let dj1 = -1; dj1 <= 1; dj1++) {
          for (let dj2 = -1; dj2 <= 1; dj2++) {
            let newJ1 = j1 + dj1;
            let newJ2 = j2 + dj2;
            if (newJ1 >= 0 && newJ1 < m && newJ2 >= 0 && newJ2 < m) {
              maxi = Math.max(maxi, currChoco + next[newJ1][newJ2]);
            } else {
              maxi = Math.max(maxi, -1e9);
            }
          }
        }
        curr[j1][j2] = maxi;
      }
    }
    // Move current row to next row
    next = curr.map((row) => row.slice());
  }
  // Answer is starting position
  return next[0][m - 1];
}

function callMaximumChocolates() {
  let grid = [
    [2, 3, 1, 2],
    [3, 4, 2, 2],
    [5, 6, 3, 5],
  ];
  const n = grid.length;
  const m = grid[0].length;
  console.log(maximumChocolates(0, 0, m - 1, m, n, grid));

  // 3D DP
  let dp = Array.from({ length: n }, () =>
    Array.from({ length: m }, () => Array(m).fill(-1)),
  );
  console.log(maximumChocolatesMemoization(0, 0, m - 1, m, n, grid, dp));
  console.log(maximumChocolatesTabulation(m, n, grid));
  console.log(maximumChocolatesTabulationSpaceOptimisation(m, n, grid));
}

// **************************************************************************************************************************************************************

// ************************************ Subset Sum Equals To Target *********************************************************************************************

function subsequenceSumEqualToTarget(index, target, arr) {
  if (target === 0) return true;
  if (index === 0) return arr[0] === target;

  let notTake = subsequenceSumEqualToTarget(index - 1, target, arr);
  let take = false;
  if (arr[index] < target) {
    take = subsequenceSumEqualToTarget(index - 1, target - arr[index], arr);
  }

  return take || notTake;
}

function subsequenceSumEqualToTargetMemoisation(index, target, arr, dp) {
  if (target === 0) return true;
  if (index === 0) return arr[0] === target;

  if (dp[index][target] !== -1) return dp[index][target];

  let notTake = subsequenceSumEqualToTarget(index - 1, target, arr);
  let take = false;
  if (arr[index] < target) {
    take = subsequenceSumEqualToTarget(index - 1, target - arr[index], arr);
  }

  return (dp[index][target] = take || notTake);
}

function subsequenceSumEqualToTargetTabulation(k, arr) {
  let n = arr.length;
  let dp = Array.from({ length: n }, () => Array(k + 1).fill(0));

  for (let i = 0; i < n; i++) dp[i][0] = true;

  if (arr[0] <= k) dp[0][arr[0]] = true;

  for (let i = 1; i < n; i++) {
    for (let target = 1; target <= k; target++) {
      let notTake = dp[i - 1][target];
      let take = false;
      if (arr[i] < target) {
        take = dp[i - 1][target - arr[i]];
      }
      dp[i][target] = take || notTake;
    }
  }
  return dp[n - 1][k];
}

function subsequenceSumEqualToTargetTabulationSpaceOptimisation(n, k, arr) {
  // Initialize previous DP row with false
  let prev = Array(k + 1).fill(false);

  // Base case: sum 0 is always possible (empty subset)
  prev[0] = true;

  // Base case: if first element <= k, mark true
  if (arr[0] <= k) {
    prev[arr[0]] = true;
  }

  // Iterate through elements starting from second
  for (let ind = 1; ind < n; ind++) {
    let cur = Array(k + 1).fill(false);
    cur[0] = true; // sum 0 is always possible

    for (let target = 1; target <= k; target++) {
      let notTaken = prev[target]; // without current element
      let taken = false;

      if (arr[ind] <= target) {
        taken = prev[target - arr[ind]]; // with current element
      }

      // Mark true if either option is true
      cur[target] = notTaken || taken;
    }

    prev = cur; // move current to prev for next iteration
  }

  // Return if sum k is possible using all elements
  return prev[k];
}

function callsubsequenceSumEqualToTarget() {
  let arr = [2, 3, 1, 1];
  let n = arr.length;
  let k = 4;
  let dp = Array.from({ length: n }, () => Array(k + 1).fill(-1));
  console.log(subsequenceSumEqualToTarget(n - 1, k, arr));
  console.log(subsequenceSumEqualToTargetMemoisation(n - 1, k, arr, dp));
  console.log(subsequenceSumEqualToTargetTabulation(k, arr));
  console.log(
    subsequenceSumEqualToTargetTabulationSpaceOptimisation(n, k, arr),
  );
}

// **************************************************************************************************************************************************************
// ***************************************** Subset Sum Equal to K **********************************************************************************************

function partitionEqualSubsetSum() {
  let totalSum = 0;
  let arr = [2, 3, 3, 3, 4, 5];
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    totalSum += arr[i];
  }
  if (totalSum % 2 !== 0) return false;
  let target = totalSum / 2;
  console.log(subsequenceSumEqualToTarget(n - 1, target, arr));
}

// **************************************************************************************************************************************************************

// ******************************************* Partition Set two Subset with minimum absolute difference ********************************************************

function minSubsetSumDiff() {
  let arr = [3, 2, 7];
  let totalSum = 0;
  let n = arr.length;
  for (let i = 0; i < n; i++) totalSum += arr[i];

  let k = totalSum;

  let dp = Array.from({ length: n }, () => Array(k + 1).fill(0));

  for (let i = 0; i < n; i++) dp[i][0] = true;

  if (arr[0] <= k) dp[0][arr[0]] = true;

  for (let i = 1; i < n; i++) {
    for (let target = 1; target <= k; target++) {
      let notTake = dp[i - 1][target];
      let take = false;
      if (arr[i] <= target) {
        take = dp[i - 1][target - arr[i]];
      }
      dp[i][target] = take || notTake;
    }
  }

  let minimum = Infinity;
  for (let s1 = 0; s1 <= totalSum / 2; s1++) {
    // Watch Video to understand total Sum / 2
    if (dp[n - 1][s1] === true) {
      minimum = Math.min(minimum, Math.abs(totalSum - s1 - s1)); // s2 = totalSum - s1
    }
  }
  console.log(minimum);
}

function minSubsetSumDiffSpaceOptimisation() {
  let arr = [3, 2, 7];
  let totalSum = 0;
  let n = arr.length;
  for (let i = 0; i < n; i++) totalSum += arr[i];

  let k = totalSum;

  let prev = Array(k + 1).fill(false);

  // Base case: sum 0 is always possible (empty subset)
  prev[0] = true;

  // Base case: if first element <= k, mark true
  if (arr[0] <= k) {
    prev[arr[0]] = true;
  }

  // Iterate through elements starting from second
  for (let ind = 1; ind < n; ind++) {
    let cur = Array(k + 1).fill(false);
    cur[0] = true; // sum 0 is always possible

    for (let target = 1; target <= k; target++) {
      let notTaken = prev[target]; // without current element
      let taken = false;

      if (arr[ind] <= target) {
        taken = prev[target - arr[ind]]; // with current element
      }

      // Mark true if either option is true
      cur[target] = notTaken || taken;
    }

    prev = cur; // move current to prev for next iteration
  }

  let minimum = Infinity;
  for (let s1 = 0; s1 <= totalSum / 2; s1++) {
    // Watch Video to understand total Sum / 2
    if (prev[s1] === true) {
      minimum = Math.min(minimum, Math.abs(totalSum - s1 - s1)); // s2 = totalSum - s1
    }
  }
  console.log(minimum);
}

function callMinimiSubsetDiff() {
  minSubsetSumDiff();
  minSubsetSumDiffSpaceOptimisation();
}
// **************************************************************************************************************************************************************

// ********************************************    Count Subset With Sum K         ******************************************************************************

function numberOfSubsetsWithSumk(index, target, arr) {
  if (target === 0) return 1;
  if (index === 0) return arr[0] === target;

  let notPick = numberOfSubsetsWithSumk(index - 1, target, arr);
  let pick = 0;
  if (arr[index] <= target) {
    pick = numberOfSubsetsWithSumk(index - 1, target - arr[index], arr);
  }
  return pick + notPick;
}

// What if the case if [0,0,1] and target is 1 the answer should be 4 but by the method above the answer will be 1

function numberOfSubsetsWithSumk(index, target, arr) {
  if (index === 0) {
    if (target === 0 && arr[0] === 0) return 2;
    if (target === 0 || sum === arr[0]) return 1;
    return 0;
  }

  let notPick = numberOfSubsetsWithSumk(index - 1, target, arr);
  let pick = 0;
  if (arr[index] <= target) {
    pick = numberOfSubsetsWithSumk(index - 1, target - arr[index], arr);
  }
  return pick + notPick;
}

function numberOfSubsetsWithSumkMemoisation(index, target, arr, dp) {
  if (target === 0) return 1;
  if (index === 0) return arr[0] === target;

  if (dp[index][target] !== -1) return dp[index][target];

  let notPick = numberOfSubsetsWithSumk(index - 1, target, arr);
  let pick = 0;
  if (arr[index] <= target) {
    pick = numberOfSubsetsWithSumk(index - 1, target - arr[index], arr);
  }
  return (dp[index][target] = pick + notPick);
}

function numberOfSubsetsWithSumkTabulation(target, arr) {
  let n = arr.length;
  let dp = Array.from({ length: n }, () => Array(target + 1).fill(0));
  for (let i = 0; i < n; i++) {
    dp[i][0] = 1;
  }
  dp[0][arr[0]] = 1;

  for (let index = 1; index < n; index++) {
    for (let sum = 0; sum <= target; sum++) {
      let notPick = dp[index - 1][sum];
      let pick = 0;
      if (arr[index] <= sum) {
        pick = dp[index - 1][sum - arr[index]];
      }
      dp[index][sum] = pick + notPick;
    }
  }
  return dp[n - 1][target];
}

function numberOfSubsetsWithSumkTabulationSpaceOptimisation(target, arr) {
  let n = arr.length;
  let prev = new Array(target + 1).fill(0);
  prev[0] = 1;
  if (arr[0] <= target) prev[arr[0]] = 1;

  for (let index = 1; index < n; index++) {
    let temp = new Array(target + 1).fill(0);
    temp[0] = 1;
    for (let sum = 0; sum <= target; sum++) {
      let notPick = prev[sum];
      let pick = 0;
      if (arr[index] <= sum) {
        pick = prev[sum - arr[index]];
      }
      temp[sum] = pick + notPick;
    }
    prev = temp;
  }
  return prev[target];
}

function callNumberOfSubsetsWithSumk() {
  let arr = [1, 2, 2, 3];
  let n = arr.length;
  let k = 3;
  let dp = Array.from({ length: n }, () => Array(k + 1).fill(-1));
  console.log(numberOfSubsetsWithSumk(n - 1, k, arr));
  console.log(numberOfSubsetsWithSumkMemoisation(n - 1, k, arr, dp));
  console.log(numberOfSubsetsWithSumkTabulation(k, arr));
  console.log(numberOfSubsetsWithSumkTabulationSpaceOptimisation(k, arr));
}
// **************************************************************************************************************************************************************

// **************************************************************************************************************************************************************
class Solution {
  // Function to count partitions with given difference
  countPartitions(arr, d) {
    // Calculate total sum of array
    let totalSum = arr.reduce((a, b) => a + b, 0);

    // Check if solution is possible
    if ((totalSum + d) % 2 !== 0 || d > totalSum) return 0;

    // Calculate target sum
    let K = (totalSum + d) / 2;

    // Create dp array of size K+1
    let dp = new Array(K + 1).fill(0);
    dp[0] = 1;

    // If first element <= K, mark it
    if (arr[0] <= K) dp[arr[0]] += 1;

    // Process remaining elements
    for (let i = 1; i < arr.length; i++) {
      let curr = new Array(K + 1).fill(0);
      curr[0] = 1;

      for (let t = 0; t <= K; t++) {
        let notTake = dp[t];
        let take = 0;
        if (arr[i] <= t) {
          take = dp[t - arr[i]];
        }
        curr[t] = take + notTake;
      }
      dp = curr;
    }

    return dp[K];
  }
}

// Driver code
let sol = new Solution();
let arr = [1, 2, 3, 4];
let d = 1;
// console.log(sol.countPartitions(arr, d));

// **************************************************************************************************************************************************************

// ********************************************************************** 0/1 Knapsack Problem *******************************************************************

function knapSackRecursion(index, W, waitList, valList) {
  if (index === 0) {
    if (waitList[0] <= W) return valList[0];
    return 0;
  }
  let notTake = knapSackRecursion(index - 1, W, waitList, valList);
  let take = -Infinity;
  if (waitList[index] <= W) {
    take =
      valList[index] +
      knapSackRecursion(index - 1, W - waitList[index], waitList, valList);
  }

  return Math.max(take, notTake);
}

function knapSackMemoisation(index, W, waitList, valList, dp) {
  if (index === 0) {
    if (waitList[0] <= W) return valList[0];
    return 0;
  }
  if (dp[index][W] !== -1) return dp[index][W];

  let notTake = knapSackRecursion(index - 1, W, waitList, valList);
  let take = -Infinity;
  if (waitList[index] <= W) {
    take =
      valList[index] +
      knapSackRecursion(index - 1, W - waitList[index], waitList, valList);
  }

  return (dp[index][W] = Math.max(take, notTake));
}

function knapSackTabulation(W, waitList, valList) {
  let n = waitList.length;
  let dp = Array.from({ length: n }, () => Array(W + 1).fill(0));
  for (let wt = waitList[0]; wt < W; wt++) {
    dp[0][wt] = valList[0];
  }

  for (let index = 1; index < n; index++) {
    for (let wt = 0; wt <= W; wt++) {
      let notTake = dp[index - 1][wt];
      let take = -Infinity;
      if (waitList[index] <= wt) {
        take = valList[index] + dp[index - 1][wt - waitList[index]];
      }
      dp[index][wt] = Math.max(take, notTake);
    }
  }
  return dp[n - 1][W];
}

function knapSackTabulationSpaceOptimisation(W, waitList, valList) {
  let n = waitList.length;
  let prev = new Array(W + 1).fill(0);
  let cur = new Array(W + 1).fill(0);

  for (let wt = waitList[0]; wt < W; wt++) {
    prev[wt] = valList[0];
  }
  for (let index = 1; index < n; index++) {
    for (let wt = 0; wt <= W; wt++) {
      let notTake = prev[wt];
      let take = -Infinity;
      if (waitList[index] <= wt) {
        take = valList[index] + prev[wt - waitList[index]];
      }
      cur[wt] = Math.max(take, notTake);
    }
    prev = cur;
  }
  return prev[W];
}

// Can we optimise this more
function knapSackTabulationMoreSpaceOptimisation(W, waitList, valList) {
  let n = waitList.length;
  let prev = new Array(W + 1).fill(0);

  for (let wt = waitList[0]; wt < W; wt++) {
    prev[wt] = valList[0];
  }
  for (let index = 1; index < n; index++) {
    for (let wt = W; wt >= 0; wt--) {
      // 1st change Here
      let notTake = prev[wt];
      let take = -Infinity;
      if (waitList[index] <= wt) {
        take = valList[index] + prev[wt - waitList[index]];
      }
      prev[wt] = Math.max(take, notTake);
    }
  }
  return prev[W];
}

function callKnapSack() {
  const waitList = [3, 2, 5];
  const valList = [30, 40, 60];
  let W = 6;
  let n = valList.length;
  let dp = Array.from({ length: n }, () => Array(W + 1).fill(-1));
  console.log(knapSackRecursion(n - 1, W, waitList, valList));
  console.log(knapSackMemoisation(n - 1, W, waitList, valList, dp));
  console.log(knapSackTabulation(W, waitList, valList));
  console.log(knapSackTabulationSpaceOptimisation(W, waitList, valList));
  console.log(knapSackTabulationMoreSpaceOptimisation(W, waitList, valList));
}

// ***************************************************************************************************************************************************************

// ***************************************** Minimum No Of Coins *************************************************************************************************

function minimuNoOfCoins(index, target, coinsDenom) {
  if (index === 0) {
    if (target % coinsDenom[index] === 0) {
      return target / coinsDenom[index];
    } else {
      return Infinity;
    }
  }
  let notTake = 0 + minimuNoOfCoins(index - 1, target, coinsDenom);
  let take = Infinity;
  if (coinsDenom[index] <= target) {
    take = 1 + minimuNoOfCoins(index, target - coinsDenom[index], coinsDenom);
  }
  return Math.min(take, notTake);
}

function minimuNoOfCoinsMemoisation(index, target, coinsDenom, dp) {
  if (index === 0) {
    if (target % coinsDenom[index] === 0) {
      return target / coinsDenom[index];
    } else {
      return Infinity;
    }
  }
  if (dp[index][target] !== -1) return dp[index][target];

  let notTake = 0 + minimuNoOfCoins(index - 1, target, coinsDenom);
  let take = Infinity;
  if (coinsDenom[index] <= target) {
    take = 1 + minimuNoOfCoins(index, target - coinsDenom[index], coinsDenom);
  }
  return (dp[index][target] = Math.min(take, notTake));
}

function minimuNoOfCoinsTabulation(target, coinsDenom) {
  let n = coinsDenom.length;
  let dp = Array.from({ length: n }, () => Array(target + 1).fill(0));

  for (let t = 0; t <= target; t++) {
    if (t % coinsDenom[0] === 0) {
      dp[0][t] = t / coinsDenom[0];
    } else {
      dp[0][t] = Infinity;
    }
  }

  for (let i = 1; i < n; i++) {
    for (let t = 0; t <= target; t++) {
      let notTake = 0 + dp[i - 1][t];
      let take = Infinity;
      if (coinsDenom[i] <= t) {
        take = 1 + dp[i][t - coinsDenom[i]];
      }
      dp[i][t] = Math.min(take, notTake);
    }
  }

  return dp[n - 1][target];
}

function minimumNumberOfCoinsTabulationSpaceOptimisation(target, coinsDenom) {
  let n = coinsDenom.length;
  let prev = new Array(target + 1).fill(0);
  let cur = new Array(target + 1).fill(0);

  for (let t = 0; t <= target; t++) {
    if (t % coinsDenom[0] === 0) {
      prev[t] = t / coinsDenom[0];
    } else {
      prev[t] = Infinity;
    }
  }

  for (let i = 1; i < n; i++) {
    for (let t = 0; t <= target; t++) {
      let notTake = 0 + prev[t];
      let take = Infinity;
      if (coinsDenom[i] <= t) {
        take = 1 + cur[t - coinsDenom[i]];
      }
      cur[t] = Math.min(take, notTake);
    }
    prev = cur;
  }

  return prev[target];
}
function callMinimumNoOfCoins() {
  let coins = [1, 2, 3];
  let n = coins.length;
  let target = 7;
  let dp = Array.from({ length: n }, () => Array(target + 1).fill(-1));
  console.log(minimuNoOfCoins(n - 1, target, coins));
  console.log(minimuNoOfCoinsMemoisation(n - 1, target, coins, dp));
  console.log(minimuNoOfCoinsTabulation(target, coins));
  console.log(minimumNumberOfCoinsTabulationSpaceOptimisation(target, coins));
}
// ***************************************************************************************************************************************************************

// ******************************************************** Coin Chnage 2 Infinite Supply Problem  ****************************************************************

function coinChangeRecursion(index, target, coinsDenom) {
  if (index === 0) {
    if (target % coinsDenom[index] === 0) {
      return 1;
    }
    return 0;
  }
  let notTake = coinChangeRecursion(index - 1, target, coinsDenom);
  let take = 0;
  if (coinsDenom[index] <= target) {
    take = coinChangeRecursion(index, target - coinsDenom[index], coinsDenom);
  }
  return take + notTake;
}

function coinChangeMemoisation(index, target, coinsDenom, dp) {
  if (index === 0) {
    if (target % coinsDenom[index] === 0) {
      return 1;
    }
    return 0;
  }
  if (dp[index][target] !== -1) return dp[index][target];

  let notTake = coinChangeMemoisation(index - 1, target, coinsDenom, dp);
  let take = 0;
  if (coinsDenom[index] <= target) {
    take = coinChangeMemoisation(
      index,
      target - coinsDenom[index],
      coinsDenom,
      dp,
    );
  }
  return (dp[index][target] = take + notTake);
}

function coinChangeTabulation(target, coinsDenom) {
  let n = coinsDenom.length;
  let dp = Array.from({ length: n }, () => Array(target + 1).fill(0));

  for (let t = 0; t <= target; t++) {
    if (t % coinsDenom[0] === 0) {
      dp[0][t] = 1;
    } else {
      dp[0][t] = 0;
    }
  }

  for (let index = 1; index < n; index++) {
    for (let t = 0; t <= target; t++) {
      let notTake = dp[index - 1][t];
      let take = 0;
      if (coinsDenom[index] <= t) {
        take = dp[index][t - coinsDenom[index]];
      }
      dp[index][t] = take + notTake;
    }
  }
  return dp[n - 1][target];
}

function coinChangeTabulationSpaceOptimisation(target, coinsDenom) {
  let n = coinsDenom.length;

  let prev = new Array(target + 1).fill(0);
  let cur = new Array(target + 1).fill(0);

  for (let t = 0; t <= target; t++) {
    if (t % coinsDenom[0] === 0) {
      prev[t] = 1;
    } else {
      prev[t] = 0;
    }
  }

  for (let index = 1; index < n; index++) {
    for (let t = 0; t <= target; t++) {
      let notTake = prev[t];
      let take = 0;
      if (coinsDenom[index] <= t) {
        take = cur[t - coinsDenom[index]];
      }
      cur[t] = take + notTake;
    }
    prev = cur;
  }
  return prev[target];
}
function callCoinChange() {
  let coinsDenom = [1, 2, 3];
  let target = 4;
  let n = coinsDenom.length;
  let dp = Array.from({ length: n }, () => Array(target + 1).fill(-1));
  console.log(coinChangeRecursion(n - 1, target, coinsDenom));
  console.log(coinChangeMemoisation(n - 1, target, coinsDenom, dp));
  console.log(coinChangeTabulation(target, coinsDenom));
  console.log(coinChangeTabulationSpaceOptimisation(target, coinsDenom));
}
// ***************************************************************************************************************************************************************

// ************************************************************************* Target Sum **************************************************************************************
class Solution2 {
  // Function to find number of ways to assign + or - to reach the target
  findTargetSumWays(nums, target) {
    const n = nums.length;

    // First calculate total sum of all numbers
    let totalSum = nums.reduce((a, b) => a + b, 0);

    // If (target + totalSum) is odd or target > totalSum, no valid partition exists
    if ((totalSum + target) % 2 !== 0 || Math.abs(target) > totalSum) return 0;

    // We now need to count subsets with sum = (target + totalSum) / 2
    const newTarget = (totalSum + target) / 2;

    // Create DP table: dp[i][j] = number of ways to make sum j using first i numbers
    let dp = Array.from({ length: n + 1 }, () => Array(newTarget + 1).fill(0));

    // Base case: One way to form sum 0 (by taking no elements)
    for (let i = 0; i <= n; i++) {
      dp[i][0] = 1;
    }

    // Fill DP table iteratively
    for (let i = 1; i <= n; i++) {
      for (let j = 0; j <= newTarget; j++) {
        // Exclude current element
        dp[i][j] = dp[i - 1][j];

        // Include current element if it does not exceed current target j
        if (nums[i - 1] <= j) {
          dp[i][j] += dp[i - 1][j - nums[i - 1]];
        }
      }
    }

    return dp[n][newTarget];
  }
}

// Driver code
let sol2 = new Solution2();
let nums = [1, 1, 1, 1, 1];
let target = 3;
// console.log(sol2.findTargetSumWays(nums, target)); // Output: 5

// ***************************************************************************************************************************************************************
// ************************************************************************* Unbounded Knapsack ******************************************************************

function unboudedKnapsack(index, W, wtList, valList) {
  if (index === 0) {
    if (W % wtList[0] === 0) {
      return (W / wtList[0]) * valList[0];
    }
    return 0;
  }

  let notTake = unboudedKnapsack(index - 1, W, wtList, valList);
  let take = -Infinity;
  if (wtList[index] <= W) {
    take =
      valList[index] +
      unboudedKnapsack(index, W - wtList[index], wtList, valList);
  }
  return Math.max(notTake, take);
}

function unboudedKnapsackMemoisation(index, W, wtList, valList, dp) {
  if (index === 0) {
    if (W % wtList[0] === 0) {
      return (W / wtList[0]) * valList[0];
    }
    return 0;
  }
  if (dp[index][W] !== -1) return dp[index][W];

  let notTake = unboudedKnapsackMemoisation(index - 1, W, wtList, valList, dp);
  let take = -Infinity;
  if (wtList[index] <= W) {
    take =
      valList[index] +
      unboudedKnapsackMemoisation(
        index,
        W - wtList[index],
        wtList,
        valList,
        dp,
      );
  }
  return (dp[index][W] = Math.max(notTake, take));
}

function unboudedKnapsackTabulation(maxWeight, wtList, valList) {
  const n = wtList.length;
  let dp = Array.from({ length: n }, () => Array(maxWeight + 1).fill(0));
  for (let w = 0; w <= maxWeight; w++) {
    dp[0][w] = w % wtList[0] === 0 ? (w / wtList[0]) * valList[0] : 0;
  }

  for (let index = 1; index < n; index++) {
    for (let W = 0; W <= maxWeight; W++) {
      let notTake = dp[index - 1][W];
      let take = -Infinity;
      if (wtList[index] <= W) {
        take = valList[index] + dp[index][W - wtList[index]];
      }
      dp[index][W] = Math.max(notTake, take);
    }
  }
  return dp[n - 1][maxWeight];
}

function unboudedKnapsackTabulationSpaceOptimisation(
  maxWeight,
  wtList,
  valList,
) {
  const n = wtList.length;
  let prev = new Array(maxWeight + 1).fill(0);
  let cur = new Array(maxWeight + 1).fill(0);

  for (let w = 0; w <= maxWeight; w++) {
    prev[w] = w % wtList[0] === 0 ? (w / wtList[0]) * valList[0] : 0;
  }

  for (let index = 1; index < n; index++) {
    for (let W = 0; W <= maxWeight; W++) {
      let notTake = prev[W];
      let take = -Infinity;
      if (wtList[index] <= W) {
        take = valList[index] + cur[W - wtList[index]];
      }
      cur[W] = Math.max(notTake, take);
    }
    prev = cur;
  }
  return prev[maxWeight];
}

function unboudedKnapsackTabulationSpaceOptimisationMore(
  maxWeight,
  wtList,
  valList,
) {
  const n = wtList.length;
  let prev = new Array(maxWeight + 1).fill(0);

  for (let w = 0; w <= maxWeight; w++) {
    prev[w] = w % wtList[0] === 0 ? (w / wtList[0]) * valList[0] : 0;
  }

  for (let index = 1; index < n; index++) {
    for (let W = 0; W <= maxWeight; W++) {
      let notTake = prev[W];
      let take = -Infinity;
      if (wtList[index] <= W) {
        take = valList[index] + prev[W - wtList[index]];
      }
      prev[W] = Math.max(notTake, take);
    }
  }
  return prev[maxWeight];
}
function callUnboundedKnapsack() {
  const wtList = [2, 4, 6];
  const valList = [5, 11, 13];
  const n = wtList.length;
  let W = 8;
  let dp = Array.from({ length: n }, () => Array(W + 1).fill(-1));
  console.log(unboudedKnapsack(n - 1, W, wtList, valList));
  console.log(unboudedKnapsackMemoisation(n - 1, W, wtList, valList, dp));
  console.log(unboudedKnapsackTabulation(W, wtList, valList));
  console.log(unboudedKnapsackTabulationSpaceOptimisation(W, wtList, valList));
  console.log(
    unboudedKnapsackTabulationSpaceOptimisationMore(W, wtList, valList),
  );
}
// ***************************************************************************************************************************************************************

// ************************************************************************* Rod Cutting Problem ******************************************************************

function rodCuttingProblem(index, n, priceList) {
  if (index === 0) {
    return n * priceList[0];
  }
  let notTake = 0 + rodCuttingProblem(index - 1, n, priceList);
  let take = -Infinity;
  let rodLength = index + 1;
  if (rodLength <= n) {
    take =
      priceList[index] + rodCuttingProblem(index, n - rodLength, priceList);
  }
  return Math.max(take, notTake);
}

function rodCuttingProblemMemoisation(index, n, priceList, dp) {
  if (index === 0) {
    return n * priceList[0];
  }
  if (dp[index][n] !== -1) return dp[index][n];

  let notTake = 0 + rodCuttingProblemMemoisation(index - 1, n, priceList, dp);
  let take = -Infinity;
  let rodLength = index + 1;
  if (rodLength <= n) {
    take =
      priceList[index] +
      rodCuttingProblemMemoisation(index, n - rodLength, priceList, dp);
  }
  return (dp[index][n] = Math.max(take, notTake));
}

function rodCuttingProblemTabulation(priceList) {
  const maxLength = priceList.length;
  let dp = Array.from({ length: maxLength }, () =>
    Array(maxLength + 1).fill(0),
  );

  for (let n = 0; n <= maxLength; n++) {
    dp[0][n] = n * priceList[0];
  }

  for (let index = 1; index < maxLength; index++) {
    for (let n = 0; n <= maxLength; n++) {
      let notTake = 0 + dp[index - 1][n];
      let take = -Infinity;
      let rodLength = index + 1;
      if (rodLength <= n) {
        take = priceList[index] + dp[index][n - rodLength];
      }
      dp[index][n] = Math.max(take, notTake);
    }
  }
  return dp[maxLength - 1][maxLength];
}

function rodCuttingProblemTabulationOptimisation(priceList) {
  const maxLength = priceList.length;
  let prev = new Array(maxLength + 1).fill(0);
  let cur = new Array(maxLength + 1).fill(0);

  for (let n = 0; n <= maxLength; n++) {
    prev[n] = n * priceList[0];
  }

  for (let index = 1; index < maxLength; index++) {
    for (let n = 0; n <= maxLength; n++) {
      let notTake = 0 + prev[n];
      let take = -Infinity;
      let rodLength = index + 1;
      if (rodLength <= n) {
        take = priceList[index] + cur[n - rodLength];
      }
      cur[n] = Math.max(take, notTake);
    }
    prev = [...cur];
  }
  return prev[maxLength];
}

function rodCuttingProblemTabulationOptimisationMore(priceList) {
  const maxLength = priceList.length;
  let prev = new Array(maxLength + 1).fill(0);

  for (let n = 0; n <= maxLength; n++) {
    prev[n] = n * priceList[0];
  }

  for (let index = 1; index < maxLength; index++) {
    for (let n = 0; n <= maxLength; n++) {
      let notTake = 0 + prev[n];
      let take = -Infinity;
      let rodLength = index + 1;
      if (rodLength <= n) {
        take = priceList[index] + prev[n - rodLength];
      }
      prev[n] = Math.max(take, notTake);
    }
  }
  return prev[maxLength];
}
function callRodCuttingProblem() {
  let priceList = [2, 5, 7, 8, 10];
  let n = priceList.length;
  let dp = Array.from({ length: n }, () => Array(n + 1).fill(-1));
  console.log(rodCuttingProblem(n - 1, n, priceList));
  console.log(rodCuttingProblemMemoisation(n - 1, n, priceList, dp));
  console.log(rodCuttingProblemTabulation(priceList));
  console.log(rodCuttingProblemTabulationOptimisation(priceList));
  console.log(rodCuttingProblemTabulationOptimisationMore(priceList));
}

function main() {
  // callFibonacci();
  // callClimbingStairs();
  // callFrogJump();
  // callFrogWithKSteps();
  // callSumOfNonAdjacentElement();
  // callHouseRobber();
  // callNinjaTraining();
  // callGridUniquePath();
  // callGridUniquePathWithDeadCell();
  // callMinimumUniquePath();
  // callMinimumPathInTriangle()
  // callMaximumPathInMatrix();
  // callMaximumChocolates();
  // callsubsequenceSumEqualToTarget();
  // partitionEqualSubsetSum();
  // callMinimiSubsetDiff();
  // callNumberOfSubsetsWithSumk();
  // callKnapSack();
  // callMinimumNoOfCoins()
  // callCoinChange()
  // callUnboundedKnapsack();
  // callRodCuttingProblem();
}

// main();

// ***********************************************************************End Of DP on subsequence ****************************************************************

// ******************************************************** DP on Strings ******************************************************************************************

// ******************************************************** LCS Among Strings **************************************************************************************

function lcsRecusrsion(index1, index2, str1, str2) {
  if (index1 < 0 || index2 < 0) {
    return 0;
  }

  if (str1[index1] === str2[index2]) {
    return 1 + lcsRecusrsion(index1 - 1, index2 - 1, str1, str2);
  }

  return (
    0 +
    Math.max(
      lcsRecusrsion(index1 - 1, index2, str1, str2),
      lcsRecusrsion(index1, index2 - 1, str1, str2),
    )
  );
}

function lcsRecusrsionMemoisation(index1, index2, str1, str2, dp) {
  if (index1 < 0 || index2 < 0) {
    return 0;
  }

  if (dp[index1][index2] !== -1) return dp[index1][index2];

  if (str1[index1] === str2[index2]) {
    return (dp[index1][index2] =
      1 + lcsRecusrsionMemoisation(index1 - 1, index2 - 1, str1, str2, dp));
  }

  return (dp[index1][index2] = Math.max(
    lcsRecusrsionMemoisation(index1 - 1, index2, str1, str2, dp),
    lcsRecusrsionMemoisation(index1, index2 - 1, str1, str2, dp),
  ));
}

function lcsRecusrsionMemoisationShiftingIndexOneToTheRight(
  index1,
  index2,
  str1,
  str2,
  dp,
) {
  if (index1 === 0 || index2 === 0) {
    return 0;
  }

  if (dp[index1][index2] !== -1) return dp[index1][index2];

  if (str1[index1 - 1] === str2[index2 - 1]) {
    return (dp[index1][index2] =
      1 +
      lcsRecusrsionMemoisationShiftingIndexOneToTheRight(
        index1 - 1,
        index2 - 1,
        str1,
        str2,
        dp,
      ));
  }

  return (dp[index1][index2] = Math.max(
    lcsRecusrsionMemoisationShiftingIndexOneToTheRight(
      index1 - 1,
      index2,
      str1,
      str2,
      dp,
    ),
    lcsRecusrsionMemoisationShiftingIndexOneToTheRight(
      index1,
      index2 - 1,
      str1,
      str2,
      dp,
    ),
  ));
}

function lcsRecusrsionTabulationShiftingIndexOneToTheRight(str1, str2) {
  let n = str1.length;
  let m = str2.length;
  let dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));

  for (let i = 0; i < n; i++) {
    dp[i][0] = 0;
  }

  for (let j = 0; j < m; j++) {
    dp[0][j] = 0;
  }

  for (let index1 = 1; index1 <= n; index1++) {
    for (let index2 = 1; index2 <= m; index2++) {
      if (str1[index1 - 1] === str2[index2 - 1]) {
        dp[index1][index2] = 1 + dp[index1 - 1][index2 - 1];
      } else {
        dp[index1][index2] = Math.max(
          dp[index1 - 1][index2],
          dp[index1][index2 - 1],
        );
      }
    }
  }
  return dp[n][m];
}

function lcsRecusrsionTabulationSpaceOptimisationShiftingIndexOneToTheRight(
  str1,
  str2,
) {
  let n = str1.length;
  let m = str2.length;

  let prev = new Array(n + 1).fill(0);
  let cur = new Array(m + 1).fill(0);

  for (let j = 0; j < m; j++) {
    prev[j] = 0;
  }

  for (let index1 = 1; index1 <= n; index1++) {
    for (let index2 = 1; index2 <= m; index2++) {
      if (str1[index1 - 1] === str2[index2 - 1]) {
        cur[index2] = 1 + prev[index2 - 1];
      } else {
        cur[index2] = Math.max(prev[index2], cur[index2 - 1]);
      }
    }
    prev = cur;
  }
  return prev[m];
}

function callLcsAmongStrings() {
  let s1 = "ace";
  let s2 = "ced";
  let n = s1.length;
  let m = s2.length;
  let dp = Array.from({ length: n }, () => Array(m).fill(-1));
  let dp2 = Array.from({ length: n + 1 }, () => Array(m + 1).fill(-1));
  console.log(lcsRecusrsion(n - 1, m - 1, s1, s2));
  console.log(lcsRecusrsionMemoisation(n - 1, m - 1, s1, s2, dp));
  console.log(
    lcsRecusrsionMemoisationShiftingIndexOneToTheRight(n, m, s1, s2, dp2),
  );
  console.log(lcsRecusrsionTabulationShiftingIndexOneToTheRight(s1, s2));
  console.log(
    lcsRecusrsionTabulationSpaceOptimisationShiftingIndexOneToTheRight(s1, s2),
  );
}

// *************************************** Print Longest Common Subsequence ***************************************

function printLongestCommonSubsequenceRecursion(index1, index2, str1, str2) {
  if (index1 < 0 || index2 < 0) {
    return "";
  }

  if (str1[index1] === str2[index2]) {
    return (
      printLongestCommonSubsequenceRecursion(
        index1 - 1,
        index2 - 1,
        str1,
        str2,
      ) + str1[index1]
    );
  }

  let option1 = printLongestCommonSubsequenceRecursion(
    index1 - 1,
    index2,
    str1,
    str2,
  );
  let option2 = printLongestCommonSubsequenceRecursion(
    index1,
    index2 - 1,
    str1,
    str2,
  );

  return option1.length >= option2.length ? option1 : option2;
}

function printLongestCommonSubsequenceMemoisation(
  index1,
  index2,
  str1,
  str2,
  dp,
) {
  if (index1 < 0 || index2 < 0) {
    return "";
  }

  if (dp[index1][index2] !== -1) return dp[index1][index2];

  if (str1[index1] === str2[index2]) {
    return (dp[index1][index2] =
      printLongestCommonSubsequenceMemoisation(
        index1 - 1,
        index2 - 1,
        str1,
        str2,
        dp,
      ) + str1[index1]);
  }

  let option1 = printLongestCommonSubsequenceMemoisation(
    index1 - 1,
    index2,
    str1,
    str2,
    dp,
  );
  let option2 = printLongestCommonSubsequenceMemoisation(
    index1,
    index2 - 1,
    str1,
    str2,
    dp,
  );

  return (dp[index1][index2] =
    option1.length >= option2.length ? option1 : option2);
}

// This is less memory efficient where each dp is storing the actual string
function lcsTabulation(str1, str2) {
  let n = str1.length;
  let m = str2.length;

  let dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(""));

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + str1[i - 1];
      } else {
        dp[i][j] =
          dp[i - 1][j].length >= dp[i][j - 1].length
            ? dp[i - 1][j]
            : dp[i][j - 1];
      }
    }
  }

  return dp[n][m];
}

// This approach is more effiecient , check striver 26th lecture if need understanding
function printLongestCommonSubsequenceTabulation(str1, str2) {
  let n = str1.length;
  let m = str2.length;
  let dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));

  for (let i = 0; i < n; i++) {
    dp[i][0] = 0;
  }

  for (let j = 0; j < m; j++) {
    dp[0][j] = 0;
  }

  for (let index1 = 1; index1 <= n; index1++) {
    for (let index2 = 1; index2 <= m; index2++) {
      if (str1[index1 - 1] === str2[index2 - 1]) {
        dp[index1][index2] = 1 + dp[index1 - 1][index2 - 1];
      } else {
        dp[index1][index2] = Math.max(
          dp[index1 - 1][index2],
          dp[index1][index2 - 1],
        );
      }
    }
  }

  let len = dp[n][m];
  let ans = new Array(len);

  let ind = len - 1;
  let i = n,
    j = m;
  while (i > 0 && j > 0) {
    if (str1[i - 1] === str2[j - 1]) {
      ans[ind] = str1[i - 1];
      ind--;
      i--;
      j--;
    } else if (dp[i - 1][j] > dp[i][j - 1]) {
      i--;
    } else {
      j--;
    }
  }
  return ans.join("");
}

function callPrintLongestCommonSubsequence() {
  let s1 = "ace";
  let s2 = "ced";
  let n = s1.length;
  let m = s2.length;
  let dp = Array.from({ length: n }, () => Array(m).fill(-1));
  console.log(printLongestCommonSubsequenceRecursion(n - 1, m - 1, s1, s2));
  console.log(
    printLongestCommonSubsequenceMemoisation(n - 1, m - 1, s1, s2, dp),
  );
  console.log(printLongestCommonSubsequenceTabulation(s1, s2));
}
// ****************************************************************************************************************

// ********************************************* Longest Common Substring *****************************************

function longestCommonSubstringTabulation(str1, str2) {
  let n = str1.length;
  let m = str2.length;
  let dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));

  for (let i = 0; i < n; i++) {
    dp[i][0] = 0;
  }

  for (let j = 0; j < m; j++) {
    dp[0][j] = 0;
  }

  let ans = 0;

  for (let index1 = 1; index1 <= n; index1++) {
    for (let index2 = 1; index2 <= m; index2++) {
      if (str1[index1 - 1] === str2[index2 - 1]) {
        dp[index1][index2] = 1 + dp[index1 - 1][index2 - 1];
        ans = Math.max(ans, dp[index1][index2]);
      } else {
        dp[index1][index2] = 0;
      }
    }
  }

  return ans;
}

function longestCommonSubstringTabulationSpaceOptimisation(str1, str2) {
  let n = str1.length;
  let m = str2.length;
  let prev = new Array(m + 1).fill(0);
  let cur = new Array(m + 1).fill(0);

  let ans = 0;

  for (let index1 = 1; index1 <= n; index1++) {
    for (let index2 = 1; index2 <= m; index2++) {
      if (str1[index1 - 1] === str2[index2 - 1]) {
        cur[index2] = 1 + prev[index2 - 1];
        ans = Math.max(ans, cur[index2]);
      } else {
        cur[index2] = 0;
      }
    }
    for (let k = 0; k <= m; k++) {
      // Not Understood
      prev[k] = cur[k];
    }
  }

  return ans;
}

function callLongestCommonSubstring() {
  let str1 = "abcjklp";
  let str2 = "acjkp";
  console.log(longestCommonSubstringTabulation(str1, str2));
  console.log(longestCommonSubstringTabulationSpaceOptimisation(str1, str2));
}
// ****************************************************************************************************************

// ************************* Longest Common Palindromic Subsequence ***********************************************

function longestPalandromicSubsequence(anyStr) {
  let str = anyStr || "bbabcbcab";
  let reversedStr = str.split("").reverse().join("");

  console.log(
    lcsRecusrsionTabulationShiftingIndexOneToTheRight(str, reversedStr),
  );
  return lcsRecusrsionTabulationShiftingIndexOneToTheRight(str, reversedStr);
}

// ****************************************************************************************************************

// ************************* Minimum Insertions To Make String Palindromic ****************************************

function minimInsertionsToMakeStringPalindromic() {
  let str = "abcaa";
  console.log(str.length - longestPalandromicSubsequence(str));
}

// ****************************************************************************************************************

// *************************** Minimum No Of Insertion/Deletion To Convert String 1 to String 2 *******************

function minimumNoOfInsertionDeletion() {
  let str1 = "abcd";
  let str2 = "anc";

  let n = str1.length;
  let m = str2.length;

  let totalOperations =
    n + m - 2 * lcsRecusrsionTabulationShiftingIndexOneToTheRight(str1, str2);
  console.log(totalOperations);
}
// ****************************************************************************************************************

// ***********************************Shortest Supersequence *************************************************************

function shortestSupersequence() {
  let str1 = "brute";
  let str2 = "groot";
  let n = str1.length;
  let m = str2.length;
  // let dp = lcsRecusrsionTabulationShiftingIndexOneToTheRight(str1,str2);

  let dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));

  for (let i = 0; i < n; i++) {
    dp[i][0] = 0;
  }

  for (let j = 0; j < m; j++) {
    dp[0][j] = 0;
  }

  for (let index1 = 1; index1 <= n; index1++) {
    for (let index2 = 1; index2 <= m; index2++) {
      if (str1[index1 - 1] === str2[index2 - 1]) {
        dp[index1][index2] = 1 + dp[index1 - 1][index2 - 1];
      } else {
        dp[index1][index2] = Math.max(
          dp[index1 - 1][index2],
          dp[index1][index2 - 1],
        );
      }
    }
  }

  let ans = [];
  let i = n,
    j = m;

  while (i > 0 && j > 0) {
    if (str1[i - 1] === str2[j - 1]) {
      ans.push(str1[i - 1]);
      i--;
      j--;
    } else if (dp[i - 1][j] > dp[i][j - 1]) {
      ans.push(str1[i - 1]);
      i--;
    } else {
      ans.push(str2[j - 1]);
      j--;
    }
  }
  while (i > 0) {
    ans.push(str1[i - 1]);
    i--;
  }
  while (j > 0) {
    ans.push(str2[j - 1]);
    j--;
  }

  console.log(ans.reverse().join(""));
}

// ***********************************************************************************************************************

// LCS is the ultimate core when solving DP on strings
function mainStrings() {
  // callLcsAmongStrings();
  // callPrintLongestCommonSubsequence();
  // callLongestCommonSubstring();
  // longestPalandromicSubsequence();
  // minimInsertionsToMakeStringPalindromic()
  // minimumNoOfInsertionDeletion()
  // shortestSupersequence()
}

// mainStrings();
// *****************************************************************************************************************************************************************

// *********************************************************************************** String Matching on DP on Strings ******************************************************

// *********************************** Distinct Subsequence ***********************************

function distinctSubsequence(i, j, s1, s2) {
  if (j < 0) return 1;
  if (i < 0) return 0;

  if (s1[i] === s2[j]) {
    return (
      distinctSubsequence(i - 1, j - 1, s1, s2) +
      distinctSubsequence(i - 1, j, s1, s2)
    );
  }
  return distinctSubsequence(i - 1, j, s1, s2);
}

function distinctSubsequenceShiftingOneIndexToRight(i, j, s1, s2) {
  if (j === 0) return 1;
  if (i === 0) return 0;

  if (s1[i - 1] === s2[j - 1]) {
    return (
      distinctSubsequenceShiftingOneIndexToRight(i - 1, j - 1, s1, s2) +
      distinctSubsequenceShiftingOneIndexToRight(i - 1, j, s1, s2)
    );
  }
  return distinctSubsequenceShiftingOneIndexToRight(i - 1, j, s1, s2);
}

function distinctSubsequenceMemoisation(i, j, s1, s2, dp) {
  if (j < 0) return 1;
  if (i < 0) return 0;
  if (dp[i][j] !== -1) return dp[i][j];
  if (s1[i] === s2[j]) {
    return (dp[i][j] =
      distinctSubsequence(i - 1, j - 1, s1, s2, dp) +
      distinctSubsequence(i - 1, j, s1, s2, dp));
  } else {
    return (dp[i][j] = distinctSubsequence(i - 1, j, s1, s2, dp));
  }
}

function distinctSubsequenceMemoisationShiftingOneIndexToWrite(
  i,
  j,
  s1,
  s2,
  dp,
) {
  if (j == 0) return 1;
  if (i == 0) return 0;
  if (dp[i][j] !== -1) return dp[i][j];
  if (s1[i - 1] === s2[j - 1]) {
    return (dp[i][j] =
      distinctSubsequenceMemoisationShiftingOneIndexToWrite(
        i - 1,
        j - 1,
        s1,
        s2,
        dp,
      ) +
      distinctSubsequenceMemoisationShiftingOneIndexToWrite(
        i - 1,
        j,
        s1,
        s2,
        dp,
      ));
  } else {
    return (dp[i][j] = distinctSubsequenceMemoisationShiftingOneIndexToWrite(
      i - 1,
      j,
      s1,
      s2,
      dp,
    ));
  }
}

function distinctSubsequenceTabulation(s1, s2) {
  let n = s1.length;
  let m = s2.length;
  let dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));

  for (let i = 0; i <= n; i++) {
    dp[i][0] = 1;
  }
  for (let j = 1; j <= m; j++) {
    dp[0][j] = 0;
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (s1[i - 1] === s2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }
  return dp[n][m];
}

function distinctSubsequenceTabulationSpaceOptimisation(s1, s2) {
  let n = s1.length;
  let m = s2.length;
  let prev = new Array(n + 1).fill(0);
  let cur = new Array(m + 1).fill(0);

  prev[0] = cur[0] = 1;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (s1[i - 1] === s2[j - 1]) {
        cur[j] = prev[j - 1] + prev[j];
      } else {
        cur[j] = prev[j];
      }
    }
    prev = cur;
  }
  return prev[m];
}

function distinctSubsequenceTabulationSpaceOptimisationMore(s1, s2) {
  let n = s1.length;
  let m = s2.length;
  let prev = new Array(m + 1).fill(0);

  prev[0] = 1;

  for (let i = 1; i <= n; i++) {
    for (let j = m; j >= 1; j--) {
      if (s1[i - 1] === s2[j - 1]) {
        prev[j] = prev[j - 1] + prev[j];
      }
    }
  }
  return prev[m];
}

function callDistinctSubsequence() {
  const s1 = "babgbag";
  const s2 = "bag";
  let n = s1.length;
  let m = s2.length;
  let dp = Array.from({ length: n }, () => Array(m).fill(-1));
  console.log(distinctSubsequence(n - 1, m - 1, s1, s2));
  console.log(distinctSubsequenceMemoisation(n - 1, m - 1, s1, s2, dp));
  console.log(distinctSubsequenceTabulation(s1, s2));
  console.log(distinctSubsequenceTabulationSpaceOptimisation(s1, s2));
  console.log(distinctSubsequenceTabulationSpaceOptimisationMore(s1, s2));
}
// ********************************************************************************************

// ***************************** Edit Distance **************************************************

function editDistance(i, j, s1, s2) {
  if (i < 0) return j + 1;
  if (j < 0) return i + 1;

  if (s1[i] === s2[j]) return 0 + editDistance(i - 1, j - 1, s1, s2);
  return Math.min(
    1 + editDistance(i, j - 1, s1, s2), // Insert
    1 + editDistance(i - 1, j, s1, s2), // Delete
    1 + editDistance(i - 1, j - 1, s1, s2), // Replace
  );
}

function editDistanceMemoisation(i, j, s1, s2, dp) {
  if (i < 0) return j + 1;
  if (j < 0) return i + 1;

  if (dp[i][j] !== -1) return dp[i][j];

  if (s1[i] === s2[j])
    return (dp[i][j] = 0 + editDistanceMemoisation(i - 1, j - 1, s1, s2, dp));
  return (dp[i][j] = Math.min(
    1 + editDistanceMemoisation(i, j - 1, s1, s2, dp), // Insert
    1 + editDistanceMemoisation(i - 1, j, s1, s2, dp), // Delete
    1 + editDistanceMemoisation(i - 1, j - 1, s1, s2, dp), // Replace
  ));
}

function editDistanceMemoisationShiftingIndex(i, j, s1, s2, dp) {
  if (i === 0) return j;
  if (j === 0) return i;

  if (dp[i][j] !== -1) return dp[i][j];

  if (s1[i - 1] === s2[j - 1])
    return (dp[i][j] =
      0 + editDistanceMemoisationShiftingIndex(i - 1, j - 1, s1, s2, dp));
  return (dp[i][j] = Math.min(
    1 + editDistanceMemoisationShiftingIndex(i, j - 1, s1, s2, dp), // Insert
    1 + editDistanceMemoisationShiftingIndex(i - 1, j, s1, s2, dp), // Delete
    1 + editDistanceMemoisationShiftingIndex(i - 1, j - 1, s1, s2, dp), // Replace
  ));
}

function editDistanceTabulation(s1, s2) {
  let n = s1.length;
  let m = s2.length;

  let dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(-1)); // Shifting one index to right

  for (let i = 0; i <= n; i++) {
    dp[i][0] = i;
  }

  for (let j = 0; j <= m; j++) {
    dp[0][j] = j;
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (s1[i - 1] === s2[j - 1]) {
        dp[i][j] = 0 + dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(
          1 + dp[i][j - 1], // Insert
          1 + dp[i - 1][j], // Delete
          1 + dp[i - 1][j - 1], // Replace
        );
      }
    }
  }
  return dp[n][m];
}

function editDistanceTabulationSpaceOptimisation(s1, s2) {
  let n = s1.length;
  let m = s2.length;
  let prev = new Array(m + 1).fill(0);
  let cur = new Array(m + 1).fill(0);

  for (let j = 0; j <= m; j++) {
    prev[j] = j;
  }

  for (let i = 1; i <= n; i++) {
    cur[0] = i;
    for (let j = 1; j <= m; j++) {
      if (s1[i - 1] === s2[j - 1]) {
        cur[j] = 0 + prev[j - 1];
      } else {
        cur[j] = Math.min(
          1 + cur[j - 1], // Insert
          1 + prev[j], // Delete
          1 + prev[j - 1], // Replace
        );
      }
    }
    [prev, cur] = [cur, prev];
  }
  return prev[m];
}

function callEditDistance() {
  const s1 = "horse";
  const s2 = "ros";

  let n = s1.length;
  let m = s2.length;

  let dp = Array.from({ length: n }, () => Array(m).fill(-1));
  let dp2 = Array.from({ length: n + 1 }, () => Array(m + 1).fill(-1));
  console.log(editDistance(n - 1, m - 1, s1, s2));
  console.log(editDistanceMemoisation(n - 1, m - 1, s1, s2, dp));
  console.log(editDistanceMemoisationShiftingIndex(n, m, s1, s2, dp2));
  console.log(editDistanceTabulation(s1, s2));
  console.log(editDistanceTabulationSpaceOptimisation(s1, s2));
}
// **********************************************************************************************

// ******************************* Wild Card Matching *******************************************
function wildcardMatching(i, j, pattern, str) {
  if (i < 0 && j < 0) return true;
  if (i < 0 && j >= 0) return false;
  if (j < 0 && i >= 0) {
    for (let char_i = 0; char_i <= i; char_i++) {
      if (pattern[char_i] !== "*") return false;
    }
    return true;
  }

  if (pattern[i] === str[j] || pattern[i] === "?") {
    return wildcardMatching(i - 1, j - 1, pattern, str);
  }
  if (pattern[i] === "*") {
    return (
      wildcardMatching(i - 1, j, pattern, str) || // * matches nothing
      wildcardMatching(i, j - 1, pattern, str)
    ); // * matches one character
  }
  return false;
}

function wildcardMatchingMemoisation(i, j, pattern, str, dp) {
  if (i < 0 && j < 0) return true;
  if (i < 0 && j >= 0) return false;
  if (j < 0 && i >= 0) {
    for (let char_i = 0; char_i <= i; char_i++) {
      if (pattern[char_i] !== "*") return false;
    }
    return true;
  }
  if (dp[i][j] !== -1) return dp[i][j];
  if (pattern[i] === str[j] || pattern[i] === "?") {
    return (dp[i][j] = wildcardMatchingMemoisation(
      i - 1,
      j - 1,
      pattern,
      str,
      dp,
    ));
  }
  if (pattern[i] === "*") {
    return (dp[i][j] =
      wildcardMatchingMemoisation(i - 1, j, pattern, str, dp) || // * matches nothing
      wildcardMatchingMemoisation(i, j - 1, pattern, str, dp)); // * matches one character
  }
  return (dp[i][j] = false);
}

function wildcardMatchingMemoisationShiftingOneIndexToRight(
  i,
  j,
  pattern,
  str,
  dp,
) {
  if (i === 0 && j === 0) return true;
  if (i === 0 && j > 0) return false;
  if (j === 0 && i > 0) {
    for (let char_i = 1; char_i <= i; char_i++) {
      if (pattern[char_i - 1] !== "*") return false;
    }
    return true;
  }
  if (dp[i][j] !== -1) return dp[i][j];
  if (pattern[i - 1] === str[j - 1] || pattern[i - 1] === "?") {
    return (dp[i][j] = wildcardMatchingMemoisation(
      i - 1,
      j - 1,
      pattern,
      str,
      dp,
    ));
  }
  if (pattern[i - 1] === "*") {
    return (dp[i][j] =
      wildcardMatchingMemoisation(i - 1, j, pattern, str, dp) || // * matches nothing
      wildcardMatchingMemoisation(i, j - 1, pattern, str, dp)); // * matches one character
  }
  return (dp[i][j] = false);
}

function wildcardMatchingTabulation(pattern, str) {
  let n = pattern.length;
  let m = str.length;

  let dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(false));

  dp[0][0] = true;

  for (let j = 1; j <= m; j++) {
    dp[0][j] = false;
  }

  for (let i = 1; i <= n; i++) {
    let flag = true;
    for (let char_i = 1; char_i <= i; char_i++) {
      if (pattern[char_i - 1] !== "*") {
        flag = false;
        break;
      }
    }
    dp[i][0] = flag;
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (pattern[i - 1] === str[j - 1] || pattern[i - 1] === "?") {
        return (dp[i][j] = dp[i - 1][j - 1]);
      } else if (pattern[i - 1] === "*") {
        dp[i][j] =
          dp[i - 1][j] || // * matches nothing
          dp[i][j - 1]; // * matches one character
      } else {
        dp[i][j] = false;
      }
    }
  }
  return dp[n][m];
}

function wildcardMatchingTabulation(pattern, str) {
  let n = pattern.length;
  let m = str.length;

  let dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(false));

  dp[0][0] = true;

  for (let j = 1; j <= m; j++) {
    dp[0][j] = false;
  }

  for (let i = 1; i <= n; i++) {
    let flag = true;
    for (let char_i = 1; char_i <= i; char_i++) {
      if (pattern[char_i - 1] !== "*") {
        flag = false;
        break;
      }
    }
    dp[i][0] = flag;
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (pattern[i - 1] === str[j - 1] || pattern[i - 1] === "?") {
        return (dp[i][j] = dp[i - 1][j - 1]);
      } else if (pattern[i - 1] === "*") {
        dp[i][j] =
          dp[i - 1][j] || // * matches nothing
          dp[i][j - 1]; // * matches one character
      } else {
        dp[i][j] = false;
      }
    }
  }
  return dp[n][m];
}

function wildcardMatchingTabulationSpaceOptimisation(pattern, str) {
  let n = pattern.length;
  let m = str.length;

  let prev = new Array(m + 1).fill(false);
  let cur = new Array(m + 1).fill(false);

  prev[0] = true;

  for (let j = 1; j <= m; j++) {
    prev[j] = false;
  }

  for (let i = 1; i <= n; i++) {
    let flag = true;
    for (let char_i = 1; char_i <= i; char_i++) {
      if (pattern[char_i - 1] !== "*") {
        flag = false;
        break;
      }
    }
    cur[0] = flag;
    for (let j = 1; j <= m; j++) {
      if (pattern[i - 1] === str[j - 1] || pattern[i - 1] === "?") {
        return (cur[j] = prev[j - 1]);
      } else if (pattern[i - 1] === "*") {
        cur[j] = prev[j] || cur[j - 1];
      } else {
        cur[j] = false;
      }
    }
    [prev, cur] = [cur, prev];
  }
  return prev[m];
}

function callWildCardMatching() {
  const pattern = "ab*cd";
  const s = "abdefcd";
  let n = pattern.length;
  let m = s.length;
  let dp = Array.from({ length: n }, () => Array(m).fill(-1));
  console.log(wildcardMatching(n - 1, m - 1, pattern, s));
  console.log(wildcardMatchingMemoisation(n - 1, m - 1, pattern, s, dp));
  console.log(wildcardMatchingTabulation(pattern, s));
  console.log(wildcardMatchingTabulationSpaceOptimisation(pattern, s));
}
// **********************************************************************************************
function mainMatchingString() {
  // callDistinctSubsequence();
  // callEditDistance()
  // callWildCardMatching()
}

// mainMatchingString();

// *************************************************************************************************************************************************************************

// *********************************************************************************** DP on Stocks ***********************************************************************

// *********************************** Buy and Sell Stocks 1************************************************

function buyAndSellStocks1() {
  let prices = [7, 1, 5, 3, 6, 4];
  let n = prices.length;

  let min = prices[0];
  let profit = 0;

  for (let i = 1; i < n; i++) {
    let cost = prices[i] - min;
    profit = Math.max(profit, cost);
    min = Math.min(min, prices[i]);
  }

  console.log(profit);
}

// ********************************************************************************************************

// *********************************** Buy and Sell Stocks 2************************************************

function buyAndSellStocks2(index, buy, prices, n) {
  if (index === n) return 0;

  let profit = 0;

  if (buy) {
    profit = Math.max(
      -prices[index] + buyAndSellStocks2(index + 1, 0, prices, n), // You decided to buy then on next days you have to sell
      0 + buyAndSellStocks2(index + 1, 1, prices, n), // You are not buying today but the next day you have the liberty to buy
    );
  } else {
    profit = Math.max(
      prices[index] + buyAndSellStocks2(index + 1, 1, prices, n), // Not holding the stock, selling the stock and you have liberty to buy next day
      0 + buyAndSellStocks2(index + 1, 0, prices, n), // Holding the stock/ not selling the stock and you dont have the liberty to buy next day
    );
  }

  return profit;
}

function buyAndSellStocks2Memoisation(index, buy, prices, n, dp) {
  if (index === n) return 0;

  if (dp[index][buy] !== -1) return dp[index][buy];

  let profit = 0;

  if (buy) {
    profit = Math.max(
      -prices[index] +
        buyAndSellStocks2Memoisation(index + 1, 0, prices, n, dp), // You decided to buy then on next days you have to sell
      0 + buyAndSellStocks2Memoisation(index + 1, 1, prices, n, dp), // You are not buying today but the next day you have the liberty to buy
    );
  } else {
    profit = Math.max(
      prices[index] + buyAndSellStocks2Memoisation(index + 1, 1, prices, n, dp), // Not holding the stock, selling the stock and you have liberty to buy next day
      0 + buyAndSellStocks2Memoisation(index + 1, 0, prices, n, dp), // Holding the stock/ not selling the stock and you dont have the liberty to buy next day
    );
  }

  return (dp[index][buy] = profit);
}

function buyAndSellStocks2Tabulation(prices) {
  let n = prices.length;
  let dp = Array.from({ length: n + 1 }, () => Array(2).fill(0));

  dp[n][0] = dp[n][1] = 0;

  for (let index = n - 1; index >= 0; index--) {
    for (let buy = 0; buy <= 1; buy++) {
      let profit = 0;

      if (buy) {
        profit = Math.max(
          -prices[index] + dp[index + 1][0], // You decided to buy then on next days you have to sell
          0 + dp[index + 1][1], // You are not buying today but the next day you have the liberty to buy
        );
      } else {
        profit = Math.max(
          prices[index] + dp[index + 1][1], // Not holding the stock, selling the stock and you have liberty to buy next day
          0 + dp[index + 1][0], // Holding the stock/ not selling the stock and you dont have the liberty to buy next day
        );
        
      }
      dp[index][buy] = profit;
    }
  }
  return dp[0][1];
}

function buyAndSellStocks2TabulationSpaceOptimisation(prices) {
  let n = prices.length;
  let ahead = new Array(2).fill(0);
  let current = new Array(2).fill(0);

  ahead[0] = ahead[1] = 0;

  for (let index = n - 1; index >= 0; index--) {
    for (let buy = 0; buy <= 1; buy++) {
      let profit = 0;

      if (buy) {
        profit = Math.max(
          -prices[index] + ahead[0], // You decided to buy then on next days you have to sell
          0 + ahead[1], // You are not buying today but the next day you have the liberty to buy
        );
      } else {
        profit = Math.max(
          prices[index] + ahead[1], // Not holding the stock, selling the stock and you have liberty to buy next day
          0 + ahead[0], // Holding the stock/ not selling the stock and you dont have the liberty to buy next day
        );
        
      }
      current[buy] = profit;
    }
    ahead = current;
  }
  return ahead[1];
}

function callBuyAndSellStocksAnyTime() {
  let prices = [7, 1, 5, 3, 6, 4];
  let n = prices.length;
  let dp = Array.from({ length: n }, () => Array(2).fill(-1));
  console.log(buyAndSellStocks2(0, 1, prices, n));
  console.log(buyAndSellStocks2Memoisation(0, 1, prices, n, dp));
  console.log(buyAndSellStocks2Tabulation(prices));
  console.log(buyAndSellStocks2TabulationSpaceOptimisation(prices));
}

// ********************************************************************************************************

// ********************************* Buy and Sell Stock 3 *********************************************************

function buyAndSellStocks3(index, buy, prices, n, cap) {
  if (index === n || cap === 0) return 0;
  
  let profit = 0;

  if (buy) {
    profit = Math.max(
      -prices[index] + buyAndSellStocks3(index + 1, 0, prices, n, cap), 
      0 + buyAndSellStocks3(index + 1, 1, prices, n, cap), 
    );
  } else {
    profit = Math.max(
      prices[index] + buyAndSellStocks3(index + 1, 1, prices, n, cap - 1), 
      0 + buyAndSellStocks3(index + 1, 0, prices, n, cap), 
    );
  }

  return profit;
}

function buyAndSellStocks3Memoisation(index, buy, prices, n, cap, dp) {
  if (index === n || cap === 0) return 0;

  if (dp[index][buy][cap] !== -1) return dp[index][buy][cap];

  let profit = 0;

  if (buy) {
    profit = Math.max(
      -prices[index] + buyAndSellStocks3Memoisation(index + 1, 0, prices, n, cap, dp), 
      0 + buyAndSellStocks3Memoisation(index + 1, 1, prices, n, cap, dp), 
    );
  } else {
    profit = Math.max(
      prices[index] + buyAndSellStocks3Memoisation(index + 1, 1, prices, n, cap - 1, dp), 
      0 + buyAndSellStocks3Memoisation(index + 1, 0, prices, n, cap, dp), 
    );
  }

  return (dp[index][buy][cap] = profit);

}

function buyAndSellStocks3Tabulation(prices, totalCap) {
  let n = prices.length;
  let dp = Array.from({ length: n + 1 }, () => Array.from({ length: 2 }, () => Array(totalCap + 1).fill(0)));

  // Base Case 1
  for ( let index = 0; index <= n; index++) {
    for (let buy = 0; buy <= 1; buy++) {
      dp[index][buy][0] = 0;
    }
  }

  // Base Case 2
  for(let buy = 0; buy <= 1; buy++) {
    for(let cap = 1; cap <= totalCap; cap++) {
      dp[n][buy][cap] = 0; 
    }
  }

  for(let index = n - 1; index >= 0; index--) {
    for(let buy = 0; buy <= 1; buy++) {
      for(let cap = 1; cap <= totalCap; cap++) {
          let profit = 0;
          if (buy) {
            profit = Math.max(
              -prices[index] + dp[index + 1][0][cap], 
              0 + dp[index + 1][1][cap] 
            );
          } else {
            profit = Math.max(
              prices[index] + dp[index + 1][1][cap - 1], 
              0 + dp[index + 1][0][cap]
            );
          }
          dp[index][buy][cap] = profit
      }
    }
  }

  return dp[0][1][totalCap];

}


// To Do
function buyAndSellStocks3TabulationSpaceOptimisation(prices, totalCap) {
  let n = prices.length;

  // after[index + 1]
  let after = Array.from(
    { length: 2 },
    () => Array(totalCap + 1).fill(0)
  );

  let cur = Array.from(
    { length: 2 },
    () => Array(totalCap + 1).fill(0)
  );

  // Base Case:
  // dp[index][buy][0] = 0
  // Already initialized to 0.

  // Base Case:
  // dp[n][buy][cap] = 0
  // Already initialized to 0.

  for (let index = n - 1; index >= 0; index--) {

    for (let buy = 0; buy <= 1; buy++) {

      for (let cap = 1; cap <= totalCap; cap++) {

        let profit = 0;

        if (buy) {

          // Buy
          profit = Math.max(
            -prices[index] + after[0][cap],
            0 + after[1][cap]
          );

        } else {

          // Sell
          profit = Math.max(
            prices[index] + after[1][cap - 1],
            0 + after[0][cap]
          );

        }

        cur[buy][cap] = profit;
      }
    }

    // Current row becomes the "after" row
    after = cur;

    // Create a fresh current row
    cur = Array.from(
      { length: 2 },
      () => Array(totalCap + 1).fill(0)
    );
  }

  return after[1][totalCap];
}

 


function callBuyAndSellStock3() {
    let prices = [3,3,5,0,0,3,1,4];
    let n = prices.length;
    let cap = 2;
    let dp = Array.from({ length: n}, () => Array.from({ length: 2}, () => Array(cap + 1).fill(-1)));
    console.log(buyAndSellStocks3(0, 1, prices, n, cap));
    console.log(buyAndSellStocks3Memoisation(0, 1, prices, n, cap, dp));
    console.log(buyAndSellStocks3Tabulation(prices, cap));
    console.log(buyAndSellStocks3TabulationSpaceOptimisation(prices, cap));
}

// ****************************************************************************************************************

// *************************************** Buy and Sell Stock With Cooldown ***************************************************************

function buyAndSellStocksWithCoolDown(index, buy, prices) {
  if (index >= prices.length) return 0;
  
  let profit = 0;

  if (buy) {
    profit = Math.max(
      -prices[index] + buyAndSellStocksWithCoolDown(index + 1, 0, prices), 
      0 + buyAndSellStocksWithCoolDown(index + 1, 1, prices), 
    );
  } else {
    profit = Math.max(
      prices[index] + buyAndSellStocksWithCoolDown(index + 2, 1, prices), 
      0 + buyAndSellStocksWithCoolDown(index + 1, 0, prices), 
    );
  }

  return profit;
}

function callBuyAndSellStocksWithCoolDown() {
  let prices = [4,9,0,4,10];
  console.log(buyAndSellStocksWithCoolDown(0, 1, prices))
}
// *************************************** Buy and Sell Stock With Transaction Fees ***************************************************************

function buyAndSellStockWithTransactionFees(index, buy, prices, fee) {

  if (index === prices.length) return 0;

  if (buy) {
    profit = Math.max(
      -prices[index] + buyAndSellStocksWithCoolDown(index + 1, 0, prices), 
      0 + buyAndSellStocksWithCoolDown(index + 1, 1, prices), 
    );
  } else {
    profit = Math.max(
      prices[index] - fee + buyAndSellStocksWithCoolDown(index + 1, 1, prices), 
      0 + buyAndSellStocksWithCoolDown(index + 1, 0, prices), 
    );
  }

  return profit;
}
function callBusyAndSellStocksWithTransactionFees() {
  let prices = [1,3,2,8,4,9];
  console.log(buyAndSellStockWithTransactionFees(0, 1, prices, 2));
}
// ************************************************************************************************************************************************
function mainDpOnStocks() {
  // buyAndSellStocks1();
  // callBuyAndSellStocksAnyTime();
  // callBuyAndSellStock3()
  // callBuyAndSellStocksWithCoolDown();
  // callBusyAndSellStocksWithTransactionFees();
}

// mainDpOnStocks();
// *************************************************************************************************************************************************************************

// *************************************************************************************************************************************************************************


// ****************************************************************** Longest Increasing Subsequence ****************************************************************

function longestIncreasingSubsequence(index, prev_index, n, arr) {
  if(index === n) return 0;

  let notTake = 0 + longestIncreasingSubsequence(index + 1, prev_index, n ,arr);
  let take = 0; // Take can be false if below condition fails
  if(prev_index == -1 || arr[index] > arr[prev_index]) {
    take = 1 + longestIncreasingSubsequence(index + 1, index, n ,arr);   
  }

  return Math.max(take, notTake);
}

function longestIncreasingSubsequenceMemoisation(index, prev_index, n, arr, dp) {
  if(index === n) return 0;
  if(dp[index][prev_index + 1] !== -1) return dp[index][prev_index + 1];
  let notTake = 0 + longestIncreasingSubsequenceMemoisation(index + 1, prev_index, n ,arr, dp);
  let take = 0; // Take can be false if below condition fails
  if(prev_index == -1 || arr[index] > arr[prev_index]) {
    take = 1 + longestIncreasingSubsequenceMemoisation(index + 1, index, n ,arr, dp);   
  }

  return dp[index][prev_index + 1] = Math.max(take, notTake);
}

function longestIncreasingSubsequenceTabulation(arr) {
  let n = arr.length;
  let dp = Array.from({ length: n + 1}, () => new Array(n + 1).fill(0));

  for (let index = n - 1; index >= 0; index--) {
    for (let prev_index = index - 1; prev_index >= -1; prev_index--) {
          let notTake = 0 + dp[index + 1][prev_index + 1];
          let take = 0; // Take can be false if below condition fails
          if(prev_index == -1 || arr[index] > arr[prev_index]) {
            take = 1 + dp[index + 1][index + 1];   
          }
          dp[index][prev_index + 1] = Math.max(take, notTake);
    }
  }
  return dp[0][-1+1];
}

function longestIncreasingSubsequenceTabulationSpaceOptimisation(arr) {
  let n = arr.length;

  let curr = new Array(n + 1).fill(0);
  let next = new Array(n + 1).fill(0);
  
  for (let index = n - 1; index >= 0; index--) {
    for (let prev_index = index - 1; prev_index >= -1; prev_index--) {
          let notTake = 0 + next[prev_index + 1];
          let take = 0; // Take can be false if below condition fails
          if(prev_index == -1 || arr[index] > arr[prev_index]) {
            take = 1 + next[index + 1];   
          }
          curr[prev_index + 1] = Math.max(take, notTake);
    }
    next = curr;
  }
  return next[-1+1];
}

function longestIncreasingSubsequenceBetterApproach(arr) {
  let n = arr.length;
  let dp = new Array(n).fill(1);
  let maxi = 1;
  for (let index = 0; index < n; index++) {
    for (let prev = 0; prev < index; prev++) {
      if (arr[prev] < arr[index]) {
        dp[index] = Math.max(dp[index], 1 + dp[prev]);
      }
    }
    maxi = Math.max(maxi, dp[index])
  }

  return maxi;
}

// PRINITING THE LONGEST SUBSEQUENCE AND RETURNING THE MAXIMUM LENGTH
function longestIncreasingSubsequenceMoreBetterApproach(arr) {
  let n = arr.length;
  let dp = new Array(n).fill(1);
  let hash = new Array(n);
  let maxi = 1;
  let lastIndex = 0;
  for (let index = 0; index < n; index++) {
    hash[index] = index
    for (let prev = 0; prev < index; prev++) {
      if (arr[prev] < arr[index] && 1 + dp[prev] > dp[index]) {
        dp[index] = 1 + dp[prev];
        hash[index] = prev;
      }
    }
    if(dp[index] > maxi) {
      maxi = dp[index]
      lastIndex = index;
    }
  }
  let lis = [];
  lis[0] = arr[lastIndex];
  let ind = 1;
  while(hash[lastIndex] !== lastIndex) {
      lastIndex = hash[lastIndex];
      lis[ind++] = arr[lastIndex];
  }
  console.log(lis);
  return maxi;
}

// LIS USING BINARY SEARCH LEARN BINARY SEARCH THEN WATCH VIDEO AGAIN


// Longest Divisible Subset

function longestDivisibleSubset(arr) {
  let n = arr.length;
  let dp = new Array(n).fill(1);
  let hash = new Array(n);
  let maxi = 1;
  let lastIndex = 0;
  arr.sort((a,b) => a - b);
  for (let index = 0; index < n; index++) {
    hash[index] = index
    for (let prev = 0; prev < index; prev++) {
      if (arr[index] % arr[prev] === 0 && 1 + dp[prev] > dp[index]) {
        dp[index] = 1 + dp[prev];
        hash[index] = prev;

      }
    }
    if(dp[index] > maxi) {
      maxi = dp[index]
      lastIndex = index;
    }
  }
  let lis = [];
  lis[0] = arr[lastIndex];
  let ind = 1;
  while(hash[lastIndex] !== lastIndex) {
      lastIndex = hash[lastIndex];
      lis[ind++] = arr[lastIndex];
  }
  return lis;
}

function longestStringChain(arr) {
  let n = arr.length;
  let dp = new Array(n).fill(1);
  let maxi = 1;
  arr.sort((a,b) => a - b);
  for (let index = 0; index < n; index++) {
    for (let prev = 0; prev < index; prev++) {
      if (checkForPossibility(arr[i],arr[j])&& 1 + dp[prev] > dp[index]) {
        dp[index] = 1 + dp[prev];
      }
    }
    if(dp[index] > maxi) {
      maxi = dp[index]
    }
  }
  return maxi;
}

function checkForPossibility(s1,s2) {
  if(s1.length !== s2.length + 1) return false;
  let first = 0;
  let second = 0;

  while(first < s1.length) {
    if(s1[first] !== s2[second]) {
      first++;
      second++;
    } else {
      first++;
    }
  }

  if(first === s1.length && second === s2.length) return true;
  return false;
}


function longestIncreasingBitonicSusequence(arr) {
  let n = arr.length;
  let dp1 = new Array(n).fill(1);
  
  for (let index = 0; index < n; index++) {
    for (let prev = 0; prev < index; prev++) {
      if (arr[prev] < arr[index] && 1 + dp1[prev] > dp1[index]) {
        dp1[index] = 1 + dp1[prev];
      }
    }
  }

  let dp2 = new Array(n).fill(1);
   for (let index = n - 1; index >= 0; index--) {
    for (let prev = n - 1; prev > index; prev--) {
      if (arr[prev] < arr[index] && 1 + dp2[prev] > dp2[index]) {
        dp2[index] = 1 + dp2[prev];
      }
    }
  }

  let maxi = 0;
  for(let i = 0; i < n; i++) {
    maxi = Math.max(maxi, dp1[i] + dp2[i] - 1)
  }
  return maxi;
}

function numberOfLongestIncreasingSubsequence(arr) {
  let n = arr.length;
  let dp = new Array(n).fill(1);
  let count = new Array(n).fill(1);
  let maxi = 1;
  for (let index = 0; index < n; index++) {
    for (let prev = 0; prev < index; prev++) {
      if (arr[prev] < arr[index] && 1 + dp[prev] > dp[index]) {
        dp[index] = 1 + dp[prev];

        // Inherit
        count[index] = count[prev];
      } else if(arr[prev] < arr[index] && 1 + dp[prev] === dp[index]) {
          // Increase the count
          count[index] += count[prev]
      }
    }
    maxi = Math.max(maxi, dp[i]);
  }
  let nosLis = 0;
  for(let i = 0; i < n; i++) {
    if(dp[i] === maxi) nosLis += count[i];
  }

  return nosLis;
}

function callLongestIncreasingSubsequence() {
  let arr = [10,9,2,5,3,7,101,18];
  let n = arr.length;
  let dp = Array.from({ length: n }, () => new Array(n + 1).fill(-1));
  console.log(longestIncreasingSubsequence(0, -1, n , arr));
  console.log(longestIncreasingSubsequenceMemoisation(0, -1, n, arr, dp));
  console.log(longestIncreasingSubsequenceTabulation(arr));
  console.log(longestIncreasingSubsequenceTabulationSpaceOptimisation(arr));
  console.log(longestIncreasingSubsequenceBetterApproach(arr));
  console.log(longestIncreasingSubsequenceMoreBetterApproach(arr));
  console.log(longestDivisibleSubset(arr));
  console.log(longestStringChain(strArr));
}



// *************************************************************************************************************************************************************************



function mainDPOnSubsequence() {
  callLongestIncreasingSubsequence();
}

// mainDPOnSubsequence();
// *************************************************************************************************************************************************************************



// ****************************************************************************************** Matrix Chain Multiplication ******************************************************
  
  function matrixMultiplication(i,j,arr) {
    if (i === j) return 0;
    let mini = Infinity;
    for(let k = i; k < j; k++) {
      let steps = arr[i - 1] * arr[k] * arr[j] + matrixMultiplication(i,k,arr) + matrixMultiplication(k + 1, j, arr)
      if(steps < mini) mini = steps;
    }
    return mini;
  }

  function matrixMultiplicationMemoisation(i,j,arr,dp) {
    if (i === j) return 0;
    if(dp[i][j] !== -1) return dp[i][j];
    let mini = Infinity;

    for(let k = i; k < j; k++) {
      let steps = arr[i - 1] * arr[k] * arr[j] + matrixMultiplicationMemoisation(i,k,arr,dp) + matrixMultiplicationMemoisation(k + 1, j, arr,dp)
      if(steps < mini) mini = steps;
    }
    return dp[i][j] = mini;
  }

  function matrixMultiplicationTabulation(arr) {
    let n = arr.length;
    let dp = Array.from({ length: n }, () => new Array(n));
    for(let i = 1; i < n; i++) {
      dp[i][i] = 0;
    }
    for(let i = n -1; i >= 1; i--) {
      for(let j = i + 1; j < n; j++) {
          let mini = Infinity;
          for(let k = i; k < j; k++) {
            let steps = arr[i - 1] * arr[k] * arr[j] + dp[i][k] + dp[k + 1][j]
            if(steps < mini) mini = steps;
          }
          dp[i][j] = mini;
      }
    }

    return dp[1][n - 1];
    
  }

  function callMatrixMultiplication() {
    let arr = [10,20,30,40,50];
    let n = arr.length;
    let dp = Array.from({ length: n }, () => new Array(n).fill(-1));
    console.log(matrixMultiplication(1,n-1,arr,n));
    console.log(matrixMultiplicationMemoisation(1,n-1,arr,dp));
    console.log(matrixMultiplicationTabulation(arr));
    
  }

  
// *************************************************************************************************************************************************************************

// ****************************************************************Minimum Cost to cut a stcik ****************************************************************************************

function minCost(n, cuts) {
    cuts.sort((a, b) => a - b);

    cuts.unshift(0);
    cuts.push(n);

    const m = cuts.length - 2;

    function solve(i, j) {
        // Base case: no cuts left
        if (i > j) return 0;

        let mini = Infinity;

        for (let k = i; k <= j; k++) {
            const cost =
                cuts[j + 1] - cuts[i - 1] +
                solve(i, k - 1) +
                solve(k + 1, j);

            mini = Math.min(mini, cost);
        }

        return mini;
    }

    return solve(1, m);
}

console.log(minCost(7, [1, 3, 4, 5])); // 16

function minCostTabulation(n, cuts) {
    cuts.sort((a, b) => a - b);

    cuts.unshift(0);
    cuts.push(n);

    const m = cuts.length - 2;

    const dp = Array.from(
        { length: m + 2 },
        () => Array(m + 2).fill(0)
    );

    // Start from the last possible i
    for (let i = m; i >= 1; i--) {
        for (let j = 1; j <= m; j++) {

            if (i > j) continue;

            let mini = Infinity;

            // Try every possible first cut
            for (let k = i; k <= j; k++) {
                const cost =
                    cuts[j + 1] - cuts[i - 1] +
                    dp[i][k - 1] +
                    dp[k + 1][j];

                mini = Math.min(mini, cost);
            }

            dp[i][j] = mini;
        }
    }

    return dp[1][m];
}

console.log(minCostTabulation(7, [1, 3, 4, 5])); // 16

function minCost(n, cuts) {
    cuts.sort((a, b) => a - b);

    cuts.unshift(0);
    cuts.push(n);

    const m = cuts.length - 2;

    const dp = Array.from(
        { length: m + 2 },
        () => Array(m + 2).fill(-1)
    );

    function solve(i, j) {
        // Base case
        if (i > j) return 0;

        // Return the already calculated result
        if (dp[i][j] !== -1) {
            return dp[i][j];
        }

        let mini = Infinity;

        for (let k = i; k <= j; k++) {
            const cost =
                cuts[j + 1] - cuts[i - 1] +
                solve(i, k - 1) +
                solve(k + 1, j);

            mini = Math.min(mini, cost);
        }

        return dp[i][j] = mini;
    }

    return solve(1, m);
}

console.log(minCost(7, [1, 3, 4, 5])); // 16

// *************************************************************************************************************************************************************************


// Burst Balloons

function burstBalloons(nums) {
    nums.unshift(1);
    nums.push(1);

    const n = nums.length;

    function solve(i, j) {
        // No balloons left in this range
        if (i > j) return 0;

        let maxi = 0;

        // Try every balloon as the last one to burst
        for (let k = i; k <= j; k++) {
            const coins =
                nums[i - 1] * nums[k] * nums[j + 1] +
                solve(i, k - 1) +
                solve(k + 1, j);

            maxi = Math.max(maxi, coins);
        }

        return maxi;
    }

    return solve(1, n - 2);
}

console.log(burstBalloons([3, 1, 5, 8])); // 167


function burstBalloonsMemo(nums) {
    nums.unshift(1);
    nums.push(1);

    const n = nums.length;

    const dp = Array.from(
        { length: n },
        () => Array(n).fill(-1)
    );

    function solve(i, j) {
        // Base case
        if (i > j) return 0;

        // Return cached result
        if (dp[i][j] !== -1) {
            return dp[i][j];
        }

        let maxi = 0;

        for (let k = i; k <= j; k++) {
            const coins =
                nums[i - 1] * nums[k] * nums[j + 1] +
                solve(i, k - 1) +
                solve(k + 1, j);

            maxi = Math.max(maxi, coins);
        }

        return dp[i][j] = maxi;
    }

    return solve(1, n - 2);
}

console.log(burstBalloonsMemo([3, 1, 5, 8])); // 167


function burstBalloonsTabulation(nums) {
    nums = [1, ...nums, 1];

    const n = nums.length;

    const dp = Array.from(
        { length: n },
        () => Array(n).fill(0)
    );

    // i moves from right to left
    for (let i = n - 2; i >= 1; i--) {
        // j moves from left to right
        for (let j = i; j <= n - 2; j++) {
            let maxi = 0;

            // Try every balloon as the last balloon to burst
            for (let k = i; k <= j; k++) {
                const coins =
                    nums[i - 1] * nums[k] * nums[j + 1] +
                    dp[i][k - 1] +
                    dp[k + 1][j];

                maxi = Math.max(maxi, coins);
            }

            dp[i][j] = maxi;
        }
    }

    return dp[1][n - 2];
}

console.log(burstBalloonsTabulation([3, 1, 5, 8])); // 167




function evaluateExp(exp) {
    function solve(i, j, isTrue) {
        // Empty expression
        if (i > j) return 0;

        // Single operand
        if (i === j) {
            if (isTrue === 1) {
                return exp[i] === "T" ? 1 : 0;
            } else {
                return exp[i] === "F" ? 1 : 0;
            }
        }

        let ways = 0;

        // Try every operator as the partition point
        for (let k = i + 1; k <= j - 1; k += 2) {
            const operator = exp[k];

            const leftTrue = solve(i, k - 1, 1);
            const leftFalse = solve(i, k - 1, 0);
            const rightTrue = solve(k + 1, j, 1);
            const rightFalse = solve(k + 1, j, 0);

            if (operator === "&") {
                if (isTrue === 1) {
                    ways += leftTrue * rightTrue;
                } else {
                    ways +=
                        leftFalse * rightFalse +
                        leftTrue * rightFalse +
                        leftFalse * rightTrue;
                }
            } else if (operator === "|") {
                if (isTrue === 1) {
                    ways +=
                        leftTrue * rightTrue +
                        leftTrue * rightFalse +
                        leftFalse * rightTrue;
                } else {
                    ways += leftFalse * rightFalse;
                }
            } else if (operator === "^") {
                if (isTrue === 1) {
                    ways +=
                        leftTrue * rightFalse +
                        leftFalse * rightTrue;
                } else {
                    ways +=
                        leftTrue * rightTrue +
                        leftFalse * rightFalse;
                }
            }
        }

        return ways;
    }

    return solve(0, exp.length - 1, 1);
}

console.log(evaluateExp("T|T&F")); // 1
console.log(evaluateExp("T^F|F")); // 2


function evaluateExp(exp) {
    const MOD = 1000000007;
    const n = exp.length;

    const dp = Array.from(
        { length: n },
        () => Array.from(
            { length: n },
            () => Array(2).fill(-1)
        )
    );

    function solve(i, j, isTrue) {
        // Base case: invalid expression range
        if (i > j) return 0;

        // Base case: single operand
        if (i === j) {
            if (isTrue === 1) {
                return exp[i] === "T" ? 1 : 0;
            } else {
                return exp[i] === "F" ? 1 : 0;
            }
        }

        // Return cached result
        if (dp[i][j][isTrue] !== -1) {
            return dp[i][j][isTrue];
        }

        let ways = 0;

        // Try every operator as the partition point
        for (let k = i + 1; k <= j - 1; k += 2) {
            const operator = exp[k];

            const leftTrue = solve(i, k - 1, 1);
            const leftFalse = solve(i, k - 1, 0);
            const rightTrue = solve(k + 1, j, 1);
            const rightFalse = solve(k + 1, j, 0);

            if (operator === "&") {
                if (isTrue === 1) {
                    ways += leftTrue * rightTrue;
                } else {
                    ways +=
                        leftFalse * rightFalse +
                        leftTrue * rightFalse +
                        leftFalse * rightTrue;
                }
            } else if (operator === "|") {
                if (isTrue === 1) {
                    ways +=
                        leftTrue * rightTrue +
                        leftTrue * rightFalse +
                        leftFalse * rightTrue;
                } else {
                    ways += leftFalse * rightFalse;
                }
            } else if (operator === "^") {
                if (isTrue === 1) {
                    ways +=
                        leftTrue * rightFalse +
                        leftFalse * rightTrue;
                } else {
                    ways +=
                        leftTrue * rightTrue +
                        leftFalse * rightFalse;
                }
            }

            ways %= MOD;
        }

        return dp[i][j][isTrue] = ways;
    }

    return solve(0, n - 1, 1);
}

console.log(evaluateExp("T|T&F")); // 1
console.log(evaluateExp("T^F|F")); // 2
  

function isPalindrome(i, j, str) {
    while (i < j) {
        if (str[i] !== str[j]) {
            return false;
        }
        i++;
        j--;
    }
    return true;
}

function palindromePartitionTwo(i, str, n) {
    if (i === n) return 0;

    let minCost = Infinity;

    for (let j = i; j < n; j++) {
        if (isPalindrome(i, j, str)) {
            let cost = 1 + palindromePartitionTwo(j + 1, str, n);
            minCost = Math.min(cost, minCost);
        }
    }

    return minCost;
}

function palindromePartitionTwoMemoisation(i, str, n, dp) {
    if (i === n) return 0;

    // Return the previously calculated result
    if (dp[i] !== -1) {
        return dp[i];
    }

    let minCost = Infinity;

    for (let j = i; j < n; j++) {
        if (isPalindrome(i, j, str)) {
            let cost = 1 + palindromePartitionTwo(j + 1, str, n, dp);
            minCost = Math.min(cost, minCost);
        }
    }

    return dp[i] = minCost;
}

function palindromePartitionTwoTabulation(str) {
    let n = str.length;

    let dp = Array(n + 1).fill(0);

    // Traverse backwards, from n - 1 to 0
    for (let i = n - 1; i >= 0; i--) {
        let minCost = Infinity;

        for (let j = i; j < n; j++) {
            if (isPalindrome(i, j, str)) {
                let cost = 1 + dp[j + 1];
                minCost = Math.min(cost, minCost);
            }
        }

        dp[i] = minCost;
    }

    return dp[0] - 1;
}

function callPalindromePartition() {
    let str = "ababa";
    let n = str.length;
    let dp = Array(n).fill(-1);

    console.log(palindromePartitionTwo(0, str, n) - 1);
    console.log(palindromePartitionTwoMemoisation(0, str, n, dp) - 1);
    console.log(palindromePartitionTwoTabulation(str));
}




function maxSumAfterPartitioningMemo(arr, k) {
    const n = arr.length;
    const dp = Array(n).fill(-1);

    function solve(i) {
        if (i === n) return 0;

        if (dp[i] !== -1) return dp[i];

        let maxElement = 0;
        let maxSum = 0;
        let len = 0;

        for (let j = i; j < Math.min(n, i + k); j++) {
            len++;
            maxElement = Math.max(maxElement, arr[j]);

            const currentSum =
                len * maxElement + solve(j + 1);

            maxSum = Math.max(maxSum, currentSum);
        }

        return dp[i] = maxSum;
    }

    return solve(0);
}

console.log(
    maxSumAfterPartitioningMemo([1, 15, 7, 9, 2, 5, 10], 3)
); // 84


function maxSumAfterPartitioning(arr, k) {
    const n = arr.length;

    function solve(i) {
        // Base case: no elements left
        if (i === n) return 0;

        let maxElement = 0;
        let maxSum = 0;
        let len = 0;

        for (let j = i; j < Math.min(n, i + k); j++) {
            len++;

            maxElement = Math.max(maxElement, arr[j]);

            const currentSum =
                len * maxElement + solve(j + 1);

            maxSum = Math.max(maxSum, currentSum);
        }

        return maxSum;
    }

    return solve(0);
}

console.log(
    maxSumAfterPartitioning([1, 15, 7, 9, 2, 5, 10], 3)
); // 84


function maxSumAfterPartitioningTabulation(arr, k) {
    const n = arr.length;
    const dp = Array(n + 1).fill(0);

    // Build the DP table from right to left
    for (let i = n - 1; i >= 0; i--) {
        let maxElement = 0;
        let maxSum = 0;
        let len = 0;

        for (let j = i; j < Math.min(n, i + k); j++) {
            len++;

            maxElement = Math.max(maxElement, arr[j]);

            const currentSum =
                len * maxElement + dp[j + 1];

            maxSum = Math.max(maxSum, currentSum);
        }

        dp[i] = maxSum;
    }

    return dp[0];
}

console.log(
    maxSumAfterPartitioningTabulation([1, 15, 7, 9, 2, 5, 10], 3)
); // 84


function largestRectangleArea(heights) {
    const stack = [];
    let maxArea = 0;

    for (let i = 0; i <= heights.length; i++) {
        // Sentinel height 0 flushes remaining bars
        const currentHeight = i === heights.length ? 0 : heights[i];

        while (
            stack.length > 0 &&
            currentHeight < heights[stack[stack.length - 1]]
        ) {
            const height = heights[stack.pop()];

            const width = stack.length === 0
                ? i
                : i - stack[stack.length - 1] - 1;

            maxArea = Math.max(maxArea, height * width);
        }

        stack.push(i);
    }

    return maxArea;
}

function maximalRectangle(matrix) {
    if (matrix.length === 0) return 0;

    const rows = matrix.length;
    const cols = matrix[0].length;

    const heights = Array(cols).fill(0);
    let maxArea = 0;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] === "1" || matrix[i][j] === 1) {
                heights[j]++;
            } else {
                heights[j] = 0;
            }
        }

        maxArea = Math.max(
            maxArea,
            largestRectangleArea(heights)
        );
    }

    return maxArea;
}

const matrix = [
    ["1", "0", "1", "0", "0"],
    ["1", "0", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
    ["1", "0", "0", "1", "0"]
];

console.log(maximalRectangle(matrix)); // 6


function countSquares(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;

    const dp = Array.from(
        { length: rows },
        () => Array(cols).fill(0)
    );

    let total = 0;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const cell = matrix[i][j];

            if (cell === 1 || cell === "1") {
                if (i === 0 || j === 0) {
                    dp[i][j] = 1;
                } else {
                    dp[i][j] = 1 + Math.min(
                        dp[i - 1][j],
                        dp[i][j - 1],
                        dp[i - 1][j - 1]
                    );
                }

                // Count every square ending at this cell
                total += dp[i][j];
            }
        }
    }

    return total;
}



console.log(countSquares(matrix)); // 15
function partitionPatternMain() {
  // callMatrixMultiplication();
  callPalindromePartition(); // 0
  }

  partitionPatternMain();
// *************************************************************************************************************************************************************************


 