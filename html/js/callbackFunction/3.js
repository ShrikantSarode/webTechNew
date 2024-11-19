let inp1 = document.getElementById('inp1');
let inp2 = document.getElementById('inp2');
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let btn4 = document.getElementById('btn4');
let result = document.getElementById('result');

btn1.onclick = () => {
    result.innerHTML = parseFloat(inp1.value) + parseFloat(inp2.value);
}

btn2.onclick = () => {
  result.innerHTML = inp1.value - inp2.value;
};

btn3.onclick = () => {
  result.innerHTML = inp1.value * inp2.value;
};

btn4.onclick = () => {
  result.innerHTML = inp1.value / inp2.value;
};


