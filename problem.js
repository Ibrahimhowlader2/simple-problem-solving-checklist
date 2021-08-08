const friendsName = ['Ibrahimhhhh', 'Howlader', 'Jasimm', 'Sujon', 'Rubel'];

function bestFriend(friendsName){
    let smallName = '';
    for(let i = 0; i < friendsName.length; i++){
        const element = friendsName[i];
        if(element.length < smallName.length){
            smallName = element;
        }
    }
    return smallName;
}
const result = bestFriend(friendsName);
console.log(result);