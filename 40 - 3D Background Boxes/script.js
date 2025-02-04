const btn = document.getElementById('btn');
const box = document.querySelectorAll('.box');
const boxes = document.getElementById('boxes');

box.forEach((element, index) => {
   element.style.backgroundPosition = `${(index % 4) * -125}px ${Math.floor(index / 4) * -125}px`;
});

btn.addEventListener('click', () => {
    boxes.classList.toggle('big');
});