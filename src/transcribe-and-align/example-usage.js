// example usage
const main = require('./index.js');
const audioEbook = require('../sample/chapter-audio-text.json');

main(audioEbook).then((audioEbook)=>{
    fs.writeFileSync('./src/transcribe-and-align/sample/chapter-audio-text-aligned-2.json', JSON.stringify(audioEbook, null, 2))
}).catch((er)=>{console.log(er)})