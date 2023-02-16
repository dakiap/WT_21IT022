console.log("connected")

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    showDetails() {
        console.log(`name is ${this.name} and age is ${this.age}`);
    }
}

class Student extends Person {
    constructor(name, age, ID, semester) {
        super(name, age);
        this.ID = ID;
        this.semester = semester;
    }
}

function add() {
    const name = document.getElementById("txt1").value;
    const ID = document.getElementById("txt2").value;
    age = 20;
    semester = 4;
    const student = new Student(name, age, ID, semester);
    display(student.name, student.age, student.ID, student.semester);
}

function display(name, age, ID, semester) {
    let val = /\d{2}it\d{3}$/i
    let val2 = /\d{2}it000$/i
    try {
        if ((!val.test(ID)) || val2.test(ID)) {
            throw "Invalid Id";
        }
        else {
            document.getElementById("tab").innerHTML += `<tr><td>${name}</td><td>${ID}</td></tr>`;
        }
    } catch (err) {
        alert(err);
    }
}