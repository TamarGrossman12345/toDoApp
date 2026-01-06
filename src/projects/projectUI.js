
export const createProjectPropInTab = (currentProject) => {
    const container = document.querySelector('#project-list')

    const projectBtn = document.createElement('button')
    projectBtn.classList.add('project')
    projectBtn.textContent = `${currentProject.name}`
    projectBtn.id = `${currentProject.id}`

    container.append(projectBtn)
} 


