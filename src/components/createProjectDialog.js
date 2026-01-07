

const openAndCreateProjectDialog = () => {
    const mainDialog = document.createElement('dialog')
    mainDialog.className = 'project-dialog'
    mainDialog.id = "project-details"

    const projectForm = document.createElement('form')
    projectForm.id = 'project-form'

    mainDialog.append(projectForm)

    const titleHeader = document.createElement('h3')
    titleHeader.className = 'project-dialog-title'
    titleHeader.textContent = 'Create Project'

    const titleFieldHeader = document.createElement('label')
    titleFieldHeader.textContent = 'Project Name'

    const titleFieldInput = document.createElement('input')
    titleFieldInput.type = 'text'
    titleFieldInput.id = "detail-name"
    titleFieldInput.name = 'project-name'

    titleFieldHeader.appendChild(titleFieldInput)

    const dateFieldHeader = document.createElement('label')
    dateFieldHeader.textContent = 'Due Date'

    const dateFieldInput = document.createElement('input')
    dateFieldInput.type = 'date'
    dateFieldInput.id = "detail-date"

    dateFieldHeader.appendChild(dateFieldInput)

    const actionsContainer = document.createElement('div')
    actionsContainer.className = "details-actions"

    const saveBtn = document.createElement('button')
    saveBtn.textContent = 'Save'
    saveBtn.id = 'save-todo'
    saveBtn.className = 'save'

    const cancelBtn = document.createElement('button')
    cancelBtn.type = 'button'
    cancelBtn.textContent = 'Cancel'
    cancelBtn.id = 'cancel-btn'
    cancelBtn.className = 'danger'

    actionsContainer.append(saveBtn, cancelBtn)

    projectForm.append(titleHeader, titleFieldHeader, dateFieldHeader, actionsContainer)
    document.body.appendChild(mainDialog)
    mainDialog.showModal()
    return mainDialog
}

export default openAndCreateProjectDialog