function insertionSort(arr) {
  let second = arr[i + 1];
  if (second < arr[i]) {
    let temp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = temp;
  }
}
