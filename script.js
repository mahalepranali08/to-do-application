const todolist = document.getElementById('todoList');
const newTodoInput = document.getElementById('newTodo');
const addBtn = document.getElementById('addbtn');


function addTodo(){



    const newTodoText = newTodoInput.Value;
    newTodoInput.value = '';


    const completeCheckbox = document.createElement('input');
    completeCheckbox.type = 'checkbox';


    const todoText = document.createElement('sapn');
    todoText.textContent = newTodoText;


    const deleteBtn = document.createElement('button');
    deleteBtn.textcontent = 'Delete';


    const listItem = document.createElement('li');
    listItem.appendChild(completeCheckbox);
    listItem.appendChild(todoText);
    listItem.appendChild(deleteBtn);


    todolist.append(listItem);



    deleteBtn.addEventListener('click' ,function(){
    todolist.removeChild(listItem);

    })
    completeCheckbox.addEventListener('change'function(){
    if(completeCheckbox.checked) {
       listItem.classList.add('completed');

    } else {
        listItem.classList.remove('completed');

    }
    })
    newTodoInput.focus();

}
addBtn.addEventListener('click', addTodo);