//import {readFileSync} from "csv-parse"

// Load the CSV file as a string
//const csvFile = readFileSync("onuw-data.csv", "utf8");

// Parse CSV into an array of objects
// const onuwData = Papa.parse(csvFile, {
//     header: true, // Treat the first row as a header
//     skipEmptyLines: true // Skip empty rows
// });

const onuwRoles = [{name: "Doppleganger"}, {name: "Werewolf"}, {name: "Werewolf"}, {name: "Minion"},
    {name: "Mason"}, {name: "Mason"}, {name: "Seer"}, {name: "Robber"}, {name: "Troublemaker"},
    {name: "Drunk"}, {name: "Insomniac"}, {name: "Villager"}, {name: "Villager"}, {name: "Villager"},
    {name: "Hunter"}, {name: "Tanner"}
]
console.log(onuwRoles[0].name);

function setRoleList() {
    const roleList = document.getElementById('roles');
    for(let i = 0; i < onuwRoles.length; i++){
        const role = document.createElement('div');
        role.setAttribute('class', 'role');
        role.textContent = onuwRoles[i].name;
        roleList.insertAdjacentElement('beforeend', role);
    }
    
    
}

setRoleList();
