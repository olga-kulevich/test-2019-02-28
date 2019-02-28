function getLowerestIndex(arr, n) {
  if (!arr.isArray()) {
    throw new Error('Array expected');
  }
  if (typeof (n) !== 'number') {
    throw new Error('Unknown type of n');
  }

  let indexMin = 0;
  arr.forEach((element) => {
    if (n > element) {
      indexMin += 1;
    }
  });
  return indexMin;
}

console.log(getLowerestIndex([1, 2, 3, 4], 1.5));
