const guestList = ['ravendra','shailendra','gayatri','sunder']

var prompt = require('prompt-sync')();
var guestName = prompt('enter guest name');

// const result = guestList.filter(checkGuest);

if(guestList.includes(guestName))
 console.log("welcome ")
else{
    console.log('sorry')
}
