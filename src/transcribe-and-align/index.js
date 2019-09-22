const fs = require('fs');
const path = require('path');
const convertAndTranscribe = require('pocketsphinx-stt').convertAndTranscribe;
const alignSTT = require('@bbc/stt-align-node').alignSTT;

const main = async(filePath) => {
    const audioFile = path.join('./audio', audioEbook.chapters[0].fileName);
    const textFile = audioEbook.chapters[0].text;
    //  create STT for audio files
    convertAndTranscribe(audioFile)
        .then((transcriptStt) => {
            console.log('transcribe', transcriptStt);
            // align STT with original text 
            const alignedJson = alignSTT(transcriptStt, textFile);
            console.log(alignedJson)
                // add back to audioEbook data structure
            audioEbook.chapters[0].words = alignedJson;
            audioEbook.chapters[0].paragraphs = transcriptStt.paragraphs;
            // save results 
            fs.writeFileSync('./src/transcribe-and-align/sample/chapter-audio-text-aligned.json', JSON.stringify(audioEbook, null, 2))
        })
}

// example usage

const audioEbook = require('../sample/chapter-audio-text.json');

main(audioEbook)