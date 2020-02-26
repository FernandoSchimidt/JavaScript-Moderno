// // let i = 0;

// // while(i <=10){
// //     console.log(i);
// //     i++;
// // }

// function max(x, y) {
//     return x > y ? x : y;
// }

// const max2 = (x, y) => {
//     return x > y ? x : y;
// };

// const max3 = (x, y) => x > y ? x : y;

// console.log(max3(1, 2));

function max4(x, y, z) {
    if (typeof x || y || z != 'number') {
        return 'Algum dos valores não é um numero!'
    } else if (x > y && x > z) {
        return x;
    } else if (y > z) {
        return y;
    } else {
        return z;
    }
}
console.log(max4(15.55551, 'fer',5));

// const maior = Math.round(Math.random() * 100);

 // console.log(maior);