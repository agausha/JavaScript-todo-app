const date = document.querySelector('.date');
const addForm = document.querySelector('.new-todo');

addForm.addEventListener('submit', e => {
e.preventDefault();
// const todo = addForm.new-todo.value.trim();


})

// SHOW TODAY'S DATE
const options = {weekday: 'long', month: 'short', day: 'numeric'};
const today = new Date();

date.innerHTML = today.toLocaleDateString('en-US', options);

