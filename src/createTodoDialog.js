function createOption(value, text, isSelected = false) {
    const opt = document.createElement('option');
    opt.value = value;
    opt.textContent = text;
    opt.selected = isSelected;
    return opt;
}


const openAndCreateTaskDialog = () => {
    const mainDialog = document.createElement('dialog')
    mainDialog.className = 'todo-dialog'
    mainDialog.id = "todo-details"

    const todoForm = document.createElement('form')
    todoForm.id = 'todo-form'

    mainDialog.append(todoForm)

    const titleHeader = document.createElement('h3')
    titleHeader.className = 'todo-dialog-title'
    titleHeader.textContent = 'Create Todo'

    const titleFieldHeader = document.createElement('label')
    titleFieldHeader.textContent = 'Title'

    const titleFieldInput = document.createElement('input')
    titleFieldInput.type = 'text'
    titleFieldInput.id = "detail-title"
    titleFieldInput.name = 'todo-title'

    titleFieldHeader.appendChild(titleFieldInput)

    const descriptionFieldHeader = document.createElement('label')
    descriptionFieldHeader.textContent = 'Description'

    const descriptionFieldInput = document.createElement('textarea')
    descriptionFieldInput.id = "detail-description"
    descriptionFieldInput.name = 'todo-description'

    descriptionFieldHeader.appendChild(descriptionFieldInput)

    const dateFieldHeader = document.createElement('label')
    dateFieldHeader.textContent = 'Due Date'

    const dateFieldInput = document.createElement('input')
    dateFieldInput.type = 'date'
    dateFieldInput.id = "detail-date"
    dateFieldInput.name = 'todo-date'

    dateFieldHeader.appendChild(dateFieldInput)

    const priorityFieldHeader = document.createElement('label')
    priorityFieldHeader.textContent = 'Priority'

    const prioritySelect = document.createElement('select')
    prioritySelect.id = 'detail-priority'
    prioritySelect.name = 'todo-priority'

    const prioritySelectOption1 = createOption('low', 'Low', true);

    const prioritySelectOption2 = createOption('medium', 'Medium');
   
    const prioritySelectOption3 = createOption('high', 'High');

    prioritySelect.append(prioritySelectOption1, prioritySelectOption2, prioritySelectOption3)

    priorityFieldHeader.appendChild(prioritySelect)


    const notesFieldHeader = document.createElement('label')
    notesFieldHeader.textContent = 'Notes'

    const notesFieldInput = document.createElement('textarea')
    notesFieldInput.id = "detail-notes"
    notesFieldInput.name = 'todo-notes'


    notesFieldHeader.appendChild(notesFieldInput)

    const actionsContainer = document.createElement('div')
    actionsContainer.className = "details-actions"

    const saveBtn = document.createElement('button')
    saveBtn.textContent = 'Save'
    saveBtn.id = 'save-todo'
    saveBtn.className = 'save'
    saveBtn.type = 'submit'

    const cancelBtn = document.createElement('button')
    cancelBtn.textContent = 'Cancel'
    cancelBtn.id = 'cancel-btn'
    cancelBtn.className = 'danger'
    cancelBtn.type ='button'

    actionsContainer.append(saveBtn, cancelBtn)

    todoForm.append(titleHeader, titleFieldHeader, descriptionFieldHeader, dateFieldHeader, priorityFieldHeader, notesFieldHeader, actionsContainer)
    document.body.appendChild(mainDialog)
    mainDialog.showModal()
    return mainDialog

}

export default openAndCreateTaskDialog