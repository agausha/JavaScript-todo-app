const date = document.querySelector('.date');
const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');

const generateTemplate = todo => {

    const html = `
    <div class="content">
              <input type="text" class="text" value="${todo}" readonly />
              <i class="far fa-trash-alt delete"></i>
            </div>
    `
    list.innerHTML += html;
}

addForm.addEventListener('submit', e => {
e.preventDefault();
const todo = addForm.add.value.trim();


// if(todo.length) {
//     generateTemplate(todo);
//     addForm.reset();
// }

});

// SHOW TODAY'S DATE
const options = {weekday: 'long', month: 'short', day: 'numeric'};
const today = new Date();

date.innerHTML = today.toLocaleDateString('en-US', options);

