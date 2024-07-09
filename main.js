let toDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

function addToDo() {
    const inputValue = inputField.value.trim();
    if (inputValue === "") return;

    const paragraph = document.createElement('p');
    paragraph.classList.add("paragraph-styling");
    paragraph.innerText = inputValue;
    toDoContainer.appendChild(paragraph);
    inputField.value = "";

    paragraph.addEventListener('click', function() {
        paragraph.style.textDecoration = "line-through";
    });

    paragraph.addEventListener('dblclick', function() {
        toDoContainer.removeChild(paragraph);
    });
}

// Evento para el botón de añadir to-do
toDoButton.addEventListener('click', addToDo);

// Evento para la tecla Enter en el campo de entrada
inputField.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        addToDo();
    }
});

