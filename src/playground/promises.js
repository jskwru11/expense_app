

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('this is my resolved data');
        reject('you encountered an error')
    }, 3500);
})

console.log('before');

myPromise
.then((data) => console.log('resolved1', data))
.catch(error => console.log(error));

console.log('after');