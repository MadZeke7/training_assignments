const { default: jsConvert } = require('js-convert-case');
const { v4: uuidv4 } = require('uuid');

const usersArray = [
    {uname :  "Bruh MATE", email :  "BRuh@gmail.com",  cardId  :  ""},
    {uname :  "Mate", email :  "mate@gmail.com",  cardId  :  ""},
    {uname :  "Lad", email :  "lad@gmail.com",  cardId  :  ""},
    {uname :  "Sis", email :  "sis@gmail.com",  cardId  :  ""}
];

// Making required changes
for(let i=0; i<4; i++){
    usersArray[i].cardId = uuidv4();
    usersArray[i].uname = jsConvert.toHeaderCase(usersArray[i].uname);
    usersArray[i].email = jsConvert.toLowerCase(usersArray[i].email);
    usersArray[i].cardId = jsConvert.toUpperCase(usersArray[i].cardId);
}

// Printing to console
for(let i=0; i<usersArray.length; i++){
    console.log(`User Id = ${usersArray[i].uname}, Email = ${usersArray[i].email},  cardId = ${usersArray[i].cardId}`);
}

