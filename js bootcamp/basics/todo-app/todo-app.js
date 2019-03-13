let todos = []

const filters = {
    searchText: '',
    hideCompleted: false
}

const todosJSON = localStorage.getItem('todos')

if(todosJSON !== null){
    todos = JSON.parse(todosJSON)
}

const renderTodos = function (todos, filters){
    const filteredTodos = todos.filter(function (todo){
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompleteMatch = !filters.hideCompleted || !todo.completed

        return searchTextMatch && hideCompleteMatch
    })

    const incompleteTodos = todos.filter(function(todo) {
        return !todo.completed
    })
    debugger
    document.querySelector('#todos').innerHTML = ''

    const summary = document.createElement('h2')
    summary.textContent = 'You have '+ incompleteTodos.length+ ' tasks left to complete'
    document.querySelector('#todos').appendChild(summary)

    filteredTodos.forEach(function (todo) {
        const p = document.createElement('p')
        p.textContent = todo.text
        document.querySelector("#todos").appendChild(p)
    })
}
debugger
renderTodos(todos, filters)

document.querySelector('#search-text').addEventListener( 'input', function (e) {
    filters.searchText= e.target.value
    renderTodos(todos, filters)
})

document.querySelector('#new-t').addEventListener('submit', function(e){
    e.preventDefault()
    todos.push({
        text: e.target.elements.text.value,
        completed: false
    })
    localStorage.setItem('todos', JSON.stringify(toods))
    renderTodos(todos, filters)
    e.target.elements.text.value = ''
})

document.querySelector('#hide-completed').addEventListener('change', function (e){
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})









