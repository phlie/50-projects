const content = document.querySelectorAll('.content');
const navigation = document.querySelectorAll("li");

function removeClasses() {
    navigation.forEach((value, index) => {
        content[index].classList.remove('show');
        value.classList.remove('active');
    });
}

navigation.forEach((value, index) => {
    value.addEventListener('click', () => itemClicked(index));
})

function itemClicked(i) {
    removeClasses();

    content[i].classList.add('show');
    navigation[i].classList.add('active');
}