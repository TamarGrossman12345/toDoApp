import TodoTask from "../todos/todos";

class Project {

    constructor(projectName) {
        this.id = crypto.randomUUID();
        this.name = projectName;
        this.tasks = []; 
    }

    addTask(taskData){
        const newTask = new TodoTask(taskData)
        this.tasks.push(newTask)
    }

    removeTask(taskId) {
        this.tasks = this.tasks.filter(t => t.id !== taskId);
    }
}

export default Project