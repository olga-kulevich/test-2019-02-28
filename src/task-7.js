function createHolder(n) {
  let value = n;
  return {
    getValue() {
      return value;
    },
    setValue(newValue) {
      value = newValue;
    },
  };
}

const obj = createHolder(5);
console.log(obj.getValue());
obj.setValue(7);
console.log(obj.getValue());
