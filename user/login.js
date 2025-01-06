        let loginForm = document.getElementById("loginForm");
        let logStatus = document.getElementById("login-status");
        let logSuccess = document.getElementById("success");
        let errMsg = document.getElementById("error-field");

            // password.trim();

        function login(event){
            event.preventDefault();

            // let userStorage = localStorage.getItem("Users");
            // let users = (userStorage) ? JSON.parse(userStorage) : [];

            let username = document.getElementById("username").value;
            let password = document.getElementById("password").value;
            let success = document.getElementById("success");
            let error = document.getElementById("error-user");
            let errUname = document.getElementById("failed");
            
            let userStorage = localStorage.getItem("Users");
            if (userStorage && userStorage.length) {
            const userdata = JSON.parse(userStorage);
            const userlogin = userdata.filter((input, k) => {
                return input.username === username && input.password === password
            });

            if (userlogin.length === 0) {
                error.innerHTML = "Credentials Incorrect";
                error.style.opacity = 1;
                if(username !== userdata.username && password !== userdata.password){
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Wrong Credentials",
                      });
                }
                
            } else {
                Swal.fire({
                    title: "Successfully Login",
                    icon: "success",
                    draggable: true
                  });
                window.location.href = "../index.html";

                sessionStorage.setItem("username", username)
            }
        }
    }


loginForm.addEventListener("submit", login);