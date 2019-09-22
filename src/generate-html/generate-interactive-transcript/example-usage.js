const generateInteractiveTranscript = require('./index.js');



const chapterAudioTextAligned = require('../../transcribe-and-align/sample/chapter-audio-text-aligned.json');

console.log(chapterAudioTextAligned.chapters[0].json);
console.log(chapterAudioTextAligned.chapters[0].url);



// const podcasts = require('../../db/The Journal.json');
// // const transcript = require('../../db/transcripts/WSJ1095394961.json');
// const transcript = require('../../db/transcripts/WSJ7034236028.json');


const title = chapterAudioTextAligned.chapters[0].title;
// // mp3 url 
const audioUrl = chapterAudioTextAligned.chapters[0].url;

const transcript = {
    words: chapterAudioTextAligned.chapters[0].words,
    paragraphs: chapterAudioTextAligned.chapters[0].paragraphs
}

const res = generateInteractiveTranscript(title, audioUrl, transcript);

console.log(res);