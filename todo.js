// Create an array with five todos
// You have x todos
// Print the first and second to last items - Todo: walk the dog

// Delete the 3rd item 
// Add a new item onto the end 
// Remove the first item from the list

const todos = [{
    text: 'go to gym',
    completed: true 
}, {
    text: 'do some shopping', 
    completed: false
}, {
    text: 'clean the flat', 
    completed: true
}, {
    text: 'walk the dog',
    completed: false
}, {
    text: 'make food',
    completed: true 
} ]

const deleteTodo = function (todos, todoText) { //arguments // todos to look though // todoText text of todo to delete 
    const index = todos.findIndex(function (todo) {
        return todo.text.toLowerCase() === todoText.toLowerCase()
    })

    if (index > -1) {
        todos.splice(index, 1)
    }
}

const getThingsToDo = function(todos) {
    return todos.filter(function (todo) {
        return !todo.completed
    })
}

console.log(getThingsToDo(todos))

// toDo.splice(2, 1)
// toDo.push('give cat food')
// toDo.shift()

// console.log(`You have ${toDo.length} todos`)

// // 1. The first item
// // 2. The second item

// toDo.forEach(function (item, index) {
//     const num = index + 1 
//     console.log(`${num}. ${item}`)
// })


// for (let count = 0; count < toDo.length; count++) {
//     const num = count + 1 
//     const todo = toDo[count]
//     console.log(`${num}. ${toDo}`)
// }

// 1. Convert array to array of objects -> text, completed 
// 2. Create function to remove a todo by text value


//  deleteTodo(todos, '!!buy food')
//  console.log(todos)