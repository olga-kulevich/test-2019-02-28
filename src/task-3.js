function getMinLength(str) {
  if (typeof (str) !== 'string') {
    throw new Error('Unknown type of str');
  }

  const arr = str.replace(/\s\s+/g, ' ').trim().split(' ');
  const shortestWord = arr.reduce((shortest, currentWord) => (
    shortest.length < currentWord.length ? shortest : currentWord
  ));
  const { length } = shortestWord;
  return length;
}

const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
});

const button = document.getElementById('button');

button.addEventListener('click', () => {
  const { value } = document.getElementById('input');
  const node = document.createElement('p');
  const container = document.getElementById('container');

  const length = getMinLength(value);

  container.innerHTML = '';
  const textNode = document.createTextNode(`The shortest length of the word: ${length}`);
  node.appendChild(textNode);
  container.appendChild(node);
});
