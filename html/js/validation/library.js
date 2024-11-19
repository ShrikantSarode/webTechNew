"use strict";

class auth {
  constructor() {
    this.details = [
      {
        email: "john@example.com",
        password: "P@ssw0rd123",
      },
      {
        email: "Shrikant@gmail.com",
        password: "Shr@ikant123",
      },
      {
        email: "test@test.com",
        password: "Test@123",
      },
      {
        email: "invalid@email.com",
        password: "invalid@123",
      },
    ];
  }

  // Check if email exists
  Checkemail(emailid) {
    console.log(emailid);
    var exp = /^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,})?$/;
     
    var result = exp.test(emailid);
    return result;
  }

  // Check if password matches for the given email
  Checkpassword(password) {
    var exp5 = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#\$]).{4,12}$/; 
    
    var result1 = exp5.test(password);
    
    return result1;
  }
}

 

export default auth;
