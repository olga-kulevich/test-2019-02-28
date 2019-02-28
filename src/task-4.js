function getDimensionalArray(arr, n) {
  if (!arr.isArray()) {
    throw new Error('Array expected');
  }
  if (typeof (n) !== 'number') {
    throw new Error('Unknown type of n');
  }

  let start = 0;
  let end = n;
  const result = [];
  const groupsNumber = Math.ceil(arr.length / n);
  for (let i = 0; i < groupsNumber; i += 1) {
    result.push(arr.slice(start, end));
    start += n;
    end += n;
  }
  return result;
}

console.log(getDimensionalArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
