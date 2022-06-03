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
    console.log(leftArr, arr[i]);
    for (let j = i + 1; j < leftArr.length; j++) {
      if (arr[j] < arr[i]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        leftArr.unshift(arr[j]);
        arr.shift(arr[j]);
      } else {
        leftArr.unshift(arr[i]);
        arr.shift(arr[i]);
      }
      // iterate through leftArr and sort into the right order
    }
  }
  return arr;
}

insertionSort([2, 1, 9, 76, 4]);
