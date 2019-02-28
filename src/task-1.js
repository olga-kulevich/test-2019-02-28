function render(n) {
  if (n <= 0) {
    document.getElementById('error')
      .innerHTML = '<p>Wrong number value! It must be > 0</p>';
    return;
  }

  document.getElementById('error').innerHTML = '';

  let str = '';
  for (let i = 1; i <= n; i += 1) {
    str += `${i} sheep...`;
  }

  const nodeToCreate = document.createElement('p');
  const textNode = document.createTextNode(`${str}`);
  nodeToCreate.appendChild(textNode);
  document.getElementById('container').appendChild(nodeToCreate);
}

const form = document.getElementById('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
});

const button = document.getElementById('button');
button.addEventListener('click', () => {
  const { value } = document.getElementById('input');
  render(value);
});
