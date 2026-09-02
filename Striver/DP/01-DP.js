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
  let temp1 = [], temp2 = [];
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
    
    if(day === 0) {
        for(let i = 0 ; i < noOfTasks; i++) {
            max = Math.max(max, arr[day][i]);
        }
        return max;
    }
    for(let i = 0 ;  i < noOfTasks; i++) {
        if(i !== lastPerformedTask) {
            let points = arr[day][i] + ninjaTrainingUsingRecursion(day - 1, i, arr, noOfTasks);
            max = Math.max(max,points);
        }
    }
    return max;
}

function ninjaTrainingUsingMemoization(day, lastPerformedTask, arr, noOfTasks, dp) {
    let max = 0;
    if(day === 0) {
        for(let i = 0 ; i < noOfTasks; i++) {
            max = Math.max(max, arr[day][i]);
        }
        return max;
    }
    
    if(dp[day][lastPerformedTask] !== -1) return dp[day][lastPerformedTask];
    for(let i = 0 ;  i < noOfTasks; i++) {
        if(i !== lastPerformedTask) {
            let points = arr[day][i] + ninjaTrainingUsingMemoization(day - 1, i, arr, noOfTasks, dp);
            max = Math.max(max,points);
        }
    }
    dp[day][lastPerformedTask] = max;
    return dp[day][lastPerformedTask]
}

function ninjaTrainingUsingTabulation(arr) {
    let n = arr.length;
    let noOfTasks = arr[0].length + 1
    let dp = Array.from({ length: n }, () => Array.from(noOfTasks).fill(0));
    dp[0][0] = Math.max(arr[0][1], arr[0][2]);
    dp[0][1] = Math.max(arr[0][0], arr[0][2]);
    dp[0][2] = Math.max(arr[0][0], arr[0][1]);
    dp[0][3] = Math.max(arr[0][0], Math.max(arr[0][1], arr[0][2]));

    for(let day = 1; day < n; day++) {
        for(let last = 0 ; last < noOfTasks; last++) {
            dp[day][last] = 0;
            for(let task = 0; task < noOfTasks - 1; task++) {
                if (task != last) {
                    let points = arr[day][task] + dp[day - 1][task];
                    dp[day][last] = Math.max(dp[day][last],points);
                }
            }
        }
    }
    return dp[n-1][3];
}


function ninjaTrainingUsingTabulationMinimumSpaceComplexity(arr) {
    let n = arr.length;
    let noOfTasks = arr[0].length + 1
    let prev = Array.from({ length: n }, () => Array.from(noOfTasks).fill(0));
    prev[0] = Math.max(arr[0][1], arr[0][2]);
    prev[1] = Math.max(arr[0][0], arr[0][2]);
    prev[2] = Math.max(arr[0][0], arr[0][1]);
    prev[3] = Math.max(arr[0][0], Math.max(arr[0][1], arr[0][2]));

    for(let day = 1; day < n; day++) {
        let temp = Array.from({ length: n }, () => Array.from(noOfTasks).fill(0));
        for(let last = 0 ; last < noOfTasks; last++) {
            temp[last] = 0;
            for(let task = 0; task < noOfTasks - 1; task++) {
                if (task != last) {
                    let points = arr[day][task] + prev[task];
                    temp[last] = Math.max(temp[last],points);
                }
            }
        }
        prev = temp;
    }
    
    return prev[3];
    
}
function callNinjaTraining() {
  let arr = [
    [10,40,70],
    [20,50,80],
    [30,60,90]
  ]

  let n = arr.length;  
  let noOfTasks = arr[0].length;
  let dp = Array.from({ length : n }, () => Array(noOfTasks + 1).fill(-1));
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
    let up  = gridUniquePathRecursion(i - 1,j);
    let left = gridUniquePathRecursion(i, j - 1);

    return left + up;
}

function gridUniquePathMemoization(i, j, dp) {
    if (i === 0 && j === 0) return 1;
    if (i < 0 || j < 0) return 0;
    if(dp[i][j] !== -1) return dp[i][j];
    let up  = gridUniquePathMemoization(i - 1,j,dp);
    let left = gridUniquePathMemoization(i, j - 1,dp);

    return dp[i][j] = left + up;
}

