
// NAV-SECTION
// This js code is responsible for hiding and displaying the nav-links in small screens
let navIconToggle = document.querySelector(".nav-links");
function toggler (){
    if (navIconToggle.style.display === "none") {
        navIconToggle.style.display = "block"
    }else{
        navIconToggle.style.display = "none"
    }
}



// THIS JS CODE HIDES AND DISPLAYS THE CONTENTS ON THE ABOUT PAGE NAV-LINK
let buttonCollapse = document.querySelector(".others");
function ToggleCollapse() {
    if (buttonCollapse.style.display === "none") {
        buttonCollapse.style.display = "block"
    }else{
        buttonCollapse.style.display = "none"
    }
}
// CONTACT-SECTION//
let nameAction = document.getElementById("individualName");
let emailAction = document.getElementById("individualEmail");
let messageBoxAction = document.getElementById("messageAreaInput");
let messageField = document.getElementById("individualMessage")
let nameField = document.getElementById("nameInput");
let emailField = document.getElementById("emailInput");
let btnAction = document.getElementById('submitBtn').addEventListener("click", function Add(){
    if (messageBoxAction.value === "") {
        messageField.textContent = " messagebox cannot be empty "
        messageField.style.color = "red"
    }else if(nameField.value === ""){
        nameAction.textContent = "name field cannot be empty";
        nameAction.style.color = "red"
    }else if(emailField.value === ""){
        emailAction.textContent = "you must enter an email"
        emailActionAction.style.color = "red"
    }else{
          messageField.textContent = " message submitted succesfully "
        messageField.style.color = "green"
    }
})
// .addEventListener("click", function mainWork(event) {
//     // nameAction.innerHTML = nameField.value;
//     // console.log(nameAction)
//     alert(nameField.value);
//     if (nameField.value = " ") {
//         nameAction.innerText = " cannot be empty "
//     }else if (emailField.value = " ")
//     emailAction.innerText = " please fill out this field "
//     event.preventDefault();
//     console.log(messageField.innerHTML)
// })

