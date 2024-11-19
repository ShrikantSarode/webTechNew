let inp1= document.getElementById('inp1');
let inp2 = document.getElementById('inp2');
let result = document.getElementById('result');

btn.onclick = () => {
    var price = parseFloat(inp1.value);
    var discount = parseFloat(inp2.value);
    let result1 = price - (price * discount / 100);
    
    result.innerHTML = "The discounted price is: " + result1;
}