//import {readFileSync} from "csv-parse"

// Load the CSV file as a string
//const csvFile = readFileSync("onuw-data.csv", "utf8");

// Parse CSV into an array of objects
// const onuwData = Papa.parse(csvFile, {
//     header: true, // Treat the first row as a header
//     skipEmptyLines: true // Skip empty rows
// });

const onuwRoles = [{name: "Doppleganger", wakeOrder: 1}, {name: "Werewolf", wakeOrder: 2}, {name: "Werewolf", wakeOrder: 2}, {name: "Minion", wakeOrder: 3},
    {name: "Mason", wakeOrder: 4}, {name: "Mason", wakeOrder: 4}, {name: "Seer", wakeOrder: 5}, {name: "Robber", wakeOrder: 6}, {name: "Troublemaker", wakeOrder: 7},
    {name: "Drunk", wakeOrder: 8}, {name: "Insomniac", wakeOrder: 9}, {name: "Villager"}, {name: "Villager"}, {name: "Villager"},
    {name: "Hunter"}, {name: "Tanner"}
];

const rolesInPlay = [{name: "Robber", wakeOrder: 6}, {name: "Werewolf", wakeOrder: 2}, {name: "Mason", wakeOrder: 4}, {name: "Mason", wakeOrder: 4}, {name: "Doppleganger", wakeOrder: 1}, {name: "Villager"}];
for(let i = 0; i < rolesInPlay.length; i++){
    for(let j = 0; j < rolesInPlay.length - i - 1; j++){
        if(rolesInPlay[j].wakeOrder > rolesInPlay[j+1].wakeOrder){
            let temp = rolesInPlay[j];
            rolesInPlay[j] = rolesInPlay[j+1];
            rolesInPlay[j+1] = temp;

        }
    }
}

console.log(rolesInPlay);

// Play audio clips from role objects with this.
// function playAudio(url) {
//     new Audio(url).play();
// }
  

function setRoleList() {
    const roleList = document.getElementById('app');
    for(let i = 0; i < onuwRoles.length; i++){
        const role = document.createElement('button');
        role.setAttribute('class', 'role');
        role.textContent = onuwRoles[i].name;
        roleList.insertAdjacentElement('beforeend', role);
    }
    
    
}

document.addEventListener('DOMContentLoaded', ()=> {
    //Set the role list
    setRoleList();

    
}) 
    




