// const fs = require('fs');
// const path = require('path');

const fileRead = function()  {
    // const buffer = fs.readFileSync(path + "\\file.txt");
    // console.log(buffer.toString());
    return "Hi You are reading data from the file file.txt from file-read module. \n Thanku \n Raunak"
}

module.exports = {
    fileRead
}
