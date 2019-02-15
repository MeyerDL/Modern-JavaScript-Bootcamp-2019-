let myBook = {
    title: '1984',
    author: 'Geaorge Orwell',
    pageCount: 326
}

console.log(`${myBook.title} by ${myBook.author}`)

myBook.title = 'Animal Farm'

console.log(`${myBook.title} by ${myBook.author}`)

// Challenge Area

// name, age, location 

// Daniel is 32 and lives in Cape Town 
// Increase age by 1 and print message again

let myName = {
    name: 'Daniel',
    age: 32,
    location: 'Cape Town'
}

console.log(`${myName.name} is ${myName.age} and lives in ${myName.location}`)

myName.age = myName.age + 1

console.log(`${myName.name} is ${myName.age} and lives in ${myName.location}`)