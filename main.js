// Open Folder to Reveal Letter
function openFolder() {
  const letter = document.getElementById('letter');
  letter.style.display = 'block';
}

// Initial Hearts Animation
for (let i = 0; i < 20; i++) {
  const heart = document.createElement('span');
  heart.innerHTML = '❤️';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = Math.random() * 3 + 2 + 's';
  document.querySelector('.hearts').appendChild(heart);
}