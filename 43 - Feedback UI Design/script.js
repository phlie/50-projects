const ratings = document.querySelectorAll('.rating');
const ratingsContainer = document.querySelector('.ratings-container');
const sendBtn = document.querySelector('#send');
const panel = document.querySelector('#panel');
let selectedRating = 'Satisfied';

ratingsContainer.addEventListener('click', (event) => {
    if (event.target.parentNode.classList.contains('rating')) {
        removeActive();
        event.target.parentNode.classList.add('active');
        selectedRating = event.target.parentNode.querySelector('small').innerHTML;
    }
});

sendBtn.addEventListener('click', (event) => {
    panel.innerHTML = `
        <i class="fas fa-heart"></i>
        <strong>Thank You!</strong>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>We'll use your feedback to improve our customer support!</p>
`
});

function removeActive() {
    ratings.forEach(element => {
        element.classList.remove('active');
    });
}
