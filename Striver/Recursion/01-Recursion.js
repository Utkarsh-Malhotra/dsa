// Print the name N times
function printN(i, n) {
  if (i > n) return;
  console.log("Utkarsh");
  printN(i + 1, n);
}
function main() {
  var n = 5;
  console.log(n);
  printN(1, n);
}

// main();

// Print linearly from 1 To N
function printOneToN(i, n) {
  if (i > n) return;
  console.log(i);
  printOneToN(i + 1, n);
}

function mainTwo() {
  var n = 5;
  printOneToN(1, n);
}

// mainTwo();

// Print from N to 1
function printNtoOne(n) {
  if (n < 1) return;
  console.log(n);
  printNtoOne(n - 1);
}

function mainThree() {
  var n = 5;
  printNtoOne(n);
}

// mainThree();

// Print from N to 1
function printNtoOne(i, n) {
  if (i < 1) return;
  console.log(i);
  printNtoOne(i - 1, n);
}

function mainThree() {
  var n = 5;
  printNtoOne(i, n);
}

// mainThree();

// -------- BackTracking ----------

// Print from 1 to N , f(i + 1, N) - Not allowed
function print1ToNBackTrack(i, n) {
  if (i < 1) return;
  print1ToNBackTrack(i - 1, n);
  console.log(i);
}

function mainFour() {
  var n = 5;
  print1ToNBackTrack(n, n);
}

// mainFour();

// Print N to 1, f(i - 1,N) not allowed

function printNtoOneBackTrack(i, n) {
  if (i > n) return;
  printNtoOneBackTrack(i + 1, n);
  console.log(i);
}

function mainFive() {
  var n = 5;
  printNtoOneBackTrack(1, n);
}

// mainFive();

// Parametrised vs Functional Recursion

function addParameterised(i, sum) {
  if (i < 1) {
    console.log(sum);
    return;
  }
  addParameterised(i - 1, sum + i);
}

function addFunctional(n) {
  if (n == 0) return 0;
  return n + addFunctional(n - 1);
}
function mainSix() {
  var n = 3;
  addParameterised(n, 0);
  let result = addFunctional(n);
  console.log(result);
}

// mainSix();

// Factorial Code

function factorialOfNumber(n) {
  if (n === 1) return 1;
  return n * factorialOfNumber(n - 1);
}

function mainSeven() {
  var n = 4;
  let result = factorialOfNumber(n);
  console.log(result);
}

// mainSeven();

// Reverse Array(with multiple variables)
function reverseArray(l, r, array) {
  if (l >= r) return array;
  swap(l, r, array);
  reverseArray(l + 1, r - 1, array);
}

function swap(l, r, array) {
  [array[l], array[r]] = [array[r], array[l]];
}

function mainEight() {
  let array = [1, 2, 3, 4, 5, 6];
  reverseArray(0, array.length - 1, array);
  console.log(array);
}

// mainEight();

// Reverse with one variable

function reverseArray(i, n, array) {
  if (i >= n / 2) return;
  swap(i, n - i - 1, array);
  reverseArray(i + 1, n, array);
}

function swap(l, r, array) {
  [array[l], array[r]] = [array[r], array[l]];
}

function mainNine() {
  let array = [1, 2, 3, 4, 5, 6];
  reverseArray(0, array.length, array);
  console.log(array);
}

// mainNine();

// Check Palindrome

function isPalindrome(i, n, word) {
  if (i >= n / 2) return true;
  if (!sameCharacter(i, n - i - 1, word)) return false;
  return isPalindrome(i + 1, n, word);
}

function sameCharacter(leftIndex, rightIndex, word) {
  return word[leftIndex] === word[rightIndex];
}

function mainTen() {
  let word = "MADAM";
  console.log(isPalindrome(0, word.length, word));
}

// mainTen();

// Multiple recursion calls

// Fibonaci Nos.

function fiboNaci(number) {
  if (number <= 1) return number;
  return fiboNaci(number - 1) + fiboNaci(number - 2);
}

function mainEleven() {
  let number = 3;
  console.log(fiboNaci(number));
}

// mainEleven();

// Subsequence using recursion - Remember Pattern (Add and Remove)

