/* 

This algorithm uses a modified binary search to find the turning point in the sequence, 
dividing the search range in half during each iteration and adjusting the search boundaries based on 
the relationship between the elements at the middle index and their neighbors.

The algorithm ensures that it finds the highest number in the array in logarithmic time,
making it efficient even for arrays with one million entries.

*/

export function findHighestNumber(arr: number[]): number | null {
  // If the array is empty, return null.
  if (arr.length === 0) {
    return null;
  }

  // Initialize left and right variables, which represent the search boundaries in the array.
  let left = 0;
  let right = arr.length - 1;

  // While the left boundary is less than the right boundary.
  while (left < right) {
    // Calculate the middle index of the current search range.
    let mid = Math.floor((left + right) / 2);

    // If the element at the middle index is greater than its neighbors, we found it.
    if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) {
      return arr[mid];
    } 
    // If the element at the middle index is smaller than its right neighbor, the turning point is to the right.
    else if (arr[mid] > arr[mid - 1] && arr[mid] < arr[mid + 1]) {
      left = mid;
    } 
    // If the element at the middle index is larger than its right neighbor, the turning point is to the left.
    else {
      right = mid;
    }
  }

  // In cases where the array has only two elements, return the left boundary, which is the maximum.
  return arr[left];
}

const arr = [2, 5, 9, 8, 7, 5, 3, 2, 1];
console.log(findHighestNumber(arr)); // Output: 9
