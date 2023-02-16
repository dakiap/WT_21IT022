console.log("Connected")

function createTable() {
    var p = document.getElementById('p');
    let r = document.getElementById('rows').value; let str = '';
    for (let i = 1; i <= 10; i++) {
        var p = document.getElementById('p').innerHTML= str = str + r + ' ' + i + ' ' + r * i + "<br>";
    }
}