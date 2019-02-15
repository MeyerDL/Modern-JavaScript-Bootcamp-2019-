// Function - input (argument), code, output (return value)

let greetUser = function () {
    console.log('Welcome User!')
}

greetUser()

let square = function (num) {
    let result = num * num
    return result
}

let value = square(3)
let otherValue = square(10)

console.log(value)
console.log(otherValue)

// Challenge area 

// convertFahrenheitToCelsius

// Call a couple of time (32 -> 0) (68 -> 20)

// print the converted values

let convertFahrenheitToCelsius = function(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9
    return celsius
}

let tempOne = convertFahrenheitToCelsius(32)
let tempTwo = convertFahrenheitToCelsius(68)

console.log(tempOne)
console.log(tempTwo)
