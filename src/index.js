function insertionSort(arr) {
  // created a sortedLeftArr
  let sortedLeftArr = [];
  // start with the 2nd element
  let start = arr[i + 1];
  // compare and swap
  if (start < arr[i]) {
    let temp = arr[i];
    arr[i] = start;
    start = temp;
    sortedLeftArr.push(start);
    arr.shift(start);
  }
  for (let j = i + 2; j < i + 1; j++) {
    if (arr[j] < start) {
      let temp1 = start;
      start = arr[j];
      arr[j] = temp;
    } else if (arr[i] < start) {
      let temp2 = start;
      start = arr[i];
      arr[i] = temp;
    }
  }
}
