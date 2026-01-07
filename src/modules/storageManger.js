import Project from "./modules/project";

// storageManager.js
const STORAGE_TODO_KEY = 'my_todo_list';
const STORAGE_PROJECT_KEY = 'my_project';

export const storageManager = {

   
    getTasks() {
        const data = localStorage.getItem(STORAGE_TODO_KEY);
        return data ? JSON.parse(data) : [];
    },

    getProjects() {
        const data = localStorage.getItem(STORAGE_PROJECT_KEY);
        return data ? JSON.parse(data) : [];
    },


    saveTasks(tasks) {
        localStorage.setItem(STORAGE_TODO_KEY, JSON.stringify(tasks));
    },

    saveProject(projectsArray) {
        localStorage.setItem(STORAGE_PROJECT_KEY, JSON.stringify(projectsArray));
    },

    addTask(newTask) {
        const tasks = this.getTasks();
        tasks.push(newTask);
        this.saveTasks(tasks);
    },
    
    addProject(newProject) {
        const projects = this.getProjects();
        const safeProjects = Array.isArray(projects) ? projects : [];
        safeProjects.push(newProject)
        this.saveProject(safeProjects)
    },
   
    deleteTask(idToDelete) {
        const tasks = this.getTasks();
        const updatedTasks = tasks.filter(task => task.id !== idToDelete);
        this.saveTasks(updatedTasks);
    },

    deleteProjectTasks(idToDelete) {
        const tasks = this.getTasks();
        const updatedTasks = tasks.filter(task => task.id !== idToDelete);
        this.saveTasks(updatedTasks);
    },
    
    getTasksByProjectId(projectId) {
        const allTasks = this.getTasks();
        const projectTasks = allTasks.filter(task => task.projectID === projectId);
        return projectTasks
        // this.saveTasks(updatedTasks);
    },

    getProjectById(projectId) {
    const allProjects = this.getProjects();
    const wantedProject = allProjects.find(project => project.id === projectId);
    
    if (!wantedProject) {
        console.warn(`Project with ID ${projectId} not found`);
        return null;
    }

    return new Project(wantedProject);
}

   
};