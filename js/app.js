const date = document.querySelector('.date');
const addForm = document.querySelector('.add');
const list = document.querySelector('.todo');

const generateTemplate = todo => {

    const html = `
    <li class="content">
              <span class="text"> ${todo}<span/>
              <i class="far fa-trash-alt delete"></i>
            </li>
    `
    list.innerHTML += html;
}

addForm.addEventListener('submit', e => {
e.preventDefault();
const todo = addForm.add.value.trim();


if(todo.length) {
    generateTemplate(todo);
    addForm.reset();
}

});

// SHOW TODAY'S DATE
const options = {weekday: 'long', month: 'short', day: 'numeric'};
const today = new Date();

date.innerHTML = today.toLocaleDateString('en-US', options);

