const addTaskBtn = document.querySelector('.add-task')

var totalTasks = document.querySelector('.total-tasks')
var completedTasks = document.querySelector('.completed-tasks')
var taskDescriptionInput = document.querySelector('#task-description')
var toDoListContainer = document.querySelector('#to-do-list')

var taskLastId = 1
var toDoList = []

totalTasks.innerHTML = 0
completedTasks.innerHTML = 0

addTaskBtn.addEventListener('click', () => {
    let taskId = taskLastId++
    let taskDescription = taskDescriptionInput.value

    toDoList.push({id: taskId, description: taskDescription, done: false})

    taskDescriptionInput.value = ''
    totalTasks.innerHTML = toDoList.length
    
    refreshToDoList()
})

const refreshToDoList = () => {
    toDoListContainer.innerHTML = ""
    toDoList.forEach(e => {
        let taskElement = document.createElement('div')
        let taskContent = `<div class="col-xl-3"><p> ${e.id} </p></div>`
            + `<div class="col-xl-6"><p class="${e.done ? 'text-success text-decoration-line-through' : ''}"> ${e.description} </p></div>`
            + `<div class="col-auto"><input class="form-check-input" type="checkbox" ${e.done ? 'checked' : ''} onchange='changeTaskState(${e.id})'></div>`
            + `<div class="col-auto"><button type="button" class="btn btn-danger" style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;"><i class="fa-solid fa-trash"></i></button></div>`

        taskElement.classList.add('row')
        taskElement.classList.add('justify-content-start')
        taskElement.classList.add('gap-3')
        taskElement.innerHTML = taskContent

        toDoListContainer.appendChild(taskElement)
    })
}

const changeTaskState = (id) => {
    let wantedTask = toDoList.find(t => t.id == id)
    wantedTask.done = !wantedTask.done

    completedTasks.innerHTML = toDoList.filter(t => t.done).length

    refreshToDoList()
}