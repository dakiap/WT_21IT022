console.log("Connected")

let org_arr=[];
let sort_arr=[];

function eleadd(){
    console.log("additem called")
    const eleinputobj = document.getElementById("inputitem")

    const eleItemLiObj=document.createElement("li")
    eleItemLiObj.textContent=eleinputobj.value
    org_arr.push(eleItemLiObj.textContent)
    sort_arr.push(eleItemLiObj.textContent)
    document.getElementById("iditemlist").appendChild(eleItemLiObj)
    console.log(org_arr)
}

function list_display(){
    sort_arr.sort()
    const eleItemLiObj=document.createElement("li")
    if(document.getElementById("idorg").value == "org"){
        for(let i=0;i<org_arr.length;i++){
            eleItemLiObj.textContent = org_arr[i];
            document.getElementById("iditemlist").append(eleItemLiObj)
        }
    }
    else{
        for(let i=0;i<sort_arr.length;i++){
            eleItemLiObj.textContent = sort_arr[i];
            document.getElementById("iditemlist").append(eleItemLiObj)
        }
    }
}