

const openCreateTaskDialog = () => {
    const mainDialog = document.createElement('dialog')
    mainDialog.className = 'todo-dialog'
    mainDialog.id = "todo-details"

    const titleHeader = document.createElement('h3')
    titleHeader.className = 'todo-dialog-title'
    titleHeader.textContent = 'Create Todo'

    const titleFieldHeader = document.createElement('label')
    titleFieldHeader.textContent = 'Title'

     const titleFieldInput = document.createElement('input')
     titleFieldInput.type = 'text'
     titleFieldInput.id = "detail-title"

    titleFieldHeader.appendChild(titleFieldInput)

    const descriptionFieldHeader = document.createElement('label')
    descriptionFieldHeader.textContent = 'Description'

     const descriptionFieldInput = document.createElement('textarea')
     descriptionFieldInput.id = "detail-description"

     descriptionFieldHeader.appendChild(descriptionFieldInput)

    const dateFieldHeader = document.createElement('label')
    dateFieldHeader.textContent = 'Due Date'

     const dateFieldInput = document.createElement('input')
     dateFieldInput.type ='date'
     dateFieldInput.id = "detail-date"

    dateFieldHeader.appendChild(dateFieldInput)

    const priorityFieldHeader = document.createElement('label')
    priorityFieldHeader.textContent = 'Priority'

    const prioritySelect = document.createElement('select')
    prioritySelect.id = 'detail-priority'


    const prioritySelectOption1 = document.createElement('option')
    prioritySelectOption1.value ='low'
    prioritySelectOption1.textContent = 'Low'

    const prioritySelectOption2 = document.createElement('option')
    prioritySelectOption2.value ='medium'
    prioritySelectOption2.textContent = 'Medium'

    const prioritySelectOption3 = document.createElement('option')
    prioritySelectOption3.value ='high'
    prioritySelectOption3.textContent = 'High'

    prioritySelect.append(prioritySelectOption1,prioritySelectOption2,prioritySelectOption3)
    
    priorityFieldHeader.appendChild(prioritySelect)


    const notesFieldHeader = document.createElement('label')
    notesFieldHeader.textContent = 'Notes'

    const notesFieldInput = document.createElement('textarea')
     notesFieldInput.id = "detail-notes"

    
    notesFieldHeader.appendChild(notesFieldInput)


    mainDialog.append(titleHeader,titleFieldHeader,descriptionFieldHeader,dateFieldHeader,priorityFieldHeader, notesFieldHeader)
    document.body.appendChild(mainDialog)
    mainDialog.showModal()

}

export default openCreateTaskDialog