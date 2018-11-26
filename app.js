function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return; //Stops the function if no audio element
  audio.currentTime = 0; //rewinds audio to the start
  audio.play();
  key.classList.add('playing');
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return; //Skip if its not transform property
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(function (key) {
  key.addEventListener('transitionend', removeTransition)});
window.addEventListener('keydown', playSound);