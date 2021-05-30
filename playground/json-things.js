// required modules
const fs = require('fs');

const dataBuffer = fs.readFileSync('./file-1.json');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);

// changing data (the props of the object)
data.name = 'faiz';
data.age = 23;

// updating the json file
fs.writeFileSync('file-1.json', JSON.stringify(data));

console.log(fs.readFileSync('./file-1.json').toString());
// console.log(data);
