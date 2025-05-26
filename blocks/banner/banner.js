export default function decorate(block) {
  const children = [...block.children];
  
  let bgImageUrl = '';
  const lastChild = children[children.length - 1];
  if (lastChild && lastChild.textContent.startsWith('Background Image:')) {
    bgImageUrl = lastChild.textContent.replace('Background Image:', '').trim();
    block.removeChild(lastChild);
  }

  const titleText = children[0]?.textContent || '';
  const descText = children[1]?.textContent || '';
  const ctaText = children[2]?.textContent || '';

  const title = document.createElement('h1');
  const desc = document.createElement('p');
  const cta = document.createElement('a');

  title.textContent = titleText;
  desc.textContent = descText;

  const parts = ctaText.split('|');
  const ctaLabel = parts[0]?.trim() || 'Click here';
  const ctaLink = parts[1]?.trim() || '#';

  cta.textContent = ctaLabel;
  cta.href = ctaLink;
  cta.target = '_blank';
  cta.rel = 'noopener noreferrer';

  block.innerHTML = '';
  block.append(title, desc, cta);

  if (bgImageUrl) {
    block.style.backgroundImage = `url('${bgImageUrl}')`;
    block.style.backgroundSize = 'cover';
    block.style.backgroundPosition = 'center';
    block.style.backgroundRepeat = 'no-repeat';
  }

  block.classList.add('banner');
}
