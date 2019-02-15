// Multiple arguments 

let add = function (a, b, c) {
    return a + b + c
}

let result = add(10, 1, 5)
console.log(result)

// Default arguments 

let getScoreText = function (name = 'Anonymous', score = 0) {
    return `Name: ${name} - Score: ${score}`
    //return 'Name: ' + name + ' - Score: ' + score
}

let scoreText = getScoreText(undefined, 99)
console.log(scoreText)

// Challenge area 

// total, tipPrecent .5


// A 25% tip on $40 would be $10
let restaurantTip = function (total, tipPrecent = .2) {
    let percent = tipPrecent * 100
    let tip = total * tipPrecent
    return (`A ${percent}% tip on $${total} would be $${tip}`)
}

let tip = restaurantTip(40, .25)
console.log(tip)

let name = 'Jen'
let age = 12
console.log(`Hey, my name is ${name}! I am ${age} years old.`)