function gridUniquePathTabulation(m,n) {

    let dp = new Array(m).fill().map(() => new Array(n).fill(0));

    for(let i = 0; i < m ; i++) {
        for(let j = 0; j < n; j++) {
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

function gridUniquePathTabulationWithSpaceOptimisation(m,n) {
    let prev = new Array(m).fill().map(() => new Array(n).fill(0));

    for(let i = 0; i < m; i++) {
        let temp = new Array(n).fill(0);
        for(let j = 0; j < m; j++) {
            if (i === 0 && j === 0){ 
                temp[j] = 1;
                continue;
            } 

            let up = (i > 0) ? prev[j] : 0;
            let left = (j > 0) ? temp[j - 1] : 0;

            temp[j] = up + left;
        }
        prev = temp;
    }
    return prev[n - 1];
}

// **************************************************************************************************************
function callGridUniquePath() {
    let m = 3, n = 2;
    let dp = Array.from({ length: m }, () => Array(n).fill(-1));
    console.log(gridUniquePathRecursion(m - 1,n - 1));
    console.log(gridUniquePathMemoization(m - 1,n - 1,dp));
    console.log(gridUniquePathTabulation(m,n));
    console.log(gridUniquePathTabulationWithSpaceOptimisation(m,n));
}

// *************************************************************************************************************

// ********************************************* Unique Path 2 **************************************************

function gridUniquePathWithDeadCellRecursion(grid,i,j) {
    if (i >= 0 && j >= 0 && grid[i][j] === -1) return 0;
    if (i === 0 && j === 0) return 1;
    if (i < 0 || j < 0) return 0;

    let up = gridUniquePathWithDeadCellRecursion(grid,i - 1, j);
    let left = gridUniquePathWithDeadCellRecursion(grid,i,j - 1);

    return up + left;
}

function gridUniquePathWithDeadCellMemoization(grid,i,j,dp) {
    if(i >= 0 && j >= 0 && grid[i][j] === -1) return 0;
    if(i < 0 || j < 0) return 0;
    if(i === 0 && j === 0) return 1;
    if(dp[i][j] !== -1) return dp[i][j];

    
    let up = gridUniquePathWithDeadCellMemoization(grid,i - 1,j,dp);
    let left = gridUniquePathWithDeadCellMemoization(grid,i,j - 1,dp);

    return dp[i][j] = up + left;
}

function gridUniquePathWithDeadCellTabulation(grid,m,n) {
    
    let dp = Array.from({ length: grid.length }, () => Array(grid[0].length).fill(0));

    for(let i = 0; i <= m; i++) {
        for(let j = 0; j <= n; j++) {
            if(grid[i][j] === -1) {
                dp[i][j] = 0;
                continue;
            }
            if(i === 0 && j === 0) {
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

function gridUniquePathWithDeadCellTabulationSpaceOptimisation(grid,m,n) {
    let prev = new Array(grid.length).fill(0);


    for(let i = 0; i < grid[0].length; i++) {
        let temp = new Array(grid[0].length).fill(0);
        for (let j = 0; j < grid[0].length; j++) {
            if (i === 0 && j === 0) {
                temp[j] = 1;
                continue;
            }
            if(grid[i][j] === -1) {
                temp[j] = 0;
                continue;
            }

            let up = 0;
            let left = 0;

            if(i > 0) up = prev[j];
            if(j > 0) left = temp[j - 1];
            temp[j] = up + left;
        }
        prev = temp;
    }
    return prev[grid[0].length - 1];
}

function callGridUniquePathWithDeadCell() {
    let grid = [
        [0,0,0],
        [0,-1,0],
        [0,0,0]
    ]
    let dp =  Array.from({ length: grid.length }, () => Array(grid[0].length).fill(-1));
    console.log(gridUniquePathWithDeadCellRecursion(grid,2,2));
    console.log(gridUniquePathWithDeadCellMemoization(grid,2,2,dp));
    console.log(gridUniquePathWithDeadCellTabulation(grid,2,2));
    console.log(gridUniquePathWithDeadCellTabulationSpaceOptimisation(grid,2,2));
}

// **************************************************************************************************************

function minimumPathGridRecursion(i,j,grid) {
    
    if(i === 0 && j === 0) return grid[0][0];
    if(i < 0 || j < 0) return Infinity;

    let up = grid[i][j] + minimumPathGridRecursion(i - 1, j, grid);
    let down = grid[i][j] + minimumPathGridRecursion(i,j-1,grid);

    return Math.min(up,down);
}

function minimumPathGridMemoisation(i,j,grid,dp) {
    if (i === 0 && j === 0) return grid[0][0];
    if(i < 0 || j < 0) return Infinity;

    if(dp[i][j] !== -1) return dp[i][j];

    let up = grid[i][j] + minimumPathGridMemoisation(i - 1, j, grid,dp);
    let left = grid[i][j] + minimumPathGridMemoisation(i, j - 1, grid,dp);

    return dp[i][j] = Math.min(up,left);
}   

function minimumPathGridTabulation(grid) {
    let dp = Array.from({ length: grid.length }, () => Array(grid[0].length).fill(0));
    const m = grid.length;
    const n = grid[0].length;
    for(let i = 0 ; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(i === 0 && j === 0) {
                dp[i][j] = grid[i][j];
                continue;
            }
            let up = Infinity;
            let left = Infinity;
            
            if(i > 0) up = dp[i - 1][j] + grid[i][j];
            if(j > 0) left = dp[i][j - 1] + grid[i][j];
                
            dp[i][j] = Math.min(up,left);
        }
    }
    return dp[m - 1][n - 1];
}

function minimumPathGridUsingTabulationWithMinimumSpaceComplexity(grid) {
    const m = grid.length;
    const n = grid[0].length;

    let prev = new Array(n).fill(0);

    for(let i = 0; i < m; i++) {
        let temp = new Array(n).fill(0);        
        for(let j = 0 ; j < n; j++) {
            let up = Infinity;
            let down = Infinity;
            if(i === 0 && j === 0) {
                temp[j] = grid[i][j];
                continue;
            }
            if(i > 0) up = prev[j] + grid[i][j];
            if (j > 0) left = temp[j - 1] + grid[i][j];
            temp[j] = Math.min(up,left);
        }
        prev = temp;
    }
    return prev[n - 1];
}

function callMinimumUniquePath() {
    const grid = [
        [10,8,2],
        [10,5,100],
        [1,1,2]
    ]
    const m = 3;
    const n = 3;
    let dp = Array.from({ length: m }, () => Array(n).fill(-1));
    console.log(minimumPathGridRecursion(m - 1, n - 1, grid));
    console.log(minimumPathGridMemoisation(m - 1, n - 1, grid, dp));
    console.log(minimumPathGridTabulation(grid))
    console.log(minimumPathGridUsingTabulationWithMinimumSpaceComplexity(grid));
}
// **************************************  Fixed Starting Point and Variable Ending Point - Traingle *********************

function findMinimumPathInTriangle(i,j,n,triagGrid) {
    if(i === n - 1) return triagGrid[i][j];

    const down = triagGrid[i][j] + findMinimumPathInTriangle(i + 1,j,n,triagGrid);
    const diag = triagGrid[i][j] + findMinimumPathInTriangle(i + 1, j + 1,n,triagGrid);

    return Math.min(down,diag);
}

function findMinimumPathInTriangleMemoisation(i,j,n,triagGrid,dp) {
    if (i === n - 1) return triagGrid[i][j];
    if(dp[i][j] !== -1) return dp[i][j];

    const down = triagGrid[i][j] + findMinimumPathInTriangle(i + 1,j,n,triagGrid,dp);
    const diag = triagGrid[i][j] + findMinimumPathInTriangle(i + 1, j + 1,n,triagGrid,dp);

    return dp[i][j] = Math.min(down,diag);
}

function findMinimumPathInTriangleTabulation(triagGrid) {
    const n = triagGrid.length;
    const dp = triagGrid.map((row) => row.map(() => 0));
    
    for(let i = 0 ; i < n; i++) {
        dp[n - 1][i] = triagGrid[n - 1][i];
    }
    for(let i = n - 2; i >= 0; i--) {
        for (let j = i; j >= 0; j--) {

            const down = dp[i + 1][j] + triagGrid[i][j];
            const diag = dp[i + 1][j + 1] + triagGrid[i][j];
            dp[i][j] = Math.min(down,diag);
        }
    }
    return dp[0][0];
}


function findMinimumPathInTriangleTabulationMinimumSpaceComplexity(triagGrid) {
    const n = triagGrid.length;
    
    let prev = triagGrid[n - 1].slice();
    for(let i = n - 2; i >= 0; i--) {
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
    const triangle = [
        [1],
        [2,3],
        [3,6,7],
        [8,9,6,10]
    ]
    const n = triangle.length;
    let dp = triangle.map((row) => row.map(() => -1));
    console.log(findMinimumPathInTriangle(0,0,n,triangle));
    console.log(findMinimumPathInTriangleMemoisation(0,0,n,triangle,dp));
    console.log(findMinimumPathInTriangleTabulation(triangle));
    console.log(findMinimumPathInTriangleTabulationMinimumSpaceComplexity(triangle));
}


// ***********************************************************************************************************************

// ******************************************* Variable Starting and Ending Point - Maximum/Minimum Path Sum in a matrix ****************************************


function maximumPathInMatrixRecursion(i,j,grid,m) {
    // Base case
    if(j < 0 || j > m - 1) return -Infinity;
    if(i === 0) return grid[i][j];

    const up = grid[i][j] + maximumPathInMatrixRecursion(i - 1,j,grid,m);
    const leftUpwardDiag = grid[i][j] + maximumPathInMatrixRecursion(i - 1, j - 1, grid, m);
    const rightUpwardDiag = grid[i][j] + maximumPathInMatrixRecursion(i - 1, j + 1,grid,m);

    return Math.max(up,leftUpwardDiag,rightUpwardDiag); 

}

function maximumPathInMatrixMemoisation(i,j,grid,m,dp) {
    
    
    // Base case
    if(j < 0 || j > m - 1) return -Infinity;
    if(i === 0) return grid[i][j];
    if(dp[i][j] !== -1) return dp[i][j];

    const up = grid[i][j] + maximumPathInMatrixMemoisation(i - 1,j,grid,m,dp);
    const leftUpwardDiag = grid[i][j] + maximumPathInMatrixMemoisation(i - 1, j - 1, grid, m, dp);
    const rightUpwardDiag = grid[i][j] + maximumPathInMatrixMemoisation(i - 1, j + 1,grid,m, dp);

    return dp[i][j] = Math.max(up,leftUpwardDiag,rightUpwardDiag); 

}

function maximumPathInMatrixTabulation(grid) {
    let m = grid[0].length;
    let n = grid.length;

    let dp = Array.from({ length: n }, () => Array(m).fill(0));
    for(let j = 0; j < m; j++) {
        dp[0][j] = grid[0][j];
    }

    for(let i = 1; i < n; i++) {
        for(let j = 0; j < m; j++) {
            const up = grid[i][j] + dp[i - 1][j];
            const leftUpwardDiag = j > 0 ? grid[i][j] + dp[i - 1][j - 1] : -Infinity;
            const rightUpwardDiag = j < m - 1 ? grid[i][j] + dp[i - 1][j + 1] : -Infinity;

            dp[i][j] = Math.max(up,leftUpwardDiag,rightUpwardDiag);
        }
    }

    let max = dp[n - 1][0];
    for(let j = 1; j < m; j++) {
        max = Math.max(max, dp[n - 1][j]);
    }
    return max;
}

function maximumPathInMatrixTabulationSpaceOptimisation(grid) {
    let m = grid[0].length;
    let n = grid.length;

    let prev = [...grid[0]];

    for(let i = 1; i < n; i++) {
            let temp = [...grid[i]]
            for(let j = 0; j < m; j++) {
                const up = temp[j] + prev[j];
                const leftUpwardDiag = j > 0 ? temp[j] + prev[j - 1] : -Infinity;
                const rightUpwardDiag = j < m - 1 ? temp[j] + prev[j + 1] : -Infinity;
                temp[j] = Math.max(up,leftUpwardDiag,rightUpwardDiag);
            }
            
            prev = temp
    }
    let max = prev[0];
    for(let j = 1; j < m; j++) {
        max = Math.max(max, prev[j]);
    }
    return max;
}

function callMaximumPathInMatrix() {
    const grid = [
        [1,2,10,4],
        [100,3,2,1],
        [1,1,2,2],
        [1,2,2,1]
    ]
    let n = grid.length;
    let m = grid[0].length;
    let max = -Infinity;
    let maxFromMemo = -Infinity;
    let dp = Array.from({ length: n }, () => Array(m).fill(-1));
    for(let j = 0; j < m; j++) {
        max = Math.max(max, maximumPathInMatrixRecursion(n - 1, j, grid, m))
        maxFromMemo = Math.max(max, maximumPathInMatrixMemoisation(n - 1, j, grid, m, dp))
    }
    console.log(max);
    console.log(maxFromMemo);

    console.log(maximumPathInMatrixTabulation(grid));
    console.log(maximumPathInMatrixTabulationSpaceOptimisation(grid));

}
// **************************************************************************************************************************************************************

// ***************************************** Cherry Pickup - 3D DP **********************************************************************************************

function maximumChocolates(i,j1,j2,m,n,grid) {
    if (j1 < 0 || j2 < 0 || j1 >= m || j2 >= m) return -Infinity;
    if (i === n - 1) {
        if (j1 === j2) {
            return grid[i][j2]
        } else {
            return grid[i][j1] + grid[i][j2];
        }
    }

    // explore all paths of Alice and Bob simultaneously(leftdiag,down,rightdiag)
    let max = -Infinity;
    for (let dj1 = -1; dj1 <= 1; dj1++) {
        for(let dj2 = -1; dj2 <= 1; dj2++) {
            let value = 0;
            if (j1 === j2) { // If bob and alice are at same postion
                value = grid[i][j1];
            } else {
                value = grid[i][j1] + grid[i][j2];
            }
            value += maximumChocolates(i + 1, j1 + dj1, j2 + dj2, m,n,grid);
            max = Math.max(max, value);
        }
    }
    return max;
}

function maximumChocolatesMemoization(i,j1,j2,m,n,grid,dp) {

    if (j1 < 0 || j2 < 0 || j1 >= m || j2 >= m) return -Infinity;
    if (i === n - 1) {
        if (j1 === j2) {
            return grid[i][j2]
        } else {
            return grid[i][j1] + grid[i][j2];
        }
    }

    if(dp[i][j1][j2] !== -1) return dp[i][j1][j2];

    // explore all paths of Alice and Bob simultaneously(leftdiag,down,rightdiag)
    let max = -Infinity;
    for (let dj1 = -1; dj1 <= 1; dj1++) {
        for(let dj2 = -1; dj2 <= 1; dj2++) {
            let value = 0;
            if (j1 === j2) { // If bob and alice are at same postion
                value = grid[i][j1];
            } else {
                value = grid[i][j1] + grid[i][j2];
            }
            value += maximumChocolates(i + 1, j1 + dj1, j2 + dj2, m,n,grid);
            max = Math.max(max, value);
        }
    }
    return dp[i][j1][j2] = max;
}

function maximumChocolatesTabulation(m,n,grid) {
    // Tabulation
    let dp = Array.from({ length: n }, () =>
                  Array.from({ length: m }, () =>
                  Array(m).fill(0)));

    for(let j1 = 0; j1 < m; j1++) {
        for(let j2 = 0; j2 < m; j2++) {
            if(j1 === j2) {
                dp[n - 1][j1][j2] = grid[n - 1][j1];
        
            } else {
                dp[n - 1][j1][j2] = grid[n - 1][j1] + grid[n - 1][j2];
            }
        }
    }

    for(let i = n - 2; i >= 0; i--) {
        for(let j1 = 0; j1 < m; j1++) {
            for(let j2 = 0; j2 < m; j2++) {
                let max = -Infinity;
                for (let dj1 = -1; dj1 <= 1; dj1++) {
                    for(let dj2 = -1; dj2 <= 1; dj2++) {
                        let value = 0;
                        if (j1 === j2) { // If bob and alice are at same postion
                            value = grid[i][j1];
                        } else {
                            value = grid[i][j1] + grid[i][j2];
                        }
                        if (j1 + dj1 >= 0 && j1 + dj1 < m && j2 + dj2 >= 0 && j2 + dj2 < m) {
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

function maximumChocolatesTabulationSpaceOptimisation(m,n,grid) {
    let next = Array.from({ length: m }, () => Array(m).fill(0));
        // Current row dp array
        let curr = Array.from({ length: m }, () => Array(m).fill(0));
        
        // Base case: last row
        for (let j1 = 0; j1 < m; j1++) {
            for (let j2 = 0; j2 < m; j2++) {
                if (j1 === j2) next[j1][j2] = grid[n-1][j1];
                else next[j1][j2] = grid[n-1][j1] + grid[n-1][j2];
            }
        }
        
        // Fill DP table bottom-up
        for (let i = n - 2; i >= 0; i--) {
            for (let j1 = 0; j1 < m; j1++) {
                for (let j2 = 0; j2 < m; j2++) {
                    let maxi = -1e9;
                    let currChoco = (j1 === j2) ? grid[i][j1] 
                                                : grid[i][j1] + grid[i][j2];
                    for (let dj1 = -1; dj1 <= 1; dj1++) {
                        for (let dj2 = -1; dj2 <= 1; dj2++) {
                            let newJ1 = j1 + dj1;
                            let newJ2 = j2 + dj2;
                            if (newJ1 >= 0 && newJ1 < m &&
                                newJ2 >= 0 && newJ2 < m) {
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
            next = curr.map(row => row.slice());
        }
        // Answer is starting position
        return next[0][m-1];
}

function callMaximumChocolates() {
    let grid = [
        [2,3,1,2],
        [3,4,2,2],
        [5,6,3,5]
    ]
    const n = grid.length;
    const m = grid[0].length;
    console.log(maximumChocolates(0,0,m - 1,m,n,grid));
    
    // 3D DP
    let dp = Array.from({ length: n }, () =>
                  Array.from({ length: m }, () =>
                  Array(m).fill(-1)));
    console.log(maximumChocolatesMemoization(0,0,m - 1,m,n,grid,dp));
    console.log(maximumChocolatesTabulation(m,n,grid));
    console.log(maximumChocolatesTabulationSpaceOptimisation(m,n,grid));

}

// **************************************************************************************************************************************************************

// ************************************ Subset Sum Equals To Target *********************************************************************************************

function subsequenceSumEqualToTarget(index,target,arr) {
    if (target === 0) return true;
    if (index === 0) return arr[0] === target;

    let notTake = subsequenceSumEqualToTarget(index - 1, target, arr);
    let take = false;
    if (arr[index] < target) {
        take = subsequenceSumEqualToTarget(index - 1, target - arr[index], arr);
    }

    return take || notTake;
}

function subsequenceSumEqualToTargetMemoisation(index,target,arr,dp) {
    
    if (target === 0) return true;
    if (index === 0) return arr[0] === target;

    if(dp[index][target] !== -1) return dp[index][target];

    let notTake = subsequenceSumEqualToTarget(index - 1, target, arr);
    let take = false;
    if (arr[index] < target) {
        take = subsequenceSumEqualToTarget(index - 1, target - arr[index], arr);
    }

    return dp[index][target] = take || notTake;
}

function subsequenceSumEqualToTargetTabulation(k,arr) {
    
    let n = arr.length;
    let dp = Array.from( { length: n }, () => Array(k + 1).fill(0));

    for(let i = 0; i < n; i++) dp[i][0] = true;

    if (arr[0] <= k) dp[0][arr[0]] = true;
    
    for(let i = 1; i < n; i++) {
        for(let target = 1; target <= k; target++) {
                let notTake = dp[i - 1][target];
                let take = false;
                if (arr[i] < target) {
                    take = dp[i - 1][target - arr[i]];
                }
                dp[i][target] =  take || notTake;
        }
    }
    return dp[n - 1][k];
}

function subsequenceSumEqualToTargetTabulationSpaceOptimisation(n,k,arr) {
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
    let arr = [2,3,1,1];
    let n = arr.length;
    let k = 4
    let dp = Array.from({ length: n }, () => Array(k + 1).fill(-1));
    console.log(subsequenceSumEqualToTarget(n - 1, k, arr));
    console.log(subsequenceSumEqualToTargetMemoisation(n - 1, k, arr, dp));
    console.log(subsequenceSumEqualToTargetTabulation(k,arr));
    console.log(subsequenceSumEqualToTargetTabulationSpaceOptimisation(n,k,arr))
}

// **************************************************************************************************************************************************************
// ***************************************** Subset Sum Equal to K **********************************************************************************************

function partitionEqualSubsetSum() {
    let totalSum = 0;
    let arr = [2,3,3,3,4,5];
    let n = arr.length;
    for(let i = 0; i < n; i++) {
        totalSum += arr[i];
    }
    if(totalSum % 2 !== 0) return false;
    let target = totalSum / 2;
    console.log(subsequenceSumEqualToTarget(n - 1,target,arr));
}

// **************************************************************************************************************************************************************

// ******************************************* Partition Set two Subset with minimum absolute difference ********************************************************

function minSubsetSumDiff() {
    let arr = [3,2,7];
    let totalSum = 0;
    let n = arr.length;
    for (let i = 0; i < n; i++) totalSum += arr[i];

    let k = totalSum;

    let dp = Array.from( { length: n }, () => Array(k + 1).fill(0));

    for(let i = 0; i < n; i++) dp[i][0] = true;

    if (arr[0] <= k) dp[0][arr[0]] = true;
    
    for(let i = 1; i < n; i++) {
        for(let target = 1; target <= k; target++) {
                let notTake = dp[i - 1][target];
                let take = false;
                if (arr[i] <= target) {
                    take = dp[i - 1][target - arr[i]];
                }
                dp[i][target] =  take || notTake;
        }
    }

    let minimum = Infinity;
    for(let s1 = 0; s1 <= totalSum / 2; s1++) { // Watch Video to understand total Sum / 2
        if(dp[n - 1][s1] === true) {
            minimum = Math.min(minimum, Math.abs ((totalSum - s1) - s1)) // s2 = totalSum - s1
        }
    }
    console.log(minimum);
} 

function minSubsetSumDiffSpaceOptimisation() {
    let arr = [3,2,7];
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
    for(let s1 = 0; s1 <= totalSum / 2; s1++) { // Watch Video to understand total Sum / 2
        if(prev[s1] === true) {
            minimum = Math.min(minimum, Math.abs ((totalSum - s1) - s1)) // s2 = totalSum - s1
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

function numberOfSubsetsWithSumk(index,target,arr) {
    if (target === 0) return 1;
    if (index === 0) return arr[0] === target;

    let notPick = numberOfSubsetsWithSumk(index - 1,target,arr);
    let pick = 0;
    if (arr[index] <= target) {
        pick = numberOfSubsetsWithSumk(index - 1, target - arr[index], arr);
    }
    return pick + notPick;
}

// What if the case if [0,0,1] and target is 1 the answer should be 4 but by the method above the answer will be 1

function numberOfSubsetsWithSumk(index,target,arr) {
    if (index === 0) {
        if(target === 0 && arr[0] === 0) return 2;
        if(target === 0 || sum === arr[0]) return 1;
        return 0;
    }

    let notPick = numberOfSubsetsWithSumk(index - 1,target,arr);
    let pick = 0;
    if (arr[index] <= target) {
        pick = numberOfSubsetsWithSumk(index - 1, target - arr[index], arr);
    }
    return pick + notPick;
}


function numberOfSubsetsWithSumkMemoisation(index,target,arr, dp) {
    if (target === 0) return 1;
    if (index === 0) return arr[0] === target;

    if(dp[index][target] !== -1) return dp[index][target];

    let notPick = numberOfSubsetsWithSumk(index - 1,target,arr);
    let pick = 0;
    if (arr[index] <= target) {
        pick = numberOfSubsetsWithSumk(index - 1, target - arr[index], arr);
    }
    return dp[index][target] = pick + notPick;
}

function numberOfSubsetsWithSumkTabulation(target,arr) {
    let n = arr.length;
    let dp = Array.from({ length: n },() => Array(target + 1).fill(0));
    for(let i = 0; i < n; i++) {
        dp[i][0] = 1;
    }
    dp[0][arr[0]] = 1;

    for(let index = 1 ; index < n; index++) {
        for(let sum = 0; sum <= target; sum++) {
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

function numberOfSubsetsWithSumkTabulationSpaceOptimisation(target,arr) {
    let n = arr.length;
    let prev = new Array(target + 1).fill(0)
    prev[0] = 1;
    if(arr[0] <= target) prev[arr[0]] = 1;

    for(let index = 1 ; index < n; index++) {
        let temp = new Array(target + 1).fill(0);
        temp[0] = 1;
        for(let sum = 0; sum <= target; sum++) {
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
    let arr = [1,2,2,3];
    let n = arr.length;
    let k = 3;
    let dp = Array.from( { length: n }, () => Array(k + 1).fill(-1));
    console.log(numberOfSubsetsWithSumk(n - 1, k, arr));
    console.log(numberOfSubsetsWithSumkMemoisation(n -1, k, arr, dp));
    console.log(numberOfSubsetsWithSumkTabulation(k,arr));
    console.log(numberOfSubsetsWithSumkTabulationSpaceOptimisation(k,arr));
    
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
        take = valList[index] + knapSackRecursion(index - 1, W - waitList[index], waitList, valList);
    }

    return Math.max(take, notTake);
}

function knapSackMemoisation(index, W, waitList, valList, dp) {
    if (index === 0) {
        if (waitList[0] <= W) return valList[0];
        return 0;
    }
    if(dp[index][W] !== -1) return dp[index][W];

    let notTake = knapSackRecursion(index - 1, W, waitList, valList);
    let take = -Infinity;
    if (waitList[index] <= W) {
        take = valList[index] + knapSackRecursion(index - 1, W - waitList[index], waitList, valList);
    }

    return dp[index][W] = Math.max(take, notTake);
}

function knapSackTabulation(W, waitList, valList) {
    let n = waitList.length;
    let dp = Array.from({ length: n }, () => Array(W + 1).fill(0));
    for(let wt = waitList[0]; wt < W; wt++) {
        dp[0][wt] = valList[0];
    }

    for(let index = 1; index < n; index++) {
        for(let wt = 0; wt <= W; wt++) {
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

    for(let wt = waitList[0]; wt < W; wt++) {
        prev[wt] = valList[0];
    }
    for(let index = 1; index < n; index++) {
        for(let wt = 0; wt <= W; wt++) {
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

    for(let wt = waitList[0]; wt < W; wt++) {
        prev[wt] = valList[0];
    }
    for(let index = 1; index < n; index++) {
        for(let wt = W; wt >= 0; wt--) {  // 1st change Here
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
    const waitList = [3,2,5];
    const valList = [30,40,60];
    let W = 6;
    let n = valList.length;
    let dp = Array.from({ length: n }, () => Array(W + 1).fill(-1));
    console.log(knapSackRecursion(n - 1, W, waitList, valList));
    console.log(knapSackMemoisation(n - 1, W, waitList, valList, dp));
    console.log(knapSackTabulation(W,waitList,valList));
    console.log(knapSackTabulationSpaceOptimisation(W,waitList,valList));
    console.log(knapSackTabulationMoreSpaceOptimisation(W,waitList,valList));
}

// ***************************************************************************************************************************************************************

// ***************************************** Minimum No Of Coins *************************************************************************************************

function minimuNoOfCoins(index, target, coinsDenom) {
    
    if (index === 0) {
        if(target % coinsDenom[index] === 0)  {
            return target/coinsDenom[index]
        } else {
            return Infinity;
        }
    }
    let notTake = 0 + minimuNoOfCoins(index - 1, target, coinsDenom)
    let take = Infinity;
    if (coinsDenom[index] <= target) {
        take = 1 + minimuNoOfCoins(index, target - coinsDenom[index], coinsDenom);
    }
    return Math.min(take,notTake);

}

function minimuNoOfCoinsMemoisation(index, target, coinsDenom, dp) {
    if (index === 0) {
        if(target % coinsDenom[index] === 0)  {
            return target/coinsDenom[index]
        } else {
            return Infinity;
        }
    }
    if (dp[index][target] !== -1) return dp[index][target];

    let notTake = 0 + minimuNoOfCoins(index - 1, target, coinsDenom)
    let take = Infinity;
    if (coinsDenom[index] <= target) {
        take = 1 + minimuNoOfCoins(index, target - coinsDenom[index], coinsDenom);
    }
    return dp[index][target] = Math.min(take,notTake);
}

function minimuNoOfCoinsTabulation(target ,coinsDenom) {
    let n = coinsDenom.length;
    let dp = Array.from({ length: n }, () => Array(target + 1).fill(0));

    for(let t = 0; t <= target; t++) {
        if(t % coinsDenom[0] === 0)  { 
            dp[0][t] = t/coinsDenom[0];
        } else {
            dp[0][t] = Infinity
        }
    }

    for(let i = 1; i < n; i++) {
        for(let t = 0; t <= target; t++) {
            let notTake = 0 + dp[i - 1][t]
            let take = Infinity;
            if (coinsDenom[i] <= t) {
                take = 1 + dp[i][t - coinsDenom[i]]
            }
            dp[i][t] = Math.min(take,notTake);
        }
    }

    return dp[n - 1][target];
}

function minimumNumberOfCoinsTabulationSpaceOptimisation(target, coinsDenom) {
    let n = coinsDenom.length;
    let prev = new Array(target + 1).fill(0);
    let cur = new Array(target + 1).fill(0);

    for(let t = 0; t <= target; t++) {
        if(t % coinsDenom[0] === 0)  { 
            prev[t] = t/coinsDenom[0];
        } else {
            prev[t] = Infinity
        }
    }

    for(let i = 1; i < n; i++) {
        for(let t = 0; t <= target; t++) {
            let notTake = 0 + prev[t]
            let take = Infinity;
            if (coinsDenom[i] <= t) {
                take = 1 + cur[t - coinsDenom[i]]
            }
            cur[t] = Math.min(take,notTake);
        }
        prev = cur;
    }

    return prev[target];
}
function callMinimumNoOfCoins() {
    let coins = [1,2,3];
    let n = coins.length;
    let target = 7;
    let dp = Array.from({ length: n }, () => Array(target + 1).fill(-1));
    console.log(minimuNoOfCoins(n - 1, target, coins));
    console.log(minimuNoOfCoinsMemoisation(n -1, target, coins, dp));
    console.log(minimuNoOfCoinsTabulation(target,coins));
    console.log(minimumNumberOfCoinsTabulationSpaceOptimisation(target,coins));
}
// ***************************************************************************************************************************************************************

// ******************************************************** Coin Chnage 2 Infinite Supply Problem  ****************************************************************

function coinChangeRecursion(index, target, coinsDenom) {

    if(index === 0) {
        if (target % coinsDenom[index] === 0) {
            return 1;
        }
        return 0;
    }
    let notTake = coinChangeRecursion(index - 1, target, coinsDenom);
    let take = 0;
    if(coinsDenom[index] <= target) {
        take = coinChangeRecursion(index, target - coinsDenom[index], coinsDenom)
    }
    return take + notTake;
}

function coinChangeMemoisation(index, target, coinsDenom, dp) {
    if(index === 0) {
        if (target % coinsDenom[index] === 0) {
            return 1;
        } 
        return 0;
    }
    if(dp[index][target] !== -1) return dp[index][target];

    let notTake = coinChangeMemoisation(index - 1, target, coinsDenom, dp);
    let take = 0;
    if(coinsDenom[index] <= target) {
        take = coinChangeMemoisation(index, target - coinsDenom[index], coinsDenom, dp)
    }
    return dp[index][target] = take + notTake;
}

function coinChangeTabulation(target, coinsDenom) {
    let n = coinsDenom.length;
    let dp = Array.from({ length: n }, () => Array(target + 1).fill(0));

    for(let t = 0; t <= target; t++) {
        if(t % coinsDenom[0] === 0) {
            dp[0][t] =  1;
        } else {
            dp[0][t] = 0;
        }
    }

    for(let index = 1; index < n; index++) {
        for(let t = 0; t <= target; t++) {
            let notTake = dp[index - 1][t];
            let take = 0;
            if(coinsDenom[index] <= t) {
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


    for(let t = 0; t <= target; t++) {
        if(t % coinsDenom[0] === 0) {
            prev[t] =  1;
        } else {
            prev[t] = 0;
        }
    }

    for(let index = 1; index < n; index++) {
        for(let t = 0; t <= target; t++) {
            let notTake = prev[t];
            let take = 0;
            if(coinsDenom[index] <= t) {
                take = cur[t - coinsDenom[index]];
            }
            cur[t] = take + notTake;
        }
        prev = cur;
    }
    return prev[target];
}
function callCoinChange() {
  let coinsDenom = [1,2,3];
  let target = 4;
  let n = coinsDenom.length;
  let dp = Array.from({ length: n }, () => Array(target + 1).fill(-1));
  console.log(coinChangeRecursion(n - 1, target, coinsDenom));
  console.log(coinChangeMemoisation(n - 1, target,coinsDenom, dp));
  console.log(coinChangeTabulation(target,coinsDenom));
  console.log(coinChangeTabulationSpaceOptimisation(target,coinsDenom));
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

    if(index === 0) {
        if (W % wtList[0] === 0) {
            return (W / wtList[0]) * valList[0];
        }
        return 0;
    }

    let notTake = unboudedKnapsack(index - 1, W, wtList, valList);
    let take = -Infinity;
    if(wtList[index] <= W) {
        take = valList[index] + unboudedKnapsack(index, W - wtList[index], wtList, valList)
    }
    return Math.max(notTake, take);

}

function unboudedKnapsackMemoisation(index, W, wtList, valList, dp) {

    if(index === 0) {
        if (W % wtList[0] === 0) {
            return (W / wtList[0]) * valList[0];
        }
        return 0;
    }
    if(dp[index][W] !== -1) return dp[index][W];

    let notTake = unboudedKnapsackMemoisation(index - 1, W, wtList, valList, dp);
    let take = -Infinity;
    if(wtList[index] <= W) {
        take = valList[index] + unboudedKnapsackMemoisation(index, W - wtList[index], wtList, valList, dp)
    }
    return dp[index][W] = Math.max(notTake, take);

}

function unboudedKnapsackTabulation(maxWeight, wtList, valList) {
    const n = wtList.length;
    let dp = Array.from({ length: n }, () => Array(maxWeight + 1).fill(0));
    for(let w = 0; w <= maxWeight; w++) {
        dp[0][w] = w % wtList[0] === 0 ? (w / wtList[0]) * valList[0] : 0;
    }

    for(let index = 1; index < n; index++) {
        for(let W = 0; W <= maxWeight; W++) {
            let notTake = dp[index - 1][W];
            let take = -Infinity;
            if(wtList[index] <= W) {
                take = valList[index] + dp[index][W - wtList[index]];
            }
            dp[index][W] = Math.max(notTake, take);
        }
    }
    return dp[n - 1][maxWeight];
}

function unboudedKnapsackTabulationSpaceOptimisation(maxWeight, wtList, valList) {
    const n = wtList.length;
    let prev = new Array(maxWeight + 1).fill(0);
    let cur = new Array(maxWeight + 1).fill(0);
    
    for(let w = 0; w <= maxWeight; w++) {
        prev[w] = w % wtList[0] === 0 ? (w / wtList[0]) * valList[0] : 0;
    }

    for(let index = 1; index < n; index++) {
        for(let W = 0; W <= maxWeight; W++) {
            let notTake = prev[W];
            let take = -Infinity;
            if(wtList[index] <= W) {
                take = valList[index] + cur[W - wtList[index]];
            }
            cur[W] = Math.max(notTake, take);
        }
        prev = cur;
    }
    return prev[maxWeight];
}

function unboudedKnapsackTabulationSpaceOptimisationMore(maxWeight, wtList, valList) {
    const n = wtList.length;
    let prev = new Array(maxWeight + 1).fill(0);
    
    for(let w = 0; w <= maxWeight; w++) {
        prev[w] = w % wtList[0] === 0 ? (w / wtList[0]) * valList[0] : 0;
    }

    for(let index = 1; index < n; index++) {
        for(let W = 0; W <= maxWeight; W++) {
            let notTake = prev[W];
            let take = -Infinity;
            if(wtList[index] <= W) {
                take = valList[index] + prev[W - wtList[index]];
            }
            prev[W] = Math.max(notTake, take);
        }
    }
    return prev[maxWeight];
}
function callUnboundedKnapsack() {
    const wtList = [2,4,6];
    const valList = [5,11,13];
    const n = wtList.length;
    let W = 8;
    let dp = Array.from({ length: n }, () => Array(W + 1).fill(-1))
    console.log(unboudedKnapsack(n - 1, W, wtList, valList));
    console.log(unboudedKnapsackMemoisation(n - 1, W, wtList, valList, dp));
    console.log(unboudedKnapsackTabulation(W, wtList, valList));
    console.log(unboudedKnapsackTabulationSpaceOptimisation(W, wtList, valList));
    console.log(unboudedKnapsackTabulationSpaceOptimisationMore(W, wtList, valList));
}
// ***************************************************************************************************************************************************************

// ************************************************************************* Rod Cutting Problem ******************************************************************

function rodCuttingProblem(index, n, priceList) {

    if(index === 0) {
        return n * priceList[0];
    }
    let notTake = 0 + rodCuttingProblem(index - 1, n , priceList);
    let take = -Infinity;
    let rodLength = index + 1;
    if(rodLength <= n) {
        take = priceList[index] + rodCuttingProblem(index, n - rodLength, priceList);
    }
    return Math.max(take, notTake);
}

function rodCuttingProblemMemoisation(index, n, priceList, dp) {

    if(index === 0) {
        return n * priceList[0];
    }
    if(dp[index][n] !== -1) return dp[index][n];

    let notTake = 0 + rodCuttingProblemMemoisation(index - 1, n , priceList, dp);
    let take = -Infinity;
    let rodLength = index + 1;
    if(rodLength <= n) {
        take = priceList[index] + rodCuttingProblemMemoisation(index, n - rodLength, priceList, dp);
    }
    return dp[index][n] = Math.max(take, notTake);
}

function rodCuttingProblemTabulation(priceList) {
    const maxLength = priceList.length;
    let dp = Array.from({ length: maxLength }, () => Array(maxLength + 1).fill(0));

    for(let n = 0; n <= maxLength; n++) {
        dp[0][n] = n * priceList[0];
    }

    for(let index = 1; index < maxLength; index++) {
        for(let n = 0; n <= maxLength; n++) {
            let notTake = 0 + dp[index - 1][n];
            let take = -Infinity;
            let rodLength = index + 1;
            if(rodLength <= n) {
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

    for(let n = 0; n <= maxLength; n++) {
        prev[n] = n * priceList[0];
    }

    for(let index = 1; index < maxLength; index++) {
        for(let n = 0; n <= maxLength; n++) {
            let notTake = 0 + prev[n];
            let take = -Infinity;
            let rodLength = index + 1;
            if(rodLength <= n) {
                take = priceList[index] + cur[n - rodLength];
            }
            cur[n] = Math.max(take, notTake);
        }
        prev = [...cur]
    }
    return prev[maxLength];
}

function rodCuttingProblemTabulationOptimisationMore(priceList) {
    const maxLength = priceList.length;
    let prev = new Array(maxLength + 1).fill(0);

    for(let n = 0; n <= maxLength; n++) {
        prev[n] = n * priceList[0];
    }

    for(let index = 1; index < maxLength; index++) {
        for(let n = 0; n <= maxLength; n++) {
            let notTake = 0 + prev[n];
            let take = -Infinity;
            let rodLength = index + 1;
            if(rodLength <= n) {
                take = priceList[index] + prev[n - rodLength];
            }
            prev[n] = Math.max(take, notTake);
        }
    }
    return prev[maxLength];
}
function callRodCuttingProblem() {
    let priceList = [2,5,7,8,10];
    let n = priceList.length;
    let dp = Array.from({ length: n }, () => Array(n + 1).fill(-1));
    console.log(rodCuttingProblem(n -1, n, priceList));
    console.log(rodCuttingProblemMemoisation(n -1, n, priceList, dp));
    console.log(rodCuttingProblemTabulation(priceList));
    console.log(rodCuttingProblemTabulationOptimisation(priceList));
    console.log(rodCuttingProblemTabulationOptimisationMore(priceList));

}
// ****************************************************************************************************************************************************************

// ***********************************************************************End Of DP on subsequence ************************************************************************************
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
  callRodCuttingProblem();
}

main();
