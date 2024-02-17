
let userTable = document.querySelector('#usersTable');

users = JSON.parse(localStorage.getItem("Users"));

let noUsers = document.getElementById("no-users");
noUsers.innerHTML = users.length === 0 ? "No record found" : " ";

function delUser(index){
    var user;   
    let ask = window.confirm(`Are you sure you want to delete?`);
    
    if(ask){
        if(localStorage.getItem("Users") == null){
            user = [];
            console.log(user);
        }else{
            user = JSON.parse(localStorage.getItem("Users"));
        }
        user.splice(index,1);
        localStorage.setItem("Users", JSON.stringify(user));
    }


}

for(let i = 0; i < users.length; i++)
{
    let row = userTable.insertRow();
    let id = row.insertCell();
    let firstname = row.insertCell();
    let lastname = row.insertCell();
    let email = row.insertCell();
    let button = row.insertCell();

    id.innerHTML = users[i].id;
    firstname.innerHTML = users[i].firstname;
    lastname.innerHTML = users[i].lastname;
    email.innerHTML = users[i].email;
    button.innerHTML = `<button class="btn btn-danger" onclick="delUser()">Remove</button>`;


}