// PrintSubsequence
function printSubsequence(index, resultArr, n, arr) {
  if (index >= n || n === 0) {
    console.log(resultArr);
    return;
  }
  resultArr.push(arr[index]);
  printSubsequence(index + 1, resultArr, n, arr);
  resultArr.pop();
  printSubsequence(index + 1, resultArr, n, arr);
}

function mainTwelve() {
  let arr = [3, 1, 2];
  let arrLength = arr.length;
  printSubsequence(0, [], arrLength, arr);
}

mainTwelve();

//PrintSubsequence whoose sum is k

function printSubsequenceWithSumk(
  index,
  n,
  currentSum,
  targetSum,
  arr,
  resultArray,
) {
  if (index === n) {
    if (currentSum === targetSum) {
      console.log(resultArray);
    }
    return;
  }

  resultArray.push(arr[index]);
  currentSum += arr[index];
  printSubsequenceWithSumk(
    index + 1,
    n,
    currentSum,
    targetSum,
    arr,
    resultArray,
  );
  currentSum -= arr[index];
  resultArray.pop();
  printSubsequenceWithSumk(
    index + 1,
    n,
    currentSum,
    targetSum,
    arr,
    resultArray,
  );
}

function mainThirteen() {
  let arr = [1, 2, 1];
  let sum = 2;
  let arrLength = arr.length;
  printSubsequenceWithSumk(0, arrLength, 0, sum, arr, []);
}

// mainThirteen();

// Print only one answer with subsequence sum as k

function printOneSubsequenceWithSumk(
  index,
  n,
  currentSum,
  targetSum,
  arr,
  resultArray,
) {
  if (index === n) {
    if (currentSum === targetSum) {
      console.log(resultArray);
      return true;
    }
    return false;
  }

  resultArray.push(arr[index]);
  currentSum += arr[index];
  if (
    printOneSubsequenceWithSumk(
      index + 1,
      n,
      currentSum,
      targetSum,
      arr,
      resultArray,
    ) === true
  )
    return true;
  currentSum -= arr[index];
  resultArray.pop();
  if (
    printOneSubsequenceWithSumk(
      index + 1,
      n,
      currentSum,
      targetSum,
      arr,
      resultArray,
    ) === true
  )
    return true;

  return false;
}

function mainFourteen() {
  let arr = [1, 2, 1];
  let sum = 2;
  let arrLength = arr.length;
  printOneSubsequenceWithSumk(0, arrLength, 0, sum, arr, []);
}

// mainFourteen();

// Count the subsequence with sum = k

function countSubsequenceWithSumk(index, n, currentSum, targetSum, arr) {
  // if array contains positives only
  if (currentSum > sum) return 0;
  if (index === n) {
    if (currentSum === targetSum) {
      return 1;
    }
    return 0;
  }

  currentSum += arr[index];
  let l = countSubsequenceWithSumk(index + 1, n, currentSum, targetSum, arr);
  currentSum -= arr[index];
  let r = countSubsequenceWithSumk(index + 1, n, currentSum, targetSum, arr);

  return l + r;
}

function mainFifteen() {
  let arr = [1, 2, 1];
  let sum = 2;
  let arrLength = arr.length;
  console.log(countSubsequenceWithSumk(0, arrLength, 0, sum, arr, []));
}

// mainFifteen();

// Sorting Algorithms

// Merge Sort
function mergeSort(arr, low, high) {
  if (low >= high) return;
  let mid = parseInt((low + high) / 2);
  mergeSort(arr, low, mid);
  mergeSort(arr, mid + 1, high);
  merge(arr, low, mid, high);
}

function merge(arr, low, mid, high) {
  let currentArray = [];
  let left = low;
  let right = mid + 1;

  while (left <= mid && right <= high) {
    if (arr[left] < arr[right]) {
      currentArray.push(arr[left]);
      left++;
    } else {
      currentArray.push(arr[right]);
      right++;
    }
  }
  while (left <= mid) {
    currentArray.push(arr[left]);
    left++;
  }
  while (right <= high) {
    currentArray.push(arr[right]);
    right++;
  }
  for (let i = low; i <= high; i++) {
    arr[i] = currentArray[i - low];
  }
}

