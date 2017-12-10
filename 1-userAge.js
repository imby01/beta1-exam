'use strict'

/*
 * Create a function `userAge` which take a user object and returns its age
 *
 * Créer une fonction `userAge` qui prend un object user et qui retourne son age
 *
 */

const userAge = {
        'age' : 18,
    
} // copy the one from the previous exercice

// Your code :


console.log(userAge['age'])

const assert = require('assert')
assert.strictEqual( typeof userAge, 'object')
