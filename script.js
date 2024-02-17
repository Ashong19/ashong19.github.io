let fname = document.getElementById("fullname");
let email = document.getElementById("email");
let message = document.getElementById("message");
let addFdBtn = document.getElementById("feedbackBtn");
let feedbackFrom = document.getElementById("feedbackForm");
let feedbackSuccess = document.getElementById("sucess");


let feedbackStorage = localStorage.getItem("FeedBackRecords");
let feedbacks = (feedbackStorage) ? JSON.parse(feedbackStorage) : [];

function addFeedBack(event) {
    event.preventDefault();

    let feedBackData = {id: Date.now(),
                    full_name: fname.value,
                    email: email.value,
                    message: message.value,
                    };
        fname.value = "";
        email.value = "";
        message.value = "";
        feedbacks.push(feedBackData);
        localStorage.setItem("FeedBackRecords", JSON.stringify(feedbacks));
        feedbackSuccess.style.opacity = 1;
}

feedbackFrom.addEventListener("submit", addFeedBack);


    

// include type of validation 
// create a function to validate if there is a value on inputs
