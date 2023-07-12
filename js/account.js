
// A JS code responsible for hiding and showing the password when clicked
let passwordToggler = document.getElementById("passcodeShow");
let input = document.getElementById("passcodeInput");
passwordToggler.addEventListener("click", function tooglePass() {
    // alert('hello')
    if (input.type == "password") {
        input.type = "text"
    }else{
        input.type = "password"
    }
})