function validation() {
    let x = document.forms["form1"]["login"].value;
    if (x == "") {
      alert("Log in must be filled out");
      return false;
    }

    let password = document.getElementById("password").value;
    let confirm_password = document.getElementById("confirm_password").value;
    console.log(password,confirm_password);
    let message = document.getElementById
    ("errpss");
  
    if (password.length != 0) {
      if (password == confirm_password){
          errpss.textContent = "Passwords match";
          
      }
      else{
        errpss.textContent = "Passwords do not match";
        
        return false;
        
      }
    }

    let y = document.getElementById("mail");

      if (mail != email){
        errmail.textContent = "Passwords match";
      }
    
  }

