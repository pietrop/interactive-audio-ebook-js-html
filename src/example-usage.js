const fs = require('fs');
const main = require('./index.js');
main(59).then((res) => {
    // optional write results to disk
    fs.writeFileSync('./src/sample/chapter-audio-text.json', JSON.stringify(res, null, 2))
    console.log(res)
})