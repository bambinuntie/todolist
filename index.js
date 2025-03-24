const todoList = []

const addTodoList = document.querySelector("#addTodoList")
const inputText = document.querySelector("#inputText")

addTodoList.addEventListener("click", () => {
    addTodo()
    displayTodo()
})

inputText.addEventListener("keypress", (e) => {
    if (e.key == 'Enter') {
        addTodo()
        displayTodo()
    }
})

const addTodo = () => {
    const inputText = document.querySelector("#inputText")

    if (inputText.value != '') {
        todoList.push(inputText.value)
        inputText.value =''
    }
}

const deleteTodo = (event) => {
    const listBox = document.querySelector("#todoList")
    listBox.removeChild(event.target)
    }

const displayTodo = () => {
    const listBox = document.querySelector("#todoList")
    listBox.innerHTML = ''

        todoList.forEach(todo => {

            const li = document.createElement("li")

            li.addEventListener("click", deleteTodo)

            li.innerHTML = todo + "❌"


            listBox.appendChild(li)
     })
}

displayTodo()