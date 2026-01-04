import Project from "./project";

class ProjectManger {

    constructor(){
        this.projects = []
        this.currentProject
    }

    createProject(projectName){
        const newProject = new Project(projectName)
        this.projects.push(newProject)
        return newProject
    }

    deleteProject(id) {
        this.projects = this.projects.filter(p => p.id !== id);
    }

    getProjectById(id) {
        return this.projects.find(p => p.id === id);
    }
}