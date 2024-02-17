let username = document.getElementById("username");
let firstname = document.getElementById("firstname");
let lastname = document.getElementById("lastname");
let email = document.getElementById("email");
let password = document.getElementById("password");
let formRegister = document.getElementById("formRegister");

// display error and success id
let errUser = document.getElementById("error-user");
let errPass = document.getElementById("error-pass");
let errEmail = document.getElementById("error-email");

let successUser = document.getElementById("success-user");
let successPass = document.getElementById("success-pass");
let regSuccess = document.getElementById("success");

let userNotAvail = document.getElementById("err-username");







let userStorage = localStorage.getItem("Users");
let users = (userStorage) ? JSON.parse(userStorage) : [];

function addUser(event){
    event.preventDefault();

    let userData = {id: Date.now(),
                username: username.value,
                firstname: firstname.value,
                lastname: lastname.value,
                email: email.value,
                password: password.value};

                let exist = users.length && 
                users.some(data => 
                    data.username.toLowerCase() == userData.username.toLowerCase()
                );
                    if(!exist){
                        userNotAvail.style.opacity = 0;
                        // successUser.innerHTML = "Username Available";
                                successUser.style.opacity = 1;
                                if(userData.username.length <= 5){
                                    errUser.innerHTML = "Username must be longer than 5 characters";
                                    successUser.style.opacity = 0;
                                    errUser.style.opacity = 1;
                                
                                }else if(userData.username.length >= 10 ){
                                    errUser.innerHTML = "Username must be less than 10 characters";
                                    successUser.style.opacity = 0;
                                    errUser.style.opacity = 1;
            
                                }
                                else{
                                    errUser.style.opacity = 0;
                                    if(userData.password.length <= 5){
                                        errPass.innerHTML = "Password must be longer than 5 characters";
                                        successPass.style.opacity = 0;
                                    }else if(userData.password.length >= 20) {
                                        errPass.innerHTML = "Password must be less than 20 characters";
                                        successPass.style.opacity = 0;
                                    }
                                    else{   
                                        successUser.style.opacity = 0;

                                        users.push(userData);
                                        localStorage.setItem("Users", JSON.stringify(users));
                                        username.value = "";
                                        firstname.value = "";
                                        lastname.value = "";
                                        email.value = "";
                                        password.value = "";
                
                                        window.location.href = "/user/login.html"
                                        regSuccess.style.opacity = 1;
                                        errUser.style.opacity = 0;
                                        errPass.style.opacity = 0;
                                        successPass.style.opacity = 1;
                                        userNotAvail.style.opacity = 0;
                                    }
                                }
                    }
                    else{
                        userNotAvail.style.opacity = 1;
                        successUser.style.opacity = 0;
                    }
                    
                    // if(userData.username.length <= 5){
                    //     errUser.innerHTML = "Username must be longer than 5 characters";
                    //     successUser.style.opacity = 0;
                       
                    //    }else if(userData.username.length >= 10 ){
                    //     errUser.innerHTML = "Username must be less than 10 characters";
                    //     successUser.style.opacity = 0;
   
                    //    }else{
                    //        successUser.style.opacity = 1;
                    //        errUser.style.opacity = 0;
                    //    }
                    
                    // else{   
                        // users.push(userData);
                        // localStorage.setItem("Users", JSON.stringify(users));
                        // username.value = "";
                        // firstname.value = "";
                        // lastname.value = "";
                        // email.value = "";
                        // password.value = "";

                        // window.location.href = "#"
                        // regSuccess.style.opacity = 1;
                        // errUser.style.opacity = 0;
                        // errPass.style.opacity = 0;
                        // successPass.style.opacity = 1;
                        // successUser.style.opacity = 0;
                        // userNotAvail.style.opacity = 0;

                    // }
    
}

formRegister.addEventListener("submit", addUser);