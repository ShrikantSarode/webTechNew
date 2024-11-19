//text manipulation

let btn = document.getElementById("btn");
let result = document.getElementById("result");

let btn2 = document.getElementById("btn2");
let result2 = document.getElementById("res2");

btn.onclick = () => {
  // alert('Hello World!')
  // confirm('are you want to sumbit this form?')
  // prompt('Please enter your name:')
  let input = document.getElementById("input").value;
  console.log(input);

  var msg = "";

  if (input == "") {
    msg = "Please enter a valid pincode";
  } else if (input.length != 6) {
    msg = "Pincode is 6 digits long";
  } else {
    msg = "Pincode is Valid";
  }

  console.log(document.getElementById("result"));

  result.innerHTML = msg;
};

btn2.onclick = () => {
  let input2 = document.getElementById("inp2").value;

  var name = input2
  
  result2.innerHTML = "Hello "+name
}