function findLargestElement(arr) {
    if (arr.length === 0) {
      return "The array is empty.";
    }
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  }