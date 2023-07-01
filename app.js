function dominator(arr) {
  const count = {};

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    count[num] = (count[num] || 0) + 1;

    if (count[num] > arr.length / 2) {
      return num;
    }
  }

  return -1;
}