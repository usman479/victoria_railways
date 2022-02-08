function booking() {
    var fName = document.myForm.fName.value;
    var lName = document.myForm.lName.value;
    var gender = document.myForm.gender.value;
    var phone = document.myForm.phone.value;
    var email = document.myForm.email.value;
    var from = document.myForm.from.value;
    var to = document.myForm.to.value;
    var date = document.myForm.date.value;
    var classType = document.myForm.class_type.value;
    if(from === "from" || to === "to"){
        alert("Please fill all fields");
        return false;
    } else if(from === to) {
        alert("Please fill all fields correctly");
        return false;
    }
    if(gender === "male"){
        alert("Thanks Sir for traveling with us");
        location.href = "../index.html"
    } else{
        alert("Thanks Mam for traveling with us");
        location.href = "../index.html"

    }
    console.log(fName,lName,gender,phone,email,from,to,date,classType);
}

document.getElementById("myForm").addEventListener("submit", (e) => {
    e.preventDefault();
})