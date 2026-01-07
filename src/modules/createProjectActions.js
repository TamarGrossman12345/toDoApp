import { storageManager } from "../storageManger";
import openAndCreateProjectDialog from "../componants/createProjectDialog";
import Project from "./project";
import { createProjectPropInTab } from "../componants/projectUI";


const initProjectDialog = () => {
    
    let mainProjectDialog = document.querySelector('#project-details');

    if (mainProjectDialog) {
        mainProjectDialog.showModal();
        return mainProjectDialog; 
    }

    mainProjectDialog = openAndCreateProjectDialog()
    const cancelBtn = document.querySelector('#cancel-btn')
    const projectForm = mainProjectDialog.querySelector('#project-form');


    
    cancelBtn.addEventListener("click", () => {
        mainProjectDialog.close()
    });

    projectForm.addEventListener("submit", (e) => {
        
        e.preventDefault();
        const formData = new FormData(projectForm);
        const data = Object.fromEntries(formData.entries());
        const newProject = new Project(
            data['project-name']
        );

        storageManager.addProject(newProject)
        createProjectPropInTab(newProject)
        mainProjectDialog.close()
    });

}

export default initProjectDialog