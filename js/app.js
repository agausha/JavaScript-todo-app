const date = document.querySelector('.date');


// SHOW TODAY'S DATE
const options = {weekday: 'long', month: 'short', day: 'numeric'};
const today = new Date();

date.innerHTML = today.toLocaleDateString('en-US', options);

