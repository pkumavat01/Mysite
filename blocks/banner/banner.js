export default function decorate(block) {
  const img = block.querySelector('img');
  const title = document.createElement('h1');
  const desc = document.createElement('p');
  const cta = block.querySelector('a');

  const children = [...block.children];
  if (children[1]) title.textContent = children[1].textContent;
  if (children[2]) desc.textContent = children[2].textContent;

  block.innerHTML = '';
  block.append(img, title, desc, cta);
}
