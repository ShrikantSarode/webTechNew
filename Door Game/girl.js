let btn1 = document.getElementById("btn11");
let btn2 = document.getElementById("btn12");
let btn3 = document.getElementById("btn13");
let btn4 = document.getElementById("btn14");
let btn5 = document.getElementById("btn15");
let result = document.getElementById("result1");
let input = document.getElementById("inp2").value;

btn1.onclick = () => {
  let input = document.getElementById("inp2").value;
  result.innerHTML = `${input} <span style="color:red;">is a Murkha </span> 🤪`;
};

btn2.onclick = () => {
  let input = document.getElementById("inp2").value;
  result.innerHTML = `${input} <span style="color:green;">is a Hushar Person</span>😊`;
};

btn3.onclick = () => {
  let input = document.getElementById("inp2").value;
  result.innerHTML = `${input} <span style="color:red;">is a Bandariya </span>😂🤣`;
};

btn4.onclick = () => {
  let input = document.getElementById("inp2").value;
  result.innerHTML = `${input} <span style="color:red;">is a Gold digger</span>😲😱`;
};
btn5.onclick = () => {
  result.innerHTML = " ";
};
