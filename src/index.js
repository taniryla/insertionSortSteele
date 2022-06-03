function insertionSort(arr) {
  // created a sortedLeftArr
  let leftArr = [];
  // start with the 2nd element
  for (let i = 0; i < arr.length; i++) {
    // compare and swap
    if (arr[i + 1] < arr[i]) {
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
      leftArr.unshift(arr[i + 1]);
      arr.shift(arr[i + 1]);
    } else {
      leftArr.unshift(arr[i]);
      arr.shift(arr[i]);
    }
    console.log(leftArr, arr);
    for (let j = i + 1; j < leftArr.length; j++) {
      if (arr[j] < arr[i]) {
        leftArr.unshift(arr[j]);
        arr.shift(arr[j]);
      } else {
        leftArr.unshift(arr[i]);
        arr.shift(arr[i]);
      }
      // iterate through leftArr and sort into the right order
    }
  }
}

console.log(insertionSort([3, 6, 8, 2, 7, 5]));
