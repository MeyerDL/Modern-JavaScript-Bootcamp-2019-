let name = '  Daniel Meyer  '

// Length property 

console.log(name.length) 

// Convert to upper case

console.log(name.toUpperCase())

// COnvert to lower case

console.log(name.toLowerCase())

// Includes method

let password = 'abc1231254098'
console.log(password.includes('password'))

// Trim

console.log(name.trim())

// Challenge Area

// isValidPassword
// true if lenght is more than 8 and it doesn't contain the word password



let isValidPassword = function (password) {
    return password.lenght > 8 && !password.includes('password')
}

console.log(isValidPassword('asdfp'))
console.log(isValidPassword('abc123!@#$%^&'))
console.log(isValidPassword('asdfpasdfpoijpassword'))


