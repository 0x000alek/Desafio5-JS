const addTaskBtn = document.querySelector('.add-task')

var totalTasks = document.querySelector('.total-tasks')
var completedTasks = document.querySelector('.completed-tasks')
var taskDescriptionInput = document.querySelector('#task-description')
var toDoListContainer = document.querySelector('#to-do-list')

var toDoList = [
    {
        id: 1,
        description: 'Hacer mercado',
        done: true
    },
    {
        id: 2,
        description: 'Estudiar para la prueba',
        done: false
    },
    {
        id: 3,
        description: 'Sacar a pasear a Tobby',
        done: false
    }
]

totalTasks.innerHTML = 0
completedTasks.innerHTML = 0

addTaskBtn.addEventListener('click', () => {
    let taskId = toDoList[toDoList.length - 1].id
    let taskDescription = taskDescriptionInput.value

    taskId++
    toDoList.push({id: taskId, description: taskDescription, done: false})

    taskDescriptionInput.value = ''
    
    showToDoList()
})

const updateTaskIndicators = () => {
    totalTasks.innerHTML = toDoList.length
    completedTasks.innerHTML = toDoList.filter(t => t.done).length
}

const showToDoList = () => {
    toDoListContainer.innerHTML = ""
    toDoList.forEach(e => {
        let taskElement = document.createElement('div')
        let taskContent = `<div class="col-xl-3"><p> ${e.id} </p></div>`
            + `<div class="col-xl-6"><p class="${e.done ? 'text-success text-decoration-line-through' : ''}"> ${e.description} </p></div>`
            + `<div class="col-auto"><input class="form-check-input" type="checkbox" ${e.done ? 'checked' : ''} onchange="changeTaskState(${e.id})"></div>`
            + `<div class="col-auto"><button type="button" class="btn btn-danger" style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;" `
            + `onclick="deleteTask(${e.id})">`
            + `<i class="fa-solid fa-trash"></i></button></div>`

        taskElement.classList.add('row')
        taskElement.classList.add('justify-content-start')
        taskElement.classList.add('gap-3')
        taskElement.innerHTML = taskContent

        toDoListContainer.appendChild(taskElement)
    })

    updateTaskIndicators()
}

const changeTaskState = (id) => {
    let wantedTask = toDoList.find(t => t.id == id)
    wantedTask.done = !wantedTask.done

    showToDoList()
}

const deleteTask = (id) => {
    let wantedTaskId = toDoList.findIndex(t => t.id == id)
    toDoList.splice(wantedTaskId, 1)

    showToDoList()
}

showToDoList()