const result = document.getElementById('result');
const filter = document.getElementById('filter');
const listItems = [];

filter.addEventListener('input', (event) => filterData(event.target.value));

async function getData() {
    const res = await fetch('https://randomuser.me/api?results=50');
    const { results } = await res.json();

    // Clear results
    result.innerHTML = '';

    results.forEach(user => {
        const li = document.createElement('li');

        listItems.push(li);

        li.innerHTML = `
<img src="${user.picture.large}" alt="${user.name.first}">
<div class="user-info" >
    <h4 class="user-info">${user.name.first} ${user.name.last}</h4>
    <p>${user.location.city}, ${user.location.country}</p>
</div>
`;

        result.appendChild(li);
    })
}

getData();

function filterData(searchTerm) {
    listItems.forEach(item => {
        if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
            item.classList.remove('hide');
        } else {
            item.classList.add('hide');
        }
    });
}
