function setData() {
    let obj = {
        userName: document.getElementById("userName").value,
        Password: document.getElementById("Password").value
    }
    if (obj.userName === "admin") {
        alert("success username");
        if (obj.Password === "anil") {
            alert("success Password");
            window.location.href = "http://127.0.0.1:5500/index.html";
        } else {
            alert("Enter correct password");
        }
    } else {
        alert("Enter correct userName");
    }
}