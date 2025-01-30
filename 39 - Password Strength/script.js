const password = document.getElementById('password');
const background = document.getElementById('background');

password.addEventListener('input', (event) => {
    const passwordLength = password.value.length;
//  const input = event.target.value;
    console.log(passwordLength);
    const valueChange = Math.max(20 - 2 * passwordLength, 0);
    console.log(valueChange);
    background.style.filter = `blur(${valueChange}px)`;
})