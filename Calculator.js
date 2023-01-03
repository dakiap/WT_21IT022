function calct(){
    let x=document.getElementById("Calc").value;
    if(x=="sum")
    sum();
    else if(x=="sub")
    sub();
    else if(x=="multi")
    multi();
    else if(x=="div")
    div();
}

function sum() {
    let p1 = parseInt(prompt("Enter 1st number "));
    let p2 = parseInt(prompt("Enter 2nd number "));
    let sm=p1+p2;
    document.getElementById("demo1").innerHTML = sm;
  }

  function sub() {
    let p1 = parseInt(prompt("Enter 1st number "));
    let p2 = parseInt(prompt("Enter 2nd number "));
    let sm=p1-p2;
    document.getElementById("demo1").innerHTML = sm;
  }

  function multi() {
    let p1 = parseInt(prompt("Enter 1st number "));
    let p2 = parseInt(prompt("Enter 2nd number "));
    let sm=p1*p2;
    document.getElementById("demo1").innerHTML = sm;
  }

  function div() {
    let p1 = parseInt(prompt("Enter 1st number "));
    let p2 = parseInt(prompt("Enter 2nd number "));
    let sm=p1/p2;
    document.getElementById("demo1").innerHTML = sm;
  }