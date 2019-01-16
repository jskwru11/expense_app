// const person = {
//     name: 'John',
//     age: 37,
//     location: {
//         city: 'Chapel Hill',
//         state: 'NC'
//     }
// };

// const { name, age} = person;

// console.log(`${name} is ${age}.`);

// const { city, state } = person.location;

// if (city && state) {
//     console.log(`I live in ${city} in ${state}`)
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName); // valid Penguin, self-published


//
// Array Destructuring
//

// const address = ['108 BridgeWater, CT', 'Chapel Hill', 'North Carolina', '27517'];

// const [ street, city, state, zip ] = address;

// console.log(`i live at ${street} in ${city}, ${state} ${zip}`);


const item = [
    'Coffee (hot)',
    '$2.00',
    '$2.50',
    '$2.75'
]

const [ beverage, , medium ] = item;
console.log(`A medium ${beverage} costs ${medium}.`);

