function myFunction() {
    var q = document.getElementById("marginalcost").value;
    var x = document.getElementById("Win")
    var y = document.getElementById("Lose")
    var z = document.getElementById("Check")
    if (q === "3"){
        x.style.display = "block"
        y.style.display = "none"
        z.style.display = "none"
    } else if (q === "") {
        z.style.display = "block"
        x.style.display = "none"
        y.style.display = "none"
    } else {
        x.style.display = "none"
        y.style.display = "block"
        z.style.display = "none"
    }
}