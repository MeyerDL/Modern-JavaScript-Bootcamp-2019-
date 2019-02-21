const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better.'
}, {
    title: 'Office modification', 
    body: 'Get a new seat'
}]

const sortNotes = function (notes) {
    notes.sort(function (a, b){
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
        } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
            return 1
        } else {
            return 0 
        }
    })

}

// console.log(notes.pop()) // pop new item at beginning of array
// notes.push('My new note') // push new item at end of array

// console.log(notes.shift()) // add item on to the end
// notes.unshift('My first note') // add item on to the beginning

// notes.splice(1, 1, 'This is the new second item') // start at index of 1 (1st argument) and remove 1 item (2nd argument)

// bracket notation  

// notes[2] = 'This is now the new notes 3'

// notes.forEach(function (item, index) {
//     console.log(index)
//     console.log(item)
// }) // takes a single argument 

const findNote = function (notes, noteTitle) {
    return notes.find(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}

const findNotes = function (notes, query) {
    return notes.filter(function (note, index) {
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
        return isTitleMatch || isBodyMatch
    })
}

console.log(findNotes(notes, 'eating'))

// const findNote = function (notes, noteTitle) {
//     const index = notes.findIndex(function (note, index) {
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
//     return notes[index]
// }

const note = findNote(notes, 'office modification')
console.log(note)

// console.log(notes.length)
// console.log(notes)

// Counting... 1

// for (let count = 0; count <= 2; count++) {
//     console.log(count)
// }

// for (let count = notes.length - 1; count >= 0; count--) {
//     console.log(notes[count]) 
// }

// let someObject = {}
// let otherObject = someObject
// console.log(someObject === otherObject)

// const index = notes.findIndex(function (note, index) {
//  console.log(note)
//  return note.title === 'Habbits to work on'
// })

// console.log(index)