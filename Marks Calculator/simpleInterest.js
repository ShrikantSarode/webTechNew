document.getElementById("btn").onclick = () => {
  var data1 = document.getElementById("x1").value;
  var data2 = document.getElementById("x2").value;
  var data3 = document.getElementById("x3").value;
  var result = document.getElementById("result");

  var msg = "";
  if (data1 === "" || data2 === "" || data3 === "") {
    msg = "Please fill all fields!";
  } else if (isNaN(data1) || isNaN(data2) || isNaN(data3)) {
    msg = "All fields must contain numeric values!";
  } else if (Number(data1) < 0 || Number(data2) < 0 || Number(data3) < 0) {
    msg = "All fields must contain positive values!";
  } else {
    var p = Number(data1);
    var r = parseFloat(data2);
    var n = parseInt(data3);

    var simpleInterest = (p * r * n) / 100;

    document.getElementById("y1").innerHTML = "Principle: " + p;
    document.getElementById("y2").innerHTML = "Rate of Interest: " + r;
    document.getElementById("y3").innerHTML = "Duration: " + n;
    msg = "Simple Interest is: " + simpleInterest;
  }

  result.innerHTML = msg;
};
