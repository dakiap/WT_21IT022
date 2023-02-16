console.log("connected")
function calct(){
    let x=document.getElementById("Calc").value;
    let a = parseInt(prompt("Enter 1st number "));
    let b = parseInt(prompt("Enter 2nd number "));
    let c = 0
    if(x=="sum")
    c = sum(a,b);
    else if(x=="sub")
    c = sub(a,b);
    else if(x=="multi")
    c = multi(a,b);
    else if(x=="div")
    c = div(a,b);
    document.getElementById("demo1").innerHTML = "Answer is: " + c;
}
function get(y){
  // let y=document.getElementById("cal1").value;
  let p = parseInt(document.getElementById("val1").value);
  let q = parseInt(document.getElementById("val2").value);
  let r = 0
  if(y=="sum"){
    r = sum(p,q);
    console.log("sum")
  }
  else if(y=="sub"){
    r = sub(p,q);
    console.log("sub")
  }
  else if(y=="multi"){
    r = multi(p,q);
    console.log("multi")
  }
  else if(y=="div"){
    r = div(p,q);
    console.log("div")
  }
  document.getElementById("demo2").innerHTML = "Answer is: " + r;
}

function sum(p1,p2) {
    let sm=p1+p2;
    return sm
  }

  function sub(p1,p2) {
    let sm=p1-p2;
    return sm
  }

  function multi(p1,p2) {
    let sm=p1*p2;
    return sm
  }

  function div(p1,p2) {
    let sm=p1/p2;
    return sm;
  }

  function temp(){
    let t1 = parseFloat(document.getElementById("data1").value)
    let t2 = parseFloat((t1 * parseFloat(9/5)) + 32);
    document.getElementById("demo3").innerHTML = t2;
  }