function sp_if(){
    const Spoural = {
        Name: "Raja",
        ID_N0: "21IT300",
        Branch: "Information Technology",
        College: "CSPIT"
    };
    display(Spoural)
}

let cnt = 0;

function display(info) {
    if (cnt != 0)
        document.getElementById("tab").innerHTML = null;

    for (let i in info) {
        document.getElementById("tab").innerHTML += `<tr><td>${i}</td><td>${info[i]}</td></tr>`;
    }
    cnt++;
}