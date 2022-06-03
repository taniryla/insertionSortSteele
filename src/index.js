function insertionSort(arr) {
  // created a sortedLeftArr
  let leftArr = [];
  // start with the 2nd element
  for (let i = 1; i < arr.length; i++) {
    // compare and swap
    let currentVal = arr[i];
    for (let j = i - 1; j >= 0; j--) {
      if (arr[i] < arr[j]) {
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
      // iterate through leftArr and sort into the right order
    }
  }
  return arr;
}

insertionSort([2, 1, 9, 76, 4]);