function mainSixteen() {
  let arr = [3, 1, 2, 4, 1, 5, 2, 6, 4];
  mergeSort(arr, 0, arr.length - 1);
  console.log(arr);
}

// mainSixteen();

// Quick Sort

function quickSort(arr, low, high) {
  if (low < high) {
    let partitionIndex = getPartitionIndex(arr, low, high);
    quickSort(arr, low, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, high);
  }
}

function getPartitionIndex(arr, low, high) {
  let i = low;
  let j = high;
  let pivot = arr[low];

  while (i < j) {
    // Find the first element greater than the pivot
    while (arr[i] <= pivot && i <= high - 1) {
      i++;
    }

    //Find the first element less than the pivot
    while (arr[j] > pivot && j >= low - 1) {
      j--;
    }
    if (i < j) swap(arr, i, j);
  }

  swap(arr, low, j);
  return j;
}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

function mainSeventeen() {
  let arr = [4, 6, 2, 5, 7, 9, 1, 3];
  let low = 0;
  let high = arr.length - 1;
  quickSort(arr, low, high);
  console.log(arr);
}

// mainSeventeen();

// Combinations Sums

// Combination Sum 1

function findCombinationsWithSum(index, target, result, arr, arrLength, ans) {
  if (index === arrLength) {
    if (target === 0) {
      ans.push([...result]);
    }
    return;
  }

  if (arr[index] <= target) {
    result.push(arr[index]);
    findCombinationsWithSum(
      index,
      target - arr[index],
      result,
      arr,
      arrLength,
      ans,
    );
    result.pop();
  }
  findCombinationsWithSum(index + 1, target, result, arr, arrLength, ans);
}

function mainEighteen() {
  let arr = [2, 3, 6, 7];
  let target = 7;
  let ans = [];
  findCombinationsWithSum(0, target, [], arr, arr.length, ans);
  console.log(ans);
}

// mainEighteen();

// Combination Sum 2

// Option 1 of doing this
function findCombinationsWithSumWithNoDuplicateCombinationAndSorted(
  index,
  target,
  result,
  arr,
  arrLength,
  ans,
) {
  if (index === arrLength) {
    if (target === 0) {
      // Putting a ds into another ds will increase tc to 2pown * k * (lograthmic structure)
      ans.add(result.join(" , "));
    }
    return;
  }

  if (arr[index] <= target) {
    result.push(arr[index]);
    findCombinationsWithSumWithNoDuplicateCombinationAndSorted(
      index + 1,
      target - arr[index],
      result,
      arr,
      arrLength,
      ans,
    );
    result.pop();
  }
  findCombinationsWithSumWithNoDuplicateCombinationAndSorted(
    index + 1,
    target,
    result,
    arr,
    arrLength,
    ans,
  );
}

function mainNinteen() {
  let arr = [1, 1, 1, 2, 2];
  let target = 4;
  let ans = new Set();
  findCombinationsWithSumWithNoDuplicateCombinationAndSorted(
    0,
    target,
    [],
    arr,
    arr.length,
    ans,
  );
  console.log([...ans].map((str) => str.split(",").map(Number)));
}

// mainNinteen();

// Option 2 ********************** VERY IMPORTANT *********************

function findCombinationsWithSumWithNoDuplicateCombinationAndSortedMinTimeComplexity(
  index,
  target,
  result,
  arr,
  arrLength,
  ans,
) {
  if (target === 0) {
    ans.push([...result]);
    return;
  }
  for (let i = index; i < arrLength; i++) {
    if (i > index && arr[i] == arr[i - 1]) continue;
    if (arr[i] > target) break;

    result.push(arr[i]);
    findCombinationsWithSumWithNoDuplicateCombinationAndSortedMinTimeComplexity(
      i + 1,
      target - arr[i],
      result,
      arr,
      arrLength,
      ans,
    );
    result.pop();
  }
}

function mainTwenty() {
  let arr = [1, 1, 1, 2, 2];
  let target = 4;
  let ans = [];
  findCombinationsWithSumWithNoDuplicateCombinationAndSortedMinTimeComplexity(
    0,
    target,
    [],
    arr,
    arr.length,
    ans,
  );
  console.log(ans);
}

