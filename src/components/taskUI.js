

import { storageManager } from "../modules/storageManager"

export const createTodoPropInTab = (currentTodo) => {

    const listContainer = document.querySelector('#todo-list')

    const todoLi = document.createElement('li')
    todoLi.classList.add('todo',`${currentTodo.priority}`)

    listContainer.append(todoLi)

    const todoContainer = document.createElement('div')
    todoContainer.classList.add("todo-info")
    todoContainer.id = `${currentTodo.id}`

    todoLi.append(todoContainer)

    const todoLabel = document.createElement('label')
    todoLabel.classList.add("custom-checkbox")

    todoContainer.append(todoLabel)

    const todoInput = document.createElement('input')
    todoInput.type = "checkbox"

    const todoSpanImg = document.createElement('span')
    todoSpanImg.classList.add("checkbox-image-check")

    const todoSpanTitle = document.createElement('span')
    todoSpanTitle.classList.add("todo-title")
    todoSpanTitle.textContent = `${currentTodo.title}`




    const todoLabelDelete = document.createElement('label')
    todoLabelDelete.classList.add("custom-checkbox-delete")

    todoContainer.append(todoLabelDelete)

    const todoInputDelete = document.createElement('input')
    todoInputDelete.type = "checkbox"

    const todoSpanImgDelete = document.createElement('span')
    todoSpanImgDelete.classList.add("checkbox-image-delete")

    todoLabel.append(todoInput ,todoSpanImg, todoSpanTitle,)
    todoLabelDelete.append( todoInputDelete, todoSpanImgDelete)
}


export const loadTasks = (currentProjectId) => {
    const container = document.querySelector('#todo-list')
    container.replaceChildren();
    
    if(currentProjectId === 'default'){
        container.textContent =   `You can't add tasks in the Default list`;
        return;
    }
    
    const savedTasks = storageManager.getTasksByProjectId(currentProjectId)

    if (!savedTasks || savedTasks.length === 0) {
        
        container.textContent = 'No tasks for this project yet.';
        return;
    }

    
    container.textContent = ' '
    savedTasks.forEach(task => {
        createTodoPropInTab(task);
    });
    
    
}