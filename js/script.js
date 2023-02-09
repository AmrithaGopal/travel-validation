/* author: Amritha Gopal*/
function validate() {
    let p = document.getElementById("a").value;
    let q = document.getElementById("b").value;
    let city = document.getElementById("c").value;
    let person = document.getElementById("d").value;
    let coupon = document.getElementById("cpn").value;
    let date = document.getElementById("dt").value;
    let r = /^[a-z A-Z]{2,15}$/;
    let s = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\.[a-z A-Z]{2,4}$/;

    if (p == "") {
        alert("Name field is empty");
        return false;
    } else if (!r.test(p)) {
        alert("Enter correct name");
        return false;
    } else if (!s.test(q)) {
        alert("Enter a valid email id");
        return false;
    } else if (city == "Select") {
        alert("Select a tour package");
        return false;
    } else if (date == "") {
        alert("Enter a valid date");
        return false;
    } else if (person == "") {
        alert("enter number of person");
        return false;
    } else if (isNaN(person)) {
        alert("Enter number of person");
        return false;
    } else if (
        document.getElementById("ch1").checked == false &&
        document.getElementById("ch2").checked == false &&
        document.getElementById("ch3").checked == false
    ) {
        alert("Choose atleast one option");
        return false;
    } else if (coupon == "") {
        alert("enter the coupon number");
        return false;
    } else if (isNaN(coupon)) {
        alert("enter the coupon number");
        return false;
    } else if (
        document.getElementById("agree").checked == false &&
        document.getElementById("agree").checked == false
    ) {
        alert("Choose atleast one agree option");
        return false;
    } else {
        true;
    }
}
