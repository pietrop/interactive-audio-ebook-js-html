const fs = require('fs');
const Book = require('./index.js');

const ebookId = '76';
const filename = `./text/${ ebookId }.txt`;
const stats = true;
const nochapters = false;
const p = new Book(filename, nochapters, stats);

// p.getHeadings()
// console.log()
// console.log(p.getEndLocation())
// console.log('-in between-')
const result = p.getSegmentedChapter();
// console.log(result)

fs.writeFileSync('./src/parse-gutemberg-book/sample/chapters.json', JSON.stringify(result, null, 2))