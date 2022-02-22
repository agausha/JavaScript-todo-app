const date = document.querySelector('.date');
const addForm = document.querySelector('.add');
const list = document.querySelector('.todo');

const generateTemplate = todo => {

    const html = `
    <li class="content">
              <span class="text">${todo}</span>
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

//SET LOCAL STORAGE
//localStorage.setItem('todo', todo);
localStorage.setItem('todo', JSON.stringify(todo));

});

// SHOW TODAY'S DATE
// const now = {weekday: 'long', month: 'short', day: 'numeric',};
const now = new Date();

date.innerHTML = (dateFns.format(now, 'ddd, Do MMM.'));

// DELETE TODOS
list.addEventListener('click', e => {
    if(e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }

});
