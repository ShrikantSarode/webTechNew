let inp1= document.getElementById('inp1');
 
let btn = document.getElementById('btn');

let result= document.getElementById('result');

btn.onclick = () => {
    var result1 = parseInt(inp1.value * 9) / 5 + 32;
    result.innerHTML = "The converted temperature is: " + result1 + "°F";
}


// (celsius * 9) / 5 + 32; degree to faranhet conversion formula