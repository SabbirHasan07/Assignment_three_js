function sortNumsAscending(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
      return [];
    }
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] !== 'number' || isNaN(arr[i])) {
        return [];
      }
    }
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
  
    return arr;
  }
  
  console.log(sortNumsAscending([45, 34, 23, 12, 7])); 
  console.log(sortNumsAscending([45, "34", 23, 12, 7])); 
  console.log(sortNumsAscending([]));
  console.log(sortNumsAscending("test"));
  