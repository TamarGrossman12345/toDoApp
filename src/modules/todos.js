
class TodoTask{

constructor({ projectID, title = '', notes = '', priority, description =' ', dueDate = new Date() }) {
        this.title = title;
        this.priority = priority;
        this.description = description;
        this.dueDate = dueDate;
        this.notes = notes;
        this.projectID = projectID
        
        this.id = crypto.randomUUID(); 
        this.isCompleted = false;
    }

    toggleStatus() {
        this.isCompleted = !this.isCompleted;
        console.log(`המשימה "${this.title}" עודכנה ל-${this.isCompleted ? 'בוצע' : 'לא בוצע'}`);
    }

    _validateString(value, fieldName) {
        if (!value || value.trim().length === 0) {
            throw new Error(`השדה ${fieldName} אינו יכול להיות ריק`);
        }
        return value.trim(); 
    }

    updatePriority(newPriority) {
        const validPriorities = ['Low', 'Medium', 'High'];
        
        if (validPriorities.includes(newPriority)) {
            this.priority = newPriority;
        } else {
            console.error("תעדוף לא תקין!");
        }
    }

    renameTitle(newTitle) {
        this.title = this._validateString(newTitle, "כותרת");
    }

    updateDescription(newDesc) {
        this.description = newDesc ? newDesc.trim() : "";
    }
}

export default TodoTask