function insertionSort(arr) {
  // start with the 2nd element
  let second = arr[i + 1];
  // compare and swap
  if (second < arr[i]) {
    let temp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = temp;
  }
  for (let j = i + 2; j < arr.length; j++) {}
}
