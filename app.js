const WORK_HOURS = [
    "08:00 - 09:00",
    "09:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "12:00 - 13:00",
    "13:00 - 14:00",
    "15:00 - 16:00",
    "16:00 - 17:00"
];

// Create a team of people
let myTeam = [
    {
    name: "María",
    availability: new Array(8).fill(true)
    },
    {
    name: "Pedro",
    availability: new Array(8).fill(true)
    },
    {
    name: "Esther",
    availability: new Array(8).fill(true)
    },
    {
    name: "Marcos",
    availability: new Array(8).fill(true)
    },
];

// Make the availability of the team be random
let getRandomAvailability = () => Math.random() > 0.5;

for (member of myTeam) {
    console.log("#", member.name,"'s Availability: ");

    for (let i = 0; i < member.availability.length; i ++) {
        member.availability[i] = getRandomAvailability();
        if (member.availability[i] === true) {
            console.log(WORK_HOURS[i], "✅");
        } else {
            console.log(WORK_HOURS[i], "⛔️");
        }
    }
}

// Find when the whole team is available
let findFreeGap = () => {
    let freeGap = [];

    for (let i = 0; i < myTeam.length; i++) {
        for (let j = 0; j < myTeam[i].availability.length; j++) {
            if (i === 0 && myTeam[i].availability[j]) {
                freeGap.push([j]);
            } else if (i !== 0 ) {
                for (let z = freeGap.length - 1; z >= 0; z--) {
                    if (!myTeam[i].availability[freeGap[z]]) {
                        freeGap.splice(z, 1);
                    }
                }
            }
        }    
    }
    return freeGap;
}


// Trying to show the free gap in an interface
// let result = findFreeGap();

// if (result.length >= 1) {
//     console.log("\nFree team gap at: " , WORK_HOURS[result[0]]);
//     document.createElement("result");
//     if (result == 0) {
//         result = WORK_HOURS[0];
//     } else if (result == 1) {
//         result = WORK_HOURS[1];
//     } else if (result == 2) {
//         result = WORK_HOURS[2];
//     } else if (result == 3) {
//         result = WORK_HOURS[3];
//     } else if (result == 4) {
//         result = WORK_HOURS[4];
//     } else if (result == 5) {
//         result = WORK_HOURS[5];
//     } else if (result == 6) {
//         result = WORK_HOURS[6];
//     } else if (result == 7) {
//         result = WORK_HOURS[7];
//     }


//     result.innerHTML = "Free team gap at: " + WORK_HOURS[result[0]].document;
//     document.body.append("Free team gap at: ", result);
// } else if (result.length === 0) {
//     console.log("\nNo gap to organize a meeting");
//     document.createElement("result");
//     // result.innerHTML = "No gap to organize a meeting";
//     document.body.append("No gap to organize a meeting");
    
// }       



// //Mostrar el nombre de cada miembro y su disponibilidad en una tabla
// function mostrar() {
//     let table = document.createElement("table");
//     let tr = document.createElement("tr");
//     let th = document.createElement("th");
//     th.innerHTML = "Name";
//     tr.appendChild(th);
//     th = document.createElement("th");
//     th.innerHTML = "Availability";
//     tr.appendChild(th);
//     th = document.createElement("th");
//     table.appendChild(tr);
//     th.innerHTML = "Hours";
//     tr.appendChild(th);
//     table.appendChild(tr);

//     for (let i = 0; i < myTeam.length; i++) {
//         tr = document.createElement("tr");
//         th = document.createElement("th");
//         th.innerHTML = myTeam[i].name;
//         tr.appendChild(th);
//         th = document.createElement("th");
//         th.innerHTML = myTeam[i].availability;
//         tr.appendChild(th);
//         th = document.createElement("td");
//         th.innerHTML = WORK_HOURS;
//         tr.appendChild(th);
//         table.appendChild(tr);
        
//     }
//     document.body.appendChild(table);
    
// }

// function hide() {
//     let table = document.getElementsByTagName("table");
//     table[0].style.display = "none";

//     let button = document.getElementById("btn-hide");
//     button.addEventListener("click", function() {
//         table[0].style.display = "block";
//     }
//     )
// }


