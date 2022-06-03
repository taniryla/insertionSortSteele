function insertionSort(arr) {
  // created a sortedLeftArr
  let leftArr = [];
  // start with the 2nd element
  for (let i = 0; i < arr.length; i++) {
    let start = arr[i + 1];
    // compare and swap
    if (arr[i + 1] < arr[i]) {
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
      leftArr.unshift(arr[i]);
      leftArr.unshift(arr[i + 1]);
      arr.shift(arr[i + 1]);
    }
    console.log(leftArr);
    for (let j = i + 2; j < leftArr.length; j++) {
      if (arr[j] < arr[i + 1]) {
        leftArr.unshift(arr[j]);
        arr.shift(arr[j]);
      }
      // iterate through leftArr and sort into the right order
    }
  }
}
