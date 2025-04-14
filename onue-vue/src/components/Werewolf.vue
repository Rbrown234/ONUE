<template>

</template>

<script>

const onuwRoles = [{name: "Doppleganger", wakeOrder: 1}, {name: "Werewolf", wakeOrder: 2}, {name: "Werewolf", wakeOrder: 2}, {name: "Minion", wakeOrder: 3},
    {name: "Mason", wakeOrder: 4}, {name: "Mason", wakeOrder: 4}, {name: "Seer", wakeOrder: 5}, {name: "Robber", wakeOrder: 6}, {name: "Troublemaker", wakeOrder: 7},
    {name: "Drunk", wakeOrder: 8}, {name: "Insomniac", wakeOrder: 9}, {name: "Villager"}, {name: "Villager"}, {name: "Villager"},
    {name: "Hunter"}, {name: "Tanner"}];
export default {
    data(){
        return{
            onuwRoles: [{name: "Doppleganger", wakeOrder: 1}, {name: "Werewolf", wakeOrder: 2}, {name: "Werewolf", wakeOrder: 2}, {name: "Minion", wakeOrder: 3},
    {name: "Mason", wakeOrder: 4}, {name: "Mason", wakeOrder: 4}, {name: "Seer", wakeOrder: 5}, {name: "Robber", wakeOrder: 6}, {name: "Troublemaker", wakeOrder: 7},
    {name: "Drunk", wakeOrder: 8}, {name: "Insomniac", wakeOrder: 9}, {name: "Villager"}, {name: "Villager"}, {name: "Villager"},
    {name: "Hunter"}, {name: "Tanner"}]
        }
        
    },
    methods: {
    setRoleList() {
        const roleList = document.getElementById('app');
        for(let i = 0; i < onuwRoles.length; i++){
            const role = document.createElement('div');
            role.setAttribute('class', 'role');
            role.textContent = onuwRoles[i].name;
            roleList.insertAdjacentElement('beforeend', role);
            
        }
        
        
    },

    addRoleToPlay() {
        let rolesInPlay = [{}]
        document.getElementsByClassName('role').onclick = ()=>{rolesInPlay.push(role.textContent)
            console.log(rolesInPlay);
        };
    } 
    }
    
}


// const rolesInPlay = [{name: "Robber", wakeOrder: 6}, {name: "Werewolf", wakeOrder: 2}, {name: "Mason", wakeOrder: 4}, {name: "Mason", wakeOrder: 4}, {name: "Doppleganger", wakeOrder: 1}, {name: "Villager"}];
// for(let i = 0; i < rolesInPlay.length; i++){
//     for(let j = 0; j < rolesInPlay.length - i - 1; j++){
//         if(rolesInPlay[j].wakeOrder > rolesInPlay[j+1].wakeOrder){
//             let temp = rolesInPlay[j];
//             rolesInPlay[j] = rolesInPlay[j+1];
//             rolesInPlay[j+1] = temp;

//         }
//     }
// }






// Play audio clips from role objects with this.
// function playAudio(url) {
//     new Audio(url).play();
// }
  

function setRoleList() {
    let rolesInPlay = [];
    const roleList = document.getElementById('app');
    for(let i = 0; i < onuwRoles.length; i++){
        const role = document.createElement('div');
        role.setAttribute('class', 'role');
        role.textContent = onuwRoles[i].name;
        role.onclick = () => {
            rolesInPlay.push(role.textContent)
            console.log(rolesInPlay);
        };
        roleList.insertAdjacentElement('beforeend', role);
        
        
    }
    
    
}

function addRoleToPlay() {
    let rolesInPlay = [{}]
    document.getElementsByClassName('role').onclick = ()=>{rolesInPlay.push(role.textContent)
        console.log(rolesInPlay);
    };
}

document.addEventListener('DOMContentLoaded', ()=> {
    //Set the role list
    setRoleList();
    addRoleToPlay();
    
})
</script>

<style>

div.role {
  border-style: solid;
  border-radius: 5px;
  width: 200px;
  text-align: center;
}
</style>
