function insertionSort(arr) {
  // start with the 2nd element
  let start = arr[i + 1];
  // compare and swap
  if (start < arr[i]) {
    let temp = arr[i];
    arr[i] = start;
    start = temp;
  }
  for (let j = i + 2; j < arr.length; j++) {}
}
