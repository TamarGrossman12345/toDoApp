

import { storageManager } from "../storageManger"

export const createTodoPropInTab = (currentTodo) => {

    const listContainer = document.querySelector('#todo-list')

    const todoLi = document.createElement('li')
    todoLi.classList.add('todo',`${currentTodo.priority}`)

    listContainer.append(todoLi)

    const todoContainer = document.createElement('div')
    todoContainer.classList.add("todo-info")

    todoLi.append(todoContainer)

    const todoLabel = document.createElement('label')
    todoLabel.classList.add("custom-checkbox")

    todoContainer.append(todoLabel)

    const todoInput = document.createElement('input')
    todoInput.type = "checkbox"

    const todoSpanImg = document.createElement('span')
    todoSpanImg.classList.add("checkbox-image")

    const todoSpanTitle = document.createElement('span')
    todoSpanTitle.classList.add("todo-title")
    todoSpanTitle.textContent = `${currentTodo.title}`

    todoLabel.append(todoInput,todoSpanImg, todoSpanTitle)
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

    
    container.textContent = ''
    savedTasks.forEach(task => {
        createTodoPropInTab(task);
    });
    
    
}