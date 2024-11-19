'use strict';

console.log(document);
console.log(typeof document);

let btn1 = document.getElementById('x1');
let btn2 = document.getElementById('x2');

console.log(btn1);
console.log(btn2);

//dom event handling

document.getElementById('x1').onclick = () => {
    document.body.style.backgroundColor = "black";
    document.body.style.color = 'white';
    
}
 document.getElementById("x2").onclick = () => {
   document.body.style.backgroundColor = "white";
   document.body.style.color = "black";
 };
 