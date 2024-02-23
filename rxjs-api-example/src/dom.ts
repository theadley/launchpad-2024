export function renderButton(text: string, callback: () => void): void {
  const btn = document.createElement('button');
  btn.innerText = text;
  btn.addEventListener('click', callback);
  // However you want to bind the new btn to the DOM here
  document.body.appendChild(btn);
}

export function reRenderList(items: string[]): void {
  // bye bye
  document.querySelectorAll('ul').forEach(ul => ul.remove());

  // make a new list
  const list = document.createElement('ul');
  for (const item of items) {
    const li = document.createElement('li');
    li.innerText = item;
    list.appendChild(li);
  }
  document.body.appendChild(list);
}