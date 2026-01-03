const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoListUL = document.getElementById("todo-list");

const menuButton = document.querySelector(".menu-button");
const menuOptions = document.querySelector(".menu-options");
const hideDoneTasksButton = document.getElementById("hide-done-tasks");
const deleteDoneTasksButton = document.getElementById("delete-done-tasks");
const showAllTasksButton = document.getElementById("show-all-tasks");
const jsConfetti = new JSConfetti();

const saveTodos = () => {
  const todoJason = JSON.stringify(allTodos);
  localStorage.setItem("todos", todoJason);
};

const getTodos = () => {
  const todos = localStorage.getItem("todos");
  return todos ? JSON.parse(todos) : [];
};

const ShowConfetti = () => {
  jsConfetti.addConfetti();
};

const creatTodoItem = (todo, index) => {
  const todoId = "todo-" + index;
  const todoLI = document.createElement("li");
  todoLI.className = `todo${todo.completed ? "-completed" : ""}`;

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = todo.completed;
  checkbox.id = todoId;
  checkbox.classList = "custom-checkbox";

  const checkboxLabel = document.createElement("label");
  checkboxLabel.setAttribute("for", checkbox.id);
  checkboxLabel.classList.add("custom-checkbox-label");

  const ChecksvgIcon = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  ChecksvgIcon.setAttribute("width", "24px");
  ChecksvgIcon.setAttribute("height", "24px");
  ChecksvgIcon.setAttribute("viewBox", "0 -960 960 960");

  const ChecksvgIconPath = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  ChecksvgIconPath.setAttribute(
    "d",
    "M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"
  );
  ChecksvgIcon.appendChild(ChecksvgIconPath);
  checkboxLabel.appendChild(ChecksvgIcon);

  checkbox.addEventListener("change", (e) => {
    todo.completed = checkbox.checked;

    if (checkbox.checked) {
      checkboxLabel.classList.add("checked");
      ShowConfetti();
    } else {
      checkboxLabel.classList.remove("checked");
    }
    saveTodos();
    updateTodoList();
  });

  if (checkbox.checked) {
    checkboxLabel.classList.add("checked");
  }
  todoLI.appendChild(checkbox);
  todoLI.appendChild(checkboxLabel);

  const label = document.createElement("label");
  label.textContent = todo.text;
  label.classList.add(todo.completed ? "todo-text-completed" : "todo-text");

  const DeletesvgIcon = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  DeletesvgIcon.setAttribute("fill", "var(--secondary-color)");
  DeletesvgIcon.setAttribute("width", "24px");
  DeletesvgIcon.setAttribute("height", "24px");
  DeletesvgIcon.setAttribute("viewBox", "0 -960 960 960");
  DeletesvgIcon.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  DeletesvgIcon.setAttribute("fill", "#5f6368");

  const DeletesvgIconPath = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  DeletesvgIconPath.setAttribute(
    "d",
    "M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"
  );
  DeletesvgIcon.appendChild(DeletesvgIconPath);
  DeletesvgIcon.classList.add("delete-button");

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-button");
  deleteButton.addEventListener("click", () => {
    deleteTodoItem(index);
  });

  todoLI.appendChild(label);
  todoLI.appendChild(deleteButton);
  deleteButton.appendChild(DeletesvgIcon);

  return todoLI;
};

const updateTodoList = () => {
  todoListUL.innerHTML = "";
  allTodos.forEach((todo, index) => {
    if (!todo.hidden) {
      const todoItem = creatTodoItem(todo, index);
      todoListUL.appendChild(todoItem);
    }
  });
};

const deleteTodoItem = (index) => {
  allTodos.splice(index, 1);
  saveTodos();
  updateTodoList();
};

const addTodo = () => {
  const todoText = todoInput.value.trim();
  if (todoText.length > 0 && todoText.length < 50) {
    const task = {
      text: todoText,
      completed: false,
      hidden: false,
    };
    allTodos.push(task);
    saveTodos();
    updateTodoList();
    todoInput.value = "";
  } else if (todoText.length >= 50) {
    alert("the content of the task is too long");
    todoInput.value = "";
  } else {
    alert("the task is empty");
  }
};

let allTodos = getTodos();
updateTodoList();

todoForm.addEventListener("submit", function (e) {
  e.preventDefault();
  addTodo();
});

menuButton.addEventListener("click", () => {
  menuOptions.classList.toggle("show");
});

hideDoneTasksButton.addEventListener("click", () => {
  allTodos.forEach((todo) => {
    if (todo.completed) {
      todo.hidden = true;
    }
  });
  saveTodos();
  updateTodoList();
});

deleteDoneTasksButton.addEventListener("click", () => {
  allTodos = allTodos.filter((todo) => !todo.completed);
  saveTodos();
  updateTodoList();
  menuOptions.classList.remove("show");
});

showAllTasksButton.addEventListener("click", () => {
  allTodos.forEach((todo) => {
    todo.hidden = false;
  });
  saveTodos();
  updateTodoList();
});