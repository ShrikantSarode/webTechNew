let inp = document.getElementById("inp").value;
let btn = document.getElementById("btn");
let result = document.getElementById("result");

btn.addEventListener("click", () => {
  var delay = inp;
  var seconds = Number(delay)*1000;
    console.log(seconds);
    
    setTimeout(() => {
        result.innerHTML = `<h1>Wake Up</h1>`;
        
    }, seconds)
});
result.innerHTML=`<h1>Good Morning</h1>`;
