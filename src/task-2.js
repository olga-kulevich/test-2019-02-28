function validate(n) {
  if (typeof (n) !== 'number') {
    return false;
  }
  return n <= 30 && n >= 0;
}

function generateColor() {
  return `#${Math.random().toString(16).substr(2, 6)}`;
}

function render(n) {
  if (!validate(n)) {
    document.getElementById('container')
      .innerHTML = '<p>Wrong number value! It must be between 0 - 30</p>';
    return;
  }

  document.getElementById('container').innerHTML = '';
  const table = document.createElement('table');

  let rows = '';
  for (let i = 0; i < n; i += 1) {
    let columns = '';
    for (let j = 0; j < n; j += 1) {
      const color = generateColor();
      columns += `<td style="background: ${color};"></td>`;
    }
    rows += `<tr>${columns}</tr>`;
  }

  table.innerHTML = `${rows}`;

  document.getElementById('container').appendChild(table);
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