// mainTwenty();
// *********************************************************************

// SubsetSum 1

function printSubsetSumOne(index, arr, n, sum, result) {
  if (index === n) {
    result.push(sum);
    return;
  }

  printSubsetSumOne(index + 1, arr, n, sum + arr[index], result); // Pick
  printSubsetSumOne(index + 1, arr, n, sum, result); // Not Pick
}

function mainTwentyOne() {
  let arr = [3, 1, 2];
  let result = [];
  printSubsetSumOne(0, arr, arr.length, 0, result);
  console.log(result.sort());
}

// mainTwentyOne();

// SubsetSum 2

// Recursion with brute force OPTION 1

function getSubsequenceWithDuplicates(
  index,
  n,
  arr,
  candidateSubsequence,
  resultSet,
) {
  if (index === n) {
    resultSet.add(JSON.stringify(candidateSubsequence));
    return;
  }
  candidateSubsequence.push(arr[index]);
  getSubsequenceWithDuplicates(
    index + 1,
    n,
    arr,
    candidateSubsequence,
    resultSet,
  );
  candidateSubsequence.pop();
  getSubsequenceWithDuplicates(
    index + 1,
    n,
    arr,
    candidateSubsequence,
    resultSet,
  );
}

function mainTwentyTwo() {
  let arr = [1, 2, 2];
  let resultSet = new Set();
  getSubsequenceWithDuplicates(0, arr.length, arr, [], resultSet);
  console.log([...resultSet].map(JSON.parse));
}

// mainTwentyTwo();

// Option 2 ********************** VERY IMPORTANT *********************

function findSubsequenceWithNoDuplicatesWithMinimumSpaceComplexity(
  index,
  arr,
  n,
  result,
  ans,
) {
  ans.push([...result]);
  for (let i = index; i < n; i++) {
    if (i > index && arr[i] === arr[i - 1]) continue;
    result.push(arr[i]);
    findSubsequenceWithNoDuplicatesWithMinimumSpaceComplexity(
      i + 1,
      arr,
      n,
      result,
      ans,
    );
    result.pop();
  }
}

function mainTwentyThree() {
  let arr = [2, 1, 2, 2, 3, 3];
  arr.sort(); // The recursive logic will work on sorted arrays , the duplicate nos will appear side by side
  let ans = [];
  findSubsequenceWithNoDuplicatesWithMinimumSpaceComplexity(
    0,
    arr,
    arr.length,
    [],
    ans,
  );
  console.log(ans);
}

// mainTwentyThree();
// *********************************************************************

// Print all permutations of String/Array
// Given an array nums of distinct integers, return all possible permutations, Return in any order

// Option 1
function getEveryPermutationStringArray(n, resultArr, array, ans, indexFreq) {
  if (resultArr.length === n) {
    ans.push([...resultArr]);
    return;
  }

  for (let i = 0; i < n; i++) {
    if (!indexFreq[i]) {
      indexFreq[i] = true;
      resultArr.push(array[i]);
      getEveryPermutationStringArray(n, resultArr, array, ans, indexFreq);
      resultArr.pop();
      indexFreq[i] = false;
    }
  }
}

function mainTwentyFour() {
  let array = [1, 2, 3];
  let ans = [];
  let indexFreq = new Map();
  getEveryPermutationStringArray(array.length, [], array, ans, indexFreq);
  console.log(ans);
}

// mainTwentyFour();

// Option 2 ********** VERY IMPORTANT *********

function getEveryPermutationStringArrayWithMinSpaceComplexity(
  index,
  array,
  n,
  ans,
) {
  if (index === n) {
    let result = [];
    for (let i = 0; i < n; i++) {
      result.push(array[i]);
    }
    ans.push([...result]);
    return;
  }
  for (let i = index; i < n; i++) {
    swap(i, index, array);
    getEveryPermutationStringArrayWithMinSpaceComplexity(
      index + 1,
      array,
      n,
      ans,
    );
    swap(i, index, array); // making sure to reswap it once coming back from recursion
  }
}

function swap(i, j, array) {
  [array[i], array[j]] = [array[j], array[i]];
}
function mainTwentyFive() {
  let array = [1, 2, 3];
  let ans = [];
  getEveryPermutationStringArrayWithMinSpaceComplexity(
    0,
    array,
    array.length,
    ans,
  );
  console.log(ans);
}

