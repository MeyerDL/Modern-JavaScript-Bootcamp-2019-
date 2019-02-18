const notes = ['Note 1', 'Note 2', 'Note 3']

notes.pop()
notes.push('My new note')


console.log(notes.length)

console.log(notes)

// Create an array with five todos
// You have x todos
// Print the first and second to last items - Todo: walk the dog

const toDo = ['go to gym', 'do some shopping', 'clean the flat', 'walk the dog', 'make food' ]

console.log(`You have ${toDo.length} todos`)
console.log(`Todo: ${toDo[0]}`)
console.log(`Todo: ${toDo[toDo.length - 1]}`)
console.log(`Todo: ${toDo[toDo.length - 4]}`)
