const fs = require('fs/promises');
const path = require('path');

const storagePath = path.join(__dirname, "..", "..", "..", "storage");

function writeFilePromise(filename, bytes){
    const filePath = path.join(storagePath, filename);
    // console.log(filePath);
    return  () => fs.writeFile(filePath, bytes);
}

module.exports = writeFilePromise;