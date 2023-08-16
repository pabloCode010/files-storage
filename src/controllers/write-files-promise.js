const fs = require('fs/promises');
const path = require('path');

const storagePath = path.join(__dirname, "..", "..", "storage");

function writeFilePromise(filename, bytes){
    const filePath = path.join(storagePath, filename);
    return  () => {
        return new Promise((resolve, reject) => {
            setTimeout(()=> {
                fs.writeFile(filePath, bytes)
                .then(() => resolve(true))
                .catch(() => reject(false))
            },1000)
        })
    }
}

module.exports = writeFilePromise;