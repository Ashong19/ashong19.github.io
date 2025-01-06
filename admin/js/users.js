
let userTable = document.querySelector('#usersTable');

users = JSON.parse(localStorage.getItem("Users"));

let noUsers = document.getElementById("no-users");
noUsers.innerHTML = users.length === 0 ? "No record found" : " ";

function delUser(index){
    var user;   
    let ask = Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
          location.reload();
        }
      });
    
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