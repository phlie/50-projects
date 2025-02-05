const codes = document.querySelectorAll('.code');

const verifyCode = "123456";

codes[0].focus();

codes.forEach((code, index) => {
    code.addEventListener('keyup', (event) => {
        if (event.key === 'Backspace') {
            codes[index - 1].focus();
        } else if (index >= codes.length - 1) {
            validate();
        } else if (event.key >= 0 && event.key <= 9) {
            codes[index + 1].focus();
        }
    });
    code.addEventListener('keydown', () => {
        codes[index].value = '';
    });
});

function validate() {
    let number = "";
    codes.forEach((code) => {
        number += String(code.value);
    });
    if (verifyCode === number) {
        alert("You entered the right thing.");
    } else {
        alert("Wrong thing entered.");
    }
}
