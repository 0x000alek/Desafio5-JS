const addTaskBtn = document.querySelector('.add-task')

var totalTasks = document.querySelector('.total-tasks')
var completedTasks = document.querySelector('.completed-tasks')
var toDoListContainer = document.querySelector('#to-do-list')

var taskCounter = 0
var toDoList = []

totalTasks.innerHTML = 0
completedTasks.innerHTML = 0

addTaskBtn.addEventListener('click', () => {
    let taskId = taskCounter++
    let taskDescription = document.querySelector('#task-description').value

    toDoList.push({id: taskId, description: taskDescription, done: false})

    document.querySelector('#task-description').value = ''
    
    refreshToDoList()
})

const refreshToDoList = () => {
    toDoListContainer.innerHTML = ""
    toDoList.forEach(e => {
        let taskElement = document.createElement('div')
        let taskContent = `<div class="col-xl-3"><p> ${e.id} </p></div>`
            + `<div class="col-xl-6"><p class="${e.done ? 'text-success text-decoration-line-through' : ''}"> ${e.description} </p></div>`
            + `<div class="col-auto"><input class="form-check-input" type="checkbox" ${e.done ? 'checked' : ''}></div>`
            + `<div class="col-auto"><button type="button" class="btn btn-danger" style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;"><i class="fa-solid fa-trash"></i></button></div>`

        taskElement.classList.add('row')
        taskElement.classList.add('justify-content-start')
        taskElement.classList.add('gap-3')
        taskElement.innerHTML = taskContent

        toDoListContainer.appendChild(taskElement)
    })
}

