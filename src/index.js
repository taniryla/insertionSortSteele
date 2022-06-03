function insertionSort(arr) {
  // created a sortedLeftArr
  let sortedLeftArr = [];
  // start with the 2nd element
  for (let i = 0; i < arr.length; i++) {
    let start = arr[i + 1];
    // compare and swap
    if (arr[i + 1] < arr[i]) {
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
      sortedLeftArr.unshift(arr[i + 1]);
      arr.shift(arr[i + 1]);
    }
    console.log(sortedLeftArr);
    for (let j = i + 2; j < sortedLeftArr.length; j++) {
      if (arr[j] < arr[i + 1]) {
        let temp1 = arr[i + 1];
        arr[i + 1] = arr[j];
        arr[j] = temp;
        sortedLeftArr.push(arr[j]);
        arr.shift(arr[j]);
      }
    }
  }
}

console.log(insertionSort([3, 6, 8, 2, 6, 5]));
