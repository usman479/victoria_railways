function thanks() {
    var text = document.getElementById("text").value;
    if(text === "Drop your remarks here..." || text === ""){
        alert("Please Submit Something")
    } else{
        alert("Thanks for your Feedback.")
        location.reload()
    }

}