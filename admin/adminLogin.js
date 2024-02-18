
let loginForm = document.getElementById("loginForm");
let logSuccess = document.getElementById("success");
let succLogin = document.getElementById("successLogin");
let attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
let errMsg = document.getElementById("error");

    // password.trim();

function validate(event){
    event.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    
    let LoggedUser = JSON.parse(localStorage.getItem("UserData"));

    console.log(LoggedUser)
    if(checkValidation(username)){
        if(username == "superadmin"){
            console.log("Correct Username");
            errMsg.innerHTML = "Correct Username";
            sessionStorage.setItem("Admin", username);
            
            if(checkValidation(password)){
                if(password == "admin123"){
                    errMsg.innerHTML = "Correct Password";
                    console.log("Correct Password");
                    window.location = "../admin/dashboard.html"; // Redirecting to other page.
                    succLogin.style.opacity = 1;
                    sessionStorage.setItem("Admin", username)

                }else{
                    console.log("Incorrect Password");
                    errMsg.innerHTML = "Incorrect Password";
                    
                    return false;
                }
            }

        }
        else{
            console.log("Incorrect Username");
            errMsg.innerHTML = "Incorrect Username";
            // username.focus();
            return false;
        }
    }
   
    
    // if (username == "user123" && password == "pass123"){
    //     logStatus.style.opacity = "0";
    //     logSuccess.style.opacity = "1";
    //     logSuccess.innerHTML = `Success`;  
    //     window.location = "patientForm.html"; // Redirecting to other page.
    //     return false;
    // }
    // else{
    //     attempt --;// Decrementing by one.
    //     logStatus.style.opacity = "1";
    //     logStatus.innerHTML = `You have left ${attempt} attempt`;    
    // // Disabling fields after 3 attempts.
    //     if( attempt == 0){
    //         document.getElementById("username").disabled = true;
    //         document.getElementById("password").disabled = true;
    //         document.getElementById("login-Btn").disabled = true;
    //     }
    // }
}

function checkValidation(field){
    if(field.trim() === ""){
        console.log("Blank or Empty");
        errMsg.innerHTML = `Fill out Fields`;
        return false;
    }else{
        
        return true;
    }
}

loginForm.addEventListener("submit", validate);
    

// include type of validation 
// create a function to validate if there is a value on inputs