// storageManager.js
const STORAGE_TODO_KEY = 'my_todo_list';
const STORAGE_PROJECT_KEY = 'my_project';

export const storageManager = {

   
    getTasks() {
        const data = localStorage.getItem(STORAGE_TODO_KEY);
        return data ? JSON.parse(data) : [];
    },

    
    saveTasks(tasks) {
        localStorage.setItem(STORAGE_TODO_KEY, JSON.stringify(tasks));
    },

    
    addTask(newTask) {
        const tasks = this.getTasks();
        tasks.push(newTask);
        this.saveTasks(tasks);
    },

   
    deleteTask(idToDelete) {
        const tasks = this.getTasks();
        const updatedTasks = tasks.filter(task => task.id !== idToDelete);
        this.saveTasks(updatedTasks);
    },

    
    getTasksByProject(projectId) {
        const allTasks = this.getTasks();
        return allTasks.filter(task => task.projectId === projectId);
    },

   
    // toggleTaskStatus(taskId) {
    //     const tasks = this.getTasks();
    //     const updatedTasks = tasks.map(task => {
    //         if (task.id === taskId) {
    //             return { ...task, isCompleted: !task.isCompleted };
    //         }
    //         return task;
    //     });
    //     this.saveTasks(updatedTasks);
    // }
};