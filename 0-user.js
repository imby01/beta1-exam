'use strict'

/*
 * Create an object `user` with properties:
 *  'name' (String),
 *  'email' (String),
 *  'age' (Number),
 * 
 * Properties should have valid values (you can use your personnal infos)
 *
 *
 * Créer un object `user` avec les propriétes:
 *  'name' (String),
 *  'email' (String),
 *  'age' (Number)
 *
 * Les propriétes doivent avoir des valeurs valides (vous pouvez utiliser vos
 * infos personnelles)
 * 
 */

// Your code :
const user ={
      'name' : 'imby',
      'email' : 'imbyvictoria21@gmail.com',
      'age' : 21,

}
console.log(user['name'])
console.log(user['email'])
console.log(user['age'])

const assert = require('assert')
assert.strictEqual( typeof user, 'object')