import { storageManager } from "../storageManger";
import TodoTask from "./todos";

class Project {

    constructor(projectName) {
        this.id = crypto.randomUUID();
        this.name = projectName;
        //this.tasks = []; 
    }

    addTask(taskData){
        const newTask = new TodoTask(taskData)
        this.tasks.push(newTask)
    }

    removeTask(taskId) {
        this.tasks = this.tasks.filter(t => t.id !== taskId);
    }

    deleteProject(id) {
        //projectTasks = storageManager.
        this.projects = this.projects.filter(p => p.id !== id);
    }

    getTasksFromProject() {
        return storageManager.getTasksByProjectId(this.id)
    }
}

export default Project