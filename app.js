//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

//Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteDone);
filterOption.addEventListener('change', filterTodo);



//Functions 
function addTodo(event) {
    event.preventDefault(); //to prevent from submitting

    //Todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    
    //Create <li>
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value; // the value from the input field
    newTodo.classList.add('todo-item');

    todoDiv.appendChild(newTodo);
     
    //Button: done
    const doneButton = document.createElement('button');
    doneButton.innerHTML = '<i class="fas fa-check"></i>';
    doneButton.classList.add('done-btn');

    todoDiv.appendChild(doneButton);

     //Button: delete
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add('delete-btn');
    
    todoDiv.appendChild(deleteButton);

    //Append to list
    todoList.appendChild(todoDiv);

    //Clear Todo Input Value
    todoInput.value = '';
    todoInput.focus();

}

function deleteDone(e) {
    const clicked = e.target;

    if(clicked.classList[0] === 'delete-btn') {
        const todo = clicked.parentElement;
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function() {
            todo.remove()
        }); //it's gonna execute aftre the animation is completed
    }

    if(clicked.classList[0] === 'done-btn') {
        const todo = clicked.parentElement;
        todo.classList.toggle('completed');

    }
}

function filterTodo(e) {
     const todos = todoList.childNodes;
     todos.forEach(function (todo) {
         switch(e.target.value) {
             case "all":
                todo.style.display = "flex";
                 break;
             case "completed":
                 if(todo.classList.contains("completed")) {
                     todo.style.display = "flex";}
                     else {
                        todo.style.display = "none";
                     }
                     break;
            case "inprogress":
                if(!todo.classList.contains("completed")) {
                    todo.style.display = "flex";}
                    else {
                       todo.style.display = "none";
                    }
                    break;
         }

     })
}
