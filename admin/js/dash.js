let feedbackTable = document.querySelector('#feedbackTable');
feedbacks = JSON.parse(localStorage.getItem("FeedBackRecords"));

let noMessage = document.getElementById("no-message");
noMessage.textContent = feedbacks.length === 0 ? "No record found" : " ";

function delFeedback(index){
    var feedback;   
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
        if(localStorage.getItem("FeedBackRecords") == null){
            feedback = [];
            console.log(feedback)
            document.write = "No Record Found";
        }else{
            feedback = JSON.parse(localStorage.getItem("FeedBackRecords"));
        }
        feedback.splice(index,1);
        localStorage.setItem("FeedBackRecords", JSON.stringify(feedback));
        
    }
}

for(let i = 0; i < feedbacks.length; i++)
{
    let row = feedbackTable.insertRow();
    let id = row.insertCell();
    let fullname = row.insertCell();
    let email = row.insertCell();
    let message = row.insertCell();
    let button = row.insertCell();

    id.innerHTML = feedbacks[i].id;
    fullname.innerHTML = feedbacks[i].full_name;
    email.innerHTML = feedbacks[i].email;
    message.innerHTML = feedbacks[i].message;
    button.innerHTML = `<button class="btn btn-danger" onclick="delFeedback()">Delete</button>`;

}

// users //

