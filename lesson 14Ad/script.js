// import {API_URL} from './config.js'
import sum, { API_URL } from './config.js'

const loader = document.getElementById('loader')
const body = document.querySelector('body')
const tbody = document.querySelector('tbody')
const titles = document.getElementsByClassName('title')
const checkboxes = document.getElementsByClassName('completed')
const usersId = document.getElementsByClassName('userId')
const addButton = document.getElementById('add')
const editButton = document.getElementById('edit')
const deleteButton = document.getElementById('delete')
const deletedId = document.getElementById('deleteId')

const editTitle = document.getElementsByClassName('title1')
const editCompleted = document.getElementsByClassName('completed1')
const todosId = document.getElementsByClassName('todosId')
const editUserId = document.getElementsByClassName('userId1')


let addDataModel = {
    title: '',
    userId: '',
    completed: false
};

let editDatModel = {
    title: '',
    completed: false,
    id: ''
}

let deleteModel = {
    id: ''
}

let todoList = []

addButton.addEventListener('click', addTodo)
editButton.addEventListener('click', editTodo)
deleteButton.addEventListener('click', () => {
    fetch(`${API_URL}/todos/${deleteModel.id}`, {
        method: 'DELETE'
    }).then(data => {
        if (data.ok) {
            todoList = todoList.filter(item => item.id !== +deleteModel.id)
            drowTable(todoList)
        }
    })
})


titles[0].addEventListener('input', (e) => handleChange(e, 'title'))
usersId[0].addEventListener('input', (e) => handleChange(e, 'userId'))
checkboxes[0].addEventListener('input', (e) => handleChange(e, 'completed'))
editTitle[0].addEventListener('input', (e) => handleEditData(e, 'title'))
editCompleted[0].addEventListener('input', (e) => handleEditData(e, 'completed'))
editUserId[0].addEventListener('input', (e) => handleEditData(e, 'userId'))
todosId[0].addEventListener('input', (e) => handleEditData(e, 'id'))
deletedId.addEventListener('input', (e) => {
    deleteModel.id = e.target.value
})

function handleEditData(e, name) {
    if (name === 'completed') {
        editDatModel = {
            ...editDatModel,
            [name]: e.target.checked
        }
    } else {
        editDatModel = {
            ...editDatModel,
            [name]: e.target.value
        }
    }
    console.log(editDatModel, 'aaaa')
}

function handleChange(e, name) {
    if (name === 'completed') {
        addDataModel = {
            ...addDataModel,
            [name]: e.target.checked
        }
    } else {
        addDataModel = {
            ...addDataModel,
            [name]: e.target.value
        }
    }
}

function editTodo() {
    fetch(`${API_URL}/todos/${editDatModel.id}`, {
        method: 'PUT',
        body: JSON.stringify({
            title: editDatModel.title,
            completed: editDatModel.completed
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }).then(data => data.json()).then(data => {
        todoList.forEach((item, index) => {
            if (item.id === data.id) {
                todoList[index] = data
            }
        })

        drowTable(todoList)
    });
}

function addTodo() {
    fetch(`${API_URL}/todos`, {
        method: 'POST',
        body: JSON.stringify(addDataModel),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }).then(data => data.json()).then(data => {
        todoList.unshift(data)
        drowTable(todoList)
    });
}







async function foo() {
    loader.classList.add('loader')
    const result = await fetch(`${API_URL}/todos?userId=1`)
    const data = await result.json()
    todoList = data
    drowTable(data)
    loader.classList.remove('loader')
}

foo()


function drowTable(todos) {
    tbody.innerText = ''
    for (let i = 0; i < todos.length; i++) {
        let tr = document.createElement('tr')
        let id = document.createElement('td')
        let title = document.createElement('td')
        let complete = document.createElement('td')
        let completeCheckbox = document.createElement('input')
        id.innerText = todos[i].id;
        title.innerText = todos[i].title;
        completeCheckbox.setAttribute('type', 'checkbox')
        completeCheckbox.checked = todos[i].completed;
        completeCheckbox.disabled = true
        complete.appendChild(completeCheckbox)
        tr.append(id, title, complete)
        tbody.append(tr)
    }
}





