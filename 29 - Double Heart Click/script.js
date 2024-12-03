const loveMe = document.querySelector('.loveMe');
const times = document.querySelector('#times');

/* let start = Date.now();
let end = Date.now();
let toggle = false; */

let clickTime = 0;
let timesClicked = 0;

loveMe.addEventListener('click', (event) => {
/*     if (toggle) {
        end = Date.now();
        toggle = false;
    } else {
        start = Date.now();
        toggle = true;
    }

    if (start - end < 800) {
        createHeart(event);
        end = start + 1000;
    } */

        if (clickTime === 0) {
            clickTime = new Date().getTime();
        } else {
            if ((new Date().getTime() - clickTime) < 800) {
                createHeart(event);
            } else {
                clickTime = new Date().getTime();
            }
        }
});

function createHeart(event) {
    const heart = document.createElement('i');
    heart.classList.add('fas');
    heart.classList.add('fa-heart');

    const x = event.clientX;
    const y = event.clientY;

    const leftOffset = event.target.offsetLeft;
    const topOffset = event.target.offsetTop;

    xInside = x - leftOffset;
    yInside = y - topOffset;

    heart.style.top = `${yInside}px`;
    heart.style.left = `${xInside}px`;

    loveMe.appendChild(heart);

    times.innerHTML = ++timesClicked;
    setTimeout(() => heart.remove(), 600);
}