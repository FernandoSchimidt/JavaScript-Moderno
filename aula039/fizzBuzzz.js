function fizzBuzz(x) {

    if (typeof x !== 'number') {
        return x;
    } else if (x % 3 === 0 && x % 5 === 0) {
        return `FizzBuzz`;
    } else if (x % 3 === 0) {
        return `Fizz`;
    } else if (x % 5 === 0) {
        return `Buzz`;
    } else {
        return x;
    }
}
<<<<<<< HEAD
for (let i = 0; i <= 100; i++) {
    console.log(i, fizzBuzz(i));
=======
for(let i = 02; i<=100; i++){
console.log(i,fizzBuzz(i));
>>>>>>> 25cbc6656bc62f4b2855596c8de7e76bdbed74fb
}