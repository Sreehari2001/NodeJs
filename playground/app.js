const fs = require('fs');
const { parse } = require('path/posix');

// const book = {
//     title: 'Mind your own business',
//     author: 'Sreehari yermal'
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON);

const dataBuffer = fs.readFileSync('1-json.json');
const data = dataBuffer.toString();

const parsedata = JSON.parse(data);
parsedata.name = 'Sreehari Yermal';
parsedata.age = 21

const newData = JSON.stringify(parsedata);
fs.writeFileSync('1-json.json', newData);