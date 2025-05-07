// const { a } = require('./app')

// console.log(a);


// let characters = [
//     {name: 'Фродо', hasRing: false},
//     {name: 'Бильбо', hasRing: false}
// ]

// function stealRing(characters, owner) {
//     return characters.map(c => {
//         if(c.name === owner) {
//             c.hasRing = true
//         } else {
//             c.hasRing = false
//         }
//     })
// }

console.log('Загружено common.js');


module.exports = function log() {
    console.log('log');
}