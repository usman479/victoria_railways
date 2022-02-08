function membership() {
    var name = document.myForm.userName.value;
    var email = document.myForm.userEmail.value;
    var pass = document.myForm.userPassword.value;
    var confirmPass = document.myForm.confirmPassword.value;

    if(pass != confirmPass) {
        alert("Password does not match");
        return false;
    }
    alert(`Thanks ${name}: Welcome to Our Family`);
    location.href = "../index.html"
}

document.getElementById("myForm").addEventListener("submit", (e) => {
    e.preventDefault();
})