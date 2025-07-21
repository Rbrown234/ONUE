<template>
    <button id="view-change" v-on:click="roundStart">
        Start the night with the roles in play
    </button>
    <div class="dummyRoleList">{{ setRoleList() }}</div>
    <div class="rolelist" v-for="object in onuwRoles">
        <div v-on:click="addToList(object)"> {{ object.name }}</div>

        <!-- {{ setRoleList() }} -->
    </div>
</template>

<script>


export default {
    data(){
        
        return{
            onuwRoles: ([{name: "Doppleganger", wakeOrder: 1}, {name: "Werewolf", wakeOrder: 2}, {name: "Werewolf", wakeOrder: 2}, {name: "Minion", wakeOrder: 3},
            {name: "Mason", wakeOrder: 4}, {name: "Mason", wakeOrder: 4}, {name: "Seer", wakeOrder: 5}, {name: "Robber", wakeOrder: 6}, {name: "Troublemaker", wakeOrder: 7},
            {name: "Drunk", wakeOrder: 8}, {name: "Insomniac", wakeOrder: 9}, {name: "Villager"}, {name: "Villager"}, {name: "Villager"},
            {name: "Hunter"}, {name: "Tanner"}]),

            rolesInPlay: ([])
        };
        
    },
    methods: {
    setRoleList() {
    
    
    for(let i = 0; i < this.onuwRoles.length; i++){
        const role = document.getElementsByClassName('rolelist');
        role.textContent = this.onuwRoles[i].name;
        // role.onclick = () => {
        //     for(let i = 0; i < this.onuwRoles.length; i++){
        //         if(role.textContent == this.onuwRoles[i].name){
        //             rolesInPlay.push(this.onuwRoles[i]);
        //             break;
        //         }
        //     }
        //     //rolesInPlay.push(role.textContent)
        // };
       
        
        }
    
    
    },
    addToList(cardClicked) {
        //for(let i = 0; i < this.onuwRoles.length; i++){
             this.rolesInPlay.push(cardClicked.name);
        //}
        
    },
    roundStart(){
        this.$router.push({
            path: 'roundstart'
        })
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
  






// document.addEventListener('DOMContentLoaded', ()=> {
//     //Set the role list
//     setRoleList();
//     roundStart();
    
    
// })
</script>

<style>

div.rolelist {
  border-style: solid;
  border-radius: 5px;
  width: 200px;
  text-align: center;
}
</style>
