import openAndCreateTaskDialog from "./createTodoDialog";
import TodoTask from "./todos";
import { storageManager } from "../storageManger";
import { createTodoPropInTab } from "./taskUI";
import { currentProjectId } from "../index";

const initTaskDialog = () => {
    
    let mainTaskDialog = document.querySelector('#todo-details');

    if (mainTaskDialog) {
        mainTaskDialog.showModal();
        return mainTaskDialog; 
    }

    mainTaskDialog = openAndCreateTaskDialog()
    const cancelBtn = document.querySelector('#cancel-btn')
    const todoForm = mainTaskDialog.querySelector('#todo-form');


    
    cancelBtn.addEventListener("click", () => {
        mainTaskDialog.close()
    });

    todoForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const formData = new FormData(todoForm);
        const data = Object.fromEntries(formData.entries());
        const newTask = new TodoTask({
            title: data['todo-title'],
            priority: data['todo-priority'], 
            description: data['todo-description'],
            dueDate: data['todo-date'],
            projectID: currentProjectId
        });
        
        console.log(newTask)
        storageManager.addTask(newTask);
        createTodoPropInTab(newTask)

        mainTaskDialog.close()
    });


}

export default initTaskDialog