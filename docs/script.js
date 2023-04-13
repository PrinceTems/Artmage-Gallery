
    const Firstname = document.getElementById("fname");
    let Fname = this.fname.value;
    Firstname.addEventListener("input", (fnam) => {
        Fname = fnam.target.value
        localStorage.setItem('Fname',(Fname));

    });


    function submit(fnam) {
        console.log({ Fname: Firstname.innerHTML });
        fnam.preventDefault();
        console.log({ Fname });
    }




    const Username = document.getElementById("username");
    let Uname = this.username.value;
    Username.addEventListener("input", (unam) => {
        Uname = unam.target.value;
        localStorage.setItem('Uname',(Uname))
    });

    function submit(unam) {
        unam.preventDefault();
    }




var EmailInput = document.getElementById("email");
var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let Email = this.email.value;

    EmailInput.addEventListener("input", (event) => {
        Email = event.target.value;
if (EmailInput.value.match(validRegex)) {
    console.log("must be valid");
    document.getElementById("pn").style.display = "none";
    document.getElementById("email").style.border = "2px solid green";
    localStorage.setItem('Email', (Email));
    
}  
else {
    console.log("no");
    document.getElementById("pn").style.display = "block";
    document.getElementById("pn").innerHTML="must be an email"
    document.getElementById("email").style.border = "2px solid red";
    localStorage.removeItem("Email");
    
    }
  

        
    });

    function submit(event) {
        event.preventDefault();
    


    }





    const Password = document.getElementById("pass"); 
    let Pass = this.pass.value;
    Password.addEventListener("input", (check) => {
        Pass = check.target.value;
        Pass.length=8;
        if (Pass.length===8) {
            console.log("true");
            document.getElementById("ppn").style.display = "none";
            document.getElementById("pass").style.border = "2px solid green";
            localStorage.setItem('Pass', (Pass));

        } else {
            console.log("false");
            document.getElementById("ppn").style.display = "block";
            document.getElementById("ppn").innerHTML = "must be 8 characters";
            document.getElementById("pass").style.border = "2px solid red";
            localStorage.removeItem("Pass");
        }
        
    
    });
    

    function submit(check) {
        check.preventDefault();
        
        


}

    


    

    
    
    var realuser = document.getElementById("User"); localStorage.getItem("Uname");
    var realemail = document.getElementById("_email"); localStorage.getItem("Email");
    var realpass = document.getElementById("pword"); localStorage.getItem("Pass");


realuser.addEventListener("input", function validate() {
    if (realuser.value === localStorage.Uname) {
        document.getElementById("_un").style.display = 'none';
        document.getElementById("User").style.border = "2px solid green";
    } else {
        document.getElementById("_un").innerHTML = "must be register";
        document.getElementById("_un").style.display = 'block';
        document.getElementById("User").style.border = "2px solid red";
    }

});

realemail.addEventListener("input", function validate() {
    if (realemail.value === localStorage.Email) {
        document.getElementById("_ue").style.display = 'none';
        document.getElementById("_email").style.border = "2px solid green";
    } else {
        document.getElementById("_ue").innerHTML="must be register"
        document.getElementById("_ue").style.display="block"
        document.getElementById("_email").style.border = "2px solid red";
    }
});

realpass.addEventListener("input", function validate() {
    if (realpass.value === localStorage.Pass) {
        document.getElementById("_up").style.display = "none";
        document.getElementById("pword").style.border = "2px solid green";
    } else {
        document.getElementById("_up").innerHTML = "must be register";
            document.getElementById("_up").style.display = "block";
        document.getElementById("pword").style.border = "2px solid red";
    }
    });
        
    

var checkbox = document.getElementById("checkbox");

checkbox.addEventListener("click", () => {
    if (checkbox.checked==true) {
        console.log("yes");
        Password.type = "text";
    }
    else if(checkbox.checked==false){
        console.log("no");
        Password.type = "password";
        
    }
})


    

    
    

   


        
