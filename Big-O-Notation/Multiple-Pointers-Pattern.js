// Multiple Pointers Pattern

function sumZero(arr) {
  let left = 0
  let right = arr.length - 1
  while (left < right) {
    let sum = arr[left] + arr[right]
    if (sum === 0) {
      return [arr[left], arr[right]]
    } else if (sum > 0) {
      right--
    } else {
      left++
    }
  }
}

// console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]))

function countUniqueValues(arr) {
  if (arr.length === 0) return 0
  let i = 0
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++
      arr[i] = arr[j]
    }
  }
  return i + 1
}

// console.log(countUniqueValues([1, 1, 1, 1, 1, 2]))

