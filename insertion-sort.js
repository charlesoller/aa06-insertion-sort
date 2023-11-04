// Insertion Sort out-of-place
// Do not modify the original array
function insertionSort(arr) {
  /*
  Pseudocode:

  Copy the original array

  Create an array to store the sorted values
  While the array is not empty:
  - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
  - Pop a value from the array
  - Create a new spot at the end of the array with null to help with comparisons
  - Walk through the sorted array in reverse order
  - Check if the value to the left is smaller than the new value
  - If so, you've reached the insertion point so exit the loop
  - If not shift the value to the right by 1 and continue
  - Insert the unsorted value at the break point
  Return the sorted array
  */

  // Your code here
  let copyArr = [...arr];
  let sortedArr = [];

  while (copyArr.length) {
    console.log(sortedArr.join(","));
    // console.log(sortedArr)

    let val = copyArr.pop();
    // sortedArr.push(null);
    // console.log(val)

    if (sortedArr.length === 0) {
      sortedArr.push(val)
      // console.log('test',sortedArr)
    } else {
      let i = sortedArr.length - 1;
      while(i >= 0 && sortedArr[i] > val) {
        sortedArr[i + 1] = sortedArr[i];
       i--
      }
      sortedArr[i + 1] = val;

      }
    }
    // console.log('final sort',sortedArr)
    return sortedArr;
  }
  // sortedArr.shift();


// In-place Insertion Sort
// Mutates the original array
function insertionSortInPlace(arr) {
  /*
  Pseudocode:

  Set a pointer dividing the array into sorted and unsorted halves
  Repeat while the unsorted half is not empty:
  - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
  - Grab the first value from the unsorted half
  - For each value starting from the divider,
  - Check if the value to the left is smaller than the unsorted value
  - If so, you've reached the insertion point so exit the loop
  - If not shift the value to the right by 1 and continue
  - Insert the unsorted value at the break point
  - Increment the dividing pointer and repeat
  Return the mutated array
  */
  // Your code here
}

module.exports = [insertionSort, insertionSortInPlace];
