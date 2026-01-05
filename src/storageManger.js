// storageManager.js
const STORAGE_KEY = 'my_todo_list';

export const storageManager = {

    getTasks() {
        const data = localStorage.getItem(STORAGE_KEY);
        return data ? JSON.parse(data) : [];
    },

    saveTasks(tasks) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    },

    addTask(newTask) {
        const tasks = this.getTasks(); 
        tasks.push(newTask);           
        this.saveTasks(tasks);         
    },

    deleteTask(idToDelete) {
    const tasks = storageManager.getTasks();
    const updatedTasks = tasks.filter(task => task.id !== idToDelete);
    storageManager.saveTasks(updatedTasks);

    },
    getTasksByProject(projectId) {
        const allTasks = this.getTasks(); 

        return allTasks.filter(task => task.projectId === projectId);
    }
};