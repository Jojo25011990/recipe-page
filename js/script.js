'use strict';

// *** Select Elements ***
const overlayLightbox = document.getElementById('overlayLightbox');
const omelette = document.getElementById('omelette');
const overlayCloseBtn = document.getElementById('overlayCloseBtn');

const lightbox = () => overlayLightbox.classList.remove('hidden');

omelette.addEventListener('click', lightbox);

overlayCloseBtn.onclick = () => overlayLightbox.classList.add('hidden');

function biggerImg() {
  const newImg = document.createElement('img');
  newImg.alt = 'Simple Omelette Recipe for beginners';
  newImg.src = omelette.src;
  newImg.className = 'biggerOriginalImg';

  overlayLightbox.appendChild(newImg);
}

biggerImg();

window.addEventListener('keyup', function (e) {
  if (!overlayLightbox.classList.contains('hidden') && e.key === 'Escape') {
    overlayLightbox.classList.add('hidden');
  }
});

overlayLightbox.onclick = () => overlayLightbox.classList.add('hidden');
