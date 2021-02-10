let current = JSON.parse(localStorage.getItem("current"));
if (current) { //Ye pc ki file hay "file:///E:/New%20Work/JS/LoginSignUp/home.html"
    document.getElementById("Hname").innerHTML = current.Sname;
    document.getElementById("name").innerHTML = current.Sname;
    document.getElementById("email").innerHTML = current.Semail;
    document.getElementById("password").innerHTML = current.Spassword;
    document.getElementById("gender").innerHTML = current.Sgender;
    document.getElementById("active").innerHTML = current.Sactive;
}

let Sdata = [];
var IsFound = false;
function SignUp() {
    var data = {
        Sname: document.getElementById("Sname").value,
        Semail: document.getElementById("Semail").value,
        Spassword: document.getElementById("Spassword").value,
        Sgender: document.getElementById("Sgender").value,
        Sactive: document.getElementById("Sactive").innerHTML
    };

    let getdata = (localStorage.getItem("Sdata"));
    if (getdata) {
        Sdata = JSON.parse(getdata);
    }
    else {
        Sdata = [];
    }
    for (i = 0; i < Sdata.length; i++) {
        if (Sdata[i].Semail === data.Semail) {
            IsFound = true;
            break;

        }
    }
    if (IsFound) {
        alert("Email Already Exist")
    }
    else {
        Sdata.push(data);
    }
    window.location.href = "login.html";
    localStorage.setItem("Sdata", JSON.stringify(Sdata));

    return false;
}


function Login() {
    let check = JSON.parse(localStorage.getItem("Sdata"));
    let Lemail = document.getElementById("Lemail").value;
    let Lpassword = document.getElementById("Lpassword").value;
    for (i = 0; i <= check.length; i++) {
        if ((check[i].Semail === Lemail) && (check[i].Spassword === Lpassword)) {
            localStorage.setItem("current", JSON.stringify(check[i]));
            window.location.href = "home.html";
            break;
        }
        else {
            alert("Invalid");
        }
    }
    return false;
}
