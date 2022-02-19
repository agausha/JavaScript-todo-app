const date = document.querySelector('.date');
const addForm = document.querySelector('.add');

addForm.addEventListener('submit', e => {
e.preventDefault();
const todo = addForm.add.value.trim();

console.log(todo);

});

// SHOW TODAY'S DATE
const options = {weekday: 'long', month: 'short', day: 'numeric'};
const today = new Date();

date.innerHTML = today.toLocaleDateString('en-US', options);

