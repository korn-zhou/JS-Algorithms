function same(arr1, arr2) {
  if (arr1.length !== arr2.length) false

  let frequencyCounter1 = {}
  let frequencyCounter2 = {}

  for (let i of arr1) {
    frequencyCounter1[i] = (frequencyCounter1[i] || 0) + 1
  }

  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
  }
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false
    }
  }

  return true
}

same([1, 2, 3, 2], [9, 1, 4, 4])

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false

  let lookup = {}

  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i]
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1)
  }

  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i]
    if (!lookup[letter]) {
      return false
    } else {
      lookup[letter] -= 1
    }
  }

  return true
}
