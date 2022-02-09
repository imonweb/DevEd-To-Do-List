// selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// Event Listener
todoButton.addEventListener('click', addTodo);

// Function
function addTodo(event){
  event.preventDefault();
  //Todo Div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //Create LI
  const newTodo = document.createElement('li');
  newTodo.innerText = 'hey';
  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo);
  //Check mark button
  const completedButton = document.createElement('button');
  completedButton.innerText - `<i class="fas fa-check"></i>`;
  completedButton.classList.add('complete-btn');
  todoDiv.appendChild(completedButton);
  //Check trash button
  const trashButton = document.createElement('button');
  trashButton.innerText - `<i class="fas fa-trash"></i>`;
  trashButton.classList.add('complete-btn');
  todoDiv.appendChild(trashButton);

  //Append to List
  todoList.appendChild(todoDiv);
}

