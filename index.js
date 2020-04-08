// const express = require('express');
// const app = express();

// app.get('/', function (req, res) {
//     res.send('Hello World')
// });

let x = 23;
let y = "abc";
let a = [1, 2, "b"];
let b = {
    a: 7,
    b: "z",
    c: [9],
    d: {
        x: 9
    }
};

a.forEach((value, index) => console.log(index + " " + value));

// for(let v in b) {
//     console.log(v + " " + b[v]);
// }
// function printValue(value, index) {
//     console.log(index + " " + value);
// }
// a.forEach(printValue);
// a.forEach((value, index) => {
//     console.log(index + " " + value);
// })

// console.log(b.d.x);

// app.listen(3000);





