function insertionSort(arr) {
  // created a sortedLeftArr
  let leftArr = [];
  // start with the 2nd element
  for (let i = 1; i < arr.length; i++) {
    // compare and swap
    let currentVal = arr[i];
    for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      // iterate through leftArr and sort into the right order
        arr[j+1] = arr[j];
      }
      // insert currentVal
      arr[j+1] = currentVal;
    }
  }
  return arr;
}

insertionSort([2, 1, 9, 76, 4]);
