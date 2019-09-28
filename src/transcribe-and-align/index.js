const fs = require("fs");
const path = require("path");
const transcribe = require("pocketsphinx-stt");
// const convertAndTranscribe = require('pocketsphinx-stt').convertAndTranscribe;
const alignSTT = require("@bbc/stt-align-node").alignSTT;

const main = async audioEbook => {
  const audioFile = path.join(process.cwd(),"audio", audioEbook.chapters[0].fileName);
  // const audioFile = path.join( audioEbook.chapters[0].url);
  console.log('audioFile', audioFile);
  const textFile = audioEbook.chapters[0].text;
  //  create STT for audio files
  return new Promise((resolve, reject) => {
    transcribe(audioFile)
      .then(transcriptStt => {
        console.log("transcribe", transcriptStt);
        // align STT with original text
        const alignedJson = alignSTT(transcriptStt, textFile);
        console.log(alignedJson);
        // add back to audioEbook data structure
        audioEbook.chapters[0].words = alignedJson;
        audioEbook.chapters[0].paragraphs = transcriptStt.paragraphs;
        // save results
        resolve(audioEbook);
      })
      .catch(err => {
        reject(err);
      });
  });
};

module.exports = main;
