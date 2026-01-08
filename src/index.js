import './style.css';
//import JSConfetti from 'js-confetti';
import initTaskDialog from './modules/createTodoActions';
import initProjectDialog from './modules/createProjectActions';
import {loadTasks} from './components/taskUI'
import {storageManager} from './modules/storageManager';
import JSConfetti from "js-confetti";

const jsConfetti = new JSConfetti();
// const todoForm = document.getElementById("todo-form");
// const todoInput = document.getElementById("todo-input");
// const todoListUL = document.getElementById("todo-list");

// const menuButton = document.querySelector(".menu-button");
// const menuOptions = document.querySelector(".menu-options");
// const hideDoneTasksButton = document.getElementById("hide-done-tasks");
// const deleteDoneTasksButton = document.getElementById("delete-done-tasks");
// const showAllTasksButton = document.getElementById("show-all-tasks");



const addTodoBtn = document.getElementById("add-todo-btn");
const addProjectBtn = document.querySelector('#add-project-btn')

export let currentProjectId = ''


const initApp = () => {

  addTodoBtn.disabled = true;

  addTodoBtn.addEventListener("click", () => {
    initTaskDialog()
  });

  addProjectBtn.addEventListener("click", (e) => {
    e.preventDefault();
    initProjectDialog()
  });


const projectList = document.querySelector('#project-list');

projectList.addEventListener('click', (e) => {
    const btn = e.target.closest('.project');
    
    if (btn) {
        currentProjectId = btn.id;

        if(currentProjectId === 'default'){
          addTodoBtn.disabled = true;
        }
        else {
          addTodoBtn.disabled = false;
        }

        document.querySelectorAll('.project').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        loadTasks(currentProjectId)
    }

});


const listContainer = document.querySelector('#todo-list');

listContainer.addEventListener('click', (e) => {
   
    const todoInfo = e.target.closest('.todo-info');
    if (!todoInfo) return;

    const taskId = todoInfo.id;

    if (e.target.closest('.custom-checkbox-delete')) {
        console.log("מחיקת משימה:", taskId);
        storageManager.deleteTask()
        todoInfo.closest('li').remove(); 
    }

    if (e.target.closest('.custom-checkbox')) {
        const checkbox = todoInfo.querySelector('input[type="checkbox"]');
        jsConfetti.addConfetti();
        console.log("שינוי סטטוס למשימה:", taskId, checkbox.checked);

    }
});



}




initApp()

