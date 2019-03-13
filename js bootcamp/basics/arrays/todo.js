const todos = [{
    text: 'eat',
    completed: true
}, {
    text:'sleep', 
    completed: true
}, {
    text:'excercise',
    completed: false
}, {
    text: 'run',
    completed: false
}, {
    text: 'play',
    completed: false
}]

findTodos= function (todos, text){
        
    index = todos.findIndex(function (todos, index){

        return todos.text.toLowerCase()===text.toLowerCase()
    })

    if(index > -1){

    todos.splice(index, 1)
    }
}

getThingsToDo = function (todos){
 return todos.filter(function (todos){
    
    return !todos.completed
 })

}


console.log(getThingsToDo(todos))
//findTodos(todos, 'eslslslsllsise')


//console.log(`You have ${todos.length} things to do`)
//console.log(todos)


//does the same thing as the for each statement above

// for(count = 0 ; count<todos.length ; count ++){

//     console.log(`${1+count}. ${todos[count]}`)
// }