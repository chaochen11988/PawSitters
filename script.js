const hamburgerButton = document.getElementsByClassName("hamburger-btn")[0]
const navbarLinks = document.getElementsByClassName("navbar-links")[0]

hamburgerButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("active")
})

function sendEmail() {
    let inputFName = document.getElementById("fName").value;
    if (!document.getElementById("email").value.includes("@")) {
        alert("Email address field must contain @ sign, please input a valid email.");
    } else {
        Email.send({
            //working progress//
            Host: "smtp.gmail.com",
            Username: "chaochen11988testing@gmail.com",
            Password: "ruL7iU8aZSFd4F5",
            To: 'chaochen11988testing@gmail.com',
            From: document.getElementById("email").value,
            Subject: "Feedback and suggestions",
            Body: "First name: " + document.getElementById("fName").value +
                "<br> Last name: " + document.getElementById("lName").value +
                "<br> Email address: " + document.getElementById("email").value +
                "<br> Phone number: " + document.getElementById("phone").value +
                "<br> Service: " + document.getElementById("contact-us-services").value +
                "<br> Start date: " + document.getElementById("startDate").value +
                "<br> End date: " + document.getElementById("endDate").value +
                "<br> Message: " + document.getElementById("message").value
        }).then(
            message => alert("Thank you for your inquiry," + " " + inputFName + "." + "\nI'll get back to you as soon as I can!"));
    }
}