const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');


// to generate HTML template for the entered todo item
const generateTemplate = todo => {
    const html = 
    `<li class="list-group-item d-flex justify-content-between align-items-center">
      <span>${todo}</span>
      <i class="fas fa-trash delete"></i>
     </li>`
     list.innerHTML += html;
};

addForm.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addForm.add.value.trim();
    if(todo.length){
      generateTemplate(todo);
      addForm.reset();
    }
});

list.addEventListener('click', e => {
  if(e.target.classList.contains('delete')){
    e.target.parentElement.remove();
  }
});


// to filter out terms according to the search
const filterTodos = (term) => {
    Array.from(list.children)
    .filter((todo) => {
      return !todo.textContent.includes(term);
    })
    .forEach(todo => {
      todo.classList.add('filtered');
    });
    Array.from(list.children)
    .filter((todo) => {
      return todo.textContent.includes(term);
    })
    .forEach(todo => {
      todo.classList.remove('filtered');
    });
};

search.addEventListener('keyup', () => {
    const term = search.value.trim();
    filterTodos(term);
});
