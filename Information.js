console.log("connected")

let cnt=0

function car() {
    const car_info = {
        name: "Maruti Suzuki",
        model: "Maruti_800",
        fueltype: "Petrol",
        No_of_cylinder: "3",
        Transmission_type: "Manual",
        Milage: "13.1kmpl",
        Engine_displacement: "796cc",
        weight: "650kg"
    };
    display(car_info)
}

function bike() {
    const bike_info = {
        name: "TVS Suzuki",
        model: "Ax100r",
        fueltype: "Petrol",
        No_of_cylinder: "1",
        Milage: "60kmpl",
        weight: "107kg"
    };
    display(bike_info)
}

function mobile() {
    const mobile_info = {
        name: "Nokia",
        model: "2626",
        battery: "Removable Li-Ion 970 mAh battery (BL-5C)",
        display: "CSTN, 65K colors",
        weight: "91gm"
    };
    display(mobile_info)
}

function display(info){
    if(cnt != 0)
    document.getElementById("tab").innerHTML=null;
    
    for(let i in info){
        document.getElementById("tab").innerHTML+= `<tr><td>${i}</td><td>${info[i]}</td></tr>`;
    }
    cnt++;
}
