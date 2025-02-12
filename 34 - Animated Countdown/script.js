const nums = document.querySelectorAll('.nums span');
const counter = document.querySelector('.counter');
const finalMessage = document.querySelector('.final');
const replay = document.querySelector('#replay')

function resetDOM() {
    replay.addEventListener('click', (event) => {
        counter.classList.remove('hide');
        finalMessage.classList.remove('show');
    });
    
    nums.forEach((num) => {
        num.classList.value = '';
    });
    nums[0].classList.add('in');

}

function runAnimation() {
    nums.forEach((num, index) => {
        const nextToLast = nums.length - 1;
        
       
        num.addEventListener('animationend', (event) => {
            if (event.animationName === 'goIn' && index !== nextToLast) {
                num.classList.add('out');
                num.classList.remove('in');
            } else if (event.animationName ==='goOut' && num.nextElementSibling) {
                num.nextElementSibling.classList.add('in');
            } else {
                counter.classList.add('hide');
                finalMessage.classList.add('show');
            }

        });
    });
}

replay.addEventListener('click', () => {
    resetDOM();
    runAnimation();
})