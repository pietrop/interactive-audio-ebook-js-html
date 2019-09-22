const Parser = require('rss-parser');
const htmlWrapper = require('../generate-interactive-transcript/html-wrapper.js');
const getAudioFileNameFromUrl = require('../utils/get-audio-file-name-from-url.js');

const parser = new Parser();

const fetchDataFromFeed = async(rssFeedEndPoint) => {
    try {
        return await parser.parseURL(rssFeedEndPoint);
    } catch (e) {
        console.error(`error for ${rssFeed.value}::`, e);
    }
};

const createIndexPageHtml = (podcasts) => {
    const podcastsElements = podcasts.map((podcast) => {
        return `<li><h2 class="article_title">${podcast.title}</h2>
        <p class="description"> ${podcast.content}</p>
        <a class="transcriptBtn" href="${getAudioFileNameFromUrl(podcast.enclosure.url)}.html">
        <i class="fas fa-headphones"></i>
        Transcript</a>
        </li>
        <hr>`
    })

    return `<div class="container"><ul>${podcastsElements.join(' ')}</ul></div>`
}

const main = async(rssFeed) => {
    const podcasts = await fetchDataFromFeed(rssFeed);
    const podcastsHtml = await createIndexPageHtml(podcasts.items);
    const result = await htmlWrapper(podcastsHtml);
    return result;
}

module.exports = main;