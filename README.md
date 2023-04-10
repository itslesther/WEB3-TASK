# Find Highest Number

This project demonstrates a function to find the highest number in a sorted array that has two sequences, one increasing and the other decreasing. The function uses a modified binary search algorithm for an efficient solution.

## Pseudocode

The following pseudocode represents the binary search algorithm to find the highest number in the given array. The algorithm efficiently searches for the turning point in the sequence by dividing the search range in half during each iteration, and adjusting the search boundaries based on the relationship between the elements at the mid index and their neighbors. The algorithm ensures that it finds the highest number in the array in logarithmic time, making it efficient even for arrays with one million entries.

```
function findHighestNumber(arr)
  if arr is empty
    return null

  set left to 0
  set right to the last index of arr

  while left is less than right
    calculate mid as the floor of (left + right) / 2

    if arr[mid] is greater than arr[mid - 1] and arr[mid] is greater than arr[mid + 1]
      return arr[mid]
    else if arr[mid] is greater than arr[mid - 1] and arr[mid] is less than arr[mid + 1]
      set left to mid
    else
      set right to mid

  return arr[left]

end function
```


## Prerequisites

- Node.js installed on your machine
- npm installed on your machine

## Installation

1. Clone the repository or download the source code.
2. Navigate to the project directory.
3. Run `npm install` to install the required dependencies.

## Usage

You can use the `findHighestNumber` function from the `index.ts` (TypeScript) file in your project.

Example:

```typescript
import { findHighestNumber } from './index';

const arr = [2, 5, 9, 8, 7, 5, 3, 2, 1];
console.log(findHighestNumber(arr)); // Output: 9


### Running Tests

To run the unit tests using Mocha and Chai, execute the following command:

```
npm test
```