const addButton = document.getElementById('add');

addButton.addEventListener('click', () => addNewNote(""));

const notes = JSON.parse(localStorage.getItem('notes'));

if (notes) {
    notes.forEach((note) => addNewNote(note));
}

function addNewNote(text = '') {
    const note = document.createElement('div');
    note.classList.add('note');

    note.innerHTML =
        `
        <div class="tools">
            <div class="title">
                <h3>Note A</h3>
            </div>
            <div class="note-buttons">
                <button class="edit"><i class="fas fa-edit"></i>"</button>
                <button class="delete"><i class="fas fa-trash-alt"></i></button>
            </div>
        </div>

        <div class="main"></div>
        <textarea class="typing-area hidden"></textarea>
        `;

        const editButton = note.querySelector('.edit');
        const deleteButton = note.querySelector('.delete');
        const main = note.querySelector('.main');
        const textAreaEl = note.querySelector('.typing-area');

        textAreaEl.value = marked.parse(text);
        main.innerHTML = marked.parse(text);

        deleteButton.addEventListener('click', () => {
            note.remove();

            updateLS();
        });

        editButton.addEventListener('click', () => {
            main.classList.toggle('hidden');
            textAreaEl.classList.toggle('hidden');
            note.classList.toggle('color-toggle');
        });

        textAreaEl.addEventListener('input', (event) => {
           const { value } = event.target;
           main.innerHTML = marked.parse(value);
           updateLS();
        });

        document.body.appendChild(note);
}

function updateLS() {
    const notesText = document.querySelectorAll('textarea');
    const notes = [];

    notesText.forEach((note) => notes.push(note.value));

    localStorage.setItem('notes', JSON.stringify(notes));
}