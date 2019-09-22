const fs = require('fs');
const path = require('path');
const groupWordsInParagraphsBySpeakers = require('./group-words-by-speakers.js');
const htmlWrapper = require('./html-wrapper.js');

const publicDir = './public';


const getAudioFileNameFromUrl = (url) => {
    const pathParsed = path.parse(url);
    return pathParsed.name;
};


const generateTitle = (title) => `<h1 class="article_header">${title}</h1>`;

const generateAudioElement = (audioUrl) => `<div class="containerAudio">
    <audio src="${audioUrl}" controls></audio>
  </div>`;

const generateWords = (words) => {
    const result = words.map((word) => `<span class="words" data-start=${word.start}>${word.text} </span>`);
    return result.join(' ');
};

// NOTE: if we want to add speaker labels, this is where it would go
const generateTranscript = (transcript) => {
    const wordsByParagraphs = groupWordsInParagraphsBySpeakers(transcript.words, transcript.paragraphs);
    const result = wordsByParagraphs.map((paragraph) =>
        // `<p>${paragraph.speaker}</p>
        `<p>${generateWords(paragraph.words)}</p>
        `
    );
    return result.join('');
};

const generateInteractiveTranscriptHtml = (title, audioUrl, transcript) => {
    const audioElement = generateAudioElement(audioUrl);
    const transcriptElement = `<article>${generateTranscript(transcript)}</article>`;
    const podcastTitle = generateTitle(title);
    const data = `${audioElement}<div class="container">${podcastTitle}${transcriptElement}</div>`;
    return htmlWrapper(data);
};


const generateInteractiveTranscript = (title, audioUrl, transcript) => {
    const htmlPage = generateInteractiveTranscriptHtml(title, audioUrl, transcript);
    fs.writeFileSync(`${publicDir}/${getAudioFileNameFromUrl(audioUrl)}.html`, htmlPage);
};


module.exports = generateInteractiveTranscript;