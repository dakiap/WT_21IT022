class Person{
    constructor(name){
        this.name=name;
    }
}
class Student extends Person{
    constructor(name,id){
        super(name)
        this.id=id;
    }
    showName(){
        return this.name;
    }
    showId(){
        return this.id;
    }
}
function disp()
{
    const x = document.getElementById("name").value;
    const y = document.getElementById("Id").value;
    const a = new Student(x,y);
    let z1 = /\d{2}it\d{3}$/i
    let z2 = /\d{2}it[0][0][0]/i
    if(!z1.test(a.id) || z2.test(a.id)){
        alert("Invalid Id")
        throw new Error("Invalid Id");
    }
    else{
    const tr = document.createElement('tr');

    const tdk = document.createElement('th');
    tdk.textContent = a.showId();
        tr.appendChild(tdk);

    const tdv = document.createElement('td');
    tdv.textContent = a.showName();
        tr.appendChild(tdv);

    document.getElementById('tab').appendChild(tr);
    }
}