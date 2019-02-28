function frame(arr, char) {
  if (!arr.isArray()) {
    throw new Error('Array expected');
  }
  if (typeof (char) !== 'string') {
    throw new Error('Unknown type of char');
  }
  if (char.length !== 1) {
    throw new Error('Unexpected char length');
  }

  const longestStingLength = arr.reduce((a, b) => (a.length > b.length ? a : b)).length;
  const border = char.repeat(longestStingLength + 4);
  let result = `${border}\n`;
  for (let i = 0; i < arr.length; i += 1) {
    const spaces = ' '.repeat(longestStingLength - arr[i].length);
    result += `${char} ${arr[i]}${spaces} ${char}\n`;
  }
  result += border;
  return result;
}

console.log(frame(['Create', 'a', 'frame'], '+'));
