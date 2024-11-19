'use strict';
import auth from "./library.js";

document.querySelector('button').onclick = () => {
    alert('Hello, World!');

    let inp1=document.getElementById('x1').value;
    let inp2 = document.getElementById('x2').value;
    
    var authobj = new auth();

    console.log(authobj);

    var ans1 = authobj.Checkemail(inp1);
    console.log(ans1);
    
    var ans2 = authobj.Checkpassword(inp2);
    console.log(ans2);
    
    if (ans1 && ans2) {
        document.querySelector('p').innerHTML = 'ok';
        
    }
    else {
         document.querySelector("p").innerHTML = "Invalid email or password";
    }

    
}