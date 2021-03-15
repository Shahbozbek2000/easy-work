const inputElement = document.getElementById('input')
const ulElement = document.querySelector('#list')

var todoList = []
inputElement.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.keyCode === 13) {
        todoList.unshift({
            content: inputElement.value,
            done: false,
            selected: false
        })
        inputElement.value = ''
        UpgradeView()
    }
})
function UpgradeView() {
    ulElement.innerHTML = ''
    // for (const todoItem of todoList) {
    for (var i = 0; i < todoList.length; i++) {
        const todoItem = todoList[i]
        const liElement = document.createElement('li')
        liElement.classList.add('list-group-item')
        const DivElement = document.createElement('div')
        DivElement.classList.add('form-group', 'form-check')
        liElement.appendChild(DivElement)

        const InputElement = document.createElement('input')
        InputElement.classList.add('form-check-input', 'mt-2')
        InputElement.setAttribute('type', 'checkbox')
        InputElement.setAttribute('id', 'exampleCheck1')
        DivElement.appendChild(InputElement)
        InputElement.id = 'todoItem' + i
        InputElement.checked = todoItem.selected

        const LabelELement = document.createElement('label')
        LabelELement.className = 'form-check-label'
        LabelELement.textContent = todoItem.content
        if (todoItem.done) {
            LabelELement.className += ' todoDone'
        }
        LabelELement.setAttribute('for', 'todoItem' + i)
        DivElement.appendChild(LabelELement)

        const ButtonDoneELement = document.createElement('button')
        ButtonDoneELement.classList.add('btn', 'btn-outline-primary', 'ml-1')
        ButtonDoneELement.textContent = 'Done'
        ButtonDoneELement.setAttribute('type', 'button')
        DivElement.appendChild(ButtonDoneELement)

        const ButtonRemoveElement = document.createElement('button')
        ButtonRemoveElement.classList.add('btn', 'btn-outline-danger', 'ml-1')
        ButtonRemoveElement.textContent = 'Remove'
        ButtonRemoveElement.setAttribute('type', 'button')
        DivElement.appendChild(ButtonRemoveElement)

        ulElement.appendChild(liElement)

        ButtonDoneELement.addEventListener('click', () => {
            todoItem.done = !todoItem.done
            UpgradeView()
            console.log('ok bosildi')
        })
        ButtonRemoveElement.addEventListener('click', () => {
            todoList = todoList.filter(currentToDoItem => currentToDoItem !== todoItem)
            UpgradeView()
        })
        InputElement.addEventListener('change', () => {
            todoItem.selected = InputElement.checked
        })
    }
}

document.getElementById('doneAction').addEventListener('click', () => {
    console.log('doneAction fired')
    for (const todoItem of todoList) {
        if (todoItem.selected) {
            todoItem.done = true,
                todoItem.selected = false
        }
    }
    UpgradeView()
})
document.getElementById('restoreAction').addEventListener('click', () => {
    for (const todoItem of todoList) {
        if (todoItem.selected) {
            todoItem.done = false,
                todoItem.selected = false
        }
    }
    UpgradeView()
})
document.getElementById('removeAction').addEventListener('click', () => {
    console.log('removeAction fired')
    todoList = todoList.filter(todoItem => !todoItem.selected)
    UpgradeView()
})
document.querySelector('#test').addEventListener('click', () => {
    console.log('information')
    for (const todoItem of todoList) {
        todoItem.selected = true
    }
    UpgradeView()
})