// mainTwentyFive();

// N-QUEENS

// Option 1 - Brute Force

function solve(col, board, ans, n) {
  // If all queens placed
  if (col === n) {
    let temp = board.map((row) => row.join(""));
    ans.push(temp);
    return;
  }

  // Try placing queen in each row
  for (let row = 0; row < n; row++) {
    if (isSafe(row, col, board, n)) {
      // Place queen
      board[row][col] = "Q";
      // Recurse
      solve(col + 1, board, ans, n);
      // Backtrack
      board[row][col] = ".";
    }
  }
}

function isSafe(row, col, board, n) {
  // Check same row
  for (let j = 0; j < col; j++) {
    if (board[row][j] === "Q") return false;
  }

  // Check upper-left diagonal
  for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
    if (board[i][j] === "Q") return false;
  }

  // Check lower-left diagonal
  for (let i = row, j = col; i < n && j >= 0; i++, j--) {
    if (board[i][j] === "Q") return false;
  }

  // Safe to place
  return true;
}

function mainTwentySix() {
  let n = 4;
  let board = Array.from({ length: n }, () => Array(n).fill("."));
  console.log(board);
  let ans = [];

  solve(0, board, ans, n);
  ans.forEach((board) => {
    board.forEach((row) => console.log(row));
    console.log("");
  });
}

// mainTwentySix();

// Option 2 ******** VERY IMPORTANT **********
class Solution {
  // Function to solve N-Queens
  solve(col, board, n, leftRow, lowerDiag, upperDiag, res) {
    // If all queens are placed
    if (col === n) {
      res.push(board.map((row) => row.join("")));
      return;
    }

    // Iterate through rows
    for (let row = 0; row < n; row++) {
      // Check safety
      if (
        !leftRow[row] &&
        !lowerDiag[row + col] &&
        !upperDiag[n - 1 + col - row]
      ) {
        // Place queen
        board[row][col] = "Q";
        leftRow[row] =
          lowerDiag[row + col] =
          upperDiag[n - 1 + col - row] =
            true;

        // Recurse
        solve(col + 1, board, n, leftRow, lowerDiag, upperDiag, res);

        // Backtrack
        board[row][col] = ".";
        leftRow[row] =
          lowerDiag[row + col] =
          upperDiag[n - 1 + col - row] =
            false;
      }
    }
  }

  // Main function
  solveNQueens(n) {
    const board = Array.from({ length: n }, () => Array(n).fill("."));
    const leftRow = Array(n).fill(false);
    const lowerDiag = Array(2 * n - 1).fill(false);
    const upperDiag = Array(2 * n - 1).fill(false);
    const res = [];
    solve(0, board, n, leftRow, lowerDiag, upperDiag, res);
    return res;
  }
}

// Driver code
// const sol = new Solution();
// const result = sol.solveNQueens(4);
// result.forEach(board => {
//     board.forEach(row => console.log(row));
//     console.log('');
// });

// ************************************** Solve Suduko Board **********************************

// Recursive function to solve Sudoku using backtracking
function solveSuduko(board) {
  // Iterate over each row
  for (let i = 0; i < 9; i++) {
    // Iterate over each column
    for (let j = 0; j < 9; j++) {
      // If the cell is empty
      if (board[i][j] === ".") {
        // Try all digits from '1' to '9'
        for (let c = 1; c <= 9; c++) {
          let charC = c.toString();
          // Check if placing this digit is valid
          if (isValid(board, i, j, charC)) {
            // Place digit tentatively
            board[i][j] = charC;

            // Recursively solve rest of the board
            if (solveSuduko(board)) {
              return true; // Found a valid solution
            }

            // Backtrack if no solution found
            board[i][j] = ".";
          }
        }
        // If no digit fits, backtrack to previous cell
        return false;
      }
    }
  }
  // All cells filled validly
  return true;
}

