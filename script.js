function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return

    key.classList.add('play');
    audio.currentTime = 0;
    audio.play();
};

function quitarClase(e){
    if(e.propertyName !== 'transform') return;
    this.classList.remove('play');
};

const keys = document.querySelectorAll('.key');
keys.forEach(keys => keys.addEventListener('transitionend', quitarClase));
window.addEventListener('keydown',playSound);


