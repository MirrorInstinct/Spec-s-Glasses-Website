const clicked = true;

function siteButton(){
    if (clicked) {
        console.log("It worked!");
        alert("It worked!")
        document.getElementById("demo").innerHTML = "Hello World";
    }
}