// Check if placing char c at board[row][col] is valid
function isValid(board, row, col, c) {
  // Check all rows in current column for duplicates
  for (let i = 0; i < 9; i++) {
    if (board[i][col] === c) {
      // Same char found in column, invalid placement
      return false;
    }
  }

  // Check all columns in current row for duplicates
  for (let j = 0; j < 9; j++) {
    if (board[row][j] === c) {
      // Same char found in row, invalid placement
      return false;
    }
  }

  // Calculate starting row of 3x3 sub-box
  const boxRowStart = 3 * Math.floor(row / 3);
  // Calculate starting column of 3x3 sub-box
  const boxColStart = 3 * Math.floor(col / 3);

  // Check each cell in the 3x3 box for duplicate character
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[boxRowStart + i][boxColStart + j] === c) {
        // Same char found in 3x3 box, invalid placement
        return false;
      }
    }
  }

  // No conflicts found, placement is valid
  return true;
}
function mainTwentySeven() {
  const board = [
    ["9", "5", "7", ".", "1", "3", ".", "8", "4"],
    ["4", "8", "3", ".", "5", "7", "1", ".", "6"],
    [".", "1", "2", ".", "4", "9", "5", "3", "7"],
    ["1", "7", ".", "3", ".", "4", "9", ".", "2"],
    ["5", ".", "4", "9", "7", ".", "3", "6", "."],
    ["3", ".", "9", "5", ".", "8", "7", ".", "1"],
    ["8", "4", "5", "7", "9", ".", "6", "1", "3"],
    [".", "9", "1", ".", "3", "6", ".", "7", "5"],
    ["7", ".", "6", "1", "8", "5", "4", ".", "9"],
  ];

  solveSuduko(board);

  for (let i = 0; i < 9; i++) {
    console.log(board[i].join(" "));
  }
}

// mainTwentySeven();


// ******************************** M - Colouring Problem *****************************************
// Function to check if it is safe to assign a color to a node
function isSafe(node, color, graph, n, col) {
    for (let k = 0; k < n; k++) {
        // Check if adjacent node has the same color
        if (k !== node && graph[k][node] === 1 && color[k] === col) {
            return false;
        }
    }
    return true;  // Safe to assign the color
}

// Recursive function to solve the coloring problem
function solve(node, color, m, N, graph) {
    // If all nodes are assigned colors, return true
    if (node === N) {
        return true;
    }

    // Try different colors for the node
    for (let i = 1; i <= m; i++) {
        if (isSafe(node, color, graph, N, i)) {
            color[node] = i;
            // Recursively check for the next node
            if (solve(node + 1, color, m, N, graph)) return true;
            color[node] = 0;  // Backtrack if the color assignment fails
        }
    }
    return false;  // If no solution is found
}

// Function to check if graph can be colored with m colors
function graphColoring(graph, m, N) {
    let color = Array(N).fill(0);
    // Start solving from node 0
    if (solve(0, color, m, N, graph)) return true;
    return false;
}

// Main function to handle input and output
function mainTwentyEight() {
    let N = 4;  // Number of nodes
    let m = 3;  // Maximum number of colors

    // Create a sample graph with edges (0,1), (1,2), (2,3), (3,0), (0,2)
    let graph = Array.from({ length: 101 }, () => Array(101).fill(false));
    graph[0][1] = graph[1][0] = true;
    graph[1][2] = graph[2][1] = true;
    graph[2][3] = graph[3][2] = true;
    graph[3][0] = graph[0][3] = true;
    graph[0][2] = graph[2][0] = true;

    // Output if the graph can be colored with at most m colors
    console.log(graphColoring(graph, m, N));
}

// Call the main function
// mainTwentyEight();


// ******************************* Palindrome Partitions *********************************


function palindromePartitions(index, str, path, ans, N ) {
    if (index === N) {
        ans.push([...path]);
        return;
    }

    for (let i = index; i < N; i++) {
        if (isPalindrome(index, i, str)) {
            path.push(str.slice(index, i + 1));
            palindromePartitions(i + 1, str, path, ans, N);
            path.pop();
        }       
    }
}

function isPalindrome( startIndex, endIndex, str) {
    while (startIndex <= endIndex) {
        if (str.charAt(startIndex) !== str.charAt(endIndex)) return false;
        startIndex++;
        endIndex--;
    }
    return true;
}

