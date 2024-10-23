const fs = require('fs');

const path = require('path');
const dirPath = path.join(__dirname, 'files');
console.log(dirPath);

//create files
for (i = 0; i < 5; i++) {
    fs.writeFileSync(dirPath + '/apple' + i + '.txt', 'this is apple file')
}

//show created files
fs.readdir(dirPath, (error, files) => {
    files.forEach((item) => {
        console.log(item);
    })
})
