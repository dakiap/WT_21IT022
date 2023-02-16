//Simple way
function myFun1() {
    console.log("You called myFun1");
}

//Using let
let myFun2 = function () {
    console.log("You called myFun2");
};

//Arrow function
let myFun3 = () => {
    console.log("You called myFun3");
};

//construct object function.
function Student(name, age) {
    this.name = name;
    this.age = age;
}

let student01 = new Student("Nirmal", 20);

// console.log(student01);
// myFun1();
// myFun2();
// myFun3();

function doValidation() {
    let username = document.xyz.username.value;
    let passwd = document.xyz.passwd.value;
    let isValid = true;
    let c = [];

    c[0] = document.getElementById("id_c1").checked;
    c[1] = document.getElementById("id_c2").checked;
    c[2] = document.getElementById("id_c3").checked;
    c[3] = document.getElementById("id_c4").checked;
    c[4] = document.getElementById("id_c5").checked;
    c[5] = document.getElementById("id_c6").checked;
    let cnt = 0;

    if (username.length == 0) {
        document.getElementById("id_usernameErr").textContent =
            "Enter proper name!!!";
        isValid = false;
        document.xyz.username.focus();
    } else {
        document.getElementById("id_usernameErr").textContent = null;
    }

    if (passwd.length == 0) {
        document.getElementById("id_passwdErr").textContent =
            "Enter proper password!!!";
        isValid = false;
        document.xyz.passwd.focus();
    } else {
        document.getElementById("id_passwdErr").textContent = null;
    }

    for (let i = 0; i < 6; i++) {
        if (c[i] == true) cnt += 1;
    }

    if (cnt <= 1) {
        isValid = false;
        document.getElementById("id_cErr").textContent = "  Atleast select two sports";

    } else{
        document.getElementById("id_cErr").textContent = "";
    }

    if (isValid) {
        document.xyz.submit();
        // console.log("submit");
    }
}