function mainTwentyNine() {
    let str = "aabb";
    let ans = [];

    palindromePartitions(0, str, [], ans, str.length ) 
    console.log(ans);
}

// mainTwentyNine();

// ******************************* Rat in a maze Part 1 *********************************

function isSafe(x, y, n, maze, visited) {
        return (x >= 0 && x < n && y >= 0 && y < n &&
                maze[x][y] === 1 && visited[x][y] === 0);
}

function createPathForRat(x , y , n , maze, visited, path, res) {
    // If destination reached, store the path
        if (x === n - 1 && y === n - 1) {
            res.push(path);
            return;
        }

        // Mark the cell visited
        visited[x][y] = 1;

        // Try moving Down
        if (isSafe(x + 1, y, n, maze, visited)) {
            createPathForRat(x + 1, y, n, maze, visited, path + "D", res);
        }
        // Try moving Left
        if (isSafe(x, y - 1, n, maze, visited)) {
            createPathForRat(x, y - 1, n, maze, visited, path + "L", res);
        }
        // Try moving Right
        if (isSafe(x, y + 1, n, maze, visited)) {
            createPathForRat(x, y + 1, n, maze, visited, path + "R", res);
        }
        // Try moving Up
        if (isSafe(x - 1, y, n, maze, visited)) {
            createPathForRat(x - 1, y, n, maze, visited, path + "U", res);
        }

        // Backtrack: unmark cell as visited
        visited[x][y] = 0;
}

function findPaths(maze, n) {
    const res = [];
    const visited = Array.from( { length: n },() =>  Array(n).fill(0));
    if (maze[0][0] === 1) {
        createPathForRat(0,0,n,maze,visited,"", res);
    }
    return res;
}

function mainThrity() {
    const maze = [
        [1, 0, 0, 0],
        [1, 1, 0, 1],
        [1, 1, 0, 0],
        [0, 1, 1, 1]
    ];

    const n = maze.length;
    const paths = findPaths(maze, n);
    console.log(paths.join(" "))
}

// mainThrity();


// ******************** Permutation Sequence ************************

function getPermutationSequenceMathimatically(n, k) {
    let numbers = [];

    for (let i = 1; i <= n; i++) {
        numbers.push(i);
    }

    // Convert k from 1-based to 0-based
    k = k - 1;

    let result = "";

    // factorial = (n - 1)!
    let factorial = 1;

    for (let i = 1; i < n; i++) {
        factorial *= i;
    }

    for (let i = n; i > 0; i--) {

        // Find which block k belongs to
        let index = Math.floor(k / factorial);

        result += numbers[index];

        // Remove the selected number
        numbers.splice(index, 1);

        // Update k within the selected block
        k = k % factorial;

        // Calculate next factorial
        if (i > 1) {
            factorial = factorial / (i - 1);
        }
    }

    return result;
}


// ***************** Count Inversions ********************

// Option 1 (Brute Force) 

function bruteCountInversion() {
    const arr = [5,3,2,4,1];
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[i]) {
                count++
            }
        }
    }
    console.log(count);
}

bruteCountInversion();


// Option 2



function mergeTwo(arr, low, mid, high) {
  let currentArray = [];
  let left = low;
  let right = mid + 1;
  let count = 0;

  while (left <= mid && right <= high) {
    if (arr[left] < arr[right]) {
      currentArray.push(arr[left]);
      left++;
    } else {
      currentArray.push(arr[right]);
      count += (mid - left + 1) 
      right++;
    }
  }
  while (left <= mid) {
    currentArray.push(arr[left]);
    left++;
  }
  while (right <= high) {
    currentArray.push(arr[right]);
    right++;
  }
  for (let i = low; i <= high; i++) {
    arr[i] = currentArray[i - low];
  }

  return count;
}

function mergeSortTwo(arr, low, high) {
  if (low >= high) return count;
  let mid = parseInt((low + high) / 2);
  count += mergeSortTwo(arr, low, mid);
  count += mergeSortTwo(arr, mid + 1, high);
  count += mergeTwo(arr, low, mid, high);
  return count;
}

function mainThrityOne() {
    let arr = [5,3,2,4,1]
    console.log(mergeSortTwo(arr, 0, arr.length - 1));
    
}