const imgs = document.getElementById('imgs');
const leftButton = document.getElementById('left');
const rightButton = document.getElementById('right');

const img = document.querySelectorAll('#imgs img');
let index = 0;

let interval = setInterval(run, 2000);

function run() {
    index++;

    changeImage();
}

function changeImage() {
    if (index >= img.length) {
        index = 0;
    } else if (index < 0) {
        index = img.length - 1;
    }

    const width = imgs.offsetWidth;

    imgs.style.transform = `translateX(${-index * width}px)`;
}

function resetInterval() {
    clearInterval(interval);
    interval = setInterval(run, 2000);
}

rightButton.addEventListener('click', () => {
    index++;

    changeImage();
    resetInterval();
});

leftButton.addEventListener('click', () => {
    index--;
    
    changeImage();
    resetInterval();
});