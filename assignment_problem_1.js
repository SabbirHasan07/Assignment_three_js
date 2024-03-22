function minMaxLengthAverage(arr) {
    let min = arr[0];
    let max = arr[0];
    let sum = 0;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
      if (arr[i] > max) {
        max = arr[i];
      }
      sum += arr[i];
    }
    return [min, max, arr.length, sum / arr.length];
  }

  console.log(minMaxLengthAverage([7, 13, 3, 77, 100]));
  